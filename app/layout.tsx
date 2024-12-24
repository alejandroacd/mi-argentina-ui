import '@/app/globals.css'
import { Roboto } from 'next/font/google'

const inter = Roboto({ weight: ['400', '700'], subsets: ['latin'] })

export const metadata = {
  title: 'DNI Digital',
  description: 'Digital National Identity Card',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className='custom'>{children}</body>
    </html>
  )
}

