'use client'

import { useRouter } from 'next/navigation'
import React from 'react'

import data from '@/data/constants'

function Filter() {
	const router = useRouter();

	const handleFilterChange = (event) => {
		const selectedFilter = event.target.value;

		if(selectedFilter === 'Wszystkie'){
			router.push(`/Oferta`)
			return
		}

		// Update the URL with the selected filter
		router.push(`/Oferta?smak=${encodeURIComponent(selectedFilter)}`);
	};

	return (
		<div className='flex items-center gap-4 px-6 lg:px-4 py-2 rounded-2xl bg-white w-fit'>
			<label htmlFor="smak">Smak:</label>
			<select name="smak" id="smak" className='p-2 rounded-lg' onChange={handleFilterChange}>
				{data.smaki.map(item => (
					<option key={item} value={item}>{item}</option>	
				))}
			</select>
		</div>
	)
}

export default Filter