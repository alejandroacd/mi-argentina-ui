'use client'

import { useEffect, useState } from "react"

export default function LastUpdate() {
  const [dateTime, setDateTime] = useState("")

  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date()
      const formattedDate = now.toLocaleDateString('es-AR', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric'
      })
      const formattedTime = now.toLocaleTimeString('es-AR', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
      })
      setDateTime(`${formattedDate} ${formattedTime} hs`)
    }

    updateDateTime()
    const interval = setInterval(updateDateTime, 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="text-center my-5 text-gray-500 text-sm py-2">
      Última actualización: {dateTime}
    </div>
  )
}

