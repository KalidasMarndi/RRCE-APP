import { ArrowRight, Sparkles, Users, Zap } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface HeroProps {
  onNavigateToGenerator: () => void;
}

export function Hero({ onNavigateToGenerator }: HeroProps) {
  return (
    <section id="home" className="relative bg-gradient-to-br from-blue-50 via-white to-purple-50 py-20 lg:py-32 overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-200 rounded-full blur-3xl opacity-20 -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-200 rounded-full blur-3xl opacity-20 translate-y-1/2 -translate-x-1/2" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-700 px-4 py-2 rounded-full mb-6">
              <Sparkles className="w-4 h-4" />
              <span className="text-sm">AI-Powered Design Generation</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl mb-6">
              Simplifying Government Communications Into
              <span className="bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent"> Professional Designs</span>
            </h1>
            
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Your communications evolve, and your designs should too. We design flawless posters and social media graphics that adapt to your current needs, ensuring clarity, functionality, and style at every stage.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button
                onClick={onNavigateToGenerator}
                className="flex items-center justify-center gap-2 bg-gradient-to-r from-amber-600 to-orange-600 text-white px-8 py-4 rounded-lg hover:from-amber-700 hover:to-orange-700 transition-all shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                <span>Explore Designs</span>
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="flex items-center justify-center gap-2 border-2 border-slate-300 px-8 py-4 rounded-lg hover:border-amber-600 hover:text-amber-600 transition-all">
                <span>View Demo</span>
              </button>
            </div>
            
            {/* Stats */}
            <div className="flex gap-8">
              <div className="flex items-center gap-3">
                <div className="bg-amber-100 p-2 rounded-lg">
                  <Users className="w-5 h-5 text-amber-600" />
                </div>
                <div>
                  <p className="text-2xl">50K+</p>
                  <p className="text-sm text-gray-600">Government Agencies</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-teal-100 p-2 rounded-lg">
                  <Zap className="w-5 h-5 text-teal-600" />
                </div>
                <div>
                  <p className="text-2xl">500K+</p>
                  <p className="text-sm text-gray-600">Designs Created</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Image */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-amber-600 to-orange-600 rounded-2xl rotate-3 opacity-10" />
            <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-200 transform transition-transform hover:scale-105 duration-300">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1667849521034-0086c275e6da?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxJbmRpYSUyMGdhdGUlMjBEZWxoaSUyMG1vbnVtZW50fGVufDF8fHx8MTc2NTcwMDc5NXww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="India Gate Delhi"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}