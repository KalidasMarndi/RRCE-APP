import { useState } from 'react';
import { FileText, Palmtree, AlertTriangle, Wand2 } from 'lucide-react';
import type { ContentCategory } from '../App';

interface InputFormProps {
  onGenerate: (content: string, category: ContentCategory) => void;
  isGenerating: boolean;
}

const categories = [
  { id: 'press-note' as ContentCategory, label: 'Government Press Note', icon: FileText, color: 'blue' },
  { id: 'tourism' as ContentCategory, label: 'Tourism Update', icon: Palmtree, color: 'green' },
  { id: 'emergency' as ContentCategory, label: 'Emergency Alert', icon: AlertTriangle, color: 'red' },
];

export function InputForm({ onGenerate, isGenerating }: InputFormProps) {
  const [content, setContent] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<ContentCategory>('press-note');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (content.trim()) {
      onGenerate(content, selectedCategory);
      setContent('');
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8">
      <form onSubmit={handleSubmit}>
        {/* Category Selection */}
        <div className="mb-6">
          <label className="block mb-3">Select Content Type</label>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {categories.map((cat) => {
              const Icon = cat.icon;
              const isSelected = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`flex items-center gap-3 p-4 rounded-lg border-2 transition-all transform hover:scale-105 ${
                    isSelected
                      ? `border-amber-500 bg-amber-50 shadow-md`
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <Icon className={`w-5 h-5 ${isSelected ? `text-amber-600` : 'text-gray-400'}`} />
                  <span className="text-sm">{cat.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Content Input */}
        <div className="mb-6">
          <label htmlFor="content" className="block mb-2">
            Paste Your Content
          </label>
          <textarea
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Enter your press note, tourism update, or emergency alert text here..."
            rows={8}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
            required
          />
          <p className="text-sm text-gray-500 mt-2">
            {content.length} characters
          </p>
        </div>

        {/* Generate Button */}
        <button
          type="submit"
          disabled={isGenerating || !content.trim()}
          className="w-full bg-gradient-to-r from-amber-600 to-orange-600 text-white py-3 px-6 rounded-lg hover:from-amber-700 hover:to-orange-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all flex items-center justify-center gap-2 shadow-md hover:shadow-lg transform hover:scale-105 disabled:transform-none"
        >
          {isGenerating ? (
            <>
              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
              <span>Generating Designs...</span>
            </>
          ) : (
            <>
              <Wand2 className="w-5 h-5" />
              <span>Generate Designs</span>
            </>
          )}
        </button>
      </form>
    </div>
  );
}