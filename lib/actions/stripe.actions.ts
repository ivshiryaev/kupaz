"use server"

import { Stripe } from '@/lib/stripe'

import { getSmakById } from '@/lib/actions/smak.actions'

const firstVisitDiscountPercentage = 10

export async function createCheckoutSession(
	{
		items,
		cancel_url,
		firstTimeVisitedCookie,
		firstTimeVisitedTimestampCookie,
		userTimeEpochFormat
	}: 
	{
		items: {
			id: number,
			quantity: number,
		}[],
		cancel_url: string,
		firstTimeVisitedCookie: string,
		firstTimeVisitedTimestampCookie: string,
		userTimeEpochFormat: number
	}){
	try {
		const stripe = await Stripe()

		const discountOptions = {}

		//If it's user's first visit, and the timedifference less than 10 minutes, minuses 10% from total price
		if(firstTimeVisitedCookie === "true"){
			const timeDifference = userTimeEpochFormat - parseInt(firstTimeVisitedTimestampCookie)
			if(timeDifference < 600000){
				discountOptions.discounts = [
					{
						coupon: process.env.STRIPE_COUPON_FIRST_VISIT_PROMO
					}
				]
			} else {
				discountOptions.allow_promotion_codes = true
			}
		}

		let deliveryPrice = 2000
		let totalPrice = 0

		const line_items = await Promise.all(items.map(async(item) => {
			//Look for such item in db
			const response = await getSmakById({id: item.id})
			if(!response) return null

			const data = JSON.parse(response)

			const {
				title,
				price,
				discountPercentage
			} = data

			let discountAmount = 0
			let finalPrice = price

			//If there is a prop 'discountPercentage' on item in db, minuses the discount amount from base price
			if(discountPercentage){
				discountAmount = price * discountPercentage / 100
				finalPrice = price - discountAmount
			}

			finalPrice = finalPrice.toFixed()
			totalPrice += finalPrice * item.quantity

			return {
				price_data:{
					currency: 'pln',
					product_data:{
						name: title
					},
					unit_amount: finalPrice
				},
				quantity: item.quantity
			}
		}))

		if(totalPrice > 17000) deliveryPrice = 0

		const session = await stripe.checkout.sessions.create({
			success_url: 'https://kupaz.xyz/ClearCartItems',
			cancel_url: cancel_url,
			mode: 'payment',
			line_items,
			shipping_address_collection: {
				allowed_countries: ['PL']
			},
			shipping_options: [
				{
					shipping_rate_data: {
						display_name: 'Cena dostawy',
						type: 'fixed_amount',
						fixed_amount: {
							amount: deliveryPrice,
							currency: 'pln'
						}
					}
				}
			],
			custom_fields: [
				{
					key: 'dostawa',
					label: {
						custom: 'Metoda dostawy',
						type: 'custom'
					},
					type: 'dropdown',
					dropdown: {
						options: [
							{
								label: 'InPost Paczkomat',
								value: 'inpost'
							},
							{
								label: 'Dostawa kurierem (dotyczy Gdańska i okolic)',
								value: 'kurier'
							}
						]
					}
				},
				{
					key: 'comment',
					label: {
						custom: 'Zostaw komentarz do zamówienia',
						type: 'custom'
					},
					type: 'text',
					optional: true,
				},
			],
			payment_method_types:[
				'blik','card','p24'
			],
			phone_number_collection:{
				enabled:true,
			},
			...discountOptions
		})

		return JSON.stringify(session)
	} catch(e) {
		console.error((e as Error).message)
	}
}