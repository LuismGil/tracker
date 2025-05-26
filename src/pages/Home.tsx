import React from 'react';
import { useTranslation } from 'react-i18next';

const Home: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-4xl font-bold mb-4 text-blue-600">{t('welcome')}</h1>
    </div>
  );
};

export default Home;
