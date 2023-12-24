import React from 'react'

import HowTo from '@/components/Sections/HowTo'
import FAQ from '@/components/Sections/FAQ'

export async function generateStaticParams(){
	return [
		{
			id: 1,
		},
		{
			id: 2,
		}
	]
}

function SmakLayout({ children } : { children: React.ReactNode }) {
	return (
		<>
			{children}
			<HowTo/>
			<FAQ/>
		</>
	)
}

export default SmakLayout