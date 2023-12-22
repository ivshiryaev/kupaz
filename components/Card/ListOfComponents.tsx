'use client'

import React from 'react'

import { motion } from 'framer-motion'

import Component from './Component'

const listVariants = {
	visible: { 
		opacity: 1,
		transition: {
			staggerChildren: 0.1
		}
	},
	hidden: { 
		opacity: 0
	},
}

const listItemVariants = {
	visible: {
		opacity: 1,
		y: 0
	},
	hidden: {
		opacity: 0,
		y: 20
	}
}

const colors = ['#FFF4BA','#CCF3FF','#FFEBCD','#C3FFC9','#F6F6F6']

function getRandomColor(): string {
	const randomIndex: number = Math.floor(Math.random() * colors.length);
	return colors[randomIndex];
}

function ListOfComponents({items, smallText} : {items: string[], smallText?: boolean}) {
	return (
		<motion.ul
			viewport={{ once: true }}
			className={`flex flex-wrap gap-1 w-full ${smallText && 'text-sm'}`}
			variants={listVariants}
			initial='hidden'
			whileInView='visible'
		>
			{items.map((item,idx) => (
				<motion.li key={idx} variants={listItemVariants}>
					<Component backgroundColor={getRandomColor()}>{item}</Component>
				</motion.li>
			))}
		</motion.ul>
	)
}

export default ListOfComponents