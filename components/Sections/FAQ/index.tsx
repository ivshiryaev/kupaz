import React from 'react'

import QuestionComponent from './QuestionComponent'

import data from '@/data/FAQ'

function FAQ({heading}:{heading?: string}) {
	const Tag = heading || 'p'

	return (
		<section className='
			px-0 py-6 lg:py-8
			bg-white rounded-2xl
			flex flex-col 
			gap-2 lg:gap-4
		'>
			<div>
				<Tag className='text-[1.5rem] text-center'>Częste pytania (FAQ)</Tag>
			</div>
			<ul className='flex flex-col'>
				{data.map((item, idx) => (
					<li key={idx} className='border-b border-gray-100 last:border-none'>
						<QuestionComponent question={item.question} answer={item.answer}/>
					</li>
				))}
			</ul>
		</section>
	)
}

export default FAQ