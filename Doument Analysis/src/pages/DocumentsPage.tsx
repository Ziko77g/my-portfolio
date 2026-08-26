import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import type { DocumentItem } from '../types';
import { Card } from '../components/common/Card';
import { StatusBadge, CategoryBadge } from '../components/common/Badge';
import { Button } from '../components/common/Button';
import { Modal } from '../components/common/Modal';
import { 
  FileText, 
  Search, 
  Plus, 
  Trash2, 
  Edit3, 
  RefreshCw, 
  LayoutGrid,
  List,
  FolderOpen
} from 'lucide-react';
import { aiService } from '../services';

export const DocumentsPage: React.FC = () => {
  const { 
    documents, 
    deleteDocument, 
    updateDocument, 
    setActiveDocumentId, 
    setCurrentPage, 
    setIsUploadModalOpen, 
    addToast,
    t 
  } = useApp();

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedStatus, setSelectedStatus] = useState<string>('All');
  const [viewMode, setViewMode] = useState<'table' | 'grid'>('table');

  // Modals state
  const [deleteDocId, setDeleteDocId] = useState<string | null>(null);
  const [renameDoc, setRenameDoc] = useState<{ id: string; title: string } | null>(null);
  const [newTitle, setNewTitle] = useState('');

  const filteredDocs = documents.filter((doc) => {
    const matchesSearch = doc.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          doc.fileName.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCat = selectedCategory === 'All' || doc.category === selectedCategory;
    const matchesStatus = selectedStatus === 'All' || doc.status === selectedStatus;
    return matchesSearch && matchesCat && matchesStatus;
  });

  const handleDeleteConfirm = () => {
    if (deleteDocId) {
      deleteDocument(deleteDocId);
      setDeleteDocId(null);
      addToast({ type: 'info', title: 'Document Deleted' });
    }
  };

  const handleRenameConfirm = () => {
    if (renameDoc && newTitle.trim()) {
      updateDocument(renameDoc.id, { title: newTitle.trim() });
      setRenameDoc(null);
      addToast({ type: 'success', title: 'Document Renamed' });
    }
  };

  const handleReanalyze = async (doc: DocumentItem) => {
    updateDocument(doc.id, { status: 'Analyzing' });
    addToast({ type: 'info', title: 'Re-analyzing Document (Demo)' });

    try {
      const freshAnalysis = await aiService.analyzeDocument(doc);
      updateDocument(doc.id, { 
        analysis: freshAnalysis,
        status: 'Ready',
        lastAnalyzedAt: new Date().toISOString().replace('T', ' ').substring(0, 16)
      });
      addToast({ type: 'success', title: 'Analysis Complete' });
    } catch (e) {
      updateDocument(doc.id, { status: 'Failed' });
    }
  };

  return (
    <div className="p-4 sm:p-6 lg:p-8 space-y-6 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 dark:border-slate-800 pb-6">
        <div>
          <h1 className="font-display text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-slate-100 tracking-tight">
            {t.documents.title}
          </h1>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
            {t.documents.subtitle}
          </p>
        </div>

        <Button
          variant="primary"
          onClick={() => setIsUploadModalOpen(true)}
          icon={<Plus className="w-4 h-4" />}
        >
          {t.upload.title}
        </Button>
      </div>

      {/* Filter & View Mode Controls */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 bg-white dark:bg-slate-900 p-4 rounded-xl border border-slate-200 dark:border-slate-800 shadow-xs">
        {/* Search */}
        <div className="relative w-full md:w-80">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={t.documents.searchPlaceholder}
            className="w-full pl-9 pr-4 py-2 text-xs rounded-lg bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-slate-100 placeholder-slate-400 outline-none focus:ring-2 focus:ring-brand-500/30"
          />
        </div>

        {/* Filters */}
        <div className="flex items-center gap-3 w-full md:w-auto overflow-x-auto no-scrollbar">
          {/* Category Filter */}
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="px-3 py-2 text-xs font-semibold rounded-lg bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 outline-none"
          >
            <option value="All">{t.documents.allCategories}</option>
            {['Business', 'Finance', 'Legal', 'HR', 'Marketing', 'Product'].map((cat) => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>

          {/* Status Filter */}
          <select
            value={selectedStatus}
            onChange={(e) => setSelectedStatus(e.target.value)}
            className="px-3 py-2 text-xs font-semibold rounded-lg bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 outline-none"
          >
            <option value="All">{t.documents.allStatuses}</option>
            {['Ready', 'Processing', 'Analyzing', 'Failed'].map((st) => (
              <option key={st} value={st}>{st}</option>
            ))}
          </select>

          {/* View Toggle */}
          <div className="flex items-center bg-slate-100 dark:bg-slate-800 p-1 rounded-lg border border-slate-200 dark:border-slate-700">
            <button
              onClick={() => setViewMode('table')}
              className={`p-1.5 rounded ${viewMode === 'table' ? 'bg-white dark:bg-slate-900 text-brand-500 shadow-2xs' : 'text-slate-400'}`}
              title="Table View"
            >
              <List className="w-4 h-4" />
            </button>
            <button
              onClick={() => setViewMode('grid')}
              className={`p-1.5 rounded ${viewMode === 'grid' ? 'bg-white dark:bg-slate-900 text-brand-500 shadow-2xs' : 'text-slate-400'}`}
              title="Grid View"
            >
              <LayoutGrid className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Document List View */}
      {filteredDocs.length === 0 ? (
        <Card className="py-16 text-center space-y-3">
          <FolderOpen className="w-12 h-12 text-slate-400 mx-auto opacity-50" />
          <h3 className="text-base font-bold text-slate-800 dark:text-slate-200">{t.documents.emptyTitle}</h3>
          <p className="text-xs text-slate-500 max-w-sm mx-auto">{t.documents.emptySub}</p>
          <Button variant="primary" size="sm" onClick={() => setIsUploadModalOpen(true)} icon={<Plus className="w-4 h-4" />}>
            Upload Document
          </Button>
        </Card>
      ) : viewMode === 'table' ? (
        <Card className="overflow-hidden p-0">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="border-b border-slate-200 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-900/70 text-slate-500 font-semibold">
                  <th className="p-4">{t.documents.columns.fileName}</th>
                  <th className="p-4">{t.documents.columns.category}</th>
                  <th className="p-4">{t.documents.columns.type}</th>
                  <th className="p-4">{t.documents.columns.pages}</th>
                  <th className="p-4">{t.documents.columns.status}</th>
                  <th className="p-4">{t.documents.columns.lastAnalyzed}</th>
                  <th className="p-4 text-right">{t.documents.columns.actions}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
                {filteredDocs.map((doc) => (
                  <tr
                    key={doc.id}
                    className="hover:bg-slate-50 dark:hover:bg-slate-800/40 transition-colors"
                  >
                    <td className="p-4 font-semibold text-slate-900 dark:text-slate-100">
                      <div 
                        className="flex items-center gap-2.5 cursor-pointer"
                        onClick={() => {
                          setActiveDocumentId(doc.id);
                          setCurrentPage('workspace');
                        }}
                      >
                        <div className="p-2 rounded-lg bg-brand-500/10 text-brand-600 dark:text-brand-400">
                          <FileText className="w-4 h-4" />
                        </div>
                        <div>
                          <p className="text-xs font-bold text-slate-900 dark:text-slate-100 hover:text-brand-500 transition-colors">{doc.title}</p>
                          <p className="text-[10px] text-slate-400 font-mono">{doc.fileName}</p>
                        </div>
                      </div>
                    </td>
                    <td className="p-4">
                      <CategoryBadge category={doc.category} size="sm" />
                    </td>
                    <td className="p-4 font-mono font-semibold text-slate-600 dark:text-slate-400">
                      {doc.fileType}
                    </td>
                    <td className="p-4 font-mono text-slate-600 dark:text-slate-400">
                      {doc.pagesCount}
                    </td>
                    <td className="p-4">
                      <StatusBadge status={doc.status} size="sm" />
                    </td>
                    <td className="p-4 text-slate-500 font-mono">
                      {doc.lastAnalyzedAt}
                    </td>
                    <td className="p-4 text-right">
                      <div className="flex items-center justify-end gap-1">
                        <Button
                          variant="primary"
                          size="sm"
                          onClick={() => {
                            setActiveDocumentId(doc.id);
                            setCurrentPage('workspace');
                          }}
                        >
                          {t.documents.actions.openWorkspace}
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => handleReanalyze(doc)}
                          title={t.documents.actions.reanalyze}
                        >
                          <RefreshCw className="w-3.5 h-3.5" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => {
                            setRenameDoc({ id: doc.id, title: doc.title });
                            setNewTitle(doc.title);
                          }}
                          title={t.documents.actions.rename}
                        >
                          <Edit3 className="w-3.5 h-3.5" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => setDeleteDocId(doc.id)}
                          title={t.documents.actions.delete}
                        >
                          <Trash2 className="w-3.5 h-3.5 text-rose-500" />
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>
      ) : (
        /* Grid Card View */
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredDocs.map((doc) => (
            <Card key={doc.id} hoverEffect className="flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <CategoryBadge category={doc.category} size="sm" />
                  <StatusBadge status={doc.status} size="sm" />
                </div>
                <div className="flex items-start gap-3">
                  <div className="p-2.5 rounded-xl bg-brand-500/10 text-brand-600 dark:text-brand-400 shrink-0">
                    <FileText className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-bold text-sm text-slate-900 dark:text-slate-100 truncate">{doc.title}</h3>
                    <p className="text-xs text-slate-400 font-mono truncate">{doc.fileName}</p>
                  </div>
                </div>
              </div>

              <div className="pt-3 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between">
                <span className="text-[11px] font-mono text-slate-500">{doc.pagesCount} pages • {doc.fileSize}</span>
                <Button
                  variant="primary"
                  size="sm"
                  onClick={() => {
                    setActiveDocumentId(doc.id);
                    setCurrentPage('workspace');
                  }}
                >
                  Workspace
                </Button>
              </div>
            </Card>
          ))}
        </div>
      )}

      {/* Rename Modal */}
      <Modal
        isOpen={!!renameDoc}
        onClose={() => setRenameDoc(null)}
        title="Rename Document"
      >
        <div className="space-y-4">
          <div>
            <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
              Document Title
            </label>
            <input
              type="text"
              value={newTitle}
              onChange={(e) => setNewTitle(e.target.value)}
              className="w-full px-3 py-2 text-sm rounded-lg bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-slate-100 outline-none"
            />
          </div>
          <div className="flex justify-end gap-2">
            <Button variant="ghost" onClick={() => setRenameDoc(null)}>Cancel</Button>
            <Button variant="primary" onClick={handleRenameConfirm}>Save Title</Button>
          </div>
        </div>
      </Modal>

      {/* Delete Confirmation Modal */}
      <Modal
        isOpen={!!deleteDocId}
        onClose={() => setDeleteDocId(null)}
        title="Delete Document"
      >
        <div className="space-y-4">
          <p className="text-xs text-slate-600 dark:text-slate-300">
            Are you sure you want to delete this document from your demo workspace?
          </p>
          <div className="flex justify-end gap-2">
            <Button variant="ghost" onClick={() => setDeleteDocId(null)}>Cancel</Button>
            <Button variant="danger" onClick={handleDeleteConfirm}>Delete</Button>
          </div>
        </div>
      </Modal>
    </div>
  );
};
