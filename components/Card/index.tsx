import React from 'react'

import { MdAddShoppingCart } from "react-icons/md"

import ListOfComponents from './ListOfComponents'
import Link from 'next/link'
import Image from 'next/image'

import AddToCartButton from './AddToCartButton'

import { getSmakById } from '@/lib/actions/smak.actions'
import { getSmakSlug } from '@/lib/utils'

import Slide from '@/components/Animations/Slide'

async function Card({id} : {id: number}) {
	const response = await getSmakById({id})
	if(!response) return null

	const data = JSON.parse(response)

	const {
		title,
		smak,
		price,
		skladniki,
		discountPercentage,
		promotionText
	} = data

	const slug = getSmakSlug(data)

	let discountAmount = 0
	let finalPrice = price

	if(discountPercentage){
		discountAmount = price * discountPercentage / 100
		finalPrice = price - discountAmount
	}

	const initialFormattedPrice = (price / 100).toFixed(2)
	const formattedPrice = (finalPrice / 100).toFixed(2)

	return (
			<Slide verticalDirection='up' value={50}>
				<article className='relative'>
					<Link
						href={`/smaki/${slug}`}
						className='
							group
							flex items-center
							bg-white
							rounded-2xl overflow-hidden
							relative
							transition
							duration-300
							hover:duration-150
							hover:shadow-lg
							active:shadow-none
							group
						'
					>
						{/*Image*/}
						<div
							className='
								relative
								overflow-hidden
								w-[125px] lg:w-[250px]
								h-[150px] lg:h-[300px]
								shrink-0
							'
						>
							<Image
								className='object-cover'
								src={`/Images/Smaki/${title}.jpg`}
								alt={title}
								fill
							/>
						</div>
						{/*Main Content*/}
						<div className='flex flex-col gap-2 lg:gap-4 p-4'>
							{/*Heading*/}
							<div className='flex flex-col leading-4'>
								<p className='lg:text-[1.375rem] text-base'>{title}</p>
								<p className='text-gray-400 text-[0.75rem] lg:text-[0.875rem]'>Smak: {smak}</p>
							</div>
							{/*Price*/}
							<div className='flex flex items-center gap-2 leading-4'>
								<p className='lg:text-[1.375rem] text-base'>{formattedPrice} zł</p>
								{ discountPercentage && <span className='text-white text-sm line-through flex justify-center items-center bg-alert rounded-2xl px-2 py-1'>{initialFormattedPrice} zł</span>}
							</div>
							{/*Array of components*/}
							<div className='hidden lg:flex'>
								<ListOfComponents limit={3} items={skladniki} smallText/>
							</div>
						</div>
						{/*Discount*/}
						{discountPercentage &&
							<div
								className={`
									flex justify-center items-center
									absolute
									w-8 h-8
									right-6 bottom-6
									lg:right-auto lg:bottom-auto
									lg:left-6 lg:top-6
								`}
							>
								<span className='
									group-hover:scale-105
									whitespace-nowrap
									transition
									px-32 py-1
									text-white
									text-[0.75rem] lg:text-sm
									-rotate-45
									bg-alert
								'>
									Zniżka {discountPercentage}%
								</span>
							</div>
						}
						{/*Promotion text*/}
						{promotionText && !discountPercentage &&
							<div
								className={`
									flex justify-center items-center
									absolute
									w-8 h-8
									right-4 bottom-4
									lg:right-auto lg:bottom-auto
									lg:left-4 lg:top-4
								`}
							>
								<span className='
									group-hover:scale-105
									transition
									px-32 py-1
									text-white
									text-[0.75rem] lg:text-sm
									-rotate-45
									bg-success
								'>
									{promotionText}
								</span>
							</div>
						}
					</Link>
					{/*Add to cart Button*/}
					<div className='
						absolute
						right-4 bottom-4 
						hidden lg:block
					'>
						<AddToCartButton id={id}/>
					</div>
				</article>
			</Slide>
	)
}

export default Card