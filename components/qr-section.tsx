'use client'

import { useState } from "react"
import { ChevronUp, QrCode } from 'lucide-react'
import Image from "next/image"

export default function QrSection() {
  const [isExpanded, setIsExpanded] = useState(true)

  return (
    <div>
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full flex items-center justify-between p-4 hover:bg-gray-50"
      >
        <div className="flex  mx-5 items-center gap-2">
          <QrCode className="w-5 h-5 text-[#4285f4]" />
          <span className="text-gray-700">Verifica código QR</span>
        </div>
        <ChevronUp className={`w-5 h-5 text-gray-400 transition-transform ${isExpanded ? '' : 'rotate-180'}`} />
      </button>
      {isExpanded && (
        <div className="px-4 pb-4">
          <Image
            src="/qr.png"
            alt="QR Code"
            width={200}
            height={200}
            className="w-4/5 my-5 h-auto mx-auto"
          />
        </div>
      )}
    </div>
  )
}

