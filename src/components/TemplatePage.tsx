import { ArrowLeft, Download, Share2, Droplets, Wind, FileText, Palmtree, Users, AlertTriangle } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface TemplatePageProps {
  templateId: number;
  onNavigateBack: () => void;
}

const templateData: Record<number, {
  title: string;
  description: string;
  category: string;
  icon: typeof Droplets;
  gradient: string;
  image: string;
  features: string[];
  colorScheme: { primary: string; secondary: string; accent: string };
}> = {
  1: {
    title: 'Flood Alert Template',
    description: 'Emergency flood warnings for monsoon season',
    category: 'Emergency Alert',
    icon: Droplets,
    gradient: 'from-blue-600 to-cyan-600',
    image: 'https://images.unsplash.com/photo-1566552881560-0be862a7c445?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxNdW1iYWklMjBmbG9vZCUyMG1vbnNvb24lMjByYWlufGVufDF8fHx8MTc2NTcwMDc5Nnww&ixlib=rb-4.1.0&q=80&w=1080',
    features: ['Immediate evacuation alerts', 'Safety instructions', 'Contact information', 'Multi-language support'],
    colorScheme: { primary: 'bg-blue-600', secondary: 'bg-cyan-500', accent: 'bg-blue-100' },
  },
  2: {
    title: 'Cyclone Warning Template',
    description: 'Tropical cyclone alerts for coastal regions',
    category: 'Emergency Alert',
    icon: Wind,
    gradient: 'from-red-600 to-orange-600',
    image: 'https://images.unsplash.com/photo-1664968320161-27d2093fc03f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxJbmRpYSUyMGN5Y2xvbmUlMjBzdG9ybSUyMGNvYXN0fGVufDF8fHx8MTc2NTcwMDc5Nnww&ixlib=rb-4.1.0&q=80&w=1080',
    features: ['Storm tracking information', 'Shelter locations', 'Preparation checklist', 'Emergency contacts'],
    colorScheme: { primary: 'bg-red-600', secondary: 'bg-orange-500', accent: 'bg-red-100' },
  },
  3: {
    title: 'Government Press Release',
    description: 'Official announcements and policy updates',
    category: 'Government',
    icon: FileText,
    gradient: 'from-amber-700 to-orange-700',
    image: 'https://images.unsplash.com/photo-1760872645513-63b6846ce3c9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxJbmRpYSUyMHBhcmxpYW1lbnQlMjBidWlsZGluZ3xlbnwxfHx8fDE3NjU3MDA3OTh8MA&ixlib=rb-4.1.0&q=80&w=1080',
    features: ['Official branding', 'Government seal', 'Press contact info', 'Social media ready'],
    colorScheme: { primary: 'bg-amber-700', secondary: 'bg-orange-600', accent: 'bg-amber-100' },
  },
  4: {
    title: 'Heritage Tourism Promotion',
    description: 'Showcase India\'s rich cultural heritage',
    category: 'Tourism',
    icon: Palmtree,
    gradient: 'from-emerald-600 to-teal-600',
    image: 'https://images.unsplash.com/photo-1710501827798-73d6fcd50137?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxKYWlwdXIlMjBwYWxhY2UlMjBJbmRpYSUyMGhlcml0YWdlfGVufDF8fHx8MTc2NTcwMDc5N3ww&ixlib=rb-4.1.0&q=80&w=1080',
    features: ['Beautiful imagery', 'Cultural highlights', 'Visit information', 'Tour packages'],
    colorScheme: { primary: 'bg-emerald-600', secondary: 'bg-teal-500', accent: 'bg-emerald-100' },
  },
  5: {
    title: 'Public Advisory Template',
    description: 'Public health and safety notifications',
    category: 'Government',
    icon: Users,
    gradient: 'from-violet-600 to-fuchsia-600',
    image: 'https://images.unsplash.com/photo-1681621358045-359636321702?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxJbmRpYSUyMHN0cmVldCUyMHBlb3BsZSUyMGNpdHl8ZW58MXx8fHwxNzY1NzAwNzk3fDA&ixlib=rb-4.1.0&q=80&w=1080',
    features: ['Clear messaging', 'Safety guidelines', 'Helpline numbers', 'Community reach'],
    colorScheme: { primary: 'bg-violet-600', secondary: 'bg-fuchsia-500', accent: 'bg-violet-100' },
  },
  6: {
    title: 'Natural Beauty Tourism',
    description: 'Promote Kerala backwaters and natural destinations',
    category: 'Tourism',
    icon: Palmtree,
    gradient: 'from-teal-600 to-cyan-600',
    image: 'https://images.unsplash.com/photo-1694783079572-eaeff4bee78b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxLZXJhbGElMjBiYWNrd2F0ZXJzJTIwSW5kaWF8ZW58MXx8fHwxNzY1NzAwNzk4fDA&ixlib=rb-4.1.0&q=80&w=1080',
    features: ['Nature photography', 'Eco-tourism focus', 'Adventure activities', 'Booking information'],
    colorScheme: { primary: 'bg-teal-600', secondary: 'bg-cyan-500', accent: 'bg-teal-100' },
  },
};

export function TemplatePage({ templateId, onNavigateBack }: TemplatePageProps) {
  const template = templateData[templateId];
  const Icon = template.icon;

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <button
            onClick={onNavigateBack}
            className="flex items-center gap-2 text-gray-600 hover:text-amber-600 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Templates</span>
          </button>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Template Preview Section */}
        <div className="grid lg:grid-cols-2 gap-12 mb-12">
          {/* Left: Template Preview */}
          <div>
            <div className="sticky top-24">
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                {/* Preview Image */}
                <div className="aspect-[3/4] relative">
                  <ImageWithFallback
                    src={template.image}
                    alt={template.title}
                    className="w-full h-full object-cover"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-br ${template.gradient} opacity-70`} />
                  
                  {/* Overlay Content */}
                  <div className="absolute inset-0 p-8 flex flex-col justify-between text-white">
                    <div>
                      <div className="bg-white/20 backdrop-blur-md px-3 py-1.5 rounded-full inline-block mb-4 border border-white/40">
                        <span className="text-xs">{template.category}</span>
                      </div>
                      <h1 className="text-4xl mb-4 drop-shadow-lg">{template.title}</h1>
                      <p className="text-lg drop-shadow">Sample emergency content will appear here. This is a preview of how your design will look.</p>
                    </div>
                    
                    <div className="flex justify-between items-end">
                      <div>
                        <p className="text-sm opacity-75">Government of India</p>
                        <p className="text-xs opacity-60">Ministry of Communications</p>
                      </div>
                      <div className="bg-white/30 backdrop-blur-md w-16 h-16 rounded-full flex items-center justify-center border border-white/40">
                        <Icon className="w-8 h-8" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Template Info */}
          <div>
            <div className="mb-8">
              <h2 className="text-4xl mb-4">{template.title}</h2>
              <p className="text-xl text-gray-600 mb-6">{template.description}</p>
              
              {/* Action Buttons */}
              <div className="flex gap-4 mb-8">
                <button className="flex-1 bg-gradient-to-r from-amber-600 to-orange-600 text-white py-3 px-6 rounded-lg hover:from-amber-700 hover:to-orange-700 transition-all shadow-md hover:shadow-lg transform hover:scale-105">
                  Use This Template
                </button>
                <button className="flex items-center gap-2 border-2 border-gray-300 py-3 px-6 rounded-lg hover:border-amber-600 hover:text-amber-600 transition-all">
                  <Share2 className="w-5 h-5" />
                  Share
                </button>
                <button className="flex items-center gap-2 border-2 border-gray-300 py-3 px-6 rounded-lg hover:border-amber-600 hover:text-amber-600 transition-all">
                  <Download className="w-5 h-5" />
                </button>
              </div>

              {/* Features */}
              <div className="bg-white rounded-xl p-6 shadow-md mb-8">
                <h3 className="text-xl mb-4">Template Features</h3>
                <ul className="space-y-3">
                  {template.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="bg-amber-100 rounded-full p-1 mt-1">
                        <div className="w-2 h-2 bg-amber-600 rounded-full" />
                      </div>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Color Scheme */}
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="text-xl mb-4">Color Scheme</h3>
                <div className="flex gap-4">
                  <div className="flex-1">
                    <div className={`${template.colorScheme.primary} h-20 rounded-lg mb-2`} />
                    <p className="text-sm text-gray-600 text-center">Primary</p>
                  </div>
                  <div className="flex-1">
                    <div className={`${template.colorScheme.secondary} h-20 rounded-lg mb-2`} />
                    <p className="text-sm text-gray-600 text-center">Secondary</p>
                  </div>
                  <div className="flex-1">
                    <div className={`${template.colorScheme.accent} h-20 rounded-lg mb-2`} />
                    <p className="text-sm text-gray-600 text-center">Accent</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Customization Options */}
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <h3 className="text-2xl mb-6">Customize This Template</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 border-2 border-gray-200 rounded-xl hover:border-amber-600 transition-all cursor-pointer">
              <h4 className="text-lg mb-2">Edit Text</h4>
              <p className="text-sm text-gray-600">Customize headlines, descriptions, and contact information</p>
            </div>
            <div className="p-6 border-2 border-gray-200 rounded-xl hover:border-amber-600 transition-all cursor-pointer">
              <h4 className="text-lg mb-2">Change Colors</h4>
              <p className="text-sm text-gray-600">Adjust the color scheme to match your department</p>
            </div>
            <div className="p-6 border-2 border-gray-200 rounded-xl hover:border-amber-600 transition-all cursor-pointer">
              <h4 className="text-lg mb-2">Add Logo</h4>
              <p className="text-sm text-gray-600">Include your government agency or department logo</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
