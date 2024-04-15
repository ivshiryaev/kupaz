'use client'

import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'

/**
 * Slide component that animates the entrance and exit of its children.
 *
 * @param value - The distance of the slide animation.
 * @param verticalDirection - The vertical direction of the slide animation. Can be 'up', 'down', or undefined.
 * @param horizontalDirection - The horizontal direction of the slide animation. Can be 'left', 'right', or undefined.
 * @param children - The content to be animated.
 * @param className - The CSS class name for the slide component.
 * @returns The Slide component.
 */
function Slide({
	value = 50,
	verticalDirection,
	horizontalDirection,
	children, 
	className
} : {
	value?: number,
	verticalDirection?: string,
	horizontalDirection?: string,
	children?: React.ReactNode,
	className?: string
}) {
	return (
		<AnimatePresence>
			<motion.div
				className={className}
				initial={{
					y: verticalDirection === 'up' ? value : verticalDirection === 'down' ? -value : 0,
					x: horizontalDirection === 'left' ? value : horizontalDirection === 'right' ? -value : 0,
					opacity: 0
				}}
				whileInView={{
					y:0,
					x:0,
					opacity:1,
				}}
				viewport={{
					once: true 
				}}
				exit={{
					y:value
				}}
			>
				{children}
			</motion.div>
		</AnimatePresence>
	)
}

export default Slide