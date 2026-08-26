import React, { useState, useRef } from 'react';
import { useApp } from '../../context/AppContext';
import { Modal } from '../../components/common/Modal';
import { Button } from '../../components/common/Button';
import { DemoBadge } from '../../components/common/DemoBadge';
import type { DocumentItem, FileType, DocumentCategory } from '../../types';
import { 
  UploadCloud, 
  CheckCircle2, 
  AlertCircle, 
  Loader2, 
  Sparkles
} from 'lucide-react';

export const UploadModal: React.FC = () => {
  const { 
    isUploadModalOpen, 
    setIsUploadModalOpen, 
    addDocument, 
    documents, 
    setCurrentPage, 
    addToast,
    t 
  } = useApp();

  const [dragActive, setDragActive] = useState<boolean>(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [category, setCategory] = useState<DocumentCategory>('Business');
  
  // Validation error state
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  // Processing stage: 0 = idle, 1 = Uploading, 2 = Reading, 3 = Analyzing, 4 = Extracting, 5 = Ready
  const [currentStep, setCurrentStep] = useState<number>(0);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const resetState = () => {
    setSelectedFile(null);
    setErrorMessage(null);
    setCurrentStep(0);
  };

  const handleClose = () => {
    resetState();
    setIsUploadModalOpen(false);
  };

  const validateFile = (file: File): boolean => {
    const ext = file.name.split('.').pop()?.toUpperCase() as FileType;
    if (!['PDF', 'DOCX', 'TXT'].includes(ext)) {
      setErrorMessage(t.upload.validation.unsupportedType);
      return false;
    }
    if (file.size === 0) {
      setErrorMessage(t.upload.validation.emptyFile);
      return false;
    }
    if (file.size > 25 * 1024 * 1024) {
      setErrorMessage(t.upload.validation.fileTooLarge);
      return false;
    }
    const isDuplicate = documents.some((d) => d.fileName.toLowerCase() === file.name.toLowerCase());
    if (isDuplicate) {
      setErrorMessage(t.upload.validation.duplicateFile);
      return false;
    }

    setErrorMessage(null);
    return true;
  };

  const handleFileSelect = (file: File) => {
    if (validateFile(file)) {
      setSelectedFile(file);
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFileSelect(e.dataTransfer.files[0]);
    }
  };

  const startProcessing = async () => {
    if (!selectedFile) return;

    // Step 1: Uploading
    setCurrentStep(1);
    await new Promise((r) => setTimeout(r, 600));

    // Step 2: Reading document
    setCurrentStep(2);
    let extractedText = "";
    if (selectedFile.name.endsWith('.txt')) {
      try {
        extractedText = await selectedFile.text();
      } catch (e) {
        extractedText = "Sample plain text extracted from uploaded file.";
      }
    } else {
      extractedText = `Uploaded ${selectedFile.name} content processed successfully. This document covers executive guidelines for ${category} operations.`;
    }
    await new Promise((r) => setTimeout(r, 700));

    // Step 3: Analyzing content
    setCurrentStep(3);
    await new Promise((r) => setTimeout(r, 800));

    // Step 4: Extracting insights
    setCurrentStep(4);
    await new Promise((r) => setTimeout(r, 700));

    // Step 5: Ready
    setCurrentStep(5);

    const ext = selectedFile.name.split('.').pop()?.toUpperCase() as FileType;
    const newDocId = `doc-upload-${Date.now()}`;
    
    const newDoc: DocumentItem = {
      id: newDocId,
      title: selectedFile.name.replace(/\.[^/.]+$/, ""),
      fileName: selectedFile.name,
      fileSize: `${(selectedFile.size / (1024 * 1024)).toFixed(1)} MB`,
      fileType: ext,
      pagesCount: Math.max(1, Math.ceil(selectedFile.size / 30000) || 4),
      category: category,
      uploadedAt: new Date().toISOString().split('T')[0],
      lastAnalyzedAt: new Date().toISOString().replace('T', ' ').substring(0, 16),
      status: 'Ready',
      suggestedQuestions: [
        `What are the core insights in ${selectedFile.name}?`,
        "What action items or next steps are recommended?",
        "What key dates are mentioned in this document?"
      ],
      pages: [
        {
          pageNumber: 1,
          content: extractedText || `Document Title: ${selectedFile.name}\n\nProcessed via DocuMind AI multi-stage parser engine.\nCategory: ${category}`,
          sections: [
            {
              id: `sec-${newDocId}-1`,
              title: "1. Document Overview",
              pageNumber: 1,
              content: extractedText.substring(0, 150) || `Primary section content for ${selectedFile.name}`
            }
          ]
        }
      ]
    };

    addDocument(newDoc);
    addToast({
      type: 'success',
      title: 'Document Processing Complete',
      message: `${selectedFile.name} is ready for AI analysis.`
    });
  };

  const stepsList = [
    { step: 1, label: t.upload.steps.uploading },
    { step: 2, label: t.upload.steps.reading },
    { step: 3, label: t.upload.steps.analyzing },
    { step: 4, label: t.upload.steps.extracting },
    { step: 5, label: t.upload.steps.ready },
  ];

  return (
    <Modal
      isOpen={isUploadModalOpen}
      onClose={handleClose}
      title={
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <UploadCloud className="w-5 h-5 text-brand-600 dark:text-brand-400" />
            <span>{t.upload.title}</span>
          </div>
          <DemoBadge label="Demo Ingestion" variant="inline" />
        </div>
      }
      maxWidth="lg"
    >
      <div className="space-y-5">
        {/* Transparent Demo Processing Notice */}
        <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-700 dark:text-amber-300 text-xs">
          {t.upload.demoNotice}
        </div>

        {currentStep === 0 ? (
          <>
            {/* Category Selector */}
            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                Select Document Category
              </label>
              <div className="grid grid-cols-3 gap-2">
                {(['Business', 'Finance', 'Legal', 'HR', 'Marketing', 'Product'] as DocumentCategory[]).map((cat) => (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => setCategory(cat)}
                    className={`py-2 px-3 rounded-lg text-xs font-medium border text-center transition-all ${
                      category === cat
                        ? 'bg-brand-600 text-white border-brand-600 font-semibold shadow-xs'
                        : 'bg-slate-50 dark:bg-slate-800/60 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {/* Drag and Drop Zone */}
            <div
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
              onClick={() => fileInputRef.current?.click()}
              className={`border-2 border-dashed rounded-2xl p-8 text-center cursor-pointer transition-all duration-200 ${
                dragActive
                  ? 'border-brand-500 bg-brand-500/10'
                  : 'border-slate-300 dark:border-slate-700 hover:border-brand-500/60 dark:hover:border-brand-500/60 bg-slate-50/50 dark:bg-slate-800/30'
              }`}
            >
              <input
                ref={fileInputRef}
                type="file"
                accept=".pdf,.docx,.txt"
                className="hidden"
                onChange={(e) => {
                  if (e.target.files && e.target.files[0]) {
                    handleFileSelect(e.target.files[0]);
                  }
                }}
              />

              <div className="w-12 h-12 rounded-full bg-brand-500/10 text-brand-600 dark:text-brand-400 flex items-center justify-center mx-auto mb-3">
                <UploadCloud className="w-6 h-6" />
              </div>

              {selectedFile ? (
                <div className="space-y-1">
                  <p className="text-sm font-bold text-slate-900 dark:text-slate-100">{selectedFile.name}</p>
                  <p className="text-xs text-slate-500">{(selectedFile.size / (1024 * 1024)).toFixed(2)} MB</p>
                </div>
              ) : (
                <>
                  <p className="text-sm font-semibold text-slate-800 dark:text-slate-200">{t.upload.dragDropText}</p>
                  <p className="text-xs text-slate-400 mt-1">{t.upload.supportedFormats}</p>
                </>
              )}
            </div>

            {/* Error state alert */}
            {errorMessage && (
              <div className="flex items-center gap-2 p-3 rounded-xl bg-rose-500/10 border border-rose-500/20 text-rose-600 dark:text-rose-400 text-xs font-medium">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{errorMessage}</span>
              </div>
            )}

            {/* Actions */}
            <div className="flex items-center justify-end gap-3 pt-2">
              <Button variant="ghost" onClick={handleClose}>
                {t.upload.cancel}
              </Button>
              <Button
                variant="primary"
                disabled={!selectedFile || !!errorMessage}
                onClick={startProcessing}
                icon={<Sparkles className="w-4 h-4" />}
              >
                Start Analysis
              </Button>
            </div>
          </>
        ) : (
          /* Multi-Stage Stepper Progress View */
          <div className="py-6 space-y-6">
            <div className="text-center space-y-1">
              <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100">
                {currentStep === 5 ? "Document Processing Ready" : "Analyzing Document Structure..."}
              </h3>
              <p className="text-xs text-slate-500 font-mono">{selectedFile?.name}</p>
            </div>

            {/* Progress Bar & Stepper */}
            <div className="space-y-3">
              <div className="w-full bg-slate-200 dark:bg-slate-800 rounded-full h-2 overflow-hidden">
                <div 
                  className="bg-brand-600 h-2 transition-all duration-500 rounded-full"
                  style={{ width: `${(currentStep / 5) * 100}%` }}
                />
              </div>

              <div className="space-y-2 pt-2">
                {stepsList.map((st) => {
                  const isDone = currentStep > st.step;
                  const isCurrent = currentStep === st.step;

                  return (
                    <div
                      key={st.step}
                      className={`flex items-center justify-between p-3 rounded-xl border text-xs transition-all ${
                        isDone
                          ? 'bg-emerald-500/10 border-emerald-500/20 text-emerald-600 dark:text-emerald-400 font-medium'
                          : isCurrent
                          ? 'bg-brand-500/10 border-brand-500/30 text-brand-600 dark:text-brand-400 font-semibold'
                          : 'bg-slate-50 dark:bg-slate-800/30 border-slate-200 dark:border-slate-800 text-slate-400'
                      }`}
                    >
                      <div className="flex items-center gap-2.5">
                        {isDone ? (
                          <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                        ) : isCurrent ? (
                          <Loader2 className="w-4 h-4 text-brand-500 animate-spin shrink-0" />
                        ) : (
                          <div className="w-4 h-4 rounded-full border border-slate-400/40 text-[10px] flex items-center justify-center">
                            {st.step}
                          </div>
                        )}
                        <span>{st.label}</span>
                      </div>
                      {isDone && <span className="text-[10px] font-mono">Done</span>}
                      {isCurrent && <span className="text-[10px] font-mono animate-pulse">Processing...</span>}
                    </div>
                  );
                })}
              </div>
            </div>

            {currentStep === 5 && (
              <div className="pt-2 flex justify-end">
                <Button
                  variant="primary"
                  onClick={() => {
                    handleClose();
                    setCurrentPage('workspace');
                  }}
                >
                  {t.upload.done}
                </Button>
              </div>
            )}
          </div>
        )}
      </div>
    </Modal>
  );
};
