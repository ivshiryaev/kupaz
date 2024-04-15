"use client"

import { useEffect, useRef } from 'react';
import { useScroll, motion, useSpring, useTransform } from "framer-motion"
import { Card } from './Card'

const rows = 3
const itemsInRow = 4

const MovingCardsSection = ({ smaki } : { smaki: any[]}) => {
    const ref = useRef(null)
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['start end', 'end start']
    })

    const springScrollY = useSpring(scrollYProgress, { stiffness: 200, damping: 50})
    const scrollY = useTransform(springScrollY, [0, 1], [0, 200])

    return (
        <section 
            className='
                hidden lg:flex
                relative
                bg-white
                w-full aspect-video
                rounded-2xl
                items-end
                p-6
                overflow-hidden
                lg:items-center
                lg:pl-32
            '
            ref={ref}
        >
            {/* Parallax Wrapper */}
            <div 
                className='
                    lg:flex gap-8 absolute lg:-right-24 lg:top-1/2 lg:-translate-y-1/2
                    rotate-[20deg]
                    hidden
                '
            >
                {Array(rows).fill(0).map((item, index) => {
                    let evenScrollY = scrollY
                    const isEven = index % 2 === 0

                    if (isEven) {
                        // eslint-disable-next-line react-hooks/rules-of-hooks
                        evenScrollY = useTransform(scrollY, [0, 100], [0, -100])
                    }

                    return(
                        <motion.div style={{ translateY: isEven ? evenScrollY : scrollY }} key={index} className='relative flex flex-col gap-8 odd:mt-32'>
                            {smaki.slice(index * itemsInRow, index * itemsInRow + itemsInRow).map((item, index) => (
                                <Card key={index} smak={item}/>
                            ))}
                        </motion.div>
                    )
                })}
            </div>

            {/* Text */}
            <div className='relative flex flex-col lg:text-3xl text-md'>
                <p>Zamawiaj już teraz</p>
                <p>A my dostarczymy w 3 dni !</p>
            </div>
        </section>
    )
}

export default MovingCardsSection;