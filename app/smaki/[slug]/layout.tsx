import React from 'react'

import HowTo from '@/components/Sections/HowTo'
import FAQ from '@/components/Sections/FAQ'

function SmakLayout({ children } : { children: React.ReactNode }) {
	return (
		<>
			{children}
			<HowTo/>
			<FAQ heading='p'/>
		</>
	)
}

export default SmakLayout