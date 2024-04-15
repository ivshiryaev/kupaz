"use client"

import Link from 'next/link'
import Image from 'next/image'

import { motion } from 'framer-motion'
import { getSmakSlug } from '@/lib/utils'

export const Card = ({ smak } : { smak: any }) => {
    const { title } = smak
    const slug = getSmakSlug(smak)

    return(
        <motion.div
            whileHover={{
                scale: 1.05,
                rotate: '-30deg'
            }}
            whileTap={{
                scale: 0.95,
                rotate: '-20deg'
            }}
        >
            <Link
                className='
                    lg:w-[250px] lg:h-[300px]
                    bg-gray-50 shadow-lg 
                    flex justify-end items-end 
                    p-4 
                    relative 
                    rounded-2xl 
                    overflow-hidden
                    w-[150px] h-[180px]
                '
                href={`/smaki/${slug}`}
            >
                <Image
                    className='absolute'
                    alt={title}
                    src={`/Images/Smaki/${title}.jpg`}
                    fill
                    quality={100}
                />
                <p className='relative text-sm lg:text-md px-2 py-1 bg-white rounded-2xl'>{title}</p>
            </Link>
        </motion.div>
    )   
}