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

const colors = ['bg-teal-50', 'bg-fuchsia-50', 'bg-rose-50', 'bg-amber-50', 'bg-zinc-50', 'bg-cyan-50', 'bg-indigo-50', 'bg-red-50']

function getRandomColor(): string {
	const randomIndex: number = Math.floor(Math.random() * colors.length);
	return colors[randomIndex];
}

function ListOfComponents({items, smallText, limit} : {items: string[], smallText?: boolean, limit?: number}) {
	//Example: we have items.length == 5, limit == 3
	// Limited array will == 3 , and last element which says (2 more)

	//Items.length == 5 limit == 5
	// Limited array will == 5

	//Items. length = 2 limit ==3
	// Limited array == 2

	if(limit){
		const initialItems = items

		items = initialItems.slice(0, limit)

		if(initialItems.length > limit){
			const difference = initialItems.length - limit
			items.push(`${difference} więcej...`)
		}
	}

	

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