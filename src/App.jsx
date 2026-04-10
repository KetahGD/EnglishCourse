import React, { useState, useEffect } from 'react';
import Sidebar from './components/layout/Sidebar';
import SearchBar from './components/layout/SearchBar';
import UnitView from './components/unit/UnitView';
import { unitsData } from './data/unitsData2';
import { useSearch } from './hooks/useSearch';
import { checkApiKeyStatus } from './services/geminiService';

function App() {
  const [selectedUnit, setSelectedUnit] = useState(1);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [apiWarning, setApiWarning] = useState(null);
  const { searchTerm, setSearchTerm, filteredResults, highlightUnit } = useSearch(unitsData);

  useEffect(() => {
    const checkApi = async () => {
      const status = await checkApiKeyStatus();
      if (!status.valid) setApiWarning(status.message);
    };
    checkApi();
  }, []);

  const handleSelectResult = (unitId, section, itemId) => {
    setSelectedUnit(unitId);
    highlightUnit(unitId, section, itemId);
    if (window.innerWidth < 1024) setSidebarOpen(false);
  };

  return (
    <div className="flex min-h-screen bg-darkbg text-text relative">
      <button
        onClick={() => setSidebarOpen(!sidebarOpen)}
        className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-surface rounded-lg border border-border shadow-lg"
        aria-label="Menu"
      >
        <svg className="w-6 h-6 text-text" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      <div className={`fixed inset-y-0 left-0 z-40 w-[280px] bg-surface border-r border-border transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:relative lg:block ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <Sidebar units={unitsData} selectedUnit={selectedUnit} onSelectUnit={(id) => { setSelectedUnit(id); if (window.innerWidth < 1024) setSidebarOpen(false); }} />
      </div>

      {sidebarOpen && <div className="fixed inset-0 bg-black/50 z-30 lg:hidden" onClick={() => setSidebarOpen(false)} />}

      <main className="flex-1 min-w-0 w-full lg:ml-0">
        {apiWarning && (
          <div className="bg-accent/10 border-b border-accent/30 p-2 text-center text-sm">
            ⚠️ {apiWarning}. Add your Gemini API key to <code className="bg-darkbg px-1 rounded">.env.local</code> to enable AI features.
          </div>
        )}
        <div className="sticky top-0 z-20 bg-surface/90 backdrop-blur-md border-b border-border p-3">
          <div className="max-w-2xl mx-auto">
            <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} results={filteredResults} onSelectResult={handleSelectResult} />
          </div>
        </div>
        <UnitView unit={unitsData.find(u => u.id === selectedUnit)} onSelectUnit={setSelectedUnit} totalUnits={unitsData.length} />
      </main>
    </div>
  );
}

export default App;