import React from 'react';
import { Sparkles, Info } from 'lucide-react';

interface DemoBadgeProps {
  label?: string;
  variant?: 'subtle' | 'prominent' | 'inline';
  showTooltip?: boolean;
}

export const DemoBadge: React.FC<DemoBadgeProps> = ({
  label = "Demo AI",
  variant = "subtle",
}) => {
  if (variant === 'inline') {
    return (
      <span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded text-[10px] font-mono font-medium bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20">
        <Sparkles className="w-2.5 h-2.5" />
        {label}
      </span>
    );
  }

  if (variant === 'prominent') {
    return (
      <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-amber-500/10 border border-amber-500/20 text-amber-700 dark:text-amber-300 text-xs font-medium">
        <Sparkles className="w-4 h-4 text-amber-500 shrink-0" />
        <span>{label}</span>
        <span className="text-[11px] opacity-75 font-normal">| Sample portfolio output</span>
      </div>
    );
  }

  return (
    <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-xs font-mono font-medium bg-slate-100 dark:bg-slate-800/80 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
      <Info className="w-3 h-3 text-slate-400" />
      {label}
    </span>
  );
};
