import React, { useState } from 'react';
import { 
  Play, 
  Wand2, 
  Download, 
  Settings, 
  Star,
  Clock,
  CheckCircle,
  XCircle,
  RefreshCw
} from 'lucide-react';

const VideoGenerator: React.FC = () => {
  const [isGenerating, setIsGenerating] = useState(false);
  const [selectedTemplate, setSelectedTemplate] = useState('productivity');

  const templates = [
    {
      id: 'productivity',
      title: 'Productivity Tips',
      description: 'Quick tips and life hacks format',
      successRate: 92,
      avgViews: '450K'
    },
    {
      id: 'motivation',
      title: 'Motivational Content',
      description: 'Inspiring quotes and stories',
      successRate: 88,
      avgViews: '380K'
    },
    {
      id: 'business',
      title: 'Business Insights',
      description: 'Professional tips and strategies',
      successRate: 85,
      avgViews: '320K'
    },
    {
      id: 'lifestyle',
      title: 'Lifestyle & Wellness',
      description: 'Health, fitness, and lifestyle content',
      successRate: 78,
      avgViews: '290K'
    }
  ];

  const generatedVideos = [
    {
      id: 1,
      title: '5 Productivity Hacks That Actually Work',
      status: 'approved',
      qualityScore: 8.7,
      generatedAt: '2 hours ago',
      thumbnailUrl: 'https://images.pexels.com/photos/3184433/pexels-photo-3184433.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop'
    },
    {
      id: 2,
      title: 'The Morning Routine That Changed Everything',
      status: 'pending',
      qualityScore: 7.3,
      generatedAt: '3 hours ago',
      thumbnailUrl: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop'
    },
    {
      id: 3,
      title: 'Why Your Goals Are Failing (And How to Fix It)',
      status: 'rejected',
      qualityScore: 6.2,
      generatedAt: '4 hours ago',
      thumbnailUrl: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop'
    }
  ];

  const handleGenerate = () => {
    setIsGenerating(true);
    setTimeout(() => setIsGenerating(false), 5000);
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'approved':
        return <CheckCircle className="h-5 w-5 text-green-500" />;
      case 'rejected':
        return <XCircle className="h-5 w-5 text-red-500" />;
      default:
        return <Clock className="h-5 w-5 text-yellow-500" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'approved':
        return 'bg-green-100 text-green-800';
      case 'rejected':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-yellow-100 text-yellow-800';
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
          AI Video Generator
        </h1>
        <div className="flex space-x-3">
          <button className="flex items-center space-x-2 px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
            <Settings className="h-5 w-5" />
            <span>Settings</span>
          </button>
        </div>
      </div>

      {/* Generation Controls */}
      <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 border border-white/20 shadow-lg">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Generate New Video</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          {templates.map((template) => (
            <div
              key={template.id}
              onClick={() => setSelectedTemplate(template.id)}
              className={`p-4 rounded-lg border-2 cursor-pointer transition-all duration-200 ${
                selectedTemplate === template.id
                  ? 'border-purple-500 bg-purple-50'
                  : 'border-gray-200 hover:border-gray-300'
              }`}
            >
              <h3 className="font-semibold text-gray-900 mb-2">{template.title}</h3>
              <p className="text-sm text-gray-600 mb-3">{template.description}</p>
              <div className="flex justify-between text-xs text-gray-500">
                <span>{template.successRate}% success</span>
                <span>{template.avgViews} avg views</span>
              </div>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Video Length
              </label>
              <select className="px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500">
                <option>15 seconds</option>
                <option>30 seconds</option>
                <option>60 seconds</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Style
              </label>
              <select className="px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500">
                <option>Modern</option>
                <option>Cinematic</option>
                <option>Minimalist</option>
              </select>
            </div>
          </div>
          
          <button
            onClick={handleGenerate}
            disabled={isGenerating}
            className="flex items-center space-x-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-lg hover:shadow-lg transition-all duration-200 disabled:opacity-50"
          >
            {isGenerating ? (
              <>
                <RefreshCw className="h-5 w-5 animate-spin" />
                <span>Generating...</span>
              </>
            ) : (
              <>
                <Wand2 className="h-5 w-5" />
                <span>Generate Video</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Generated Videos */}
      <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 border border-white/20 shadow-lg">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Recently Generated</h2>
        
        <div className="space-y-4">
          {generatedVideos.map((video) => (
            <div key={video.id} className="flex items-center space-x-4 p-4 border border-gray-200 rounded-lg hover:border-purple-300 transition-colors">
              <img
                src={video.thumbnailUrl}
                alt={video.title}
                className="w-20 h-14 object-cover rounded-lg"
              />
              
              <div className="flex-1">
                <h3 className="font-medium text-gray-900 mb-1">{video.title}</h3>
                <div className="flex items-center space-x-4 text-sm text-gray-600">
                  <span>Generated {video.generatedAt}</span>
                  <div className="flex items-center space-x-1">
                    <Star className="h-4 w-4 text-yellow-500" />
                    <span>{video.qualityScore}/10</span>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className={`flex items-center space-x-1 px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(video.status)}`}>
                  {getStatusIcon(video.status)}
                  <span className="capitalize">{video.status}</span>
                </div>
                
                <div className="flex space-x-2">
                  <button className="p-2 text-gray-400 hover:text-purple-600 transition-colors">
                    <Play className="h-5 w-5" />
                  </button>
                  <button className="p-2 text-gray-400 hover:text-purple-600 transition-colors">
                    <Download className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Generation Progress */}
      {isGenerating && (
        <div className="fixed bottom-6 right-6 bg-gradient-to-r from-purple-600 to-blue-600 text-white p-4 rounded-lg shadow-lg">
          <div className="flex items-center space-x-3">
            <RefreshCw className="h-5 w-5 animate-spin" />
            <div>
              <p className="font-medium">AI is generating your video...</p>
              <p className="text-sm opacity-90">Analyzing viral patterns and creating content</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default VideoGenerator;