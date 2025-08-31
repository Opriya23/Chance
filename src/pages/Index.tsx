import { useState } from "react";
import { MessageCircle, Search, Users, User } from "lucide-react";
import { cn } from "@/lib/utils";
import ChatList from "@/components/ChatList";
import ProfileView from "@/components/ProfileView";
import DiscoveryView from "@/components/DiscoveryView";
import PartyView from "@/components/PartyView";

const Index = () => {
  const [activeTab, setActiveTab] = useState<'messages' | 'find' | 'party' | 'profile'>('messages');

  const tabs = [
    { id: 'messages', icon: MessageCircle, label: 'Messages' },
    { id: 'find', icon: Search, label: 'Find' },
    { id: 'party', icon: Users, label: 'Party' },
    { id: 'profile', icon: User, label: 'Profile' },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'messages':
        return <ChatList />;
      case 'find':
        return <DiscoveryView />;
      case 'party':
        return <PartyView />;
      case 'profile':
        return <ProfileView />;
      default:
        return <ChatList />;
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="p-3 bg-card border-b border-border">
        <div className="flex items-center justify-between">
          <h1 className="text-lg font-bold capitalize">{activeTab}</h1>
          <div className="w-6 h-6 rounded-full bg-gradient-primary" />
        </div>
      </header>

      {/* Content */}
      <main className="flex-1 pb-16 overflow-hidden">
        {renderContent()}
      </main>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 inset-x-0 bg-card border-t border-border">
        <div className="flex items-center justify-around py-2">
          {tabs.map(({ id, icon: Icon, label }) => (
            <button
              key={id}
              onClick={() => setActiveTab(id as any)}
              className={cn(
                "flex flex-col items-center gap-1 p-2 rounded-lg transition-colors",
                activeTab === id
                  ? "text-primary"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              <Icon size={20} />
              <span className="text-xs font-medium">{label}</span>
            </button>
          ))}
        </div>
      </nav>
    </div>
  );
};

export default Index;