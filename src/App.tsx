import React from 'react';
import LanguageSelector from './components/LanguageSelector';
import { Outlet } from 'react-router-dom';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="p-4 bg-gray-100 flex justify-end">
        <LanguageSelector />
      </header>
      <main className="flex-1">
        <Outlet />
      </main>
    </div>
  );
};

export default App;
