'use client'

import React from 'react'

import { motion, AnimatePresence } from 'framer-motion'

function Test({children} : {children: React.ReactNode}) {
	return (
		<AnimatePresence>
			<motion.div
				transition={{
					duration: 3
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
			</motion.div>
		</AnimatePresence>
	)
}

export default Test