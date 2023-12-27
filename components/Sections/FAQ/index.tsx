import React from 'react'

import QuestionComponent from './QuestionComponent'

import data from '@/data/FAQ'

function FAQ({heading}:{heading?: string}) {
	const Tag = heading || 'p'

	return (
		<section className='
			rounded-2xl 
			bg-white 
			flex flex-col 
			lg:p-8 lg:gap-4
		'>
			<div className='p-6 lg:p-0 border-1 lg:border-0 border-b border-gray-200'>
				<Tag className='text-[1.5rem]'>Częste pytania (FAQ)</Tag>
			</div>
			<ul className='flex flex-col'>
				{data.map((item, idx) => (
					<li key={idx} className='border-b last:border-none'>
						<QuestionComponent question={item.question} answer={item.answer}/>
					</li>
				))}
			</ul>
		</section>
	)
}

export default FAQ