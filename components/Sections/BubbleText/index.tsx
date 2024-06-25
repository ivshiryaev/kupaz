import React from "react"
import styles from "./bubble.module.css"

const text = "Pyszzzzzzzne nalewki"

export const BubbleText = () => {
    return (
        <section className="hidden lg:flex bg-white rounded-2xl justify-center items-center px-6 py-8 lg:p-8 lg:py-24">
            <h3 className="text-center text-5xl font-thin cursor-pointer transition-all">
                {text.split("").map((child, idx) => (
                    <span
                        className={`${styles.hoverText} transition-all duration-300`}
                        key={idx}
                    >
                        {child}
                    </span>
                ))}
            </h3>
        </section>
    )
}

export default BubbleText
