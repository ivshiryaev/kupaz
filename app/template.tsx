'use client'

import { useEffect } from 'react'

import { motion, AnimatePresence } from 'framer-motion'

import { getCookie, setCookie, deleteCookie } from '@/lib/utils';

function RootTemplate({children} : {children: React.ReactNode}) {

	useEffect(() => {
		const firstTimeVisited = getCookie('firstTimeVisited')
		const firstTimeVisitedTimestamp = getCookie('firstTimeVisitedTimestamp')
		
		if(!firstTimeVisited){
			setCookie('firstTimeVisited', 'true', 365)
		}

		if(!firstTimeVisitedTimestamp){
			// FirstTimeVisitedTimestamp will be saved as a miliseconds date string
			// example: "1713127890078"

			setCookie('firstTimeVisitedTimestamp', Date.now().toString(), 365)
		}
	}, [])
	
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