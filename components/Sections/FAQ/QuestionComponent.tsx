'use client'

import { IoIosArrowDown } from "react-icons/io"

import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'

function QuestionComponent({question, answer} : {question: string, answer: string}) {
	const [isOpen, setIsOpen] = React.useState(false)

	function toggle(e){
		setIsOpen(!isOpen)
	}

	return (
		<motion.div
			onClick={toggle} 
			className={`
				transition-all
				border-b
				last:border-none
				p-6 lg:px-0 lg:py-4
				overflow-hidden 
				cursor-pointer 
				flex flex-col
				${isOpen ? 'gap-2' : 'gap-0'}
			`}
		>
			<summary 
				onClick={(e) => e.preventDefault()} 
				className='flex gap-4 justify-between items-center'
			>
				<p className=''>{question}</p>
				<motion.span
					transition={{
						type:'spring'
					}}
					animate={{
						rotate: `${isOpen ? '180deg' : '0deg'}`
					}}
				>
					<IoIosArrowDown className='text-[1.5rem]'/>
				</motion.span>
			</summary>
			<motion.div
				animate={ isOpen ? 'visible' : 'hidden'}
				variants={
					{
						visible: {

							height: 'auto',
							opacity: 1
						},
						hidden: {
							height: 0,
							opacity: 0
						}
					}
				}	
			>
				<p className='whitespace-pre-wrap'>{answer}</p>
			</motion.div>
		</motion.div>
	)
}

export default QuestionComponent