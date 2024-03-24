import React from 'react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Jak zrobić nalewkę ? | Blog',
	description: 'Dowiedz się jak się robią prawdziwe Polskie nalewki. Sprawdź nasze przepisy na nalewki oraz porady jak zrobić nalewkę krok po kroku.',
	keywords: [
        'jak zrobić nalewkę',
        'przepisy na nalewki',
        'nalewki domowe'
    ],
	category: 'alcohol',
	alternates: {
		canonical: '/blog'
	},
	openGraph: {
		url: '/blog',
	}
}

function BlogLayout({ children } : { children: React.ReactNode }) {
	return (
		<div className='w-full flex justify-center'>
			<div className='max-w-[768px]'>{children}</div>
		</div>
	)
}

export default BlogLayout