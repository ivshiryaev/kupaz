import React from 'react'

import HowTo from '@/components/sections/HowTo'
import FAQ from '@/components/sections/FAQ'

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