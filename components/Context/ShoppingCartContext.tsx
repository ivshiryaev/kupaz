'use client'

import { createContext, useContext } from 'react'
import { useState, useEffect } from 'react'

import dynamic from 'next/dynamic'

export const ShoppingCartContext = createContext({})

import { getSmakById } from '@/lib/actions/smak.actions'

const cartItemsFromLocalStorage = typeof window !== 'undefined' ? JSON.parse(localStorage.getItem('cartItems') || '[]') : []

export function ShoppingCartProvider({ children }) {
    const [isOpenedForTheFirstTime, setIsOpenedForTheFirstTime] = useState(false)

    const [items, setItems] = useState(cartItemsFromLocalStorage)
    const [isOpen, setIsOpen] = useState(false)

    const [totalItemsPrice, setTotalItemsPrice] = useState(0)
    const [isCounting, setIsCounting] = useState(true)

    const totalItemsCount = countTotalItems()
    const deliveryPrice = countDeliveryPrice()
    const totalPrice = isCounting ? '...' : totalItemsPrice + deliveryPrice

    useEffect(() => {
        localStorage.setItem('cartItems', JSON.stringify(items))

        setIsCounting(true)
        countTotalItemsPrice()
 
        // DANGER: used to prevent react from showing error that this effect rely on countTotalItemsPrice()
        // There is another official experimental solution 
        // https://react.dev/reference/react/useEffect#reading-the-latest-props-and-state-from-an-effect
        // eslint-ignore-next-line react-hooks/exhaustive-deps
    }, [items])

    function countDeliveryPrice(){
        //Standard delivery price == 2000 (20.00 zł)
        let value = 2000

        if(totalItemsPrice >= 15000){
            value = 0
        }

        return value
    }

    function clearItems(){
        setItems([])
    }

    function countTotalItems(){
        let value = 0

        items.map(item => {
            value += item.quantity
        })

        return value
    }

    async function countTotalItemsPrice(){
        const initialValue = 0

        const value = await items.reduce(async (accumulatorPromise, item) => {
            const accumulator = await accumulatorPromise;
            const response = await getSmakById({ id: item.id });

            if (!response) return accumulator;

            const data = JSON.parse(response);

            if (data?.discountPercentage) {
                const discountAmount = data.price * data.discountPercentage / 100;
                const finalPrice = (data.price - discountAmount).toFixed();

                return accumulator + finalPrice * item.quantity;
            } else {
                return accumulator + data?.price * item.quantity;
            }
        }, Promise.resolve(initialValue));

        setTotalItemsPrice(value)
        setIsCounting(false)
    }

    function toggleOpen(){
        if(!isOpenedForTheFirstTime){
            setIsOpenedForTheFirstTime(true)
        }
        setIsOpen(!isOpen)
    }

    function removeItem(id: number){
        setItems(currentItems => {
            return currentItems.filter(item => item.id !== id)
        })
    }

    function increaseItemQuantity(id: number){
        setItems(currentItems => {
            // If there is no such item with given id, add one
            if(currentItems.find(item => item.id === id) == null){
                return[{ id, quantity: 1}, ...currentItems]
            } else {
                // If there is an item with such id, increase the quantity of this item
                return currentItems.map(item => {
                    if(item.id === id){
                        return{...item, quantity: item.quantity + 1}
                    } else {
                        return item
                    }
                })
            }
        })
    }

    function decreaseItemQuantity(id: number){
        setItems(currentItems => {
            if(currentItems.find(item => item.id === id).quantity === 1){
                return currentItems.filter(item => item.id !== id)
            } else {
                return currentItems.map(item => {
                    if(item.id === id){
                        return{...item, quantity: item.quantity - 1}
                    } else {
                        return item
                    }
                })
            }
        })
    }

    return (
        <ShoppingCartContext.Provider suppressHydrationWarning={true} value={{
            isOpenedForTheFirstTime,
            isCounting,
            items,
            isOpen,
            toggleOpen,
            increaseItemQuantity,
            decreaseItemQuantity,
            removeItem,
            clearItems,
            deliveryPrice,
            totalItemsPrice,
            totalItemsCount,
            totalPrice
        }}>
            {children}
        </ShoppingCartContext.Provider>
    )
}

export function useShoppingCart(){
    return useContext(ShoppingCartContext)
}