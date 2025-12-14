import { FileText, Palmtree, AlertTriangle, Shield } from 'lucide-react';
import type { GeneratedDesign } from '../App';

interface PosterDesignProps {
  design: GeneratedDesign;
}

export function PosterDesign({ design }: PosterDesignProps) {
  const getDesignTheme = () => {
    switch (design.category) {
      case 'press-note':
        return {
          gradient: 'from-blue-600 to-blue-800',
          accent: 'bg-blue-500',
          icon: Shield,
          badge: 'OFFICIAL PRESS RELEASE',
        };
      case 'tourism':
        return {
          gradient: 'from-green-500 to-teal-600',
          accent: 'bg-green-400',
          icon: Palmtree,
          badge: 'TOURISM UPDATE',
        };
      case 'emergency':
        return {
          gradient: 'from-red-600 to-orange-600',
          accent: 'bg-red-500',
          icon: AlertTriangle,
          badge: 'EMERGENCY ALERT',
        };
    }
  };

  const theme = getDesignTheme();
  const Icon = theme.icon;
  
  // Extract key information
  const lines = design.content.split('\n').filter(line => line.trim());
  const headline = lines[0] || design.title;
  const bodyText = lines.slice(1, 4).join(' ').slice(0, 200);

  return (
    <div className={`w-full h-full bg-gradient-to-br ${theme.gradient} p-8 flex flex-col text-white relative overflow-hidden`}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-white rounded-full translate-y-1/2 -translate-x-1/2" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col h-full">
        {/* Header Badge */}
        <div className="mb-6">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-3 py-1.5 rounded-full">
            <Icon className="w-4 h-4" />
            <span className="text-xs tracking-wide">{theme.badge}</span>
          </div>
        </div>

        {/* Main Headline */}
        <div className="flex-1 flex flex-col justify-center">
          <h1 className="text-2xl sm:text-3xl mb-4 leading-tight">
            {headline}
          </h1>
          {bodyText && (
            <p className="text-sm opacity-90 leading-relaxed">
              {bodyText}...
            </p>
          )}
        </div>

        {/* Footer */}
        <div className="pt-6 border-t border-white/20">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs opacity-75">Generated on</p>
              <p className="text-sm">
                {design.timestamp.toLocaleDateString('en-US', { 
                  month: 'short', 
                  day: 'numeric', 
                  year: 'numeric' 
                })}
              </p>
            </div>
            <div className={`w-12 h-12 ${theme.accent} rounded-full flex items-center justify-center`}>
              <Icon className="w-6 h-6" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
