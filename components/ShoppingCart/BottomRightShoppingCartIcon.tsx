'use client'

import { motion, AnimatePresence } from 'framer-motion'
import React from 'react'

const distanceInPixels = 100

import { MdOutlineShoppingCart } from "react-icons/md"
import { useShoppingCart } from '@/components/Context/ShoppingCartContext'

function BottomRightShoppingCartIcon({children} : {children: React.ReactNode}) {
	const [scrollY, setScrollY] = React.useState(0)
	const [isVisible, setIsVisible] = React.useState(false)

	const {
		toggleOpen,
		totalItemsCount
	} = useShoppingCart()

	React.useEffect(()=>{
		function onScroll(){
			const newScrollY = window.scrollY
			setScrollY(newScrollY)
			setIsVisible(newScrollY > distanceInPixels)
		}

		window.addEventListener('scroll', onScroll)

		return () => {
			window.removeEventListener('scroll', onScroll)
		}
	}, [])

	return(
		<>
		<AnimatePresence>
			{isVisible && totalItemsCount ?
			<motion.button
				initial={{
					opacity: 0,
					y: 100
				}}
				animate={{
					opacity: 1,
					y: 0
				}}
				exit={{
					opacity: 0,
					y: 100
				}}
				onClick={toggleOpen} 
				className={`
					hidden lg:flex
					z-20 
					shadow-md 
					fixed 
					right-4 bottom-4 
					bg-white 
					w-[3.5rem] h-[3.5rem] 
					text-[1.5rem] 
					justify-center items-center 
					rounded-full
				`}
			>
				<MdOutlineShoppingCart/>
				{ totalItemsCount ?
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
				: null }
			</motion.button>
			:
			null
			}
		</AnimatePresence>
		{ totalItemsCount ? 
			<button 
				onClick={toggleOpen} 
				className='
					lg:hidden
					z-20 
					shadow-md 
					fixed 
					right-4 bottom-4 
					bg-white 
					w-[3.5rem] h-[3.5rem] 
					text-[1.5rem] 
					flex justify-center items-center 
					rounded-full'
			>
				<MdOutlineShoppingCart/>
				{ totalItemsCount ?
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
				: null }
			</button>
			:
			null
		}
		</>
	)
}

export default BottomRightShoppingCartIcon