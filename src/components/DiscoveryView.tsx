import { Filter, Send } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const DiscoveryView = () => {
  const filters = [
    { type: "Language", values: ["CN", "KO", "HI"], active: ["CN"] },
    { type: "National", values: ["🌍"], active: [] },
    { type: "Gender", values: ["All"], active: ["All"] }
  ];

  const users = [
    {
      id: 1,
      name: "Pine",
      age: 27,
      status: "nerd",
      hobbies: "painting, history, ...",
      avatar: "🎨",
      languages: ["CN", "EN", "JA"],
      country: "🇨🇳",
      verified: true,
      active: false
    },
    {
      id: 2,
      name: "小菲",
      bio: "Hey~My name is Yufei. I come from China, I hope I can make foreign friend...",
      avatar: "👩‍🌾",
      languages: ["CN", "EN"],
      country: "🇨🇳",
      verified: false,
      active: true
    },
    {
      id: 3,
      name: "Vantor",
      bio: "大家好，我是Vantor！🏋️ 目前是一名学生，来自中国🇨🇳，我的母语是中文（Z...",
      avatar: "😊",
      languages: ["CN", "EN", "JA"],
      country: "🇨🇳",
      verified: true,
      active: true
    },
    {
      id: 4,
      name: "Asta_7",
      bio: "Amber Eyes 👁️🌸 which Loves the Countryside Aesthetic 🍃🏞️...",
      avatar: "👨‍💼",
      languages: ["HI", "EN", "JA", "CN", "DE"],
      country: "🇮🇳",
      verified: true,
      active: true
    },
    {
      id: 5,
      name: "柳三十三",
      bio: "Acquaintance is fate.",
      avatar: "🏢",
      languages: ["CN", "EN", "JA", "KO"],
      country: "🇨🇳",
      verified: true,
      active: false
    },
    {
      id: 6,
      name: "Simon",
      bio: "Hi Dawgs I'm Simon and I really hoping to make new friends through the internet....",
      avatar: "👨‍🎤",
      languages: ["KO", "EN", "FR", "JA"],
      country: "🇰🇷",
      verified: true,
      active: false
    }
  ];

  return (
    <div className="flex flex-col h-full">
      {/* Filters */}
      <div className="p-3 border-b border-border">
        <div className="flex items-center justify-between mb-3">
          <div className="flex gap-2">
            {filters.map((filter, index) => (
              <div key={index} className="flex items-center gap-1">
                <span className="text-sm text-muted-foreground">{filter.type}</span>
                <div className="flex gap-1">
                  {filter.values.map((value) => (
                    <Badge
                      key={value}
                      variant={filter.active.includes(value) ? "default" : "outline"}
                      className="text-xs px-2 py-1"
                    >
                      {value}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <Filter size={20} className="text-muted-foreground" />
        </div>
      </div>

      {/* Users List */}
      <div className="flex-1 overflow-y-auto">
        {users.map((user) => (
          <div key={user.id} className="p-3 border-b border-border last:border-b-0">
            <div className="flex items-start gap-3">
              <div className="relative">
                <div className="w-14 h-14 bg-muted rounded-full flex items-center justify-center text-xl">
                  {user.avatar}
                </div>
                <div className="absolute -bottom-1 -right-1 text-sm">
                  {user.country}
                </div>
                {user.active && (
                  <div className="absolute top-0 left-0">
                    <div className="w-3 h-3 bg-online rounded-full"></div>
                    <span className="text-xs text-muted-foreground ml-1">Currently active</span>
                  </div>
                )}
              </div>
              
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="font-semibold text-foreground">{user.name}</h3>
                  {user.verified && (
                    <div className="w-4 h-4 bg-primary rounded-full flex items-center justify-center">
                      <span className="text-primary-foreground text-xs">✓</span>
                    </div>
                  )}
                </div>
                
                <div className="flex gap-1 mb-2">
                  {user.languages.map((lang) => (
                    <Badge key={lang} variant="secondary" className="text-xs px-2 py-1">
                      {lang}
                    </Badge>
                  ))}
                </div>
                
                {(user as any).age && (
                  <p className="text-sm text-muted-foreground mb-1">
                    Age {(user as any).age}, {(user as any).status}
                  </p>
                )}
                
                {(user as any).hobbies && (
                  <p className="text-sm text-muted-foreground mb-2">
                    Hobbies: {(user as any).hobbies}
                  </p>
                )}
                
                {user.bio && (
                  <p className="text-sm text-muted-foreground">{user.bio}</p>
                )}
              </div>
              
              <div className="flex flex-col gap-2">
                <Button size="sm" className="bg-accent text-accent-foreground hover:bg-accent/90">
                  <Send size={14} />
                </Button>
                {user.bio && (
                  <Button variant="outline" size="sm" className="text-xs px-3">
                    Follow
                  </Button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DiscoveryView;