"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"
import { Slider } from "@/components/ui/slider"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Music,
  Heart,
  Users,
  BarChart3,
  Upload,
  Copy,
  TrendingUp,
  ArrowLeft,
  Wallet,
  Verified,
  DollarSign,
} from "lucide-react"
import { useParams, useRouter } from "next/navigation"
import Image from "next/image"
import Sidebar from "@/components/Sidebar"

const CreatorProfile = () => {
  const { id } = useParams()
  const router = useRouter()
  const [activeTab, setActiveTab] = useState("my-nfts")
  const [showUploadModal, setShowUploadModal] = useState(false)
  const [tokenizeEnabled, setTokenizeEnabled] = useState(true)
  const [tokenPercentage, setTokenPercentage] = useState([75])
  const [isWalletConnected, setIsWalletConnected] = useState(false)

  const userData = {
    name: "Aurora Synth",
    walletAddress: "0x5678...9abc",
    avatar: "/placeholder.svg?height=128&width=128",
    isVerified: true,
    followers: "25.8K",
    following: "1.2K",
    totalRevenue: "156.7 SUI",
    totalTracks: 24,
  }

  const mockNFTs = [
    {
      id: "1",
      title: "Liquid Dreams",
      artist: "Aurora Synth",
      cover: "/placeholder.svg?height=200&width=200",
      owned: "Creator",
      earnings: "12.5 SUI",
    },
    {
      id: "2",
      title: "Digital Flow",
      artist: "Aurora Synth",
      cover: "/placeholder.svg?height=200&width=200",
      owned: "Creator",
      earnings: "8.3 SUI",
    },
    {
      id: "3",
      title: "Ethereal Mist",
      artist: "Aurora Synth",
      cover: "/placeholder.svg?height=200&width=200",
      owned: "Creator",
      earnings: "15.7 SUI",
    },
  ]

  const mockRevenue = [
    {
      title: "Liquid Dreams",
      vaultRevenue: "45.2 SUI",
      yieldEarned: "5.8 SUI",
      daoSupport: "87%",
      protocol: "Aave",
      withdrawable: "2.1 SUI",
    },
    {
      title: "Cosmic Waves",
      vaultRevenue: "32.1 SUI",
      yieldEarned: "4.2 SUI",
      daoSupport: "92%",
      protocol: "Cetus",
      withdrawable: "1.8 SUI",
    },
  ]

  const handleConnectWallet = () => {
    setIsWalletConnected(!isWalletConnected)
  }

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
                  <Badge className="bg-blue-600 text-white flex items-center space-x-1">
                    <Verified className="w-3 h-3" />
                    <span>Verified</span>
                  </Badge>
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
                  <Card className="bg-gradient-to-r from-green-50 to-blue-50 border-green-200">
                    <CardContent className="p-4 text-center">
                      <DollarSign className="w-6 h-6 text-green-600 mx-auto mb-2" />
                      <p className="text-2xl font-bold text-slate-900">{userData.totalRevenue}</p>
                      <p className="text-sm text-slate-600">Total Revenue</p>
                    </CardContent>
                  </Card>
                  <Card className="bg-gradient-to-r from-purple-50 to-pink-50 border-purple-200">
                    <CardContent className="p-4 text-center">
                      <Music className="w-6 h-6 text-purple-600 mx-auto mb-2" />
                      <p className="text-2xl font-bold text-slate-900">{userData.totalTracks}</p>
                      <p className="text-sm text-slate-600">Published Tracks</p>
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
              <TabsList className="grid w-full grid-cols-6 bg-slate-100">
                <TabsTrigger value="my-nfts" className="data-[state=active]:bg-white data-[state=active]:text-blue-600">
                  <Music className="w-4 h-4 mr-2" />
                  My Tracks
                </TabsTrigger>
                <TabsTrigger value="revenue" className="data-[state=active]:bg-white data-[state=active]:text-blue-600">
                  <TrendingUp className="w-4 h-4 mr-2" />
                  Revenue
                </TabsTrigger>
                <TabsTrigger value="upload" className="data-[state=active]:bg-white data-[state=active]:text-blue-600">
                  <Upload className="w-4 h-4 mr-2" />
                  Upload
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
                  Analytics
                </TabsTrigger>
              </TabsList>

              <TabsContent value="my-nfts" className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-slate-900">Your Published Tracks</h3>
                  <Badge variant="outline">{mockNFTs.length} tracks</Badge>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {mockNFTs.map((nft) => (
                    <Card key={nft.id} className="group hover:shadow-lg transition-all duration-300 border-slate-200">
                      <CardContent className="p-6">
                        <div className="space-y-4">
                          <div className="relative">
                            <Image
                              src={nft.cover || "/placeholder.svg"}
                              alt={nft.title}
                              width={200}
                              height={200}
                              className="w-full aspect-square rounded-xl object-cover"
                            />
                            <div className="absolute top-2 right-2">
                              <Badge className="bg-green-600 text-white">Creator</Badge>
                            </div>
                          </div>
                          <div>
                            <h4 className="font-semibold text-slate-900 truncate">{nft.title}</h4>
                            <p className="text-sm text-slate-600 truncate">{nft.artist}</p>
                          </div>
                          <div className="flex justify-between items-center">
                            <div>
                              <p className="text-xs text-slate-500">Status</p>
                              <p className="font-semibold text-slate-900">{nft.owned}</p>
                            </div>
                            <div>
                              <p className="text-xs text-slate-500">Earnings</p>
                              <p className="font-semibold text-green-600">{nft.earnings}</p>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="revenue" className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-slate-900">Revenue Analytics</h3>
                  <Badge variant="outline" className="bg-green-100 text-green-700">
                    Total: {userData.totalRevenue}
                  </Badge>
                </div>
                <div className="space-y-4">
                  {mockRevenue.map((item) => (
                    <Card key={item.title} className="border-slate-200">
                      <CardContent className="p-6">
                        <div className="grid grid-cols-1 md:grid-cols-6 gap-4 items-center">
                          <div>
                            <h4 className="font-semibold text-slate-900">{item.title}</h4>
                          </div>
                          <div className="text-center">
                            <p className="text-sm text-slate-600">Vault Revenue</p>
                            <p className="font-semibold text-blue-600">{item.vaultRevenue}</p>
                          </div>
                          <div className="text-center">
                            <p className="text-sm text-slate-600">Yield Earned</p>
                            <p className="font-semibold text-green-600">{item.yieldEarned}</p>
                          </div>
                          <div className="text-center">
                            <p className="text-sm text-slate-600">DAO Support</p>
                            <p className="font-semibold text-purple-600">{item.daoSupport}</p>
                          </div>
                          <div className="text-center">
                            <p className="text-sm text-slate-600">Protocol</p>
                            <p className="font-semibold text-slate-900">{item.protocol}</p>
                          </div>
                          <div className="text-center">
                            <Button className="bg-blue-600 hover:bg-blue-700">Withdraw {item.withdrawable}</Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="upload" className="space-y-6">
                <div className="max-w-4xl mx-auto">
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-slate-900 mb-2">Upload New Music</h3>
                    <p className="text-slate-600">Create and tokenize your latest track</p>
                  </div>

                  <div className="space-y-8">
                    {/* File Upload Section */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <Card className="border-2 border-dashed border-slate-300 hover:border-blue-400 transition-colors">
                        <CardContent className="p-8 text-center">
                          <Upload className="w-12 h-12 text-slate-400 mx-auto mb-4" />
                          <h4 className="font-semibold text-slate-900 mb-2">Music File</h4>
                          <p className="text-slate-600 mb-4">Drag & drop MP3/WAV file</p>
                          <Button variant="outline">Browse Files</Button>
                        </CardContent>
                      </Card>

                      <Card className="border-2 border-dashed border-slate-300 hover:border-blue-400 transition-colors">
                        <CardContent className="p-8 text-center">
                          <Upload className="w-12 h-12 text-slate-400 mx-auto mb-4" />
                          <h4 className="font-semibold text-slate-900 mb-2">Cover Art</h4>
                          <p className="text-slate-600 mb-4">Upload album artwork</p>
                          <Button variant="outline">Browse Images</Button>
                        </CardContent>
                      </Card>
                    </div>

                    {/* Track Details */}
                    <Card className="border-slate-200">
                      <CardHeader>
                        <CardTitle>Track Details</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <label className="block text-sm font-medium text-slate-700 mb-2">Song Title</label>
                            <Input placeholder="Enter song title" />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-slate-700 mb-2">Genre</label>
                            <Input placeholder="Electronic, Ambient, etc." />
                          </div>
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-slate-700 mb-2">Description</label>
                          <Textarea placeholder="Describe your music..." rows={3} />
                        </div>
                      </CardContent>
                    </Card>

                    {/* Tokenization Settings */}
                    <Card className="border-slate-200">
                      <CardHeader>
                        <CardTitle>Tokenization Settings</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-6">
                        <div className="flex items-center justify-between">
                          <div>
                            <h4 className="font-medium text-slate-900">Enable Tokenization</h4>
                            <p className="text-sm text-slate-600">Allow fans to purchase tokens of this track</p>
                          </div>
                          <Switch checked={tokenizeEnabled} onCheckedChange={setTokenizeEnabled} />
                        </div>

                        {tokenizeEnabled && (
                          <div className="space-y-6 pt-4 border-t border-slate-200">
                            <div>
                              <label className="block text-sm font-medium text-slate-700 mb-2">
                                Tokenization Percentage: {tokenPercentage[0]}%
                              </label>
                              <Slider
                                value={tokenPercentage}
                                onValueChange={setTokenPercentage}
                                max={100}
                                step={5}
                                className="w-full"
                              />
                              <p className="text-sm text-slate-500 mt-2">
                                You'll retain {100 - tokenPercentage[0]}% ownership
                              </p>
                            </div>
                            <div>
                              <label className="block text-sm font-medium text-slate-700 mb-2">Price per Token</label>
                              <Input placeholder="0.01 SUI" />
                            </div>
                          </div>
                        )}
                      </CardContent>
                    </Card>

                    <Button
                      onClick={() => setShowUploadModal(true)}
                      className="w-full py-4 text-lg bg-blue-600 hover:bg-blue-700"
                    >
                      Create and Tokenize
                    </Button>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="liked-songs">
                <Card className="border-slate-200">
                  <CardContent className="p-12 text-center">
                    <Heart className="w-16 h-16 text-slate-300 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-slate-900 mb-2">Liked Songs</h3>
                    <p className="text-slate-600">Your favorite tracks will appear here</p>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="following">
                <Card className="border-slate-200">
                  <CardContent className="p-12 text-center">
                    <Users className="w-16 h-16 text-slate-300 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-slate-900 mb-2">Following</h3>
                    <p className="text-slate-600">Artists and creators you follow will appear here</p>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="vault-stats">
                <Card className="border-slate-200">
                  <CardContent className="p-12 text-center">
                    <BarChart3 className="w-16 h-16 text-slate-300 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-slate-900 mb-2">Analytics</h3>
                    <p className="text-slate-600">Detailed analytics will appear here</p>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
      </div>

      {/* Upload Success Modal */}
      {showUploadModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <Card className="max-w-md w-full border-slate-200">
            <CardContent className="p-8 text-center space-y-6">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center mx-auto">
                <Upload className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Upload Successful!</h3>
                <p className="text-slate-600">Your music has been uploaded and tokenized successfully.</p>
              </div>
              <div className="space-y-3 text-left bg-slate-50 rounded-lg p-4">
                <div className="flex justify-between items-center">
                  <span className="text-slate-600">Status:</span>
                  <Badge className="bg-green-100 text-green-700">Processing</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-600">Tokens Created:</span>
                  <span className="font-semibold text-slate-900">1,000</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-600">Your Share:</span>
                  <span className="font-semibold text-blue-600">{100 - tokenPercentage[0]}%</span>
                </div>
              </div>
              <Button onClick={() => setShowUploadModal(false)} className="w-full bg-blue-600 hover:bg-blue-700">
                Continue
              </Button>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  )
}

export default CreatorProfile
