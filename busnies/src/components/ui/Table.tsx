import React, { useState } from 'react';
import { clsx } from 'clsx';
import { ChevronLeft, ChevronRight, ChevronDown, ChevronUp } from 'lucide-react';
import { Button } from './Button';
import { useLanguage } from '../../context/LanguageContext';

export interface Column<T> {
  key: string;
  header: string;
  render?: (item: T) => React.ReactNode;
  sortable?: boolean;
  align?: 'left' | 'center' | 'right';
}

export interface TableProps<T> {
  data: T[];
  columns: Column<T>[];
  keyExtractor: (item: T) => string;
  onRowClick?: (item: T) => void;
  pageSize?: number;
  mobileCardRender?: (item: T) => React.ReactNode;
  emptyTitle?: string;
  emptyDescription?: string;
}

export function Table<T>({
  data,
  columns,
  keyExtractor,
  onRowClick,
  pageSize = 6,
  mobileCardRender,
  emptyTitle = 'No data available',
  emptyDescription = 'There are no records to show.',
}: TableProps<T>) {
  const { t } = useLanguage();
  const [currentPage, setCurrentPage] = useState(1);
  const [sortKey, setSortKey] = useState<string | null>(null);
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');

  const handleSort = (key: string) => {
    if (sortKey === key) {
      setSortOrder(prev => (prev === 'asc' ? 'desc' : 'asc'));
    } else {
      setSortKey(key);
      setSortOrder('asc');
    }
  };

  const sortedData = React.useMemo(() => {
    if (!sortKey) return data;
    return [...data].sort((a: any, b: any) => {
      const aVal = a[sortKey];
      const bVal = b[sortKey];
      if (aVal < bVal) return sortOrder === 'asc' ? -1 : 1;
      if (aVal > bVal) return sortOrder === 'asc' ? 1 : -1;
      return 0;
    });
  }, [data, sortKey, sortOrder]);

  const totalPages = Math.max(1, Math.ceil(sortedData.length / pageSize));
  const paginatedData = React.useMemo(() => {
    const start = (currentPage - 1) * pageSize;
    return sortedData.slice(start, start + pageSize);
  }, [sortedData, currentPage, pageSize]);

  return (
    <div className="w-full">
      {/* Desktop Table View */}
      <div className="hidden md:block overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-xs">
        <table className="w-full text-sm text-left rtl:text-right text-slate-600 dark:text-slate-300">
          <thead className="text-xs uppercase bg-slate-50 dark:bg-slate-800/60 text-slate-500 dark:text-slate-400 border-b border-slate-200 dark:border-slate-800 select-none">
            <tr>
              {columns.map(col => (
                <th
                  key={col.key}
                  scope="col"
                  className={clsx(
                    'px-5 py-3.5 font-semibold',
                    col.sortable && 'cursor-pointer hover:text-slate-900 dark:hover:text-slate-100 transition-colors',
                    col.align === 'center' && 'text-center',
                    col.align === 'right' && 'text-right'
                  )}
                  onClick={() => col.sortable && handleSort(col.key)}
                >
                  <div
                    className={clsx(
                      'flex items-center gap-1.5',
                      col.align === 'center' && 'justify-center',
                      col.align === 'right' && 'justify-end'
                    )}
                  >
                    <span>{col.header}</span>
                    {col.sortable && sortKey === col.key && (
                      <span>
                        {sortOrder === 'asc' ? (
                          <ChevronUp className="w-3.5 h-3.5" />
                        ) : (
                          <ChevronDown className="w-3.5 h-3.5" />
                        )}
                      </span>
                    )}
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 dark:divide-slate-800/80">
            {paginatedData.length === 0 ? (
              <tr>
                <td colSpan={columns.length} className="px-5 py-10 text-center text-slate-500 dark:text-slate-400">
                  <p className="font-medium text-slate-900 dark:text-slate-200">{emptyTitle}</p>
                  <p className="text-xs mt-1">{emptyDescription}</p>
                </td>
              </tr>
            ) : (
              paginatedData.map(item => (
                <tr
                  key={keyExtractor(item)}
                  onClick={() => onRowClick && onRowClick(item)}
                  className={clsx(
                    'transition-colors hover:bg-slate-50/80 dark:hover:bg-slate-800/50',
                    onRowClick && 'cursor-pointer'
                  )}
                >
                  {columns.map(col => (
                    <td
                      key={col.key}
                      className={clsx(
                        'px-5 py-3.5 whitespace-nowrap',
                        col.align === 'center' && 'text-center',
                        col.align === 'right' && 'text-right'
                      )}
                    >
                      {col.render ? col.render(item) : (item as any)[col.key]}
                    </td>
                  ))}
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Mobile Stacked Card View */}
      <div className="md:hidden space-y-3">
        {paginatedData.length === 0 ? (
          <div className="p-6 text-center bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl">
            <p className="font-medium text-slate-900 dark:text-slate-200">{emptyTitle}</p>
            <p className="text-xs text-slate-500 mt-1">{emptyDescription}</p>
          </div>
        ) : (
          paginatedData.map(item => (
            <div
              key={keyExtractor(item)}
              onClick={() => onRowClick && onRowClick(item)}
              className={clsx(
                'p-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl space-y-2.5 shadow-2xs',
                onRowClick && 'cursor-pointer hover:border-slate-300 dark:hover:border-slate-700'
              )}
            >
              {mobileCardRender
                ? mobileCardRender(item)
                : columns.map(col => (
                    <div key={col.key} className="flex justify-between items-center text-xs">
                      <span className="font-medium text-slate-500 dark:text-slate-400">{col.header}:</span>
                      <span className="text-slate-900 dark:text-slate-100 font-medium">
                        {col.render ? col.render(item) : (item as any)[col.key]}
                      </span>
                    </div>
                  ))}
            </div>
          ))
        )}
      </div>

      {/* Pagination Footer */}
      {sortedData.length > pageSize && (
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 mt-4 px-1 text-xs text-slate-500 dark:text-slate-400">
          <div>
            {t.common.showing}{' '}
            <span className="font-medium text-slate-900 dark:text-slate-100">
              {(currentPage - 1) * pageSize + 1}
            </span>{' '}
            {t.common.to}{' '}
            <span className="font-medium text-slate-900 dark:text-slate-100">
              {Math.min(currentPage * pageSize, sortedData.length)}
            </span>{' '}
            {t.common.of}{' '}
            <span className="font-medium text-slate-900 dark:text-slate-100">
              {sortedData.length}
            </span>{' '}
            {t.common.results}
          </div>

          <div className="flex items-center gap-1.5">
            <Button
              variant="outline"
              size="sm"
              disabled={currentPage === 1}
              onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
              aria-label={t.common.previous}
            >
              <ChevronLeft className="w-4 h-4 rtl:rotate-180" />
              <span className="hidden sm:inline">{t.common.previous}</span>
            </Button>

            <span className="px-3 py-1 bg-slate-100 dark:bg-slate-800 rounded font-medium text-slate-700 dark:text-slate-300">
              {currentPage} / {totalPages}
            </span>

            <Button
              variant="outline"
              size="sm"
              disabled={currentPage === totalPages}
              onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
              aria-label={t.common.next}
            >
              <span className="hidden sm:inline">{t.common.next}</span>
              <ChevronRight className="w-4 h-4 rtl:rotate-180" />
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
