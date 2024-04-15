import React from 'react'

import Button from '@/components/Button'
import Card from '@/components/Card'
import Link from 'next/link'

import Slide from '@/components/Animations/Slide'

async function Bestsellers({smaki} : {smaki: any[]}) {
	return (
		<section className='flex flex-col gap-2 lg:gap-4'>
			<Slide value={100} verticalDirection='up'>
				<p className='text-[1.5rem] rounded-2xl bg-white p-6 lg:p-8 text-center'>
					Bestsellery
				</p>
			</Slide>
			<ul className='
				grid 
				grid-flow-row 
				lg:grid-flow-row
				lg:grid-cols-2
				gap-2 lg:gap-4
			'>
				{smaki.map((item: any) => (
					<li key={item.id}>
						<Card id={item.id}/>
					</li>
				))}
			</ul>
			<div className='w-full flex justify-center'>
				<Link href='/smaki' className='w-full lg:w-fit'>
					<Button appearance='fill' className='w-full lg:w-fit'>Zobacz wszystkie smaki</Button>			
				</Link>
			</div>
		</section>
	)
}

export default Bestsellers