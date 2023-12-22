'use client'

import React from 'react'

import { motion, AnimatePresence } from 'framer-motion'

function RootTemplate({children} : {children: React.ReactNode}) {
	return (
		<AnimatePresence mode='wait'>
			<motion.main
				className='flex flex-col gap-2 lg:gap-4'
				transition={{
					duration: 0.5
				}}
				initial={{
					opacity: 0
				}}
				animate={{
					opacity: 1
				}}
				exit={{
					opacity: 0
				}}
			>
				{children}
			</motion.main>
		</AnimatePresence>
	)
}

export default RootTemplate