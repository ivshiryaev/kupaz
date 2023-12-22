'use client'

import Image from 'next/image'
import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'

import { CiDeliveryTruck } from "react-icons/ci"

function Delivery({price}:{price: number}) {
	const formattedPrice = (price / 100).toFixed(2)
	return (
		<article className='
			relative 
			shadow-md 
			p-6 
			flex flex-col 
			bg-white rounded-2xl
		'>
			<div className='absolute inset-0 flex justify-center items-center w-full h-full'>
				<motion.span
					transition={{
						duration: 4,
						repeat: Infinity,
					}}
					animate={{
						x:[0,30,0,50,0]
					}}
					className='text-[3rem] opacity-25'
				>
					<CiDeliveryTruck/>
				</motion.span>
			</div>
			<div className='relative flex justify-between items-center overflow-hidden'>
				<div className='flex flex-col overflow-hidden text-[1.25rem]'>
					<AnimatePresence mode='popLayout'>
					{price > 0 ? 
						<motion.p
							key='dostawa'
							initial={{
								y: 50
							}}
							animate={{
								y: 0
							}}
							exit={{
								y: -50
							}}
						>
							Dostawa
						</motion.p> 
						: 
						<motion.p
							key='darmowa dostawa'
							initial={{
								y: 50
							}}
							animate={{
								y: 0
							}}
							exit={{
								y: -50
							}}
						>
							Darmowa dostawa
						</motion.p>
					}
					</AnimatePresence>
				</div>
			</div>
			{price ?
				<div className='relative flex justify-between items-center'>
					<p className='text-sm text-gray-400 whitespace-pre-wrap'>Darmowa dostawa przy<br/>zamówieniu od 150 zł</p>
					<p className='text-[1.25rem]'>{formattedPrice} zł</p>
				</div>
			: 
				<div>
					
				</div>
			}
		</article>
	)
}

export default Delivery