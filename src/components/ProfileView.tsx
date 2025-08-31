import { MoreHorizontal, UserPlus } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const ProfileView = () => {
  const profile = {
    name: "@vpriya",
    avatar: "👨‍💼",
    country: "🇮🇳",
    vip: true,
    stats: {
      review: 41,
      gift: 92
    },
    colors: ["🔴", "🟢", "🟤"],
    badges: ["🏆", "🍷", "🔔", "✨", "♀", "👑"],
    languages: ["EN", "TE", "TA", "CN", "KO", "HI"],
    metrics: {
      following: 30,
      follower: 276,
      moments: 44,
      visitors: [
        { avatar: "👤", country: "🇮🇳" },
        { avatar: "👤", country: "🇰🇷" },
        { avatar: "👤", country: "🇨🇳" }
      ]
    },
    introduction: "Looking forward to your introduction ▷",
    tags: [
      { icon: "🎓", label: "Student" },
      { icon: "🎓", label: "Bachelor" },
      { icon: "🐰", label: "Rabbit" },
      { icon: "🏀", label: "Basketball" },
      { icon: "🏸", label: "Badminton" },
      { label: "Other" }
    ],
    reviews: [
      {
        user: "MK",
        avatar: "👑",
        comment: "Comments hidden",
        icon: "💬"
      },
      {
        user: "mahesh",
        avatar: "👨‍💻",
        comment: "she so friendly and talkactive friend",
        icon: "💬"
      }
    ]
  };

  return (
    <div className="flex flex-col h-full bg-gradient-to-b from-primary/20 to-background">
      {/* Header */}
      <div className="flex items-center justify-between p-3">
        <div className="w-6 h-6" />
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center">
            <span className="text-xs">VIP</span>
          </div>
          <UserPlus size={20} className="text-foreground" />
        </div>
      </div>

      {/* Profile Info */}
      <div className="px-3 pb-4 text-center">
        <div className="relative inline-block mb-3">
          <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center text-3xl border-4 border-background">
            {profile.avatar}
          </div>
          <div className="absolute -bottom-1 -right-1 text-lg">
            {profile.country}
          </div>
        </div>

        <div className="flex items-center justify-center gap-4 mb-4">
          <div className="bg-primary/20 backdrop-blur-sm rounded-full px-4 py-2 flex items-center gap-2">
            <span className="text-2xl">💬</span>
            <span className="text-primary font-bold">{profile.stats.review}</span>
            <span className="text-sm text-muted-foreground">Review</span>
          </div>
          <div className="bg-secondary/20 backdrop-blur-sm rounded-full px-4 py-2 flex items-center gap-2">
            <span className="text-2xl">🎁</span>
            <span className="text-secondary font-bold">{profile.stats.gift}</span>
            <span className="text-sm text-muted-foreground">Gift</span>
          </div>
        </div>

        <div className="flex items-center justify-center gap-2 mb-2">
          {profile.badges.map((badge, index) => (
            <span key={index} className="text-lg">{badge}</span>
          ))}
          {profile.vip && (
            <Badge className="bg-primary text-primary-foreground">VIP</Badge>
          )}
        </div>

        <h1 className="text-xl font-bold text-foreground mb-2">{profile.name}</h1>

        <div className="flex items-center justify-center gap-1 mb-4">
          {profile.languages.map((lang) => (
            <Badge key={lang} variant="secondary" className="text-xs px-2 py-1">
              {lang}
            </Badge>
          ))}
        </div>
      </div>

      {/* Stats */}
      <div className="px-3 mb-6">
        <div className="grid grid-cols-4 gap-4 bg-card/50 backdrop-blur-sm rounded-lg p-4">
          <div className="text-center">
            <div className="font-bold text-foreground">{profile.metrics.following}</div>
            <div className="text-xs text-muted-foreground">Following</div>
          </div>
          <div className="text-center">
            <div className="font-bold text-foreground">{profile.metrics.follower}</div>
            <div className="text-xs text-muted-foreground">Follower</div>
          </div>
          <div className="text-center">
            <div className="font-bold text-foreground">{profile.metrics.moments}</div>
            <div className="text-xs text-muted-foreground">Moments</div>
          </div>
          <div className="text-center relative">
            <div className="flex -space-x-1 justify-center mb-1">
              {profile.metrics.visitors.map((visitor, index) => (
                <div key={index} className="w-6 h-6 bg-muted rounded-full flex items-center justify-center text-xs">
                  {visitor.avatar}
                </div>
              ))}
            </div>
            <div className="text-xs text-muted-foreground">Visitors</div>
            <Badge className="absolute -top-2 -right-2 bg-secondary text-secondary-foreground text-xs w-5 h-5 rounded-full flex items-center justify-center">
              12
            </Badge>
          </div>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto px-3 space-y-6">
        {/* Introduction */}
        <div>
          <h3 className="font-semibold text-foreground mb-2">Introduction</h3>
          <div className="bg-card/50 backdrop-blur-sm rounded-lg p-3 border border-dashed border-accent">
            <div className="flex items-center text-accent">
              <span className="text-lg mr-2">😊</span>
              <span className="text-sm">{profile.introduction}</span>
            </div>
          </div>
        </div>

        {/* Tags */}
        <div>
          <h3 className="font-semibold text-foreground mb-3">Tag</h3>
          <div className="grid grid-cols-3 gap-2">
            {profile.tags.map((tag, index) => (
              <Badge 
                key={index} 
                variant="outline" 
                className="py-2 px-3 justify-center flex items-center gap-1"
              >
                {tag.icon && <span>{tag.icon}</span>}
                <span className="text-xs">{tag.label}</span>
              </Badge>
            ))}
            <Button variant="outline" size="sm" className="py-2 px-3 justify-center">
              <MoreHorizontal size={16} />
            </Button>
          </div>
        </div>

        {/* Reviews */}
        <div>
          <div className="flex items-center justify-between mb-3">
            <h3 className="font-semibold text-foreground">Review</h3>
            <Button variant="ghost" size="sm" className="text-accent hover:text-accent/80">
              More ▷
            </Button>
          </div>
          <div className="space-y-3">
            {profile.reviews.map((review, index) => (
              <div key={index} className="bg-card/50 backdrop-blur-sm rounded-lg p-3 border border-border">
                <div className="flex items-start gap-3">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-muted rounded-full flex items-center justify-center text-sm">
                      {review.avatar}
                    </div>
                    <span className="font-medium text-sm">{review.user}</span>
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-muted-foreground">{review.comment}</p>
                  </div>
                  <span className="text-xl">{review.icon}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileView;