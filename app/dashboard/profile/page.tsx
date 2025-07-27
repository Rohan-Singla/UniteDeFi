"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Switch } from "@/components/ui/switch"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Separator } from "@/components/ui/separator"
import { User, Music, Heart, Users, BarChart3, Copy, ArrowLeft, Wallet, TrendingUp, DollarSign, Coins, Settings } from 'lucide-react'
import { useRouter } from "next/navigation"
import Image from "next/image"
import Sidebar from "@/components/Sidebar"

const ListenerProfile = () => {
  const [activeTab, setActiveTab] = useState("my-nfts")
  const [isWalletConnected, setIsWalletConnected] = useState(false)
  const router = useRouter()

  const userData = {
    name: "Alex Chen",
    walletAddress: "0x1234...5678",
    avatar: "/placeholder.svg?height=128&width=128",
    followers: "1.2K",
    following: "834",
    totalValue: "12.45 SUI",
    totalNFTs: 16,
  }

  const mockNFTs = [
    {
      id: "1",
      title: "Liquid Dreams",
      artist: "Aurora Synth",
      cover: "/placeholder.svg?height=200&width=200",
      owned: "5 tokens",
      earnings: "0.25 SUI",
    },
    {
      id: "2",
      title: "Digital Flow",
      artist: "Neon Pulse",
      cover: "/placeholder.svg?height=200&width=200",
      owned: "3 tokens",
      earnings: "0.18 SUI",
    },
    {
      id: "3",
      title: "Ethereal Mist",
      artist: "Cloud Walker",
      cover: "/placeholder.svg?height=200&width=200",
      owned: "8 tokens",
      earnings: "0.42 SUI",
    },
    {
      id: "4",
      title: "Neon Nights",
      artist: "Synth Wave",
      cover: "/placeholder.svg?height=200&width=200",
      owned: "2 tokens",
      earnings: "0.12 SUI",
    },
  ]

  const mockVaults = [
    {
      title: "Liquid Dreams",
      invested: "2.5 SUI",
      tvl: "125.8 SUI",
      apr: "18.2%",
      withdrawable: "0.31 SUI",
    },
    {
      title: "Digital Flow",
      invested: "1.8 SUI",
      tvl: "89.3 SUI",
      apr: "22.1%",
      withdrawable: "0.24 SUI",
    },
  ]

  const copyToClipboard = () => {
    navigator.clipboard.writeText(userData.walletAddress)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="flex">
        <Sidebar/>
      <div className="container mx-auto px-8 py-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <Button
            variant="ghost"
            onClick={() => router.push("/dashboard")}
            className="flex items-center space-x-2 text-slate-600 hover:text-slate-900"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Dashboard</span>
          </Button>

        </div>

        {/* Profile Header */}
        <Card className="mb-8 border-slate-200">
          <CardContent className="p-8">
            <div className="flex flex-col lg:flex-row items-center lg:items-start space-y-6 lg:space-y-0 lg:space-x-8">
              {/* Avatar */}
              <div className="relative">
                <Image
                  src={userData.avatar || "/placeholder.svg"}
                  alt={userData.name}
                  width={128}
                  height={128}
                  className="w-32 h-32 rounded-full object-cover border-4 border-white shadow-lg"
                />
                <div className="absolute -bottom-2 -right-2">
                  <Badge className="bg-blue-600 text-white">Music Lover</Badge>
                </div>
              </div>

              {/* Profile Info */}
              <div className="flex-1 text-center lg:text-left space-y-6">
                <div>
                  <h1 className="text-3xl font-bold text-slate-900 mb-2">{userData.name}</h1>
                  <div className="flex items-center justify-center lg:justify-start space-x-2 text-slate-600 mb-4">
                    <span className="font-mono text-sm">{userData.walletAddress}</span>
                    <Button variant="ghost" size="sm" onClick={copyToClipboard}>
                      <Copy className="w-4 h-4" />
                    </Button>
                  </div>
                  <div className="flex items-center justify-center lg:justify-start space-x-8">
                    <div className="text-center">
                      <p className="text-2xl font-bold text-slate-900">{userData.followers}</p>
                      <p className="text-sm text-slate-600">Followers</p>
                    </div>
                    <div className="text-center">
                      <p className="text-2xl font-bold text-slate-900">{userData.following}</p>
                      <p className="text-sm text-slate-600">Following</p>
                    </div>
                  </div>
                </div>

                {/* Stats Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Card className="bg-gradient-to-r from-blue-50 to-purple-50 border-blue-200">
                    <CardContent className="p-4 text-center">
                      <DollarSign className="w-6 h-6 text-blue-600 mx-auto mb-2" />
                      <p className="text-2xl font-bold text-slate-900">{userData.totalValue}</p>
                      <p className="text-sm text-slate-600">Portfolio Value</p>
                    </CardContent>
                  </Card>
                  <Card className="bg-gradient-to-r from-green-50 to-blue-50 border-green-200">
                    <CardContent className="p-4 text-center">
                      <Music className="w-6 h-6 text-green-600 mx-auto mb-2" />
                      <p className="text-2xl font-bold text-slate-900">{userData.totalNFTs}</p>
                      <p className="text-sm text-slate-600">Music NFTs</p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Tabs Section */}
        <Card className="border-slate-200">
          <CardContent className="p-6">
            <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
              <TabsList className="grid w-full grid-cols-4 bg-slate-100">
                <TabsTrigger
                  value="my-nfts"
                  className="data-[state=active]:bg-white data-[state=active]:text-blue-600"
                >
                  <Music className="w-4 h-4 mr-2" />
                  My NFTs
                </TabsTrigger>
                <TabsTrigger
                  value="liked-songs"
                  className="data-[state=active]:bg-white data-[state=active]:text-blue-600"
                >
                  <Heart className="w-4 h-4 mr-2" />
                  Liked
                </TabsTrigger>
                <TabsTrigger
                  value="following"
                  className="data-[state=active]:bg-white data-[state=active]:text-blue-600"
                >
                  <Users className="w-4 h-4 mr-2" />
                  Following
                </TabsTrigger>
                <TabsTrigger
                  value="vault-stats"
                  className="data-[state=active]:bg-white data-[state=active]:text-blue-600"
                >
                  <BarChart3 className="w-4 h-4 mr-2" />
                  Vaults
                </TabsTrigger>
              </TabsList>

              <TabsContent value="my-nfts" className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-slate-900">Your Music Collection</h3>
                  <Badge variant="outline">{mockNFTs.length} NFTs</Badge>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {mockNFTs.map((nft) => (
                    <Card key={nft.id} className="group hover:shadow-lg transition-all duration-300 border-slate-200">
                      <CardContent className="p-6">
                        <div className="space-y-4">
                          <Image
                            src={nft.cover || "/placeholder.svg"}
                            alt={nft.title}
                            width={200}
                            height={200}
                            className="w-full aspect-square rounded-xl object-cover"
                          />
                          <div>
                            <h4 className="font-semibold text-slate-900 truncate">{nft.title}</h4>
                            <p className="text-sm text-slate-600 truncate">{nft.artist}</p>
                          </div>
                          <div className="flex justify-between items-center">
                            <div>
                              <p className="text-xs text-slate-500">Owned</p>
                              <p className="font-semibold text-slate-900">{nft.owned}</p>
                            </div>
                            <div>
                              <p className="text-xs text-slate-500">Earnings</p>
                              <p className="font-semibold text-green-600">{nft.earnings}</p>
                            </div>
                          </div>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-2">
                              <Switch defaultChecked />
                              <span className="text-sm text-slate-600">DAO Voting</span>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="vault-stats" className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-slate-900">Vault Investments</h3>
                  <Badge variant="outline">{mockVaults.length} active vaults</Badge>
                </div>
                <div className="space-y-4">
                  {mockVaults.map((vault) => (
                    <Card key={vault.title} className="border-slate-200">
                      <CardContent className="p-6">
                        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-center">
                          <div>
                            <h4 className="font-semibold text-slate-900">{vault.title}</h4>
                          </div>
                          <div className="text-center">
                            <p className="text-sm text-slate-600">Invested</p>
                            <p className="font-semibold text-blue-600">{vault.invested}</p>
                          </div>
                          <div className="text-center">
                            <p className="text-sm text-slate-600">TVL</p>
                            <p className="font-semibold text-slate-900">{vault.tvl}</p>
                          </div>
                          <div className="text-center">
                            <p className="text-sm text-slate-600">APR</p>
                            <p className="font-semibold text-green-600">{vault.apr}</p>
                          </div>
                          <div className="text-center">
                            <Button className="bg-blue-600 hover:bg-blue-700">
                              Withdraw {vault.withdrawable}
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="liked-songs" className="space-y-4">
                <Card className="border-slate-200">
                  <CardContent className="p-12 text-center">
                    <Heart className="w-16 h-16 text-slate-300 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-slate-900 mb-2">Liked Songs</h3>
                    <p className="text-slate-600">Your favorite tracks will appear here</p>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="following" className="space-y-4">
                <Card className="border-slate-200">
                  <CardContent className="p-12 text-center">
                    <Users className="w-16 h-16 text-slate-300 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-slate-900 mb-2">Following</h3>
                    <p className="text-slate-600">Artists and creators you follow will appear here</p>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
      </div>
    </div>
  )
}

export default ListenerProfile
