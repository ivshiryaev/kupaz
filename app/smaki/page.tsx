import type { Metadata } from 'next'
import React from 'react'

import Filter from './Filter'
import Card from '@/components/Card'

export const dynamic = 'force-dynamic'

import { getSmaki, getSmakiBySmak } from '@/lib/actions/smak.actions'

export const metadata: Metadata = {
	title: {
		default: 'Najlepsze zestawy do tworzenia własnych nalewek domowych',
	},
	description: 'Wszystkie najlepsze polskie zestawy do tworzenia nalewek dostępne w naszym sklepie online.',
}

async function Oferta({ searchParams } : { searchParams: { [key: string]: string | string[] | undefined }}) {
	let response

	// If search params has some properties - search with filter
	if(Object.keys(searchParams).length){
		response = await getSmakiBySmak({smak: searchParams['smak']})
	} else {
		//If searchParams is empty object - search all the smaki
		response = await getSmaki()
	}

	if(!response) return null

	const data = JSON.parse(response)

	return (
		<>
			<p className='lg:hidden text-[1.5rem] rounded-2xl bg-white p-6 lg:p-8'>
				Oferta
			</p>
			<div className='flex justify-center'>
				<Filter/>
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

export default Oferta