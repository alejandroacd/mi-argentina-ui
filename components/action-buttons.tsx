import { Eye, X } from 'lucide-react'

export default function ActionButtons() {
  return (
    <div className="grid grid-cols-2 border-y">
      <button className="flex items-center justify-center gap-2 py-4 hover:bg-gray-50">
        <Eye className="w-5 h-5 text-[#4285f4]" />
        <span className="text-gray-700">Ver detalle</span>
      </button>
      <button className="flex items-center justify-center gap-2 py-4 hover:bg-gray-50 border-l">
        <X className="w-5 h-5 text-[#4285f4]" />
        <span className="text-gray-700">Desactivar DNI</span>
      </button>
    </div>
  )
}

