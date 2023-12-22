'use client'

import React from 'react'
import { motion } from 'framer-motion'

function Scale({children}: {children: React.ReactNode}) {
	return (
		<motion.div
			initial={{
				scale: 0
			}}
			whileInView={{
				scale: 1
			}}
			viewport={{
				once: true 
			}}
		>
			{children}
		</motion.div>
	)
}

export default Scale