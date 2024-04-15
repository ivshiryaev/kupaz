"use client"

import { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useSpring, useTransform, SpringOptions } from 'framer-motion';

const Page = () => {
    const ref = useRef(null)
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['start center', 'center center']
    })

    const springScrollY = useSpring(scrollYProgress, { stiffness: 200, damping: 50})
    const scrollY = useTransform(springScrollY, [0, 1], [0, 100])

    useEffect(() => {
        document.onscroll = () => {
            console.log(scrollY.get())
        };
    }, []);
    
    return (
        <>
            <div className='grid gap-4'>
                { Array(3).fill(0).map((i, idx) => 
                    <section
                        key={ idx }
                        {... (idx === 1 ? { ref: ref} : null )}
                        className='bg-white rounded-2xl h-screen flex justify-center items-center'>
                        <motion.div className='flex gap-4 relative'>
                            <motion.div className='relative' style={{ top: scrollY }}>scrollY</motion.div>
                            <motion.div className='relative' style={{ top: scrollY.get() }}>scrollY.get()</motion.div>
                            <motion.div className='relative' style={{ top: scrollY.get() * 10 }}>scrollY.get() * 10</motion.div>
                        </motion.div>
                    </section>
                )}
            </div>
        </>
    );
};

export default Page;