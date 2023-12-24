import React from 'react'

import Button from '@/components/Button'
import Link from 'next/link'

function NotFound() {
	return (
		<div className='min-h-screen w-full p-8 gap-2 flex flex-col justify-center items-center'>
			<p>Oops, pomyłka</p>
			<p>Takiej strony nie istnieje</p>
			<Link href='/'>
				<Button appearance='fill'>Strona główna</Button>
			</Link>
		</div>
	)
}

export default NotFound