'use client'

import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { MdOutlineMenu, MdClose } from "react-icons/md"
import { BsInstagram, BsFacebook } from 'react-icons/bs'
import { GoHome } from "react-icons/go"

import links from '@/data/navLinks'

function MobileMenu() {
	const pathname = usePathname()
	const [isOpen, setIsOpen] = React.useState(false)

	React.useEffect(()=>{
		if(isOpen){
			document.body.classList.add('overflow-hidden')
			document.body.classList.add('lg:overflow-auto')
		} else {
			document.body.classList.remove('overflow-hidden')
			document.body.classList.remove('lg:overflow-auto')
		}
	},[isOpen])

	function handleLinkClick(){
		setIsOpen(false)
	}

	return (
		<>
			<AnimatePresence>
				{isOpen && 
					<motion.aside
						initial={{
							y:'-100%'
						}}
						animate={{
							y:'0'
						}}
						exit={{
							y:'100%'
						}}
						className='
							fixed 
							lg:hidden 
							py-16 px-4
							w-full h-full 
							inset-0 z-10 
							bg-white 
							flex flex-col gap-4
							justify-center
						'
					>
						<ul className='flex flex-col gap-2'>
							<li key='Home'>
								<Link 
									onClick={handleLinkClick} 
									href='/' 
									className={`
										${pathname === '/' ? 'bg-gray-100 shadow-inner' : 'hover:shadow-md bg-white'}
										p-1
										flex gap-4 items-center 
										rounded-[2rem] 
									`}
								>
									<span className='w-[3rem] h-[3rem] bg-white rounded-full flex justify-center items-center'><GoHome/></span>
									<span>Strona główna</span>
								</Link>
							</li>
							{links.map(link => (
								<li key={link.title}>
									<Link
										onClick={handleLinkClick} 
										href={`/${link.href}`} 
										className={`
											${pathname === `/${link.href}` ? 'bg-gray-100 shadow-inner' : 'hover:shadow-md bg-white'}
											p-1
											flex gap-4 items-center 
											rounded-[2rem] 
										`}
									>
										<span className='w-[3rem] h-[3rem] bg-white rounded-full flex justify-center items-center'>{link.icon}</span>
										<span>{link.title}</span>
									</Link>
								</li>
							))}
						</ul>
						<div className='flex gap-4 justify-center'>
							<Link target='_blank' href='https://www.instagram.com/kupaz.pl/' className='hover:shadow-lg cursor-pointer active:shadow-inner active:bg-gray-100 transition w-[3rem] h-[3rem] bg-white flex justify-center items-center rounded-full text-[1.5rem]'>
								<BsInstagram/>
							</Link>
							<Link target='_blank' href='https://www.facebook.com/kupazpl/' className='hover:shadow-lg cursor-pointer active:shadow-inner active:bg-gray-100 transition w-[3rem] h-[3rem] bg-white flex justify-center items-center rounded-full text-[1.5rem]'>
								<BsFacebook/>
							</Link>
						</div>
						<ul className='flex flex-col text-sm'>
							<li key='PolitykaPrywatnosci' className='p-2 flex justify-center'>
								<Link onClick={handleLinkClick} href='/polityka-prywatnosci'>Polityka Prywatności(RODO)</Link>
							</li>
							<li key='RegulaminStrony' className='p-2 flex justify-center'>
								<Link onClick={handleLinkClick} href='/regulamin'>Regulamin Strony</Link>
							</li>
						</ul>
					</motion.aside>
				}
			</AnimatePresence>

			{/*Burger Icon*/}
			<button onClick={() => setIsOpen(!isOpen)} className='lg:hidden z-20 shadow-md fixed right-4 top-4 bg-white w-[3.5rem] h-[3.5rem] text-[1.5rem] flex justify-center items-center rounded-full'>
				{isOpen ? <MdClose/> : <MdOutlineMenu/>}
			</button>
		</>
	)
}

export default MobileMenu