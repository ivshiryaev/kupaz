"use client"

import { useRef } from 'react'
import { MotionValue, motion, useScroll, useSpring, useTransform } from 'framer-motion'

export default function Words({ text } : { text: string }){
    const ref = useRef(null)
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['start 0.9', 'start 0.25']
    })

    const data = text.split(" ")
    
    return (
        <p ref={ref} className='flex flex-wrap gap-1 max-w-[768px] leading-none'>
            {data.map((word, idx) => {
                const start = idx / data.length
                const end = start + (1 / data.length)
                return <Word key={idx} range={[start, end]} progress={scrollYProgress}>{word}</Word>
            })}
        </p>
    )
}

function Word({ children, range, progress } : { children: string, range: number[], progress: MotionValue }){
    const opacity = useTransform(progress, range, [0.3, 1])

    return (
        <motion.span 
            className='
                text-2xl
            '
            style={{ opacity: opacity }}
        >
            {children}
        </motion.span>
    )
}