import { AlertTriangle, Droplets, Wind, FileText, Palmtree, Users, ArrowUpRight } from 'lucide-react';
import { useRef } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const templates = [
  {
    id: 1,
    title: 'Flood Alert',
    category: 'Emergency Alert',
    icon: Droplets,
    image: 'https://images.unsplash.com/photo-1566552881560-0be862a7c445?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxNdW1iYWklMjBmbG9vZCUyMG1vbnNvb24lMjByYWlufGVufDF8fHx8MTc2NTcwMDc5Nnww&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Monsoon flood warnings for coastal regions',
  },
  {
    id: 2,
    title: 'Cyclone Warning',
    category: 'Emergency Alert',
    icon: Wind,
    image: 'https://images.unsplash.com/photo-1664968320161-27d2093fc03f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxJbmRpYSUyMGN5Y2xvbmUlMjBzdG9ybSUyMGNvYXN0fGVufDF8fHx8MTc2NTcwMDc5Nnww&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Tropical cyclone alerts for Bay of Bengal',
  },
  {
    id: 3,
    title: 'Government Press',
    category: 'Government',
    icon: FileText,
    image: 'https://images.unsplash.com/photo-1760872645513-63b6846ce3c9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxJbmRpYSUyMHBhcmxpYW1lbnQlMjBidWlsZGluZ3xlbnwxfHx8fDE3NjU3MDA3OTh8MA&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Official government announcements',
  },
  {
    id: 4,
    title: 'Heritage Tourism',
    category: 'Tourism',
    icon: Palmtree,
    image: 'https://images.unsplash.com/photo-1710501827798-73d6fcd50137?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxKYWlwdXIlMjBwYWxhY2UlMjBJbmRpYSUyMGhlcml0YWdlfGVufDF8fHx8MTc2NTcwMDc5N3ww&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Promote India\'s rich cultural heritage',
  },
  {
    id: 5,
    title: 'Public Advisory',
    category: 'Government',
    icon: Users,
    image: 'https://images.unsplash.com/photo-1681621358045-359636321702?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxJbmRpYSUyMHN0cmVldCUyMHBlb3BsZSUyMGNpdHl8ZW58MXx8fHwxNzY1NzAwNzk3fDA&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Public health and safety notices',
  },
  {
    id: 6,
    title: 'Natural Beauty',
    category: 'Tourism',
    icon: Palmtree,
    image: 'https://images.unsplash.com/photo-1694783079572-eaeff4bee78b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxLZXJhbGElMjBiYWNrd2F0ZXJzJTIwSW5kaWF8ZW58MXx8fHwxNzY1NzAwNzk4fDA&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Explore Kerala backwaters and more',
  },
];

interface TemplateShowcaseProps {
  onTemplateClick?: (templateId: number) => void;
}

export function TemplateShowcase({ onTemplateClick }: TemplateShowcaseProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  return (
    <section className="py-20 bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl mb-4">
            Ready-to-Use Design Templates
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Choose from our collection of professionally designed templates for emergency alerts, government communications, and tourism promotions.
          </p>
        </div>

        {/* Horizontal Scrolling Container */}
        <div className="relative">
          {/* Scroll Container */}
          <div
            ref={scrollContainerRef}
            className="flex gap-6 overflow-x-auto pb-6 scrollbar-hide snap-x snap-mandatory"
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
            }}
          >
            {templates.map((template, index) => {
              const Icon = template.icon;
              return (
                <div
                  key={template.id}
                  className="flex-shrink-0 w-80 snap-start group cursor-pointer"
                  style={{
                    animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`,
                  }}
                  onClick={() => onTemplateClick && onTemplateClick(template.id)}
                >
                  <div className="relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 h-96">
                    {/* Background Image */}
                    <div className="absolute inset-0">
                      <ImageWithFallback
                        src={template.image}
                        alt={template.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      {/* Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                    </div>
                    
                    {/* Content */}
                    <div className="relative z-10 h-full flex flex-col justify-between p-6">
                      {/* Top Right Button */}
                      <div className="flex justify-end">
                        <button className="bg-white/90 backdrop-blur-sm hover:bg-white text-gray-800 px-4 py-2 rounded-full text-sm flex items-center gap-2 transition-all shadow-md">
                          View Template
                          <ArrowUpRight className="w-4 h-4" />
                        </button>
                      </div>
                      
                      {/* Bottom Content */}
                      <div>
                        <h3 className="text-3xl text-white mb-2 drop-shadow-lg">
                          {template.title}
                        </h3>
                        <p className="text-white/90 text-sm mb-2 drop-shadow">
                          {template.description}
                        </p>
                        <div className="flex items-center gap-2 text-white/80">
                          <Icon className="w-4 h-4" />
                          <span className="text-xs uppercase tracking-wide">{template.category}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Gradient Overlays for scroll indication */}
          <div className="absolute left-0 top-0 bottom-6 w-20 bg-gradient-to-r from-orange-50 to-transparent pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-6 w-20 bg-gradient-to-l from-yellow-50 to-transparent pointer-events-none" />
        </div>

        {/* View All Button */}
        <div className="text-center mt-8">
          <button className="border-2 border-amber-600 text-amber-700 px-8 py-3 rounded-lg hover:bg-amber-600 hover:text-white transition-all shadow-md hover:shadow-lg transform hover:scale-105">
            View All Templates
          </button>
        </div>
      </div>

      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}
