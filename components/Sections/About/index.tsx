import React from 'react'

import data from '@/data/AboutUs'

function About() {
	return (
		<section id='AboutUs' className='
			flex flex-col gap-2 lg:gap-4
			text-center
		'>
			<div className='p-6 lg:p-8 flex justify-center items-center bg-white rounded-2xl'>
				<h2 className='text-[1.5rem]'>O nas</h2>
			</div>
			<div className='p-6 lg:p-8 lg:py-16 flex justify-center items-center bg-white rounded-2xl'>
				<p className='whitespace-pre-wrap'>{data}</p>
			</div>
		</section>
	)
}

export default About