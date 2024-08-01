"use client"

import React from "react"

import Image from "next/image"

function Item({ quantity }: { quantity: number }) {
    return (
        <article className="min-h-[142px] relative shadow-md p-6 flex flex-col gap-2 bg-green-50 rounded-2xl overflow-hidden">
            {/* Absolute Background Image */}
            <div className="absolute inset-0 h-full w-full flex justify-center items-center opacity-25">
                <Image
                    className="object-cover brightness-150 p-2"
                    src={`/Images/ShoppingCart/Item${
                        quantity > 5 ? "Default" : quantity
                    }.png`}
                    fill
                    alt="image"
                />
            </div>
            {/* Content */}
            <div className="relative flex justify-start items-center">
                <div className="flex flex-col">
                    <p className="text-[1.25rem] hover:underline">
                        Darmowa nalewka !
                    </p>
					<p className="text-sm text-gray-400 whitespace-pre-wrap">
                        Za każde 5 produktów w koszyku otrzymasz darmową nalewkę. Po złożeniu zamówienia skontaktujemy się z Tobą w celu wyboru smaku.
                    </p>
					<p className="text-sm whitespace-pre-wrap text-end">
                        {quantity} szt.
                    </p>
                </div>
            </div>
        </article>
    )
}

export default Item
