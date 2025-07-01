import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import ContentDiscovery from './components/ContentDiscovery';
import VideoGenerator from './components/VideoGenerator';
import Scheduler from './components/Scheduler';
import Analytics from './components/Analytics';

function App() {
  const [activeTab, setActiveTab] = useState('dashboard');

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return <Dashboard />;
      case 'discovery':
        return <ContentDiscovery />;
      case 'generator':
        return <VideoGenerator />;
      case 'scheduler':
        return <Scheduler />;
      case 'analytics':
        return <Analytics />;
      case 'patterns':
        return <div className="text-center py-12"><p className="text-gray-600">Viral Patterns coming soon...</p></div>;
      case 'monitoring':
        return <div className="text-center py-12"><p className="text-gray-600">Real-time Monitoring coming soon...</p></div>;
      case 'settings':
        return <div className="text-center py-12"><p className="text-gray-600">Settings panel coming soon...</p></div>;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-cyan-50">
      <div className="flex">
        <Sidebar activeTab={activeTab} onTabChange={setActiveTab} />
        <main className="flex-1 p-8">
          {renderContent()}
        </main>
      </div>
    </div>
  );
}

export default App;