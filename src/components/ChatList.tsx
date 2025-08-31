import { Search, Bell } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

const ChatList = () => {
  const chats = [
    {
      id: 1,
      name: "Sweety",
      message: "bzrixin",
      time: "05:03",
      avatar: "🐕",
      unread: 0,
      country: "🇮🇳"
    },
    {
      id: 2,
      name: "K",
      message: "🌹",
      time: "",
      avatar: "👩‍💼",
      unread: 0,
      country: "❤️"
    },
    {
      id: 3,
      name: "Shan",
      message: "",
      time: "",
      avatar: "🌊",
      unread: 0,
      country: "🇮🇳"
    },
    {
      id: 4,
      name: "UzumaKi",
      message: "👋",
      time: "15:22",
      avatar: "🍜",
      unread: 1,
      country: "🇮🇳"
    },
    {
      id: 5,
      name: "طارق الخفاجي",
      message: "لم أكن أشعر بالرضا مؤخراً، هل يمكنها المحدث قليلاً",
      time: "15:15",
      avatar: "💬",
      unread: 1,
      country: "🇾🇪"
    },
    {
      id: 6,
      name: "yaseer",
      message: "💪 كيف تحافظ على دوافعك في الأوقات الصعبة؟",
      time: "15:13",
      avatar: "📱",
      unread: 1,
      country: "🇾🇪"
    },
    {
      id: 7,
      name: "Krish",
      message: "Hi!",
      time: "15:12",
      avatar: "👨‍💻",
      unread: 1,
      country: "🇮🇳"
    }
  ];

  const interests = [
    { name: "Recommend", avatar: "🐕", country: "🇨🇳" },
    { name: "Active", avatar: "🏃‍♀️", country: "🇺🇸" },
    { name: "New User", avatar: "🌊", country: "🇺🇸" },
    { name: "Featured Post", avatar: "👨‍💼", country: "🇨🇳" },
    { name: "New User", avatar: "👨‍🌾", country: "🇾🇪" }
  ];

  return (
    <div className="flex flex-col h-full">
      {/* Search */}
      <div className="p-3">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={16} />
          <Input
            placeholder="Search User/Chat"
            className="pl-10 bg-muted border-none rounded-full text-sm"
          />
        </div>
      </div>

      {/* Interested Section */}
      <div className="px-3 mb-4">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-sm font-medium text-muted-foreground">Interested</h3>
          <button className="text-muted-foreground hover:text-foreground">
            ×
          </button>
        </div>
        <div className="flex gap-3 overflow-x-auto pb-2">
          {interests.map((interest, index) => (
            <div key={index} className="flex flex-col items-center gap-1 min-w-[60px]">
              <div className="relative">
                <div className="w-12 h-12 bg-muted rounded-full flex items-center justify-center text-lg">
                  {interest.avatar}
                </div>
                <div className="absolute -bottom-1 -right-1 text-xs">
                  {interest.country}
                </div>
              </div>
              <span className="text-xs text-muted-foreground text-center">
                {interest.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Notification */}
      <div className="px-3 mb-4">
        <div className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
          <Bell size={16} className="text-muted-foreground" />
          <span className="text-sm text-muted-foreground">
            Enable notifications to never miss a conversation.
          </span>
        </div>
      </div>

      {/* Messages */}
      <div className="px-3 mb-3">
        <h3 className="text-sm font-medium text-muted-foreground">Messages</h3>
      </div>

      <div className="flex-1 overflow-y-auto">
        {chats.map((chat) => (
          <div key={chat.id} className="flex items-center gap-3 p-3 hover:bg-muted/30 transition-colors">
            <div className="relative">
              <div className="w-12 h-12 bg-muted rounded-full flex items-center justify-center text-lg">
                {chat.avatar}
              </div>
              <div className="absolute -bottom-1 -right-1 text-xs">
                {chat.country}
              </div>
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between mb-1">
                <h4 className="font-medium text-foreground truncate">{chat.name}</h4>
                {chat.time && (
                  <span className="text-xs text-muted-foreground">{chat.time}</span>
                )}
              </div>
              {chat.message && (
                <p className="text-sm text-muted-foreground truncate">{chat.message}</p>
              )}
            </div>
            {chat.unread > 0 && (
              <Badge className="bg-secondary text-secondary-foreground min-w-[20px] h-5 text-xs flex items-center justify-center">
                {chat.unread}
              </Badge>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChatList;