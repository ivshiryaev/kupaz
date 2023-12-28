'use client'

import React from 'react'
import { useSearchParams, usePathname, useRouter } from 'next/navigation'
import Link from 'next/link'

import data from '@/data/constants'

function Filter() {
	const router = useRouter()
	const pathname = usePathname()
	const searchParams = useSearchParams()!

	// Get a new searchParams string by merging the current
	// searchParams with a provided key/value pair
	const createQueryString = React.useCallback((name: string, value: string) => {
		const params = new URLSearchParams(searchParams)
		params.set(name, value)

		return params.toString()
	},[searchParams])

	function handleChange(e){
		if(e.target.value === 'Wszystkie'){
			router.push(pathname)
		} else {
			router.push(pathname + '?' + createQueryString('smak',e.target.value))
		}
	}

	return (
		<div className='flex items-center justify-center gap-4 px-6 lg:px-4 py-2 rounded-2xl bg-white lg:w-fit w-full'>
			<label htmlFor="smak">Smak:</label>
			<select defaultValue={searchParams.get('smak')} name="smak" id="smak" className='p-2 rounded-lg' onChange={handleChange}>
				{data.smaki.map(item => (
					<option key={item} value={item}>{item}</option>	
				))}
			</select>
		</div>
	)
}

export default Filter


