import { FileText, Palette, Zap, Globe, Shield, Clock } from 'lucide-react';

const features = [
  {
    icon: FileText,
    title: 'Government Press Notes',
    description: 'Official templates for press releases following Indian government standards and formats.',
  },
  {
    icon: Palette,
    title: 'Advanced Design AI',
    description: 'AI-powered designs tailored for Indian audiences with regional language support.',
  },
  {
    icon: Zap,
    title: 'Instant Generation',
    description: 'Create emergency alerts for floods, cyclones, and disasters in seconds.',
  },
  {
    icon: Globe,
    title: 'Tourism Promotion',
    description: 'Showcase India\'s heritage sites, cultural festivals, and tourism destinations.',
  },
  {
    icon: Shield,
    title: 'Emergency Alerts',
    description: 'Natural calamity warnings including monsoon floods, cyclones, and earthquakes.',
  },
  {
    icon: Clock,
    title: 'Multi-Platform Export',
    description: 'Export designs optimized for WhatsApp, social media, and government portals.',
  },
];

export function Features() {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl mb-4">
            Discover The Facilities We Offer At RRCE
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            With innovative solutions, expert AI, and a user-first approach, we simplify the process to ensure a smooth experience.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="bg-gray-50 p-8 rounded-xl hover:shadow-lg transition-shadow border border-gray-200 hover:border-blue-300"
              >
                <div className="bg-gradient-to-br from-blue-600 to-purple-600 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}