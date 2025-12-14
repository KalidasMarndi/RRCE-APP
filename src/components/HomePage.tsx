import { Navbar } from './Navbar';
import { Hero } from './Hero';
import { Features } from './Features';
import { TemplateShowcase } from './TemplateShowcase';
import { Footer } from './Footer';

interface HomePageProps {
  onNavigateToGenerator: () => void;
  onNavigateToLogin: () => void;
  onTemplateClick: (templateId: number) => void;
  isLoggedIn: boolean;
}

export function HomePage({ onNavigateToGenerator, onNavigateToLogin, onTemplateClick, isLoggedIn }: HomePageProps) {
  return (
    <div className="min-h-screen bg-white">
      <Navbar 
        onNavigateToGenerator={onNavigateToGenerator} 
        onNavigateToLogin={onNavigateToLogin}
        isLoggedIn={isLoggedIn}
      />
      <Hero onNavigateToGenerator={onNavigateToGenerator} />
      <Features />
      <TemplateShowcase onTemplateClick={onTemplateClick} />
      <Footer />
    </div>
  );
}