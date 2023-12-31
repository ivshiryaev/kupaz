'use client'

import React from 'react'

import Image from 'next/image'
import Link from 'next/link'

import { CiTrash } from "react-icons/ci"
import { GoPlus } from "react-icons/go";
import { AiOutlineMinus, AiOutlinePlus, AiOutlineInfo, AiOutlineLoading3Quarters } from "react-icons/ai"

import { useShoppingCart } from '@/components/Context/ShoppingCartContext'

import { getSmakById } from '@/lib/actions/smak.actions'
import { getSmakSlug } from '@/lib/utils'

function Item({id, quantity} : {id: number, quantity: number}) {
	const [data, setData] = React.useState(null)

	const { 
		increaseItemQuantity,
		decreaseItemQuantity,
		removeItem,
		toggleOpen
	} = useShoppingCart()

	React.useEffect(()=>{
		async function getData(){
			const response = await getSmakById({id})
			if(!response) return null

			const data = JSON.parse(response)
			setData(data)
		}

		getData()
	},[id])

	const slug = data ? getSmakSlug(data) : null

	let discountAmount = 0
	let finalPrice = data?.price || 0

	if(data?.discountPercentage){
		discountAmount = data?.price * data?.discountPercentage / 100
		finalPrice = data?.price - discountAmount
	}

	finalPrice = finalPrice.toFixed()

	const totalPrice = quantity * finalPrice
	const formattedPrice = (totalPrice / 100).toFixed(2)

	function handleLinkClick(){
		toggleOpen()
	}

	function handleClickPlus(){
		increaseItemQuantity(id)
	}

	function handleClickMinus(){
		decreaseItemQuantity(id)
	}

	function handleClickTrash(){
		removeItem(id)
	}

	if(!data) return (
		<div className='text-gray-400 relative shadow-md p-6 flex flex-col gap-2 bg-white rounded-2xl overflow-hidden'>
			<div className='relative flex gap-2 items-center'>
				<span className='animate-spin'><AiOutlineLoading3Quarters className='text-[1.25rem]'/></span>
				<p>Przygotowujemy nalewkę...</p>
			</div>
		</div>
	)

	return (
		<article className='relative shadow-md p-6 flex flex-col gap-2 bg-white rounded-2xl overflow-hidden'>
			<div className='absolute inset-0 h-full w-full flex justify-center items-center opacity-25'>
				<Image
					className='object-cover brightness-150 p-2'
					src={`/Images/ShoppingCart/Item${quantity > 5 ? 'Default' : quantity}.png`}
					fill
					alt='image'
				/>
			</div>
			<div className='relative flex justify-between items-center'>
				<div className='flex flex-col'>
					<Link onClick={handleLinkClick} href={`/smaki/${slug}`} className='text-[1.25rem] hover:underline'>{data?.title}</Link>
					<p className='text-sm'>Smak: {data?.smak}</p>
				</div>
				<button onClick={handleClickTrash} className='active:shadow-inner active:bg-gray-200 hover:bg-gray-100 hover:text-red-500 transition bg-white w-[2.5rem] h-[2.5rem] text-[1.5rem] flex justify-center items-center rounded-full'>
					<CiTrash/>
				</button>
			</div>
			<div className='relative flex justify-between items-center'>
				<div className='flex items-center gap-2'>
					<span onClick={handleClickMinus} className='hover:bg-gray-100 w-[2.25rem] h-[2.25rem] flex justify-center items-center bg-white rounded-full transition cursor-pointer active:shadow-inner active:bg-gray-200 transition'><AiOutlineMinus/></span>
					<p>{quantity} szt.</p>
					<span onClick={handleClickPlus} className='hover:bg-gray-100 w-[2.25rem] h-[2.25rem] flex justify-center items-center bg-white rounded-full transition cursor-pointer active:shadow-inner active:bg-gray-200 transition'><AiOutlinePlus/></span>
				</div>
				<p className='text-[1.25rem]'>{formattedPrice} zł</p>
			</div>
		</article>
	)
}

export default Item