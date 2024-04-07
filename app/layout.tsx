import Script from 'next/script'

import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import '@/app/globals.css'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import MobileMenu from '@/components/MobileMenu'

import { ShoppingCartProvider } from '@/components/Context/ShoppingCartContext'
import ShoppingCart from '@/components/ShoppingCart'

//revalidate the layout every day
export const revalidate = 86400

const montserrat = Montserrat({ 
  weight: '400',
  subsets: ['latin'],
})

export const metadata: Metadata = {
    title: {
        default: 'Nalewki | Sklep internetowy, cena | Zrób nalewkę sam | Kupaz.pl',
        template: '%s | Kupaz.pl'
    },
    description: 'Nalewki na prezent, zestawy do nalewek, alkohol i nalewki online. Kupaz.pl to sklep internetowy z zestawami do tworzenia nalewek. Sprawdź naszą ofertę!',
    keywords: [
        'nalewki lecznicze',
        'nalewki na prezent',
        'zestaw na prezent',
        'nalewka',
    ],
    creator:'Ivan Shyriaiev',
    publisher:'Ivan Shyriaiev',
    robots: {
        index: true,
        googleBot: {
            index: true,
        },
    },
    category: 'food and drink',
    other: {
        secret: 'Czyżby to jakiś programista tu zagląda ? 🤔'
    },
    metadataBase: new URL('https://kupaz.pl'),
    alternates: {
        canonical: '/'
    },
    openGraph: {
        url: '/',
        siteName: 'Kupaz.pl',
        locale: 'pl_PL',
        type: 'website',
        images: [
            {
                url: '/Images/OG/PreviewImage.jpg',
                width: 1400,
                height: 630,
            }
        ]
    },
    verification: {
        google: 'lNOMm-mdDbNeLdbv7N9_FjUHjCjWPOIN2-cjDagjnlY',
        other: {
            'google-adsense-account': 'ca-pub-1839689042859328'
        },
    }
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
            <html lang="pl">
                <body className={`
                    ${montserrat.className}
                    overflow-x-hidden
                    text-dark
                    bg-gray-100
                    p-2
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
                <Script src='https://www.googletagmanager.com/gtag/js?id=G-SC9Y4YLDVG'/>
                <Script id='google-analytics'>
                  {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', 'G-SC9Y4YLDVG');
                  `}
                </Script>
            </html>
    )
}
