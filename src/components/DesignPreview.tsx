import { Download, Share2 } from 'lucide-react';
import type { GeneratedDesign } from '../App';
import { PosterDesign } from './PosterDesign';

interface DesignPreviewProps {
  design: GeneratedDesign;
}

export function DesignPreview({ design }: DesignPreviewProps) {
  const handleDownload = () => {
    // Mock download functionality
    alert('In a production environment, this would download the design as PNG/PDF');
  };

  const handleShare = () => {
    // Mock share functionality
    alert('In a production environment, this would open sharing options');
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
      {/* Design Preview */}
      <div className="aspect-[3/4] bg-gray-100">
        <PosterDesign design={design} />
      </div>

      {/* Actions */}
      <div className="p-4">
        <h3 className="mb-2 line-clamp-2">{design.title}</h3>
        <p className="text-sm text-gray-500 mb-4">
          {design.timestamp.toLocaleString()}
        </p>
        
        <div className="flex gap-2">
          <button
            onClick={handleDownload}
            className="flex-1 flex items-center justify-center gap-2 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors"
          >
            <Download className="w-4 h-4" />
            <span className="text-sm">Download</span>
          </button>
          <button
            onClick={handleShare}
            className="flex items-center justify-center gap-2 border border-gray-300 py-2 px-4 rounded-lg hover:bg-gray-50 transition-colors"
          >
            <Share2 className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
