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
        <h2 ref={ref} className='flex flex-wrap gap-2 max-w-[768px] leading-none text-2xl items-center justify-center text-center'>
            {data.map((word, idx) => {
                const start = idx / data.length
                const end = start + (1 / data.length)
                return <Word key={idx} range={[start, end]} progress={scrollYProgress}>{word}</Word>
            })}
        </h2>
    )
}

function Word({ children, range, progress } : { children: string, range: number[], progress: MotionValue }){
    const characters = children.split("")
    const amount = range[1] - range[0]
    const step = amount / children.length
    
    return (
        <span>
            {characters.map((char, idx) => {
                const start = range[0] + (step * idx)
                const end = range[0] + (step * (idx + 1))
                return <Character key={idx} range={[start, end]} progress={progress}>{char}</Character>
            })}
        </span>
    )
}

function Character({ children, range, progress } : { children: string, range: number[], progress: MotionValue }){
    const opacity = useTransform(progress, range, [0.2, 1])

    return (
        <motion.span style={{ opacity: opacity }}>{children}</motion.span>
    )
}