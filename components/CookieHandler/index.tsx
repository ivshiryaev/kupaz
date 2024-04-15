"use client"

import { getCookie, setCookie, deleteCookie } from '@/lib/utils';
import { useState, useEffect } from 'react'

function CookieHandler(){
    const [counter, setCounter] = useState(0)

    const minute = Math.floor(counter / 60) % 60
    const second = counter % 60

    useEffect(() => {
        setCounter(10)

        const interval = setInterval(() => {

            setCounter(prev => {
                if (prev <= 0) {
                    clearInterval(interval);
                    return prev;
                }
                return prev - 1;
            });
            
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    function resetCounter(){
        setCounter(0)
    }

    function handleCounter(){
        setCounter(100)

        const interval = setInterval(() => {
            setCounter(prev => prev - 1)
        }, 1000)
    }

    function getCookies(){
        const firstTimeVisited = getCookie('firstTimeVisited')
        const firstTimeVisitedTimestamp = getCookie('firstTimeVisitedTimestamp')

        console.log(`firstTimeVisited: ${firstTimeVisited}`)
        console.log(`firstTimeVisitedTimestamp: ${firstTimeVisitedTimestamp}`)
    }

    function setCookies(){
        console.log('Set cookies')
        setCookie('firstTimeVisited', 'true', 1)
        setCookie('firstTimeVisitedTimestamp', Date.now().toString(), 365)
    }

    function deleteCookies(){
        console.log('Deleted cookies')
        deleteCookie('firstTimeVisited')
        deleteCookie('firstTimeVisitedTimestamp')
    }
    
    return(
        <>
            <div>
                <div>{minute}:{second}</div>
            </div>
            <div className='flex gap-1'>
                <button onClick={setCookies}>Set Cookies</button>
                <button onClick={getCookies}>Get Cookies</button>
                <button onClick={deleteCookies}>Delete Cookies</button>
                <button onClick={resetCounter}>Reset Counter</button>
                <button onClick={handleCounter}>Set Counter</button>
            </div>
        </>
    )
}

export default CookieHandler