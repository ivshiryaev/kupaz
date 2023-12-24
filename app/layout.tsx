import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import '@/app/globals.css'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import MobileMenu from '@/components/MobileMenu'

import { ShoppingCartProvider } from '@/components/Context/ShoppingCartContext'
import ShoppingCart from '@/components/ShoppingCart'

const montserrat = Montserrat({ 
  weight: '400',
  subsets: ['latin'],
})

export const metadata: Metadata = {
    title: {
        default: 'Zestawy do tworzenia własnych nalewek domowych | Sklep internetowy | Kupaz.pl',
        template: '%s | Kupaz.pl'
    },
description: 'Poznaj wszystkie najlepsze polskie nalewki dostępne w naszym sklepie online.',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
            <html lang="en">
                <body className={`
                    ${montserrat.className}
                    overflow-x-hidden
                    text-dark
                    bg-gray-100
                    p-2 lg:py-4
                    flex flex-col 
                    gap-2 lg:gap-4
                `}>
                    <ShoppingCartProvider>
                        <Navbar/>
                        <MobileMenu/>
                        <ShoppingCart/>
                        {children}
                        <Footer/>
                    </ShoppingCartProvider>
                </body>
            </html>
    )
}
