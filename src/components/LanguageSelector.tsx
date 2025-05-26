import React from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSelector: React.FC = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
  };

  return (
    <div className="flex space-x-4">
      <button
        onClick={() => changeLanguage('en')}
        className={`px-3 py-1 rounded ${i18n.language === 'en' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
      >
        EN
      </button>
      <button
        onClick={() => changeLanguage('es')}
        className={`px-3 py-1 rounded ${i18n.language === 'es' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
      >
        ES
      </button>
    </div>
  );
};

export default LanguageSelector;
