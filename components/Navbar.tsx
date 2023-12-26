'use client'

import React from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import dynamic from 'next/dynamic'

import { GoHome } from "react-icons/go"
import { MdOutlineShoppingCart } from "react-icons/md"

import { useShoppingCart } from '@/components/Context/ShoppingCartContext'
import links from '@/data/navLinks'

function Navbar(){
	const pathname = usePathname()
	const { 
		toggleOpen: toggleShoppingCartOpen,
		totalItemsCount
	} = useShoppingCart()

	return(
		<div className='hidden lg:flex justify-between items-center px-4 py-2 rounded-2xl bg-white'>
			<Link
				href='/'
				className={`
					${pathname === '/' ? 'bg-gray-100 shadow-inner' : 'hover:shadow-md bg-white'}
					cursor-pointer 
					active:shadow-inner 
					active:bg-gray-100 
					transition 
					w-[3rem] h-[3rem] 
					flex justify-center items-center 
					rounded-full 
					text-[1.5rem]
				`}
			>
				<GoHome/>
			</Link>
			<ul className='flex gap-2 items-center'>
				{links.map(link => (
					<li key={link.title}>
						<Link 
							href={`/${link.href}`} 
							className={`
								${pathname === `/${link.href}` ? 'bg-gray-100 shadow-inner' : 'hover:shadow-md bg-white'}
								transition 
								px-4 py-2 
								rounded-2xl 
								active:bg-gray-100 
								active:shadow-inner
							`}
						>
							{link.title}
						</Link>
					</li>
				))}
			</ul>
			<button
				onClick={toggleShoppingCartOpen}
				className={`
					relative
					hover:shadow-md bg-white
					cursor-pointer 
					active:shadow-inner 
					active:bg-gray-100 
					transition 
					w-[3rem] h-[3rem] 
					flex justify-center items-center 
					rounded-full 
					text-[1.5rem]
				`}
			>
				<MdOutlineShoppingCart/>
				{totalItemsCount ? 
					<span className='
						absolute
						-right-1 -top-1
						text-sm
						bg-dark
						text-white
						shadow-sm
						rounded-full
						w-6 h-6
						flex justify-center items-center
					'>
						{totalItemsCount}
					</span>
					:
					null
				}
			</button>
		</div>
	)
}

export default dynamic(() => Promise.resolve(Navbar),{ssr: false})