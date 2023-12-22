'use client'

import React from 'react'

import { test } from '@/lib/actions/smak.actions'

function Test() {
	const [data, setData] = React.useState()

	async function handleClick(){
		const data = await test()
		console.log(data)
		setData(data)
	}
	return (
		<div>
			<button onClick={handleClick}>Click</button>
			<p>{data}</p>
		</div>
	)
}

export default Test