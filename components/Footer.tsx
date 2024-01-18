import React from 'react'

import { BsInstagram, BsFacebook } from 'react-icons/bs'

import links from '@/data/footerLinks'
import Link from 'next/link'

import Slide from '@/components/Animations/Slide'

function Footer() {
	return (
		<Slide verticalDirection='up' value={50}>
			<footer className='p-6 lg:p-8 flex flex-col gap-4 bg-white rounded-2xl text-center text-gray-400'>
				<div className='flex gap-4 justify-center items-center'>
					<Link target='_blank' href='https://www.instagram.com/kupaz.pl/' className='hover:text-dark hover:shadow-lg cursor-pointer active:shadow-inner active:bg-gray-100 transition w-[3rem] h-[3rem] bg-white flex justify-center items-center rounded-full text-[1.5rem]'>
						<BsInstagram/>
					</Link>
					<Link target='_blank' href='https://www.facebook.com/kupazpl/' className='hover:text-dark hover:shadow-lg cursor-pointer active:shadow-inner active:bg-gray-100 transition w-[3rem] h-[3rem] bg-white flex justify-center items-center rounded-full text-[1.5rem]'>
						<BsFacebook/>
					</Link>
				</div>
				<Link href={`mailto:kupazsklep@gmail.com`} className='text-sm hover:text-dark'>kupazsklep@gmail.com</Link>
				<nav>
					<ul>
						{links.map(link => (
							<li key={link.href}><Link className='text-sm hover:text-dark' href={`/${link.href}`}>{link.title}</Link></li>
						))}
					</ul>
				</nav>
				<div className='flex flex-col'>
					<p className='text-[0.75rem]'>Kupaz. Wszystkie prawa zastrzeżone</p>
					<p className='text-[0.625rem]'>Website made by: <Link href='https://theshirya.xyz/' target='_blank'>theshirya</Link></p>
				</div>
			</footer>
		</Slide>
	)
}

export default Footer