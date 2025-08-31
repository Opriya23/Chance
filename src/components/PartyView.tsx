import { Filter, Plus, Mic } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const PartyView = () => {
  const liveUser = {
    name: "Leo Edward",
    avatar: "👨‍💼",
    country: "🇩🇪",
    isLive: true
  };

  const hallOfFame = {
    title: "Hall of Fame",
    subtitle: "Who can reach the top",
    gradient: true
  };

  const languages = ["All", "EN", "TE", "TA", "CN", "KO"];

  const parties = [
    {
      id: 1,
      title: "study English and Chinese",
      participants: [
        { avatar: "👨‍🎓", country: "🇨🇳" },
        { avatar: "👩‍🎓", country: "🇮🇩" },
        { avatar: "👱‍♀️", country: "🇬🇧" },
        { avatar: "👨‍💼", country: "🇨🇳" },
        { avatar: "👨‍🌾", country: "🇮🇳" },
        { avatar: "👩‍💻", country: "🇮🇳" }
      ],
      live: 11,
      languages: ["CN", "EN"],
      vip: true,
      gender: { female: 56, male: 44 }
    },
    {
      id: 2,
      title: "yA_wAah😊's happy party 🎉🎉🎉",
      participants: [
        { avatar: "👨‍🎨", country: "🇵🇭" },
        { avatar: "👩‍💼", country: "🇮🇳" }
      ],
      live: 2,
      languages: ["TL", "EN"],
      vip: true,
      gender: { female: 100, male: 0 }
    },
    {
      id: 3,
      title: "",
      participants: [
        { avatar: "👨‍🔧", country: "🇰🇷" }
      ],
      live: 1,
      languages: ["AR", "EN"],
      vip: true,
      gender: null
    }
  ];

  return (
    <div className="flex flex-col h-full">
      {/* Live User Card */}
      <div className="p-3">
        <div className="bg-gradient-primary rounded-lg p-4 text-center">
          <div className="flex items-center justify-center mb-2">
            <Badge className="bg-red-500 text-white text-xs px-2 py-1 mr-2">
              📍 LIVE
            </Badge>
          </div>
          <div className="w-16 h-16 bg-white/20 rounded-full mx-auto mb-2 flex items-center justify-center text-2xl backdrop-blur-sm">
            {liveUser.avatar}
          </div>
          <h3 className="font-semibold text-white">{liveUser.name}</h3>
          <div className="text-sm text-white/80">{liveUser.country}</div>
        </div>
      </div>

      {/* Hall of Fame Banner */}
      <div className="px-3 mb-4">
        <div className="bg-gradient-secondary rounded-lg p-4 flex items-center justify-between text-white">
          <div>
            <h2 className="font-bold text-lg">{hallOfFame.title}</h2>
            <p className="text-sm opacity-90">{hallOfFame.subtitle}</p>
          </div>
          <div className="text-4xl">🏆</div>
        </div>
      </div>

      {/* Language Filter */}
      <div className="px-3 mb-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 overflow-x-auto pb-2">
            <div className="flex items-center gap-1 mr-2">
              <span className="text-lg">🔥</span>
              <span className="text-sm font-medium">All</span>
            </div>
            {languages.slice(1).map((lang) => (
              <Badge 
                key={lang} 
                variant={lang === "EN" ? "default" : "outline"} 
                className="text-xs px-3 py-1 whitespace-nowrap"
              >
                {lang}
              </Badge>
            ))}
            <Filter size={16} className="text-muted-foreground ml-2" />
          </div>
          <Button variant="outline" size="sm" className="ml-2 flex items-center gap-1">
            <Mic size={14} />
            <span className="text-xs">Create Room</span>
          </Button>
        </div>
      </div>

      {/* Party Rooms */}
      <div className="flex-1 overflow-y-auto px-3 space-y-3">
        {parties.map((party) => (
          <div key={party.id} className="bg-card border border-border rounded-lg p-4">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <Badge className="bg-red-500 text-white text-xs px-2 py-1">
                  📍 LIVE • {party.live}
                </Badge>
                <div className="flex gap-1">
                  {party.languages.map((lang) => (
                    <Badge key={lang} variant="secondary" className="text-xs px-2 py-1">
                      {lang}
                    </Badge>
                  ))}
                </div>
                {party.vip && (
                  <Badge className="bg-primary text-primary-foreground text-xs px-2 py-1">
                    🔵 VIP
                  </Badge>
                )}
              </div>
              {party.gender && (
                <div className="flex gap-1">
                  <Badge className="bg-secondary text-secondary-foreground text-xs px-2 py-1">
                    ♀ {party.gender.female}%
                  </Badge>
                  <Badge className="bg-primary text-primary-foreground text-xs px-2 py-1">
                    {party.gender.male}% ♂
                  </Badge>
                </div>
              )}
            </div>

            <div className="flex items-center gap-2 mb-3">
              {party.participants.slice(0, 6).map((participant, index) => (
                <div key={index} className="relative">
                  <div className="w-10 h-10 bg-muted rounded-full flex items-center justify-center text-sm">
                    {participant.avatar}
                  </div>
                  <div className="absolute -bottom-1 -right-1 text-xs">
                    {participant.country}
                  </div>
                </div>
              ))}
              {party.participants.length > 6 && (
                <Button variant="outline" size="sm" className="w-10 h-10 rounded-full p-0">
                  <Plus size={16} />
                </Button>
              )}
            </div>

            {party.title && (
              <h3 className="font-medium text-foreground text-sm">{party.title}</h3>
            )}
          </div>
        ))}
      </div>

      {/* Floating Add Button */}
      <div className="fixed bottom-20 right-4">
        <Button size="lg" className="w-14 h-14 rounded-full bg-accent text-accent-foreground hover:bg-accent/90 shadow-lg">
          <Plus size={24} />
        </Button>
      </div>
    </div>
  );
};

export default PartyView;