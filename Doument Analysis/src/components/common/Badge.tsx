import React from 'react';
import type { ProcessingStatus, DocumentCategory } from '../../types';
import { CheckCircle2, Loader2, AlertTriangle, Clock } from 'lucide-react';

interface StatusBadgeProps {
  status: ProcessingStatus;
  size?: 'sm' | 'md';
}

export const StatusBadge: React.FC<StatusBadgeProps> = ({ status, size = 'md' }) => {
  const sizeClasses = size === 'sm' ? 'px-2 py-0.5 text-xs' : 'px-2.5 py-1 text-xs font-medium';

  switch (status) {
    case 'Ready':
      return (
        <span className={`inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 ${sizeClasses}`}>
          <CheckCircle2 className="w-3.5 h-3.5" />
          Ready
        </span>
      );
    case 'Processing':
      return (
        <span className={`inline-flex items-center gap-1.5 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20 ${sizeClasses}`}>
          <Loader2 className="w-3.5 h-3.5 animate-spin" />
          Processing
        </span>
      );
    case 'Analyzing':
      return (
        <span className={`inline-flex items-center gap-1.5 rounded-full bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border border-indigo-500/20 ${sizeClasses}`}>
          <Clock className="w-3.5 h-3.5 animate-pulse" />
          Analyzing
        </span>
      );
    case 'Failed':
      return (
        <span className={`inline-flex items-center gap-1.5 rounded-full bg-rose-500/10 text-rose-600 dark:text-rose-400 border border-rose-500/20 ${sizeClasses}`}>
          <AlertTriangle className="w-3.5 h-3.5" />
          Failed
        </span>
      );
    default:
      return null;
  }
};

interface CategoryBadgeProps {
  category: DocumentCategory;
  size?: 'sm' | 'md';
}

export const CategoryBadge: React.FC<CategoryBadgeProps> = ({ category, size = 'md' }) => {
  const sizeClasses = size === 'sm' ? 'px-2 py-0.5 text-[11px]' : 'px-2.5 py-1 text-xs font-medium';

  const categoryStyles: Record<DocumentCategory, string> = {
    Business: 'bg-purple-500/10 text-purple-600 dark:text-purple-300 border-purple-500/20',
    Finance: 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-300 border-emerald-500/20',
    Legal: 'bg-amber-500/10 text-amber-600 dark:text-amber-300 border-amber-500/20',
    HR: 'bg-sky-500/10 text-sky-600 dark:text-sky-300 border-sky-500/20',
    Marketing: 'bg-rose-500/10 text-rose-600 dark:text-rose-300 border-rose-500/20',
    Product: 'bg-indigo-500/10 text-indigo-600 dark:text-indigo-300 border-indigo-500/20',
    Other: 'bg-slate-500/10 text-slate-600 dark:text-slate-400 border-slate-500/20',
  };

  return (
    <span className={`inline-flex items-center rounded-md border ${categoryStyles[category] || categoryStyles.Other} ${sizeClasses}`}>
      {category}
    </span>
  );
};
