"use client"

import { useState } from "react"
import { SearchIcon, Filter, Play, User, Verified, ArrowLeft, TrendingUp, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { useRouter } from "next/navigation"
import { useMusicPlayer } from "@/components/contexts/MusicContext"
import Image from "next/image"
import Sidebar from "@/components/Sidebar"

interface SearchResult {
  type: "song" | "creator"
  id: string
  title?: string
  artist?: string
  cover?: string
  price?: string
  name?: string
  avatar?: string
  verified?: boolean
  followers?: string
}

export default function Search() {
  const navigate = useRouter()
  const { setCurrentSong } = useMusicPlayer()
  const [searchQuery, setSearchQuery] = useState("")
  const [filterType, setFilterType] = useState("all")

  const searchResults: SearchResult[] = [
    {
      type: "song",
      id: "1",
      title: "Liquid Dreams",
      artist: "Aurora Synth",
      cover: "/placeholder.svg?height=200&width=200",
      price: "0.05 SUI",
    },
    {
      type: "creator",
      id: "aurora",
      name: "Aurora Synth",
      avatar: "/placeholder.svg?height=64&width=64",
      verified: true,
      followers: "12.5K",
    },
    {
      type: "song",
      id: "2",
      title: "Digital Flow",
      artist: "Neon Pulse",
      cover: "/placeholder.svg?height=200&width=200",
      price: "0.08 SUI",
    },
    {
      type: "song",
      id: "3",
      title: "Ethereal Mist",
      artist: "Cloud Walker",
      cover: "/placeholder.svg?height=200&width=200",
      price: "0.03 SUI",
    },
    {
      type: "creator",
      id: "neon",
      name: "Neon Pulse",
      avatar: "/placeholder.svg?height=64&width=64",
      verified: false,
      followers: "8.2K",
    },
    {
      type: "song",
      id: "4",
      title: "Neon Nights",
      artist: "Synth Wave",
      cover: "/placeholder.svg?height=200&width=200",
      price: "0.07 SUI",
    },
  ]

  const trendingSearches = ["Ambient", "Electronic", "Lo-fi", "Synthwave", "Chill"]

  const handleSongClick = (result: SearchResult) => {
    if (result.type === "song") {
      const song = {
        id: result.id,
        title: result.title!,
        artist: result.artist!,
        cover: result.cover!,
        price: result.price,
        album: "",
      }
      setCurrentSong(song)
    }
  }

  const handleSongDetailClick = (songId: string) => {
    navigate.push(`/music/${songId}`)
  }

  const handleCreatorClick = (creatorId: string) => {
    navigate.push(`/creator/${creatorId}`)
  }

  const filteredResults = searchResults.filter((result) => {
    if (filterType === "all") return true
    if (filterType === "creator") return result.type === "creator"
    return result.type === "song"
  })

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="flex">
        <Sidebar/>

      <div className="container mx-auto px-8 py-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <Button
            variant="ghost"
            onClick={() => navigate.push("/dashboard")}
            className="flex items-center space-x-2 text-slate-600 hover:text-slate-900"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Dashboard</span>
          </Button>
        </div>

        {/* Page Title */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Discover Music</h1>
          <p className="text-xl text-slate-600">Find your next favorite track or artist</p>
        </div>

        {/* Search Section */}
        <Card className="mb-8 border-slate-200">
          <CardContent className="p-6">
            <div className="flex flex-col lg:flex-row gap-4">
              <div className="flex-1 relative">
                <SearchIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
                <Input
                  placeholder="Search by mood, lyrics, or creator..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-12 h-12 text-lg border-slate-300 focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
              <Select value={filterType} onValueChange={setFilterType}>
                <SelectTrigger className="w-full lg:w-48 h-12 border-slate-300">
                  <div className="flex items-center space-x-2">
                    <Filter className="w-4 h-4" />
                    <SelectValue />
                  </div>
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Results</SelectItem>
                  <SelectItem value="song">Songs Only</SelectItem>
                  <SelectItem value="creator">Creators Only</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Trending Searches */}
            {!searchQuery && (
              <div className="mt-6">
                <div className="flex items-center space-x-2 mb-3">
                  <TrendingUp className="w-4 h-4 text-slate-500" />
                  <span className="text-sm font-medium text-slate-700">Trending Searches</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {trendingSearches.map((term) => (
                    <Badge
                      key={term}
                      variant="secondary"
                      className="cursor-pointer hover:bg-blue-100 hover:text-blue-700 transition-colors"
                      onClick={() => setSearchQuery(term)}
                    >
                      {term}
                    </Badge>
                  ))}
                </div>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Results Section */}
        <div className="space-y-6">
          {searchQuery && (
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-slate-900">Search Results for "{searchQuery}"</h2>
              <span className="text-slate-600">{filteredResults.length} results found</span>
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredResults.map((result) => (
              <Card
                key={`${result.type}-${result.id}`}
                className="group hover:shadow-lg transition-all duration-300 cursor-pointer border-slate-200 hover:border-blue-300"
                onClick={() =>
                  result.type === "song" ? handleSongDetailClick(result.id) : handleCreatorClick(result.id)
                }
              >
                <CardContent className="p-6">
                  {result.type === "song" ? (
                    <div className="space-y-4">
                      <div className="relative">
                        <Image
                          src={result.cover || "/placeholder.svg"}
                          alt={result.title || "Song cover"}
                          width={200}
                          height={200}
                          className="w-full aspect-square rounded-xl object-cover"
                        />
                        <div className="absolute inset-0 rounded-xl bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                        {/* Play Button */}
                        <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <Button
                            size="icon"
                            onClick={(e) => {
                              e.stopPropagation()
                              handleSongClick(result)
                            }}
                            className="w-10 h-10 rounded-full bg-white/90 text-slate-900 hover:bg-white shadow-lg"
                          >
                            <Play className="w-4 h-4" />
                          </Button>
                        </div>

                        {/* Buy Button */}
                        <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <Button
                            size="sm"
                            className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                            onClick={(e) => {
                              e.stopPropagation()
                              // Handle buy token logic
                            }}
                          >
                            Buy Token
                          </Button>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <h3 className="font-semibold text-slate-900 truncate">{result.title}</h3>
                        <p className="text-sm text-slate-600 truncate">{result.artist}</p>
                        <div className="flex items-center justify-between">
                          <Badge variant="secondary" className="bg-blue-100 text-blue-700">
                            {result.price}
                          </Badge>
                          <Button variant="ghost" size="icon" className="w-8 h-8 text-slate-400 hover:text-red-500">
                            <Heart className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      <div className="flex items-center space-x-4">
                        <div className="relative">
                          <Image
                            src={result.avatar || "/placeholder.svg"}
                            alt={result.name || "Creator avatar"}
                            width={64}
                            height={64}
                            className="w-16 h-16 rounded-full object-cover border-2 border-slate-200"
                          />
                          {result.verified && (
                            <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                              <Verified className="w-4 h-4 text-white fill-current" />
                            </div>
                          )}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center space-x-2">
                            <h3 className="font-semibold text-slate-900 truncate">{result.name}</h3>
                            {result.verified && (
                              <Badge variant="secondary" className="bg-blue-100 text-blue-700 text-xs">
                                Verified
                              </Badge>
                            )}
                          </div>
                          <p className="text-sm text-slate-600">{result.followers} followers</p>
                        </div>
                      </div>

                      <Separator />

                      <Button
                        size="sm"
                        className="w-full bg-slate-900 hover:bg-slate-800 text-white"
                        onClick={(e) => {
                          e.stopPropagation()
                          // Handle follow logic
                        }}
                      >
                        <User className="w-4 h-4 mr-2" />
                        Follow
                      </Button>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Empty State */}
          {searchQuery && filteredResults.length === 0 && (
            <div className="text-center py-12">
              <SearchIcon className="w-16 h-16 text-slate-300 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-slate-900 mb-2">No results found</h3>
              <p className="text-slate-600">Try adjusting your search terms or filters</p>
            </div>
          )}
        </div>
      </div>
      </div>
    </div>
  )
}
