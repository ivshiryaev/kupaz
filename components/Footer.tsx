import React from 'react'

import links from '@/data/footerLinks'
import Link from 'next/link'

function Footer() {
	return (
		<footer className='p-6 lg:p-8 flex flex-col gap-4 bg-white rounded-2xl text-center text-gray-400'>
			<Link href={`mailto:kupazsklep@gmail.com`} className='text-sm'>kupazsklep@gmail.com</Link>
			<nav>
				<ul>
					{links.map(link => (
						<li key={link.href}><Link className='text-sm hover:text-dark' href={`/${link.href}`}>{link.title}</Link></li>
					))}
				</ul>
			</nav>
			<p className='text-[0.75rem]'>Kupaz. Wszystkie prawa zastrzeżone</p>
		</footer>
	)
}

export default Footer