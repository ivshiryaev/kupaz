import React from 'react'

import Image from 'next/image'

function Loading() {
	return (
		<div className='animate-pulse min-h-screen w-full flex justify-center items-center'>
			<div className='
				p-8
				flex flex-col gap-4 
				justify-center items-center
				bg-white rounded-2xl
			'>
				<Image
					src='/Images/logo.svg'
					alt='logo'
					width={215}
					height={234}
				/>
				<p>Przygotowujemy nalewki...</p>
			</div>
		</div>
	)
}

export default Loading