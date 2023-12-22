import React from 'react'

import Step from './Step'

import data from '@/data/HowTo'

function HowTo() {
	return (
		<section className='
			rounded-2xl 
			bg-white 
			flex flex-col 
			lg:p-8 lg:gap-4
		'>
			<div className='p-6 lg:p-0 border-1 lg:border-0 border-b border-gray-200'>
				<p className='text-[1.5rem]'>Jak zrobić nalewkę ?</p>
			</div>
			<ul className='flex flex-col'>
				{data.map((item,idx) => (
					<li className='border-b last:border-none' key={item}>
						<Step data={item} idx={idx}/>
					</li>
				))}
			</ul>
		</section>
	)
}

export default HowTo