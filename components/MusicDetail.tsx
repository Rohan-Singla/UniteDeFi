'use client';

import { useState, useEffect } from 'react';
import { useRouter, useParams } from 'next/navigation';
import Image from 'next/image';
import {
  ArrowLeft,
  Heart,
  Share2,
  ExternalLink,
} from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

// Example: use public folder OR use `import` if configured
const heroAlbum = '/assets/hero-album.jpg';

const MusicDetail = () => {
  const router = useRouter();
  const params = useParams();
  const id = params?.id as string;

  const [isLiked, setIsLiked] = useState(false);
  const [showBuyModal, setShowBuyModal] = useState(false);

  const songData = {
    id: id || '1',
    title: 'Liquid Dreams',
    artist: 'Aurora Synth',
    album: 'Golden Waves',
    cover: heroAlbum,
    verified: true,
    stats: {
      tokenPrice: '0.05 SUI',
      vaultYield: '12.5%',
      holders: '1,247',
      creatorRevenue: '8.3 SUI',
    },
  };

  const handleBuyToken = () => setShowBuyModal(true);

  return (
      <div className="min-h-screen watercolor-bg relative overflow-hidden">
        {/* Background Glow */}
        <div className="fixed inset-0 opacity-20">
          <div className="absolute top-40 left-40 w-96 h-96 bg-gradient-radial from-yellow-400/30 to-transparent rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-radial from-blue-400/20 to-transparent rounded-full blur-3xl animate-pulse delay-1000" />
        </div>

        <div className="relative z-10 min-h-screen p-6">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <Button
                variant="ghost"
                onClick={() => router.push('/dashboard')}
                className="flex items-center space-x-2 text-gray-600 hover:text-yellow-500 hover:bg-yellow-500/10 rounded-xl p-3 liquid-glow"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Back to Dashboard</span>
            </Button>

            <div className="flex items-center space-x-3">
              <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsLiked(!isLiked)}
                  className={`w-12 h-12 rounded-xl transition-all duration-300 ${
                      isLiked
                          ? 'text-red-500 bg-red-500/10 glow-golden'
                          : 'text-gray-600 hover:text-red-500 hover:bg-red-500/10'
                  } liquid-glow float`}
              >
                <Heart className={`w-6 h-6 ${isLiked ? 'fill-current' : ''}`} />
              </Button>

              <Button
                  variant="ghost"
                  size="icon"
                  className="w-12 h-12 rounded-xl text-gray-600 hover:text-yellow-500 hover:bg-yellow-500/10 liquid-glow float"
              >
                <Share2 className="w-6 h-6" />
              </Button>
            </div>
          </div>

          {/* Main Content */}
          <div className="max-w-4xl mx-auto">
            <Card className="glass-panel rounded-3xl p-8 mb-8 glow-golden float">
              <div className="flex flex-col lg:flex-row items-center lg:items-start space-y-8 lg:space-y-0 lg:space-x-12">
                <div className="relative w-80 h-80 rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                      src={songData.cover}
                      alt={songData.title}
                      fill
                      className="object-cover"
                  />
                </div>

                <div className="flex-1 space-y-6 text-center lg:text-left">
                  <div className="space-y-3">
                    <h1 className="text-4xl font-bold text-gray-800">{songData.title}</h1>
                    <div className="flex items-center justify-center lg:justify-start space-x-3">
                      <p className="text-xl text-gray-600">{songData.artist}</p>
                      {songData.verified && (
                          <Badge className="bg-blue-500/20 text-blue-700 border-blue-300">
                            Verified Creator
                          </Badge>
                      )}
                    </div>
                  </div>

                  <div className="flex items-center justify-center lg:justify-start space-x-4">
                    <Button
                        variant="outline"
                        className="flex items-center space-x-2 border-gray-300 hover:border-yellow-500 hover:text-yellow-500 liquid-glow"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>View on Sui</span>
                    </Button>
                  </div>

                  <Button
                      size="lg"
                      onClick={handleBuyToken}
                      className="w-full lg:w-auto px-12 py-4 text-lg bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-white shadow-xl glow-golden liquid-glow"
                  >
                    ✨ Buy Token
                  </Button>
                </div>
              </div>
            </Card>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {Object.entries(songData.stats).map(([key, value], i) => (
                  <Card
                      key={key}
                      className="glass-panel rounded-2xl p-6 text-center float"
                      style={{ animationDelay: `${i * 0.1}s` }}
                  >
                    <h3 className="text-sm font-medium text-gray-600 mb-2">
                      {key.replace(/([A-Z])/g, ' $1').replace(/^./, s => s.toUpperCase())}
                    </h3>
                    <p className="text-2xl font-bold text-yellow-600">{value}</p>
                  </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Modal */}
        {showBuyModal && (
            <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
              <Card className="glass-panel rounded-3xl p-8 max-w-md w-full glow-golden slide-in-right">
                <div className="text-center space-y-6">
                  <h3 className="text-2xl font-bold text-gray-800">Buy Music Token</h3>

                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Token Price:</span>
                      <span className="font-semibold text-yellow-600">{songData.stats.tokenPrice}</span>
                    </div>

                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Quantity:</span>
                      <div className="flex items-center space-x-3">
                        <Button variant="outline" size="sm">-</Button>
                        <span className="w-8 text-center">1</span>
                        <Button variant="outline" size="sm">+</Button>
                      </div>
                    </div>

                    <div className="flex justify-between items-center text-lg font-semibold">
                      <span>Total:</span>
                      <span className="text-yellow-600">{songData.stats.tokenPrice}</span>
                    </div>
                  </div>

                  <div className="flex space-x-3">
                    <Button
                        variant="outline"
                        onClick={() => setShowBuyModal(false)}
                        className="flex-1"
                    >
                      Cancel
                    </Button>
                    <Button
                        onClick={() => {
                          setShowBuyModal(false);
                          // Add your purchase logic here
                        }}
                        className="flex-1 bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-white glow-golden"
                    >
                      Confirm Purchase
                    </Button>
                  </div>
                </div>
              </Card>
            </div>
        )}
      </div>
  );
};

export default MusicDetail;
