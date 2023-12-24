import React from 'react'

import Card from '@/components/Card'

import { getSimilarSmakiBySmak } from '@/lib/actions/smak.actions'

async function SimilarByTaste({smak, excludedId} : {smak: string, excludedId: number}) {
	const response = await getSimilarSmakiBySmak({smak, id: excludedId})
	const data = JSON.parse(response)
	if(!data || data.length < 1) return null

	return (
		<>
			<div className='
				p-4 lg:p-6
				flex flex-col 
				justify-center items-center
				lg:items-start 
				bg-white 
				rounded-2xl
			'>
				<p className='text-[1.25rem]'>Więcej o smaku: <span>{smak}</span></p>
			</div>
			<ul className='
				grid 
				grid-flow-row 
				lg:grid-flow-row
				lg:grid-cols-2
				gap-2 lg:gap-4
			'>
				{data.map(item => (
					<li key={item.id}>
						<Card id={item.id}/>
					</li>
				))}
			</ul>
		</>
	)
}

export default SimilarByTaste