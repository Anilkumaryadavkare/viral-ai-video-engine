import React from 'react';
import { 
  TrendingUp, 
  Video, 
  Calendar, 
  Eye,
  Heart,
  Share2,
  Clock,
  CheckCircle,
  XCircle
} from 'lucide-react';

const Dashboard: React.FC = () => {
  const stats = [
    {
      title: 'Total Videos Generated',
      value: '1,247',
      change: '+12%',
      icon: Video,
      color: 'bg-gradient-to-r from-purple-500 to-pink-500'
    },
    {
      title: 'Videos Published Today',
      value: '18',
      change: '+3',
      icon: Calendar,
      color: 'bg-gradient-to-r from-blue-500 to-cyan-500'
    },
    {
      title: 'Total Views',
      value: '2.4M',
      change: '+18%',
      icon: Eye,
      color: 'bg-gradient-to-r from-green-500 to-emerald-500'
    },
    {
      title: 'Avg Engagement Rate',
      value: '8.2%',
      change: '+2.1%',
      icon: Heart,
      color: 'bg-gradient-to-r from-orange-500 to-red-500'
    }
  ];

  const recentActivity = [
    { type: 'generated', message: 'New video generated from viral reel @user123', time: '2 minutes ago', status: 'success' },
    { type: 'published', message: 'Video published to Instagram', time: '15 minutes ago', status: 'success' },
    { type: 'analyzed', message: 'Analyzed 45 viral reels from #trending', time: '1 hour ago', status: 'success' },
    { type: 'failed', message: 'Video generation failed - low quality score', time: '2 hours ago', status: 'error' },
    { type: 'scheduled', message: '3 videos scheduled for tomorrow', time: '3 hours ago', status: 'success' }
  ];

  const topPerformers = [
    { id: 1, caption: 'Mind-blowing productivity hack...', views: '245K', likes: '12.3K', engagement: '5.2%' },
    { id: 2, caption: 'This changed everything for me...', views: '189K', likes: '9.8K', engagement: '4.8%' },
    { id: 3, caption: 'Nobody talks about this...', views: '156K', likes: '8.1K', engagement: '4.1%' }
  ];

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
          Dashboard Overview
        </h1>
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2 bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span>AI Agent Active</span>
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div key={index} className="bg-white/70 backdrop-blur-sm rounded-xl p-6 border border-white/20 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-600 text-sm font-medium">{stat.title}</p>
                  <p className="text-2xl font-bold text-gray-900 mt-1">{stat.value}</p>
                  <p className="text-green-600 text-sm font-medium mt-1">
                    {stat.change} from last week
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
        {/* Recent Activity */}
        <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 border border-white/20 shadow-lg">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Recent Activity</h2>
          <div className="space-y-4">
            {recentActivity.map((activity, index) => (
              <div key={index} className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                <div className={`p-1 rounded-full ${activity.status === 'success' ? 'bg-green-100' : 'bg-red-100'}`}>
                  {activity.status === 'success' ? (
                    <CheckCircle className="h-4 w-4 text-green-600" />
                  ) : (
                    <XCircle className="h-4 w-4 text-red-600" />
                  )}
                </div>
                <div className="flex-1">
                  <p className="text-sm text-gray-900 font-medium">{activity.message}</p>
                  <p className="text-xs text-gray-500 mt-1">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Top Performers */}
        <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 border border-white/20 shadow-lg">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Top Performing Videos</h2>
          <div className="space-y-4">
            {topPerformers.map((video) => (
              <div key={video.id} className="p-4 border border-gray-200 rounded-lg hover:border-purple-300 transition-colors">
                <p className="text-sm font-medium text-gray-900 mb-2">{video.caption}</p>
                <div className="flex items-center justify-between text-xs text-gray-600">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1">
                      <Eye className="h-3 w-3" />
                      <span>{video.views}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Heart className="h-3 w-3" />
                      <span>{video.likes}</span>
                    </div>
                  </div>
                  <span className="font-medium text-purple-600">{video.engagement}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Upcoming Schedule */}
      <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 border border-white/20 shadow-lg">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Today's Publishing Schedule</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="flex items-center space-x-3 p-4 bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg border border-purple-200">
            <Clock className="h-5 w-5 text-purple-600" />
            <div>
              <p className="font-medium text-purple-900">11:00 AM</p>
              <p className="text-sm text-purple-700">Productivity Tips Video</p>
            </div>
          </div>
          <div className="flex items-center space-x-3 p-4 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-lg border border-blue-200">
            <Clock className="h-5 w-5 text-blue-600" />
            <div>
              <p className="font-medium text-blue-900">3:00 PM</p>
              <p className="text-sm text-blue-700">Lifestyle Transformation</p>
            </div>
          </div>
          <div className="flex items-center space-x-3 p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg border border-green-200">
            <Clock className="h-5 w-5 text-green-600" />
            <div>
              <p className="font-medium text-green-900">9:00 PM</p>
              <p className="text-sm text-green-700">Motivation Monday</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;