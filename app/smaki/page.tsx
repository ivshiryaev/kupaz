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
	alternates: {
		canonical: '/smaki'
	}
}

async function Oferta({ searchParams } : { searchParams: { [key: string]: string | string[] | undefined }}) {
	let response

	//If there is an 'smak' property in searchParams, return the list of smaki based on this smak
	if(searchParams?.smak){
		response = await getSmakiBySmak({smak: searchParams.smak})
	} else {
		response = await getSmaki()
	}

	if(!response) return null

	const data = JSON.parse(response)

	return (
		<>
			<h1 className='lg:hidden text-[1.5rem] rounded-2xl bg-white p-6 lg:p-8 text-center'>
				Smaki
			</h1>
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