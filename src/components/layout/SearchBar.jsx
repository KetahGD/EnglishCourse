import React, { useRef, useEffect } from 'react';

export default function SearchBar({ searchTerm, onSearchChange, results, onSelectResult }) {
  const inputRef = useRef(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === '/' && document.activeElement !== inputRef.current) {
        e.preventDefault();
        inputRef.current?.focus();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="relative w-full">
      <div className="relative">
        <input
          ref={inputRef}
          type="text"
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="🔍 Search vocabulary or grammar (press '/' to focus)"
          className="w-full bg-darkbg/80 border border-border rounded-xl py-2 pl-10 pr-4 text-sm focus:outline-none focus:border-accent transition"
        />
        <svg className="absolute left-3 top-2.5 w-4 h-4 text-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
        {searchTerm && (
          <button onClick={() => onSearchChange('')} className="absolute right-3 top-2.5 text-muted hover:text-text">
            ✕
          </button>
        )}
      </div>
      {results.length > 0 && (
        <div className="absolute top-full left-0 right-0 mt-1 bg-surface2 border border-border rounded-xl shadow-lg z-50 max-h-80 overflow-auto">
          {results.map((res, idx) => (
            <button
              key={idx}
              onClick={() => onSelectResult(res.unitId, res.section, res.itemId)}
              className="w-full text-left px-4 py-2 hover:bg-surface border-b border-border/50 last:border-0"
            >
              <div className="text-xs text-accent font-mono">Unit {res.unitId} • {res.type === 'vocab' ? 'Vocabulary' : 'Grammar'}</div>
              <div className="text-sm font-medium truncate">{res.type === 'vocab' ? res.word : res.title}</div>
              <div className="text-xs text-muted truncate">{res.type === 'vocab' ? res.definition : res.explanation}</div>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}