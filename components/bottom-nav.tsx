import { Home, Newspaper, Phone, User } from 'lucide-react'

export default function BottomNav() {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t grid grid-cols-4 py-2">
      <button className="flex flex-col items-center gap-1 text-gray-500">
        <Home className="w-5 h-5" />
        <span className="text-xs">Inicio</span>
      </button>
      <button className="flex flex-col items-center gap-1 text-gray-500">
        <Newspaper className="w-5 h-5" />
        <span className="text-xs">Novedades</span>
      </button>
      <button className="flex flex-col items-center gap-1 text-gray-500">
        <Phone className="w-5 h-5" />
        <span className="text-xs">Teléfonos</span>
      </button>
      <button className="flex flex-col items-center gap-1 text-[#4285f4]">
        <User className="w-5 h-5" />
        <span className="text-xs">Tina</span>
      </button>
    </div>
  )
}

