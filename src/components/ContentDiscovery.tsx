import React, { useState } from 'react';
import { 
  Search, 
  TrendingUp, 
  Play, 
  Eye, 
  Heart, 
  Share2, 
  Bookmark,
  Filter,
  RefreshCw,
  Download
} from 'lucide-react';

const ContentDiscovery: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [isScanning, setIsScanning] = useState(false);

  const categories = [
    { id: 'all', label: 'All Categories' },
    { id: 'productivity', label: 'Productivity' },
    { id: 'lifestyle', label: 'Lifestyle' },
    { id: 'business', label: 'Business' },
    { id: 'motivation', label: 'Motivation' },
    { id: 'technology', label: 'Technology' }
  ];

  const viralReels = [
    {
      id: 1,
      username: '@productivityguru',
      caption: 'This productivity hack changed my life in 30 days...',
      views: '2.4M',
      likes: '180K',
      shares: '45K',
      saves: '92K',
      category: 'Productivity',
      viralScore: 9.2,
      thumbnailUrl: 'https://images.pexels.com/photos/3184433/pexels-photo-3184433.jpeg?auto=compress&cs=tinysrgb&w=300&h=400&fit=crop',
      hashtags: ['#productivity', '#lifehacks', '#success']
    },
    {
      id: 2,
      username: '@mindsetcoach',
      caption: 'Nobody talks about this mindset shift...',
      views: '1.8M',
      likes: '142K',
      shares: '38K',
      saves: '76K',
      category: 'Motivation',
      viralScore: 8.7,
      thumbnailUrl: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=300&h=400&fit=crop',
      hashtags: ['#mindset', '#motivation', '#success']
    },
    {
      id: 3,
      username: '@techexplainer',
      caption: 'AI will replace these jobs first...',
      views: '3.1M',
      likes: '220K',
      shares: '65K',
      saves: '145K',
      category: 'Technology',
      viralScore: 9.5,
      thumbnailUrl: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=300&h=400&fit=crop',
      hashtags: ['#ai', '#technology', '#future']
    }
  ];

  const handleScan = () => {
    setIsScanning(true);
    setTimeout(() => setIsScanning(false), 3000);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
          Content Discovery
        </h1>
        <button
          onClick={handleScan}
          disabled={isScanning}
          className="flex items-center space-x-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-200 disabled:opacity-50"
        >
          <RefreshCw className={`h-5 w-5 ${isScanning ? 'animate-spin' : ''}`} />
          <span>{isScanning ? 'Scanning...' : 'Scan for Viral Content'}</span>
        </button>
      </div>

      {/* Search and Filters */}
      <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 border border-white/20 shadow-lg">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search hashtags, keywords, or usernames..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            />
          </div>
          <div className="flex items-center space-x-4">
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            >
              {categories.map(category => (
                <option key={category.id} value={category.id}>
                  {category.label}
                </option>
              ))}
            </select>
            <button className="flex items-center space-x-2 px-4 py-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
              <Filter className="h-5 w-5" />
              <span>Filters</span>
            </button>
          </div>
        </div>
      </div>

      {/* Viral Content Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {viralReels.map((reel) => (
          <div key={reel.id} className="bg-white/70 backdrop-blur-sm rounded-xl overflow-hidden border border-white/20 shadow-lg hover:shadow-xl transition-all duration-300 group">
            <div className="relative">
              <img
                src={reel.thumbnailUrl}
                alt={reel.caption}
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300"></div>
              <div className="absolute top-3 right-3 bg-black/50 text-white px-2 py-1 rounded-full text-xs font-medium">
                <TrendingUp className="h-3 w-3 inline mr-1" />
                {reel.viralScore}
              </div>
              <div className="absolute bottom-3 left-3 bg-black/50 text-white px-2 py-1 rounded-full text-xs">
                {reel.category}
              </div>
              <button className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Play className="h-12 w-12 text-white" />
              </button>
            </div>
            
            <div className="p-4">
              <div className="flex items-center space-x-2 mb-2">
                <span className="font-semibold text-purple-600">{reel.username}</span>
              </div>
              
              <p className="text-gray-900 font-medium mb-3 line-clamp-2">
                {reel.caption}
              </p>
              
              <div className="flex items-center justify-between text-sm text-gray-600 mb-3">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-1">
                    <Eye className="h-4 w-4" />
                    <span>{reel.views}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Heart className="h-4 w-4" />
                    <span>{reel.likes}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Share2 className="h-4 w-4" />
                    <span>{reel.shares}</span>
                  </div>
                </div>
                <div className="flex items-center space-x-1">
                  <Bookmark className="h-4 w-4" />
                  <span>{reel.saves}</span>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-1 mb-4">
                {reel.hashtags.map((tag, index) => (
                  <span key={index} className="bg-purple-100 text-purple-700 px-2 py-1 rounded-full text-xs">
                    {tag}
                  </span>
                ))}
              </div>
              
              <div className="flex space-x-2">
                <button className="flex-1 bg-gradient-to-r from-purple-600 to-blue-600 text-white py-2 px-4 rounded-lg text-sm font-medium hover:shadow-lg transition-all duration-200">
                  Generate Similar
                </button>
                <button className="p-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                  <Download className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Scanning Status */}
      {isScanning && (
        <div className="fixed bottom-6 right-6 bg-gradient-to-r from-purple-600 to-blue-600 text-white p-4 rounded-lg shadow-lg">
          <div className="flex items-center space-x-3">
            <RefreshCw className="h-5 w-5 animate-spin" />
            <div>
              <p className="font-medium">Scanning for viral content...</p>
              <p className="text-sm opacity-90">Found 127 trending reels</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContentDiscovery;