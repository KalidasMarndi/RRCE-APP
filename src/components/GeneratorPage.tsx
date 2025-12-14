import { useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import { Header } from './Header';
import { InputForm } from './InputForm';
import { DesignPreview } from './DesignPreview';
import { Sparkles } from 'lucide-react';
import type { ContentCategory, GeneratedDesign } from '../App';

interface GeneratorPageProps {
  onNavigateHome: () => void;
}

export function GeneratorPage({ onNavigateHome }: GeneratorPageProps) {
  const [designs, setDesigns] = useState<GeneratedDesign[]>([]);
  const [isGenerating, setIsGenerating] = useState(false);

  const handleGenerate = async (content: string, category: ContentCategory) => {
    setIsGenerating(true);
    
    // Simulate AI processing
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Extract title from content (first line or first 50 chars)
    const title = content.split('\n')[0].slice(0, 50) || 'Untitled';
    
    const newDesign: GeneratedDesign = {
      id: Date.now().toString(),
      category,
      title,
      content,
      timestamp: new Date(),
    };
    
    setDesigns(prev => [newDesign, ...prev]);
    setIsGenerating(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-amber-200 rounded-full blur-3xl opacity-20 animate-blob" />
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-orange-200 rounded-full blur-3xl opacity-20 animate-blob animation-delay-2000" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-yellow-200 rounded-full blur-3xl opacity-20 animate-blob animation-delay-4000" />
      
      <div className="relative z-10">
        <Header />
        
        {/* Back Button */}
        <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
          <button
            onClick={onNavigateHome}
            className="flex items-center gap-2 text-gray-600 hover:text-indigo-600 transition-colors transform hover:-translate-x-1 duration-200"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Home</span>
          </button>
        </div>
        
        <main className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
          {/* Hero Section with Animation */}
          <div className="text-center mb-12 animate-fadeIn">
            <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-700 px-4 py-2 rounded-full mb-4 animate-bounce-slow">
              <Sparkles className="w-4 h-4 animate-pulse" />
              <span className="text-sm">AI-Powered Design Generation</span>
            </div>
            <h1 className="text-4xl sm:text-5xl mb-4 animate-slideDown">
              Rapid Response Creative Engine
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto animate-slideUp">
              Automatically convert Government Press Notes, Tourism Updates, and Emergency Alerts 
              into ready-to-use posters and social media designs - all in one click.
            </p>
          </div>

          {/* Input Form with Animation */}
          <div className="animate-scaleIn">
            <InputForm onGenerate={handleGenerate} isGenerating={isGenerating} />
          </div>

          {/* Generated Designs */}
          {designs.length > 0 && (
            <div className="mt-12 animate-fadeIn">
              <h2 className="text-2xl mb-6">Generated Designs</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {designs.map((design, index) => (
                  <div 
                    key={design.id}
                    className="animate-slideUp"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <DesignPreview design={design} />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Empty State */}
          {designs.length === 0 && !isGenerating && (
            <div className="text-center py-16 text-gray-500 animate-fadeIn">
              <div className="inline-block p-8 bg-white rounded-2xl shadow-lg">
                <Sparkles className="w-16 h-16 text-indigo-300 mx-auto mb-4 animate-pulse" />
                <p>Enter your content above and click "Generate Designs" to get started</p>
              </div>
            </div>
          )}
        </main>
      </div>

      <style>{`
        @keyframes blob {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
        }
        
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        
        @keyframes bounceSlow {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-5px);
          }
        }
        
        .animate-blob {
          animation: blob 7s infinite;
        }
        
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.6s ease-out;
        }
        
        .animate-slideDown {
          animation: slideDown 0.6s ease-out;
        }
        
        .animate-slideUp {
          animation: slideUp 0.6s ease-out;
        }
        
        .animate-scaleIn {
          animation: scaleIn 0.6s ease-out;
        }
        
        .animate-bounce-slow {
          animation: bounceSlow 2s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}