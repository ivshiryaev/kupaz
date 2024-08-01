"use client"

import { motion, AnimatePresence } from "framer-motion"
import React from "react"

const distanceInPixels = 100

import { MdOutlineShoppingCart } from "react-icons/md"
import { useShoppingCart } from "@/components/Context/ShoppingCartContext"

function BottomRightShoppingCartIcon({
    children,
}: {
    children: React.ReactNode
}) {
    const [scrollY, setScrollY] = React.useState(0)
    const [isVisible, setIsVisible] = React.useState(false)

    const {
        isOpen: isShoppingCartOpen,
        toggleOpen,
        totalItemsCount,
    } = useShoppingCart()

    React.useEffect(() => {
        console.log(totalItemsCount)

        function onScroll() {
            const newScrollY = window.scrollY
            setScrollY(newScrollY)
            setIsVisible(newScrollY > distanceInPixels)
        }

        window.addEventListener("scroll", onScroll)

        return () => {
            window.removeEventListener("scroll", onScroll)
        }
    }, [])

    return (
        <>
            {/*Lg screens*/}
            <AnimatePresence>
                {isVisible && totalItemsCount && !isShoppingCartOpen ? (
                    <motion.button
                        initial={{
                            opacity: 0,
                            y: 100,
                        }}
                        animate={{
                            opacity: 1,
                            y: 0,
                        }}
                        exit={{
                            opacity: 0,
                            y: 100,
                        }}
                        whileHover={{
                            scale: 1.1,
                            rotate: 5,
                        }}
                        whileTap={{
                            scale: 0.9,
                            rotate: -10,
                        }}
                        onClick={toggleOpen}
                        className={`
					hidden
					z-20 
					shadow-md 
					fixed 
					right-4 bottom-4 
					bg-white 
					w-[3.5rem] h-[3.5rem] 
					text-[1.5rem] 
					lg:flex justify-center items-center 
					rounded-full
				`}
                    >
                        <MdOutlineShoppingCart />
                        {totalItemsCount ? (
                            <span
                                className="
						absolute
						-right-1 -top-1
						text-sm
						bg-dark
						text-white
						shadow-sm
						rounded-full
						w-6 h-6
						flex justify-center items-center
					"
                            >
                                {totalItemsCount}
                            </span>
                        ) : null}
                    </motion.button>
                ) : null}
            </AnimatePresence>

            {/*Mobile screens*/}
            <AnimatePresence>
                {totalItemsCount && !isShoppingCartOpen ? (
                    <motion.button
                        initial={{
                            opacity: 0,
                            y: 100,
                        }}
                        animate={{
                            opacity: 1,
                            y: 0,
                        }}
                        exit={{
                            opacity: 0,
                            y: 100,
                        }}
                        onClick={toggleOpen}
                        className={`
					lg:hidden
					z-20 
					shadow-md 
					fixed 
					right-4 bottom-4 
					bg-white 
					w-[3.5rem] h-[3.5rem] 
					text-[1.5rem] 
					flex justify-center items-center 
					rounded-full
				`}
                    >
                        <MdOutlineShoppingCart />
                        {totalItemsCount ? (
                            <span
                                className="
						absolute
						-right-1 -top-1
						text-sm
						bg-dark
						text-white
						shadow-sm
						rounded-full
						w-6 h-6
						flex justify-center items-center
					"
                            >
                                {totalItemsCount}
                            </span>
                        ) : null}
                    </motion.button>
                ) : null}
            </AnimatePresence>
        </>
    )
}

export default BottomRightShoppingCartIcon
