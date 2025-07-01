import React, { useState } from 'react';
import { 
  Calendar, 
  Clock, 
  Plus, 
  Edit, 
  Trash2, 
  CheckCircle,
  AlertCircle,
  Play
} from 'lucide-react';

const Scheduler: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);
  const [selectedTime, setSelectedTime] = useState('11:00');

  const scheduledPosts = [
    {
      id: 1,
      title: 'Morning Productivity Routine',
      scheduledTime: '2024-01-15T11:00:00',
      status: 'scheduled',
      caption: 'Start your day with these 5 game-changing habits...',
      hashtags: ['#productivity', '#morning', '#success'],
      thumbnailUrl: 'https://images.pexels.com/photos/3184433/pexels-photo-3184433.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop'
    },
    {
      id: 2,
      title: 'Mindset Transformation Tips',
      scheduledTime: '2024-01-15T15:00:00',
      status: 'scheduled',
      caption: 'This one mindset shift will change everything...',
      hashtags: ['#mindset', '#transformation', '#growth'],
      thumbnailUrl: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop'
    },
    {
      id: 3,
      title: 'Evening Reflection Practice',
      scheduledTime: '2024-01-15T21:00:00',
      status: 'published',
      caption: 'End your day with intention and gratitude...',
      hashtags: ['#reflection', '#gratitude', '#wellness'],
      thumbnailUrl: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop'
    }
  ];

  const timeSlots = ['11:00', '15:00', '21:00'];

  const formatTime = (timeString: string) => {
    return new Date(timeString).toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: '2-digit',
      hour12: true
    });
  };

  const formatDate = (timeString: string) => {
    return new Date(timeString).toLocaleDateString('en-US', {
      weekday: 'short',
      month: 'short',
      day: 'numeric'
    });
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'published':
        return 'bg-green-100 text-green-800';
      case 'scheduled':
        return 'bg-blue-100 text-blue-800';
      case 'failed':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'published':
        return <CheckCircle className="h-4 w-4" />;
      case 'scheduled':
        return <Clock className="h-4 w-4" />;
      case 'failed':
        return <AlertCircle className="h-4 w-4" />;
      default:
        return <Clock className="h-4 w-4" />;
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
          Publishing Scheduler
        </h1>
        <button className="flex items-center space-x-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-200">
          <Plus className="h-5 w-5" />
          <span>Schedule Post</span>
        </button>
      </div>

      {/* Quick Schedule */}
      <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 border border-white/20 shadow-lg">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Quick Schedule</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          {timeSlots.map((time) => (
            <div key={time} className="p-4 border-2 border-dashed border-gray-300 rounded-lg hover:border-purple-300 transition-colors">
              <div className="text-center">
                <Clock className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                <p className="font-semibold text-gray-900">{time}</p>
                <p className="text-sm text-gray-600">Optimal posting time</p>
                <button className="mt-2 text-purple-600 hover:text-purple-700 text-sm font-medium">
                  Schedule Here
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="flex items-center space-x-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Date
            </label>
            <input
              type="date"
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
              className="px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Time
            </label>
            <select
              value={selectedTime}
              onChange={(e) => setSelectedTime(e.target.value)}
              className="px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            >
              <option value="11:00">11:00 AM</option>
              <option value="15:00">3:00 PM</option>
              <option value="21:00">9:00 PM</option>
            </select>
          </div>
          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Video
            </label>
            <select className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500">
              <option>Select video to schedule</option>
              <option>Morning Productivity Tips</option>
              <option>Mindset Transformation</option>
              <option>Evening Reflection</option>
            </select>
          </div>
          <button className="mt-6 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-2 rounded-lg hover:shadow-lg transition-all duration-200">
            Schedule
          </button>
        </div>
      </div>

      {/* Scheduled Posts */}
      <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 border border-white/20 shadow-lg">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Scheduled Posts</h2>
        
        <div className="space-y-4">
          {scheduledPosts.map((post) => (
            <div key={post.id} className="flex items-center space-x-4 p-4 border border-gray-200 rounded-lg hover:border-purple-300 transition-colors">
              <img
                src={post.thumbnailUrl}
                alt={post.title}
                className="w-20 h-14 object-cover rounded-lg"
              />
              
              <div className="flex-1">
                <div className="flex items-center space-x-3 mb-2">
                  <h3 className="font-medium text-gray-900">{post.title}</h3>
                  <div className={`flex items-center space-x-1 px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(post.status)}`}>
                    {getStatusIcon(post.status)}
                    <span className="capitalize">{post.status}</span>
                  </div>
                </div>
                
                <p className="text-sm text-gray-600 mb-2">{post.caption}</p>
                
                <div className="flex items-center space-x-4 text-xs text-gray-500">
                  <span>{formatDate(post.scheduledTime)} at {formatTime(post.scheduledTime)}</span>
                  <div className="flex flex-wrap gap-1">
                    {post.hashtags.map((tag, index) => (
                      <span key={index} className="bg-purple-100 text-purple-700 px-1 py-0.5 rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="flex space-x-2">
                <button className="p-2 text-gray-400 hover:text-purple-600 transition-colors">
                  <Play className="h-5 w-5" />
                </button>
                <button className="p-2 text-gray-400 hover:text-blue-600 transition-colors">
                  <Edit className="h-5 w-5" />
                </button>
                <button className="p-2 text-gray-400 hover:text-red-600 transition-colors">
                  <Trash2 className="h-5 w-5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Calendar View */}
      <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 border border-white/20 shadow-lg">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Calendar View</h2>
        
        <div className="grid grid-cols-7 gap-2 mb-4">
          {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
            <div key={day} className="text-center text-sm font-medium text-gray-600 py-2">
              {day}
            </div>
          ))}
        </div>
        
        <div className="grid grid-cols-7 gap-2">
          {Array.from({ length: 35 }, (_, i) => (
            <div key={i} className="aspect-square border border-gray-200 rounded-lg p-2 hover:bg-gray-50 transition-colors">
              <div className="text-sm text-gray-600 mb-1">{((i % 31) + 1)}</div>
              {i === 14 && (
                <div className="space-y-1">
                  <div className="w-full h-1 bg-purple-400 rounded"></div>
                  <div className="w-full h-1 bg-blue-400 rounded"></div>
                  <div className="w-full h-1 bg-green-400 rounded"></div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Scheduler;