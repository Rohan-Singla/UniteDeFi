"use client";

import { useState } from "react";
import Link from "next/link";
import {
    ArrowLeft,
    User,
    Wallet,
    Shield,
    Bell,
    Palette,
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const tabItems = [
    { id: "account", icon: <User className="w-4 h-4 mr-2" />, label: "Account" },
    { id: "theme", icon: <Palette className="w-4 h-4 mr-2" />, label: "Theme" },
    { id: "notifications", icon: <Bell className="w-4 h-4 mr-2" />, label: "Notifications" },
    { id: "web3", icon: <Wallet className="w-4 h-4 mr-2" />, label: "Web3" },
    { id: "privacy", icon: <Shield className="w-4 h-4 mr-2" />, label: "Privacy" },
];

export default function Settings() {
    const [activeTab, setActiveTab] = useState("account");
    const [walletConnected, setWalletConnected] = useState(false);

    return (
        <div className="min-h-screen serene-bg">
            <div className="container mx-auto px-6 py-8 max-w-4xl">
                {/* Header */}
                <div className="flex items-center justify-between mb-8">
                    <Link
                        href="/dashboard"
                        className="back-button flex items-center space-x-2 px-4 py-2 rounded-full"
                    >
                        <ArrowLeft className="w-5 h-5" />
                        <span>Back to Dashboard</span>
                    </Link>

                    <Button
                        onClick={() => setWalletConnected(!walletConnected)}
                        className={`glow-golden ${walletConnected ? "bg-emerald-600" : ""}`}
                    >
                        <Wallet className="w-5 h-5 mr-2" />
                        {walletConnected ? "0x742d...8a1b" : "Connect Wallet"}
                    </Button>
                </div>

                {/* Title */}
                <div className="text-center mb-8">
                    <h1 className="text-4xl font-bold text-foreground mb-4">Settings</h1>
                    <p className="text-lg text-muted-foreground">
                        Personalize your experience with calming, therapeutic settings
                    </p>
                </div>

                {/* Manual Tabs */}
                <div className="grid grid-cols-5 gap-2 glass-panel mb-6 rounded-xl p-2">
                    {tabItems.map(tab => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`flex items-center justify-center py-2 px-3 rounded-md transition-colors font-medium ${activeTab === tab.id
                                    ? "bg-yellow-500 text-white glow-golden"
                                    : "hover:bg-muted"
                                }`}
                        >
                            {tab.icon}
                            {tab.label}
                        </button>
                    ))}
                </div>

                {/* Tab Content */}
                {activeTab === "account" && (
                    <Card className="glass-panel p-6">
                        <h3 className="text-xl font-semibold mb-6 flex items-center">
                            <User className="w-5 h-5 mr-3" /> Account Information
                        </h3>
                        <div className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <Label htmlFor="display-name">Display Name</Label>
                                    <Input
                                        id="display-name"
                                        placeholder="Enter your display name"
                                        className="glow-golden focus:ring-2"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="email">Email Address</Label>
                                    <Input
                                        id="email"
                                        type="email"
                                        placeholder="your.email@example.com"
                                        className="glow-golden focus:ring-2"
                                    />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="bio">Bio</Label>
                                <textarea
                                    id="bio"
                                    className="w-full p-3 rounded-lg border border-border bg-background text-foreground min-h-[100px] glow-golden focus:ring-2"
                                    placeholder="Tell us about yourself..."
                                />
                            </div>
                            <Button className="glow-golden">Save Changes</Button>
                        </div>
                    </Card>
                )}

                {activeTab === "theme" && (
                    <Card className="glass-panel p-6">
                        <h3 className="text-xl font-semibold flex items-center">
                            <Palette className="w-5 h-5 mr-3" /> Theme Settings
                        </h3>
                        <p className="mt-4 text-muted-foreground">Coming soon...</p>
                    </Card>
                )}

                {activeTab === "notifications" && (
                    <Card className="glass-panel p-6">
                        <h3 className="text-xl font-semibold flex items-center">
                            <Bell className="w-5 h-5 mr-3" /> Notification Settings
                        </h3>
                        <p className="mt-4 text-muted-foreground">Coming soon...</p>
                    </Card>
                )}

                {activeTab === "web3" && (
                    <Card className="glass-panel p-6">
                        <h3 className="text-xl font-semibold flex items-center">
                            <Wallet className="w-5 h-5 mr-3" /> Web3 Settings
                        </h3>
                        <p className="mt-4 text-muted-foreground">Coming soon...</p>
                    </Card>
                )}

                {activeTab === "privacy" && (
                    <Card className="glass-panel p-6">
                        <h3 className="text-xl font-semibold flex items-center">
                            <Shield className="w-5 h-5 mr-3" /> Privacy Settings
                        </h3>
                        <p className="mt-4 text-muted-foreground">Coming soon...</p>
                    </Card>
                )}
            </div>
        </div>
    );
}
