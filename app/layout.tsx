import type { Metadata, Viewport } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
})

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-playfair',
})

export const metadata: Metadata = {
  title: "O'Rich Cakes & Pastries | Premium Bakery in Ilorin, Nigeria",
  description: "Sweet Moments, Baked Fresh. O'Rich Cakes & Pastries offers premium birthday cakes, wedding cakes, cupcakes, and Nigerian pastries in Ilorin, Kwara State. Order now for delivery!",
  keywords: 'cakes, bakery, Ilorin, wedding cakes, birthday cakes, cupcakes, pastries, meat pie, chin chin, small chops, Kwara State, Nigeria',
  authors: [{ name: "O'Rich Cakes & Pastries" }],
  openGraph: {
    title: "O'Rich Cakes & Pastries | Premium Bakery in Ilorin",
    description: "Sweet Moments, Baked Fresh. Premium cakes and pastries for all occasions.",
    type: 'website',
    locale: 'en_NG',
    images: [
      {
        url: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ee6ef5cbf05b16e404215abafd2eb24a-MC87YFGe1DTlgvxubMYkREAZgTWxKQ.jpg',
        width: 736,
        height: 1097,
        alt: "Slice of red velvet cake topped with fresh strawberries",
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "O'Rich Cakes & Pastries | Premium Bakery in Ilorin",
    description: "Sweet Moments, Baked Fresh. Premium cakes and pastries for all occasions.",
    images: ['https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ee6ef5cbf05b16e404215abafd2eb24a-MC87YFGe1DTlgvxubMYkREAZgTWxKQ.jpg'],
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  themeColor: '#D4A574',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} bg-background`}>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
