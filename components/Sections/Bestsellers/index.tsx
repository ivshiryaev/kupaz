import React from 'react'

import Button from '@/components/Button'
import Card from '@/components/Card'
import Link from 'next/link'

import { getSmaki } from '@/lib/actions/smak.actions'

async function Bestsellers() {
	const response = await getSmaki()
	if(!response) return null

	const data = JSON.parse(response)

	return (
		<section className='flex flex-col gap-2 lg:gap-4'>
			<ul className='
				grid 
				grid-flow-row 
				lg:grid-flow-row
				lg:grid-cols-2
				gap-2 lg:gap-4
			'>
				{data.slice(0,4).map(item => (
					<li key={item.id}>
						<Card id={item.id}/>
					</li>
				))}
			</ul>
			<div className='w-full flex justify-center'>
				<Link href='/Oferta'>
					<Button appearance='fill' className='w-fit'>Zobacz wszystkie smaki</Button>			
				</Link>
			</div>
		</section>
	)
}

export default Bestsellers