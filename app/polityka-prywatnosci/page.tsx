import React from 'react'

import data from '@/data/polityka-prywatnosci'

function PolitykaPrywatnosci() {
	return (
		<section className='bg-white rounded-2xl p-6 lg:p-8 flex flex-col items-center gap-2 lg:gap-4'>
			<h1 className='text-[1.5rem] text-center'>{data.title}</h1>
			<ol className='flex flex-col'>
				{data.list.map((item,idx) => (
					<li key={idx} value={idx} className='flex flex-col gap-2 lg:gap-4 py-2 lg:py-4'>
						<p className='text-[1.25rem]'><span className='text-gray-400 select-none'>{idx+1}. </span>{item.title}</p>
						<p className='whitespace-pre-wrap'>{item.content}</p>
					</li>
				))}
			</ol>
		</section>
	)
}

export default PolitykaPrywatnosci