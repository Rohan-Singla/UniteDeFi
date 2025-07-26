"use client"

import { useState } from "react"
import { ArrowLeft, Wallet, TrendingUp, DollarSign, Coins, Clock } from "lucide-react"
import Link from "next/link"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { MyTokensTab } from "@/components/vault/MyTokensTab"
import { RevenueVaultsTab } from "@/components/vault/RevenueVaultsTab"
import { ClaimableTab } from "@/components/vault/ClaimableTab"
import Sidebar from "@/components/Sidebar"

export default function Vaults() {
    const [activeTab, setActiveTab] = useState("my-tokens")

    // Mock data for overview cards
    const vaultStats = {
        totalValue: "24.5 SUI",
        totalTokens: 47,
        pendingRewards: "2.3 SUI",
        activeVaults: 8,
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
            <div className="flex">
                <Sidebar />
                <div className="container mx-auto px-8 py-6">
                    {/* Header */}
                    <div className="flex items-center justify-between mb-8">
                        <Link
                            href="/dashboard"
                            className="flex items-center space-x-2 text-slate-600 hover:text-slate-900 transition-colors"
                        >
                            <ArrowLeft className="w-5 h-5" />
                            <span>Back to Dashboard</span>
                        </Link>

                        <Button className="bg-blue-600 hover:bg-blue-700">
                            <Wallet className="w-4 h-4 mr-2" />
                            Connect Wallet
                        </Button>
                    </div>

                    {/* Page Title */}
                    <div className="text-center mb-8">
                        <h1 className="text-4xl font-bold text-slate-900 mb-4">Your Vaults</h1>
                        <p className="text-xl text-slate-600">Monitor your investments and harvest your yields</p>
                    </div>

                    {/* Overview Stats */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                        <Card className="border-slate-200">
                            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                <CardTitle className="text-sm font-medium text-slate-600">Total Portfolio Value</CardTitle>
                                <TrendingUp className="h-4 w-4 text-green-600" />
                            </CardHeader>
                            <CardContent>
                                <div className="text-2xl font-bold text-slate-900">{vaultStats.totalValue}</div>
                                <p className="text-xs text-green-600">+12.5% from last month</p>
                            </CardContent>
                        </Card>

                        <Card className="border-slate-200">
                            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                <CardTitle className="text-sm font-medium text-slate-600">Total Tokens</CardTitle>
                                <Coins className="h-4 w-4 text-blue-600" />
                            </CardHeader>
                            <CardContent>
                                <div className="text-2xl font-bold text-slate-900">{vaultStats.totalTokens}</div>
                                <p className="text-xs text-slate-500">Across {vaultStats.activeVaults} vaults</p>
                            </CardContent>
                        </Card>

                        <Card className="border-slate-200">
                            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                <CardTitle className="text-sm font-medium text-slate-600">Pending Rewards</CardTitle>
                                <DollarSign className="h-4 w-4 text-yellow-600" />
                            </CardHeader>
                            <CardContent>
                                <div className="text-2xl font-bold text-slate-900">{vaultStats.pendingRewards}</div>
                                <p className="text-xs text-slate-500">Ready to claim</p>
                            </CardContent>
                        </Card>

                        <Card className="border-slate-200">
                            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                <CardTitle className="text-sm font-medium text-slate-600">Active Vaults</CardTitle>
                                <Clock className="h-4 w-4 text-purple-600" />
                            </CardHeader>
                            <CardContent>
                                <div className="text-2xl font-bold text-slate-900">{vaultStats.activeVaults}</div>
                                <p className="text-xs text-slate-500">Currently earning</p>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Tabs Section */}
                    <Card className="border-slate-200">
                        <CardContent className="p-6">
                            <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
                                <TabsList className="grid w-full grid-cols-3 bg-slate-100">
                                    <TabsTrigger
                                        value="my-tokens"
                                        className="data-[state=active]:bg-white data-[state=active]:text-blue-600 data-[state=active]:shadow-sm transition-all duration-200"
                                    >
                                        <Coins className="w-4 h-4 mr-2" />
                                        My Tokens
                                    </TabsTrigger>
                                    <TabsTrigger
                                        value="revenue-vaults"
                                        className="data-[state=active]:bg-white data-[state=active]:text-blue-600 data-[state=active]:shadow-sm transition-all duration-200"
                                    >
                                        <TrendingUp className="w-4 h-4 mr-2" />
                                        Revenue Vaults
                                    </TabsTrigger>
                                    <TabsTrigger
                                        value="claimable"
                                        className="data-[state=active]:bg-white data-[state=active]:text-blue-600 data-[state=active]:shadow-sm transition-all duration-200"
                                    >
                                        <DollarSign className="w-4 h-4 mr-2" />
                                        Claimable
                                        <Badge variant="secondary" className="ml-2 bg-yellow-100 text-yellow-700">
                                            3
                                        </Badge>
                                    </TabsTrigger>
                                </TabsList>

                                <TabsContent value="my-tokens" className="space-y-4">
                                    <div className="flex items-center justify-between">
                                        <h3 className="text-lg font-semibold text-slate-900">Your Music Tokens</h3>
                                        <Badge variant="outline" className="text-slate-600">
                                            {vaultStats.totalTokens} tokens
                                        </Badge>
                                    </div>
                                    <MyTokensTab />
                                </TabsContent>

                                <TabsContent value="revenue-vaults" className="space-y-4">
                                    <div className="flex items-center justify-between">
                                        <h3 className="text-lg font-semibold text-slate-900">Revenue Generating Vaults</h3>
                                        <Badge variant="outline" className="text-slate-600">
                                            {vaultStats.activeVaults} active
                                        </Badge>
                                    </div>
                                    <RevenueVaultsTab />
                                </TabsContent>

                                <TabsContent value="claimable" className="space-y-4">
                                    <div className="flex items-center justify-between">
                                        <h3 className="text-lg font-semibold text-slate-900">Claimable Rewards</h3>
                                        <div className="flex items-center space-x-2">
                                            <Badge variant="secondary" className="bg-green-100 text-green-700">
                                                {vaultStats.pendingRewards} available
                                            </Badge>
                                            <Button size="sm" className="bg-green-600 hover:bg-green-700">
                                                Claim All
                                            </Button>
                                        </div>
                                    </div>
                                    <ClaimableTab />
                                </TabsContent>
                            </Tabs>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    )
}
