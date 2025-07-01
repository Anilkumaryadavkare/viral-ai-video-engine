import React, { useState } from 'react';
import { 
  TrendingUp, 
  Eye, 
  Heart, 
  Share2, 
  MessageCircle,
  Calendar,
  Filter,
  Download
} from 'lucide-react';

const Analytics: React.FC = () => {
  const [timeRange, setTimeRange] = useState('7d');

  const overallStats = [
    {
      title: 'Total Views',
      value: '2.4M',
      change: '+18.5%',
      icon: Eye,
      color: 'bg-gradient-to-r from-blue-500 to-cyan-500'
    },
    {
      title: 'Total Likes',
      value: '180K',
      change: '+12.3%',
      icon: Heart,
      color: 'bg-gradient-to-r from-pink-500 to-red-500'
    },
    {
      title: 'Total Shares',
      value: '45K',
      change: '+24.7%',
      icon: Share2,
      color: 'bg-gradient-to-r from-green-500 to-emerald-500'
    },
    {
      title: 'Total Comments',
      value: '32K',
      change: '+15.2%',
      icon: MessageCircle,
      color: 'bg-gradient-to-r from-purple-500 to-indigo-500'
    }
  ];

  const topVideos = [
    {
      id: 1,
      title: 'This productivity hack changed my life...',
      views: '450K',
      likes: '28K',
      shares: '8.2K',
      comments: '1.2K',
      engagementRate: '8.4%',
      publishDate: '2024-01-10',
      thumbnailUrl: 'https://images.pexels.com/photos/3184433/pexels-photo-3184433.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop'
    },
    {
      id: 2,
      title: 'Nobody talks about this mindset shift...',
      views: '320K',
      likes: '22K',
      shares: '6.8K',
      comments: '980',
      engagementRate: '7.2%',
      publishDate: '2024-01-08',
      thumbnailUrl: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop'
    },
    {
      id: 3,
      title: 'Why your goals are failing (and how to fix it)',
      views: '280K',
      likes: '18K',
      shares: '5.4K',
      comments: '760',
      engagementRate: '6.8%',
      publishDate: '2024-01-06',
      thumbnailUrl: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop'
    }
  ];

  const engagementData = [
    { time: '00:00', views: 12000, likes: 800, shares: 120 },
    { time: '04:00', views: 8000, likes: 600, shares: 90 },
    { time: '08:00', views: 25000, likes: 1800, shares: 280 },
    { time: '12:00', views: 45000, likes: 3200, shares: 520 },
    { time: '16:00', views: 38000, likes: 2800, shares: 440 },
    { time: '20:00', views: 52000, likes: 4100, shares: 680 }
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
          Analytics Dashboard
        </h1>
        <div className="flex items-center space-x-4">
          <select
            value={timeRange}
            onChange={(e) => setTimeRange(e.target.value)}
            className="px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
          >
            <option value="7d">Last 7 days</option>
            <option value="30d">Last 30 days</option>
            <option value="90d">Last 90 days</option>
            <option value="1y">Last year</option>
          </select>
          <button className="flex items-center space-x-2 px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
            <Download className="h-5 w-5" />
            <span>Export</span>
          </button>
        </div>
      </div>

      {/* Overall Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {overallStats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div key={index} className="bg-white/70 backdrop-blur-sm rounded-xl p-6 border border-white/20 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-600 text-sm font-medium">{stat.title}</p>
                  <p className="text-2xl font-bold text-gray-900 mt-1">{stat.value}</p>
                  <p className="text-green-600 text-sm font-medium mt-1">
                    {stat.change} vs last period
                  </p>
                </div>
                <div className={`p-3 rounded-lg ${stat.color}`}>
                  <Icon className="h-6 w-6 text-white" />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Engagement Chart */}
        <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 border border-white/20 shadow-lg">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Engagement by Time</h2>
          <div className="h-64 flex items-end space-x-2">
            {engagementData.map((data, index) => (
              <div key={index} className="flex-1 flex flex-col items-center">
                <div className="w-full bg-gray-200 rounded-t-lg relative" style={{ height: '200px' }}>
                  <div
                    className="absolute bottom-0 w-full bg-gradient-to-t from-purple-500 to-blue-500 rounded-t-lg"
                    style={{ height: `${(data.views / 60000) * 100}%` }}
                  ></div>
                </div>
                <span className="text-xs text-gray-600 mt-2">{data.time}</span>
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-4 space-x-4 text-sm">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-purple-500 rounded"></div>
              <span>Views</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-blue-500 rounded"></div>
              <span>Engagement</span>
            </div>
          </div>
        </div>

        {/* Performance Metrics */}
        <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 border border-white/20 shadow-lg">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Performance Metrics</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-gray-600">Avg. Engagement Rate</span>
              <div className="flex items-center space-x-2">
                <div className="w-32 bg-gray-200 rounded-full h-2">
                  <div className="bg-gradient-to-r from-green-500 to-emerald-500 h-2 rounded-full" style={{ width: '78%' }}></div>
                </div>
                <span className="font-semibold text-gray-900">7.8%</span>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-600">Avg. View Duration</span>
              <div className="flex items-center space-x-2">
                <div className="w-32 bg-gray-200 rounded-full h-2">
                  <div className="bg-gradient-to-r from-blue-500 to-cyan-500 h-2 rounded-full" style={{ width: '65%' }}></div>
                </div>
                <span className="font-semibold text-gray-900">12.4s</span>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-600">Share Rate</span>
              <div className="flex items-center space-x-2">
                <div className="w-32 bg-gray-200 rounded-full h-2">
                  <div className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full" style={{ width: '45%' }}></div>
                </div>
                <span className="font-semibold text-gray-900">2.3%</span>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-600">Save Rate</span>
              <div className="flex items-center space-x-2">
                <div className="w-32 bg-gray-200 rounded-full h-2">
                  <div className="bg-gradient-to-r from-orange-500 to-red-500 h-2 rounded-full" style={{ width: '38%' }}></div>
                </div>
                <span className="font-semibold text-gray-900">1.9%</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Top Performing Videos */}
      <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 border border-white/20 shadow-lg">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Top Performing Videos</h2>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-3 px-4 font-medium text-gray-600">Video</th>
                <th className="text-left py-3 px-4 font-medium text-gray-600">Views</th>
                <th className="text-left py-3 px-4 font-medium text-gray-600">Likes</th>
                <th className="text-left py-3 px-4 font-medium text-gray-600">Shares</th>
                <th className="text-left py-3 px-4 font-medium text-gray-600">Comments</th>
                <th className="text-left py-3 px-4 font-medium text-gray-600">Engagement</th>
                <th className="text-left py-3 px-4 font-medium text-gray-600">Date</th>
              </tr>
            </thead>
            <tbody>
              {topVideos.map((video) => (
                <tr key={video.id} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                  <td className="py-3 px-4">
                    <div className="flex items-center space-x-3">
                      <img
                        src={video.thumbnailUrl}
                        alt={video.title}
                        className="w-12 h-8 object-cover rounded"
                      />
                      <span className="font-medium text-gray-900 truncate max-w-xs">
                        {video.title}
                      </span>
                    </div>
                  </td>
                  <td className="py-3 px-4 text-gray-600">{video.views}</td>
                  <td className="py-3 px-4 text-gray-600">{video.likes}</td>
                  <td className="py-3 px-4 text-gray-600">{video.shares}</td>
                  <td className="py-3 px-4 text-gray-600">{video.comments}</td>
                  <td className="py-3 px-4">
                    <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium">
                      {video.engagementRate}
                    </span>
                  </td>
                  <td className="py-3 px-4 text-gray-600">{video.publishDate}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Analytics;