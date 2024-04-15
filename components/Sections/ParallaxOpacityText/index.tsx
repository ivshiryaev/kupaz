"use client"

import { useRef } from 'react'
import { motion, useScroll, useSpring, useTransform } from 'framer-motion'
import Words from './Words'
import Characters from './Characters'

const text = `Sprzedajemy zestawy do robienia własnych nalewek. Kupujesz u nas zestaw, zalewasz go alkoholem, czekasz 2 tygodnie i masz swoją własną nalewkę`

function ParallaxOpacityText(){
    
    return (
        <section className='bg-white rounded-2xl flex justify-center items-center px-6 py-8 lg:p-8 lg:py-24'>
            <Characters text={text}/>
        </section>
    )
}

export default ParallaxOpacityText;