"use client"

import { useRef } from 'react'
import { useScroll, motion, useSpring, useTransform } from "framer-motion"

import { GoGift } from "react-icons/go"
import { CiDeliveryTruck } from "react-icons/ci"

function Promotions() {
	const ref = useRef(null)
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['start end', 'start center']
    })

    const springScrollY = useSpring(scrollYProgress, { stiffness: 200, damping: 50})
    const translateXLeft = useTransform(springScrollY, [0, 1], ['-100%', '0%'])
    const translateXRight = useTransform(springScrollY, [0, 1], ['100%', '0%'])
	
	return (
		<section ref={ref} className='flex flex-col lg:flex-row lg:gap-4 gap-2 items-center overflow-hidden rounded-2xl'>
			<motion.div style={{ translateX: translateXLeft }} className='w-full bg-white rounded-2xl p-6 flex-1 flex flex-col items-center gap-2 text-center'>
				<GoGift className='text-[1.5rem]'/>
				<p>Za każde 5 zestawów dostajesz +1 za darmo</p>
			</motion.div>
			<motion.div style={{ translateX: translateXRight }} className='w-full bg-white rounded-2xl p-6 flex-1 flex flex-col items-center gap-2 text-center'>
				<CiDeliveryTruck className='text-[1.5rem]'/>
				<p>Darmowa dostawa przy zamówieniu od 170 zł</p>
			</motion.div>
		</section>
	)
}

export default Promotions