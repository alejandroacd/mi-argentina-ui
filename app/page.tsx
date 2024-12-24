'use client'
import StatusBar from "@/components/status-bar"
import Header from "@/components/header"
import IdCard from "@/components/id-card"
import LastUpdate from "@/components/last-update"
import ActionButtons from "@/components/action-buttons"
import QrSection from "@/components/qr-section"
import BottomNav from "@/components/bottom-nav"
import { ImageProvider } from "./context/CardFlipContext"
export default function Home() {
  return (
    <ImageProvider>
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="p-3 border-blue-400">
        <IdCard />
        <LastUpdate />
        <ActionButtons />
        <QrSection />
      </main>
      <BottomNav />
    </div>
    </ImageProvider>
  )
}

