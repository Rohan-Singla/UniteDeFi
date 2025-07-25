"use client";

import { useState } from "react";
import { ArrowLeft, Wallet } from "lucide-react";
import Link from "next/link";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MyTokensTab } from "@/components/vault/MyTokensTab";
import { RevenueVaultsTab } from "@/components/vault/RevenueVaultsTab";
import { ClaimableTab } from "@/components/vault/ClaimableTab";


export default function Vaults() {
    const [activeTab, setActiveTab] = useState("my-tokens");

    return (
        <div className="min-h-screen serene-bg">
            <div className="container mx-auto px-6 py-8">
                <div className="flex items-center justify-between mb-8">
                    <Link
                        href="/dashboard"
                        className="back-button flex items-center space-x-2 px-4 py-2 rounded-full"
                    >
                        <ArrowLeft className="w-5 h-5" />
                        <span>Back to Dashboard</span>
                    </Link>
                </div>

                <div className="text-center mb-8">
                    <h1 className="text-4xl font-bold text-foreground mb-4">Your Vaults</h1>
                    <p className="text-lg text-muted-foreground">
                        Monitor your investments and harvest your yields with serene ease
                    </p>
                </div>

                <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
                    <TabsList className="grid w-full grid-cols-3 glass-panel">
                        <TabsTrigger
                            value="my-tokens"
                            className="data-[state=active]:glow-golden transition-all duration-500"
                        >
                            My Tokens
                        </TabsTrigger>
                        <TabsTrigger
                            value="revenue-vaults"
                            className="data-[state=active]:glow-golden transition-all duration-500"
                        >
                            Revenue Vaults
                        </TabsTrigger>
                        <TabsTrigger
                            value="claimable"
                            className="data-[state=active]:glow-golden transition-all duration-500"
                        >
                            Claimable
                        </TabsTrigger>
                    </TabsList>

                    <TabsContent value="my-tokens" className="fade-in">
                        <MyTokensTab />
                    </TabsContent>
                    <TabsContent value="revenue-vaults" className="fade-in">
                        <RevenueVaultsTab />
                    </TabsContent>
                    <TabsContent value="claimable" className="fade-in">
                        <ClaimableTab />
                    </TabsContent>
                </Tabs>
            </div>
        </div>
    );
}
