'use client'

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { usePrivy } from "@privy-io/react-auth"

export default function UploadTrack() {
    const { user } = usePrivy()
    const [trackFile, setTrackFile] = useState<File | null>(null)
    const [coverImage, setCoverImage] = useState<File | null>(null)
    const [form, setForm] = useState({
        title: "",
        description: "",
        totalSupply: "",
        pricePerUnit: "",
        revenueShare: "",
    })

    const handleSubmit = async () => {
        const formData = new FormData()
        formData.append("title", form.title)
        formData.append("description", form.description)
        formData.append("totalSupply", form.totalSupply)
        formData.append("pricePerUnit", form.pricePerUnit)
        formData.append("revenueShare", form.revenueShare)
        formData.append("creatorAddress", user?.wallet?.address || "")
        if (trackFile) formData.append("trackFile", trackFile)
        if (coverImage) formData.append("coverImage", coverImage)

        await fetch("/api/tokenize", {
            method: "POST",
            body: formData,
        })
    }

    return (
        <div className="max-w-2xl mx-auto p-4 space-y-4">
            <Input placeholder="Track Title" onChange={e => setForm({ ...form, title: e.target.value })} />
            <Textarea placeholder="Description" onChange={e => setForm({ ...form, description: e.target.value })} />
            <Input placeholder="Total Supply" onChange={e => setForm({ ...form, totalSupply: e.target.value })} />
            <Input placeholder="Price per Unit (ETH)" onChange={e => setForm({ ...form, pricePerUnit: e.target.value })} />
            <Input placeholder="Revenue Share (%)" onChange={e => setForm({ ...form, revenueShare: e.target.value })} />
            <Input type="file" accept="audio/*" onChange={e => setTrackFile(e.target.files?.[0] || null)} />
            <Input type="file" accept="image/*" onChange={e => setCoverImage(e.target.files?.[0] || null)} />
            <Button onClick={handleSubmit}>Tokenize Track</Button>
        </div>
    )
}
