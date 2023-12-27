import React from 'react'

import Swiper from '@/components/Swiper'

import data from '@/data/AboutUs'

function About() {
	return (
		<section id='AboutUs' className='
			flex flex-col lg:flex-row gap-2 lg:gap-4
		'>
			<div className='
				lg:order-2 order-1 
				bg-white
				rounded-2xl 
				p-6 lg:p-8
				flex flex-1 flex-col
				justify-center
				gap-4
			'>
				<h2 className='text-[1.5rem]'>O nas</h2>
				<p className='whitespace-pre-wrap'>{data}</p>
			</div>
			<div className='
				lg:order-1 order-2 
				rounded-2xl
				relative
				overflow-hidden
				w-full lg:w-[350px]
				h-[500px]
			'>
				<Swiper/>
			</div>
		</section>
	)
}

export default About