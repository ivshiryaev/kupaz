'use client'

import { redirect } from 'next/navigation'
import React from 'react'
import { AiOutlineLoading3Quarters } from "react-icons/ai"

import { useShoppingCart } from '@/components/Context/ShoppingCartContext'

function ClearCartItems() {
	const { clearItems } = useShoppingCart()

	clearItems()
	localStorage.removeItem('cartItems')

	redirect('/')

	return (
		<>
			<div className='flex justify-center items-center min-h-screen'>
				<p className='flex justify-center items-center'><span className='animate-spin text-[1.25rem]'><AiOutlineLoading3Quarters/></span>Poczekaj sekundę</p>
			</div>
		</>
	)
}

export default ClearCartItems