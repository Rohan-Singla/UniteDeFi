"use client";

import { useParams } from "next/navigation";
import { useState } from "react";
import Image from "next/image";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Slider } from "@/components/ui/slider";
import {
  Copy,
  Headphones,
  Mic,
  Music,
  Heart,
  Users,
  BarChart3,
  Upload,
  TrendingUp,
} from "lucide-react";

import userAvatar from "@/public/assets/user-avatar.jpg";
import album1 from "@/public/assets/album-1.jpg";
import album2 from "@/public/assets/album-2.jpg";
import album3 from "@/public/assets/album-3.jpg";

export default function ProfilePage() {
  const params = useParams();
  const id = params?.id;

  const isCreatorProfile = id;
  const [userMode, setUserMode] = useState<"listener" | "creator">("listener");
  const [activeTab, setActiveTab] = useState("my-nfts");
  const [showUploadModal, setShowUploadModal] = useState(false);
  const [tokenizeEnabled, setTokenizeEnabled] = useState(true);
  const [tokenPercentage, setTokenPercentage] = useState([75]);

  const userData = {
    name: isCreatorProfile ? "Aurora Synth" : "Alex Chen",
    walletAddress: "0x1234...5678",
    avatar: userAvatar,
    isVerified: isCreatorProfile || userMode === "creator",
    followers: "12.5K",
    following: "834",
  };

  const tabs = [
    { id: "my-nfts", label: "My NFTs", icon: Music },
    { id: "liked-songs", label: "Liked Songs", icon: Heart },
    { id: "following", label: "Following", icon: Users },
    { id: "vault-stats", label: "Vault Stats", icon: BarChart3 },
  ];

  const creatorTabs = [
    ...tabs,
    { id: "revenue", label: "Revenue", icon: TrendingUp },
    { id: "upload", label: "Upload Track", icon: Upload },
  ];

  const currentTabs = userMode === "creator" || isCreatorProfile ? creatorTabs : tabs;

  const mockNFTs = [
    { id: "1", title: "Liquid Dreams", artist: "Aurora Synth", cover: album1, owned: "5 tokens", earnings: "0.25 SUI" },
    { id: "2", title: "Digital Flow", artist: "Neon Pulse", cover: album2, owned: "3 tokens", earnings: "0.18 SUI" },
    { id: "3", title: "Ethereal Mist", artist: "Cloud Walker", cover: album3, owned: "8 tokens", earnings: "0.42 SUI" },
  ];

  const mockRevenue = [
    { title: "Liquid Dreams", vaultRevenue: "45.2 SUI", yieldEarned: "5.8 SUI", daoSupport: "87%", protocol: "Aave", withdrawable: "2.1 SUI" },
    { title: "Cosmic Waves", vaultRevenue: "32.1 SUI", yieldEarned: "4.2 SUI", daoSupport: "92%", protocol: "Cetus", withdrawable: "1.8 SUI" },
  ];

  return (
      <div className="min-h-screen watercolor-bg relative overflow-hidden">
        {/* Background animation, profile card, tabs, NFT grid, etc. */}
        {/* You can keep your JSX from your Vite project here—no changes needed except for <img> */}
        {/* Change all <img src=... /> to: */}
        {/* <Image src={...} alt="..." width={128} height={128} className="..." /> */}
      </div>
  );
}
