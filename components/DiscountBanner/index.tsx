"use client"

import { useState, useEffect } from 'react';

import { motion, AnimatePresence } from 'framer-motion';

import { getCookie, timeDifferenceInMsByCookie } from '@/lib/utils';
import tailwindConfig from '@/tailwind.config';

const DiscountBanner = () => {
    const [counter, setCounter] = useState(0)
    const [isBannerVisible, setIsBannerVisible] = useState(false)

    const minute = Math.floor(counter / 60) % 60
    const second = counter % 60

    const padStartedMinute = minute.toString().padStart(2, '0')
    const padStartedSecond = second.toString().padStart(2, '0')

    function handleToggleVisibility(){
        setIsBannerVisible(prev => !prev)
    }
    
    useEffect(() => {
        const firstTimeVisited = getCookie('firstTimeVisited')
        const firstTimeVisitedTimestamp = getCookie('firstTimeVisitedTimestamp')

        if(!firstTimeVisited || !firstTimeVisitedTimestamp){
            console.error(`Can't handle discount notification/popup logic, one ore both of these cookies aren't found ${firstTimeVisited}, ${firstTimeVisitedTimestamp}`)
        }

        console.log(firstTimeVisited)
        console.log(firstTimeVisitedTimestamp)

        const currentTime = Date.now()
        const timeDifferenceInMs = currentTime - parseInt(firstTimeVisitedTimestamp as string)
        const timeDifferenceInSeconds = Math.floor((timeDifferenceInMs as number) / 1000)

        console.log(timeDifferenceInMs)
        console.log(timeDifferenceInSeconds)

        // if the timeDifference is greater than 10 minutes, return
        if(timeDifferenceInSeconds > 600){
            console.log('Time difference is greater than 10 minutes')
            setCounter(0)
            return
        }

        const tenMinutesInSeconds = 600

        setCounter(tenMinutesInSeconds - timeDifferenceInSeconds)

        const interval = setInterval(() => {
            setCounter(prev => {
                if (prev <= 0) {
                    clearInterval(interval)
                    return prev
                }
                return prev - 1
            })
        }, 1000)
        
        setIsBannerVisible(true)

        return () => clearInterval(interval)
    }, [])

    return (
        <AnimatePresence mode="sync">
            { !isBannerVisible && counter > 0 ?
                <motion.div
                    className='relative'
                    key="notification"
                    initial={{
                        opacity: 0
                    }}
                    animate={{
                        opacity: 1
                    }}
                    exit={{
                        opacity: 0
                    }}
                >
                    <DiscountNotification onClick={handleToggleVisibility} minute={padStartedMinute} second={padStartedSecond}/>
                </motion.div>
            : counter > 0 ?
                <motion.div
                    key="banner"
                    initial={{
                        opacity: 0
                    }}
                    animate={{
                        opacity: 1
                    }}
                    exit={{
                        opacity: 0
                    }}
                    className='
                        fixed inset-0 w-full h-full flex justify-center items-center bg-dark/25 backdrop-blur-sm z-30 backdrop-grayscale
                        p-2
                        lg:p-0
                    '
                    onClick={handleToggleVisibility}
                >
                    <motion.div
                        key="wrapper"
                        initial={{
                            translateY: 100
                        }}
                        animate={{
                            translateY: 0
                        }}
                        exit={{
                            translateY: -100
                        }}
                        className='
                            rounded-2xl flex flex-col gap-4 text-center bg-white relative 
                            px-4 py-8
                            lg:px-8 lg:py-12
                        '
                        onClick={(e) => e.stopPropagation()}
                    >
                        <p className='text-2xl'>Dostałeś zniżkę !</p>
                        <p className='text-6xl font-semibold text-success'>-10%</p>
                        <p>Zniżka jest ważna przez pierwsze 10 minut</p>
                        <p>Obowiązuje na wszystkie produkty, nie dotyczy dostawy</p>
                        <p className='text-3xl font-semibold'>{padStartedMinute}:{padStartedSecond}</p>
                        <div>
                            <motion.button
                                whileHover={{
                                    scale: 1.05,
                                    backgroundColor: tailwindConfig.theme.extend.colors.success,
                                }}
                                onClick={handleToggleVisibility} 
                                className='
                                    overflow-hidden
                                    relative
                                    bg-dark text-white 
                                    px-4 py-2
                                    text-2xl
                                    rounded-2xl
                                    w-fit
                                '
                            >
                                Ok 👌
                            </motion.button>
                        </div>
                        <p className='text-sm text-gray-500 bottom-4'>Obowiązuje tylko dla nowych odwiedzających naszego sklepu</p>
                    </motion.div>
                </motion.div>
            : null }
        </AnimatePresence>
    );
};

function DiscountNotification({ minute, second, onClick } : { minute: string, second: string, onClick?: () => void}){    
    return (
        <div 
            onClick={onClick} 
            className='
                fixed
                bottom-4 left-4
                p-2
                cursor-pointer 
                bg-white shadow-md 
                rounded-2xl 
                z-30 
                flex gap-4 items-center justify-center
                leading-none
                lg:bottom-4 lg:left-4 
                lg:p-4 
            '
        >
            <span className='text-success font-semibold text-2xl'>{minute}:{second}</span><span> -10% zniżki</span>
        </div>
    )
}

export default DiscountBanner;