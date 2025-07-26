"use client"

import {
  Headphones,
  Grid3X3,
  Play,
  Pause,
  SkipBack,
  SkipForward,
  Bell,
  Volume2,
  Heart,
  Share2,
  TrendingUp,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { useRouter } from "next/navigation"
import { useMusicPlayer } from "@/components/contexts/MusicContext"
import Image from "next/image"
import Sidebar from "@/components/Sidebar"

interface Song {
  id: string
  title: string
  artist: string
  album: string
  cover: string
  price: string
}

export default function Dashboard() {
  const navigate = useRouter()
  const { currentSong, isPlaying, progress, setCurrentSong, togglePlayPause, playNext, playPrevious } = useMusicPlayer()

  const discoverSongs: Song[] = [
    {
      id: "1",
      title: "Liquid Dreams",
      artist: "Aurora Synth",
      album: "Golden Waves",
      cover: "/placeholder.svg?height=200&width=200",
      price: "0.05 SUI",
    },
    {
      id: "2",
      title: "Digital Flow",
      artist: "Neon Pulse",
      album: "Cyber Realm",
      cover: "/placeholder.svg?height=200&width=200",
      price: "0.08 SUI",
    },
    {
      id: "3",
      title: "Ethereal Mist",
      artist: "Cloud Walker",
      album: "Sky Gardens",
      cover: "/placeholder.svg?height=200&width=200",
      price: "0.03 SUI",
    },
    {
      id: "4",
      title: "Neon Nights",
      artist: "Synth Wave",
      album: "Retro Future",
      cover: "/placeholder.svg?height=200&width=200",
      price: "0.07 SUI",
    },
  ]
  const handleSongClick = (song: Song) => {
    setCurrentSong(song)
  }

  const handleCurrentSongClick = () => {
    if (currentSong) {
      navigate.push(`/music/${currentSong.id}`)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="flex min-h-screen">

        <Sidebar />

        {/* Main Content */}
        <div className="flex-1 flex flex-col">
          {/* Header */}
          <header className="bg-white border-b border-slate-200 px-8 py-4">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-2xl font-bold text-slate-900">Dashboard</h1>
                <p className="text-slate-600">Discover and collect amazing music NFTs</p>
              </div>
              <div className="flex items-center space-x-4">
                <Button variant="outline" size="sm" className="text-slate-600 bg-transparent">
                  <Volume2 className="w-4 h-4 mr-2" />
                  Connect Wallet
                </Button>
                <Button variant="ghost" size="icon" className="relative">
                  <Bell className="w-5 h-5" />
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></div>
                </Button>
              </div>
            </div>
          </header>

          {/* Content */}
          <main className="flex-1 p-8 space-y-8 overflow-auto">
            {/* Now Playing Section */}
            <Card
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white border-0 cursor-pointer hover:shadow-lg transition-shadow"
              onClick={handleCurrentSongClick}
            >
              <CardContent className="p-8">
                <div className="flex items-center space-x-8">
                  <div className="relative">
                    <Image
                      src={currentSong?.cover || "/placeholder.svg?height=120&width=120&query=music album cover"}
                      alt="Current Song"
                      width={120}
                      height={120}
                      className="rounded-2xl shadow-lg"
                    />
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-black/20 to-transparent"></div>
                  </div>

                  <div className="flex-1 space-y-6">
                    <div>
                      <Badge variant="secondary" className="mb-2 bg-white/20 text-white border-white/30">
                        Now Playing
                      </Badge>
                      <h2 className="text-3xl font-bold mb-2">{currentSong?.title || "Cosmic Journey"}</h2>
                      <p className="text-blue-100 text-lg">{currentSong?.artist || "Stellar Harmonics"}</p>
                    </div>

                    {/* Player Controls */}
                    <div className="flex items-center space-x-6">
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={(e) => {
                          e.stopPropagation()
                          playPrevious()
                        }}
                        className="w-12 h-12 rounded-full hover:bg-white/20 text-white"
                      >
                        <SkipBack className="w-6 h-6" />
                      </Button>

                      <Button
                        onClick={(e) => {
                          e.stopPropagation()
                          togglePlayPause()
                        }}
                        className="w-16 h-16 rounded-full bg-white text-blue-600 hover:bg-blue-50 shadow-lg"
                      >
                        {isPlaying ? <Pause className="w-8 h-8" /> : <Play className="w-8 h-8 ml-1" />}
                      </Button>

                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={(e) => {
                          e.stopPropagation()
                          playNext()
                        }}
                        className="w-12 h-12 rounded-full hover:bg-white/20 text-white"
                      >
                        <SkipForward className="w-6 h-6" />
                      </Button>

                      <Separator orientation="vertical" className="h-8 bg-white/30" />

                      <Button
                        variant="ghost"
                        size="icon"
                        className="w-10 h-10 rounded-full hover:bg-white/20 text-white"
                      >
                        <Heart className="w-5 h-5" />
                      </Button>

                      <Button
                        variant="ghost"
                        size="icon"
                        className="w-10 h-10 rounded-full hover:bg-white/20 text-white"
                      >
                        <Share2 className="w-5 h-5" />
                      </Button>
                    </div>

                    {/* Progress Bar */}
                    <div className="space-y-2">
                      <div className="relative w-full h-2 bg-white/20 rounded-full overflow-hidden">
                        <div
                          className="absolute left-0 top-0 h-full bg-white rounded-full transition-all duration-300"
                          style={{ width: `${progress}%` }}
                        ></div>
                      </div>
                      <div className="flex justify-between text-sm text-blue-100">
                        <span>1:23</span>
                        <span>3:45</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Discover Section */}
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-2xl font-bold text-slate-900">Discover New Music</h2>
                  <p className="text-slate-600">Fresh tracks from emerging artists</p>
                </div>
                <Button variant="outline">View All</Button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {discoverSongs.map((song) => (
                  <Card
                    key={song.id}
                    className="group hover:shadow-lg transition-all duration-300 cursor-pointer border-slate-200 hover:border-blue-300"
                    onClick={() => navigate.push(`/music/${song.id}`)}
                  >
                    <CardContent className="p-6">
                      <div className="space-y-4">
                        <div className="relative">
                          <Image
                            src={song.cover || "/placeholder.svg"}
                            alt={song.title}
                            width={200}
                            height={200}
                            className="w-full aspect-square rounded-xl object-cover"
                          />
                          <div className="absolute inset-0 rounded-xl bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                          <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <Button
                              size="sm"
                              onClick={(e) => {
                                e.stopPropagation()
                                handleSongClick(song)
                              }}
                              className="w-full bg-white/90 text-slate-900 hover:bg-white"
                            >
                              <Play className="w-4 h-4 mr-2" />
                              Play Now
                            </Button>
                          </div>
                        </div>

                        <div className="space-y-3">
                          <div>
                            <h3 className="font-semibold text-slate-900 truncate">{song.title}</h3>
                            <p className="text-sm text-slate-600 truncate">{song.artist}</p>
                          </div>

                          <div className="flex items-center justify-between">
                            <Badge variant="secondary" className="bg-blue-100 text-blue-700">
                              {song.price}
                            </Badge>
                            <Button
                              size="sm"
                              className="bg-blue-600 hover:bg-blue-700"
                              onClick={(e) => {
                                e.stopPropagation()
                                // Handle buy token logic
                              }}
                            >
                              Buy Token
                            </Button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="border-slate-200">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-medium text-slate-600">Total Collection</p>
                    <Grid3X3 className="w-4 h-4 text-slate-400" />
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-slate-900">24 NFTs</div>
                  <p className="text-xs text-slate-500">+3 this week</p>
                </CardContent>
              </Card>

              <Card className="border-slate-200">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-medium text-slate-600">Total Value</p>
                    <TrendingUp className="w-4 h-4 text-slate-400" />
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-slate-900">2.4 SUI</div>
                  <p className="text-xs text-slate-500">+12% this month</p>
                </CardContent>
              </Card>

              <Card className="border-slate-200">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-medium text-slate-600">Listening Time</p>
                    <Headphones className="w-4 h-4 text-slate-400" />
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-slate-900">47h 23m</div>
                  <p className="text-xs text-slate-500">This week</p>
                </CardContent>
              </Card>
            </div>
          </main>
        </div>
      </div>
    </div>
  )
}
