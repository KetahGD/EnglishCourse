import React from 'react';

export default function Sidebar({ units, selectedUnit, onSelectUnit }) {
  return (
    <div className="h-full flex flex-col">
      <div className="p-5 border-b border-border">
        <h1 className="text-2xl font-serif font-black text-accent">EVOLVE 3</h1>
        <div className="inline-block mt-2 bg-accent/10 border border-accent/30 text-accent text-xs px-2 py-0.5 rounded-full font-mono">B1 • Intermediate</div>
        <p className="text-muted text-xs mt-2">Cambridge University Press</p>
      </div>
      <div className="flex-1 overflow-y-auto p-3">
        <div className="text-muted text-[10px] font-mono tracking-wider uppercase mb-2 px-2">12 Units</div>
        <nav className="space-y-1">
          {units.map(unit => (
            <button
              key={unit.id}
              onClick={() => onSelectUnit(unit.id)}
              className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-left transition ${
                selectedUnit === unit.id
                  ? 'bg-accent/15 text-accent border border-accent/30'
                  : 'text-muted hover:bg-surface2 hover:text-text'
              }`}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-current"></span>
              <span className="font-mono text-xs opacity-70 w-6">{unit.id.toString().padStart(2,'0')}</span>
              <span className="text-sm truncate">{unit.title}</span>
            </button>
          ))}
        </nav>
      </div>
    </div>
  );
}