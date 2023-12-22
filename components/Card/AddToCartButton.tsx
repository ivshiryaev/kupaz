'use client'

import React from 'react'
import Button from '@/components/Button'
import { MdAddShoppingCart, MdDone } from "react-icons/md"
import { motion, AnimatePresence } from 'framer-motion'

import { useShoppingCart } from '@/components/Context/ShoppingCartContext'

const timeout = 3000

function AddToCartButton({className, id} : {className?: string, id: number}) {
	const [ isClicked, setIsClicked ] = React.useState(false)
	const { increaseItemQuantity } = useShoppingCart()

	function handleClick(){
		setIsClicked(true)
		increaseItemQuantity(id)

		setTimeout(() => {
			setIsClicked(false)
		},timeout)
	}

	return (
		<button
			onClick={handleClick}
			className={`
				${isClicked ? 'bg-green-400 text-white' : 'bg-white'}
				relative
				flex
				justify-center items-center
				w-[3rem] h-[3rem]
				text-[1.5rem]
				rounded-full
				transition
				duration-300
				hover:duration-150
				cursor-pointer
				hover:shadow-lg
				active:shadow-inner
				active:bg-gray-100
			`}
		>
			{isClicked ?  <MdDone/> : <MdAddShoppingCart/>}
			<AnimatePresence>
				{isClicked &&
					<motion.div 
						className='z-10 absolute text-sm flex justify-center items-center bg-dark rounded-2xl right-14 py-2 px-4'
						initial={{
							opacity: 0,
							y: 50
						}}
						animate={{
							opacity: 1,
							y: 0
						}}
						exit={{
							opacity: 0,
							y: -50
						}}
					>
						<p className='whitespace-nowrap'>Dodano do koszyka</p>
					</motion.div>
				}
			</AnimatePresence>
		</button>
	)
}

export default AddToCartButton