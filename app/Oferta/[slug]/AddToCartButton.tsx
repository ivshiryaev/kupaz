'use client'

import React from 'react'
import Button from '@/components/Button'
import { MdAddShoppingCart, MdDone } from "react-icons/md"
import { motion, AnimatePresence } from 'framer-motion'

import { useShoppingCart } from '@/components/Context/ShoppingCartContext'

const timeout = 3000

const clickedClassName = 'bg-green-400'

function AddToCartButton({className, id} : {className: string, id: number}) {
	const [ isClicked, setIsClicked ] = React.useState(false)
	const { increaseItemQuantity, isOpenedForTheFirstTime, toggleOpen } = useShoppingCart()

	function handleClick(){
		setIsClicked(true)
		increaseItemQuantity(id)

		if(!isOpenedForTheFirstTime){
			toggleOpen()
		}

		setTimeout(() => {
			setIsClicked(false)
		},timeout)
	}

	return (
		<Button
			onClick={handleClick}
			className={`
				${isClicked && clickedClassName}
				relative items-center justify-center
				${className}
			`}
			appearance='fill'
		>
			<span className='
				text-[1.25rem]
			'>
				{isClicked ? <MdDone/> : <MdAddShoppingCart/>}
			</span>
			<span>
				{isClicked ? 'W koszyku' : 'Dodaj do koszyka'}
			</span>
		</Button>
	)
}

export default AddToCartButton