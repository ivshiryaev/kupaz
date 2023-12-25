import React from 'react'

import Image from 'next/image'

function Loading() {
	return (
		<div className='animate-pulse min-h-screen w-full p-8 flex flex-col gap-4 justify-center items-center'>
			<Image 
				src='/Images/logo.svg'
				alt='logo'
				width={215}
				height={234}
			/>
			<p>Przygotowujemy nalewki...</p>
		</div>
	)
}

export default Loading