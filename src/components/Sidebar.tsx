import React from 'react';
import { 
  Home, 
  Search, 
  Video, 
  Calendar, 
  BarChart3, 
  Settings,
  Bot,
  TrendingUp,
  Clock
} from 'lucide-react';

interface SidebarProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activeTab, onTabChange }) => {
  const menuItems = [
    { id: 'dashboard', icon: Home, label: 'Dashboard' },
    { id: 'discovery', icon: Search, label: 'Content Discovery' },
    { id: 'generator', icon: Video, label: 'Video Generator' },
    { id: 'scheduler', icon: Calendar, label: 'Scheduler' },
    { id: 'analytics', icon: BarChart3, label: 'Analytics' },
    { id: 'patterns', icon: TrendingUp, label: 'Viral Patterns' },
    { id: 'monitoring', icon: Clock, label: 'Monitoring' },
    { id: 'settings', icon: Settings, label: 'Settings' },
  ];

  return (
    <div className="w-64 bg-gradient-to-b from-purple-900 to-blue-900 text-white p-6 min-h-screen">
      <div className="flex items-center mb-8">
        <Bot className="h-8 w-8 mr-3 text-purple-300" />
        <h1 className="text-xl font-bold bg-gradient-to-r from-purple-300 to-blue-300 bg-clip-text text-transparent">
          ReelAI Pro
        </h1>
      </div>
      
      <nav className="space-y-2">
        {menuItems.map((item) => {
          const Icon = item.icon;
          return (
            <button
              key={item.id}
              onClick={() => onTabChange(item.id)}
              className={`w-full flex items-center px-4 py-3 rounded-lg transition-all duration-200 ${
                activeTab === item.id
                  ? 'bg-white/20 backdrop-blur-sm shadow-lg border border-white/20'
                  : 'hover:bg-white/10 hover:backdrop-blur-sm'
              }`}
            >
              <Icon className="h-5 w-5 mr-3" />
              <span className="font-medium">{item.label}</span>
            </button>
          );
        })}
      </nav>

      <div className="mt-12 p-4 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20">
        <h3 className="font-semibold mb-2 text-purple-200">AI Status</h3>
        <div className="space-y-2 text-sm">
          <div className="flex justify-between">
            <span>Content Scraping</span>
            <span className="text-green-400">Active</span>
          </div>
          <div className="flex justify-between">
            <span>Video Generation</span>
            <span className="text-green-400">Active</span>
          </div>
          <div className="flex justify-between">
            <span>Auto Publishing</span>
            <span className="text-green-400">Active</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;