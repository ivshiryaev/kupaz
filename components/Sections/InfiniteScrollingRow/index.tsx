'use client'

import React from 'react'
import { motion } from 'framer-motion'

import { MdEco } from "react-icons/md"
import { FaRegSmileBeam } from "react-icons/fa"
import { GoGift } from "react-icons/go"

function index() {
	return (
		<section className='hidden lg:block overflow-hidden rounded-2xl'>
			<motion.div 
				className='flex w-max'
				initial={{
					x:0
				}}
				animate={{
					x:'-50%'
				}}
				transition={{
					ease:'linear',
					duration: 20,
					repeat: Infinity
				}}
			>
				<div className='shrink-0 mx-2 px-8 py-4 rounded-2xl bg-white flex gap-2 items-center'>
					<MdEco className='text-[1.25rem]'/>
					<p>Wyłącznie naturalne składniki</p>
				</div>
				<div className='shrink-0 mx-2 px-8 py-4 rounded-2xl bg-white flex gap-2 items-center'>
					<FaRegSmileBeam className='text-[1.25rem]'/>
					<p>Każdemu się spodoba</p>
				</div>
				<div className='shrink-0 mx-2 px-8 py-4 rounded-2xl bg-white flex gap-2 items-center'>
					<GoGift className='text-[1.25rem]'/>
					<p>Oryginalny prezent</p>
				</div>

				<div className='shrink-0 mx-2 px-8 py-4 rounded-2xl bg-white flex gap-2 items-center'>
					<MdEco className='text-[1.25rem]'/>
					<p>Wyłącznie naturalne składniki</p>
				</div>
				<div className='shrink-0 mx-2 px-8 py-4 rounded-2xl bg-white flex gap-2 items-center'>
					<FaRegSmileBeam className='text-[1.25rem]'/>
					<p>Każdemu się spodoba</p>
				</div>
				<div className='shrink-0 mx-2 px-8 py-4 rounded-2xl bg-white flex gap-2 items-center'>
					<GoGift className='text-[1.25rem]'/>
					<p>Oryginalny prezent</p>
				</div>

				<div className='shrink-0 mx-2 px-8 py-4 rounded-2xl bg-white flex gap-2 items-center'>
					<MdEco className='text-[1.25rem]'/>
					<p>Wyłącznie naturalne składniki</p>
				</div>
				<div className='shrink-0 mx-2 px-8 py-4 rounded-2xl bg-white flex gap-2 items-center'>
					<FaRegSmileBeam className='text-[1.25rem]'/>
					<p>Każdemu się spodoba</p>
				</div>
				<div className='shrink-0 mx-2 px-8 py-4 rounded-2xl bg-white flex gap-2 items-center'>
					<GoGift className='text-[1.25rem]'/>
					<p>Oryginalny prezent</p>
				</div>


				<div className='shrink-0 mx-2 px-8 py-4 rounded-2xl bg-white flex gap-2 items-center'>
					<MdEco className='text-[1.25rem]'/>
					<p>Wyłącznie naturalne składniki</p>
				</div>
				<div className='shrink-0 mx-2 px-8 py-4 rounded-2xl bg-white flex gap-2 items-center'>
					<FaRegSmileBeam className='text-[1.25rem]'/>
					<p>Każdemu się spodoba</p>
				</div>
				<div className='shrink-0 mx-2 px-8 py-4 rounded-2xl bg-white flex gap-2 items-center'>
					<GoGift className='text-[1.25rem]'/>
					<p>Oryginalny prezent</p>
				</div>
			</motion.div>
		</section>
	)
}

export default index