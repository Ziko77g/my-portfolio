import { useEffect } from 'react';

export function useKeyboardShortcut(
  key: string,
  callback: (e: KeyboardEvent) => void,
  options: { ctrlOrCmd?: boolean; altKey?: boolean; shiftKey?: boolean } = {}
) {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      const isCmdOrCtrl = options.ctrlOrCmd ? (event.metaKey || event.ctrlKey) : true;
      const isAlt = options.altKey ? event.altKey : true;
      const isShift = options.shiftKey ? event.shiftKey : true;

      if (
        isCmdOrCtrl &&
        isAlt &&
        isShift &&
        event.key.toLowerCase() === key.toLowerCase()
      ) {
        event.preventDefault();
        callback(event);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [key, callback, options]);
}
