import { useState } from 'react';
import { HomePage } from './components/HomePage';
import { GeneratorPage } from './components/GeneratorPage';
import { LoginPage } from './components/LoginPage';
import { TemplatePage } from './components/TemplatePage';

export type ContentCategory = 'press-note' | 'tourism' | 'emergency';

export interface GeneratedDesign {
  id: string;
  category: ContentCategory;
  title: string;
  content: string;
  timestamp: Date;
}

export default function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'generator' | 'login' | 'template'>('home');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [selectedTemplateId, setSelectedTemplateId] = useState<number>(1);

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
    setCurrentPage('home');
  };

  const handleTemplateClick = (templateId: number) => {
    setSelectedTemplateId(templateId);
    setCurrentPage('template');
  };

  return (
    <>
      {currentPage === 'login' ? (
        <LoginPage 
          onNavigateHome={() => setCurrentPage('home')} 
          onLoginSuccess={handleLoginSuccess}
        />
      ) : currentPage === 'template' ? (
        <TemplatePage 
          templateId={selectedTemplateId}
          onNavigateBack={() => setCurrentPage('home')}
        />
      ) : currentPage === 'home' ? (
        <HomePage 
          onNavigateToGenerator={() => setCurrentPage('generator')}
          onNavigateToLogin={() => setCurrentPage('login')}
          onTemplateClick={handleTemplateClick}
          isLoggedIn={isLoggedIn}
        />
      ) : (
        <GeneratorPage onNavigateHome={() => setCurrentPage('home')} />
      )}
    </>
  );
}