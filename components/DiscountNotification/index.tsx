"use client"

import { useEffect, useState } from 'react'
import { getCookie } from '@/lib/utils'
import { motion } from 'framer-motion'

const DiscountNotification = () => {
    const [counter, setCounter] = useState(0)
    const [isVisible, setIsVisible] = useState(false)

    const minute = Math.floor(counter / 60) % 60
    const second = counter % 60
    
    useEffect(() => {  
        const firstTimeVisited = getCookie('firstTimeVisited')
        if(!firstTimeVisited) return

        // FirstTimeVisitedTimestampCookie will be received as a miliseconds date string
		// example: '1713127890078'

        const firstTimeVisitedTimestampCookie = getCookie('firstTimeVisitedTimestamp')
        const firstTimeVisitedTimestamp = new Date(parseInt(firstTimeVisitedTimestampCookie as string))
        const currentTime = Date.now()
        const timeDifference = currentTime - firstTimeVisitedTimestamp.getTime()
        const timeDifferenceInSeconds = Math.floor(timeDifference / 1000)

        // if the timeDifference is greater than 10 minutes, return
        if(timeDifferenceInSeconds > 600) return

        setCounter(timeDifferenceInSeconds)

        const interval = setInterval(() => {
            setCounter(prev => {
                if (prev <= 0) {
                    clearInterval(interval)
                    return prev
                }
                return prev - 1
            })
        }, 1000)

        console.log('after interval')
        
        setIsVisible(true)

        return () => clearInterval(interval)
    }, [])
    
    return (
        <div className='fixed lg:bottom-4 lg:left-4 lg:p-4 bg-white shadow-md rounded-2xl z-30 flex gap-4 items-center'>
            <span className='text-success font-semibold text-2xl'>{minute.toString().padStart(2, '0')}:{second}</span><span> -10% zniżki</span>
        </div>
    );
};

export default DiscountNotification;