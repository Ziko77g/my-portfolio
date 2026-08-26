import React from 'react';
import { clsx } from 'clsx';
import type { TeamMemberStatus } from '../../types';

export interface AvatarProps {
  name: string;
  src?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  status?: TeamMemberStatus;
  className?: string;
}

export const Avatar: React.FC<AvatarProps> = ({
  name,
  src,
  size = 'md',
  status,
  className,
}) => {
  const getInitials = (str: string) => {
    const parts = str.trim().split(' ');
    if (parts.length >= 2) {
      return `${parts[0][0]}${parts[1][0]}`.toUpperCase();
    }
    return str.slice(0, 2).toUpperCase();
  };

  const sizes = {
    sm: 'w-7 h-7 text-2xs',
    md: 'w-9 h-9 text-xs',
    lg: 'w-11 h-11 text-sm',
    xl: 'w-14 h-14 text-base font-semibold',
  };

  const statusDotSizes = {
    sm: 'w-2 h-2',
    md: 'w-2.5 h-2.5',
    lg: 'w-3 h-3',
    xl: 'w-3.5 h-3.5',
  };

  const statusColors = {
    online: 'bg-emerald-500 ring-2 ring-white dark:ring-slate-900',
    away: 'bg-amber-500 ring-2 ring-white dark:ring-slate-900',
    offline: 'bg-slate-400 ring-2 ring-white dark:ring-slate-900',
  };

  // Color generator based on name hash for initials background
  const getColorFromName = (str: string) => {
    const bgClasses = [
      'bg-blue-100 text-blue-700 dark:bg-blue-950 dark:text-blue-300',
      'bg-indigo-100 text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300',
      'bg-purple-100 text-purple-700 dark:bg-purple-950 dark:text-purple-300',
      'bg-emerald-100 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300',
      'bg-amber-100 text-amber-700 dark:bg-amber-950 dark:text-amber-300',
      'bg-rose-100 text-rose-700 dark:bg-rose-950 dark:text-rose-300',
    ];
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      hash = str.charCodeAt(i) + ((hash << 5) - hash);
    }
    return bgClasses[Math.abs(hash) % bgClasses.length];
  };

  return (
    <div className="relative inline-flex shrink-0">
      {src ? (
        <img
          src={src}
          alt={name}
          className={clsx(
            'rounded-full object-cover border border-slate-200 dark:border-slate-800',
            sizes[size],
            className
          )}
        />
      ) : (
        <div
          className={clsx(
            'rounded-full flex items-center justify-center font-medium border border-slate-200/50 dark:border-slate-700/50 select-none',
            sizes[size],
            getColorFromName(name),
            className
          )}
        >
          {getInitials(name)}
        </div>
      )}
      {status && (
        <span
          className={clsx(
            'absolute bottom-0 right-0 rounded-full',
            statusDotSizes[size],
            statusColors[status]
          )}
        />
      )}
    </div>
  );
};
