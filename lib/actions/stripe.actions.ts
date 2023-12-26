"use server"

import { Stripe } from '@/lib/stripe'

import { getSmakById } from '@/lib/actions/smak.actions'

export async function createCheckoutSession(
	{
		items,
		totalPrice,
		cancel_url,
		deliveryPrice
	}: 
	{
		items: {
			id: number,
			quantity: number,
		}[],
		totalPrice: number,
		cancel_url: string,
		deliveryPrice: number
	}){
	try {
		const stripe = await Stripe()

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

		const session = await stripe.checkout.sessions.create({
			success_url: 'https://localhost:3000/ClearCartItems',
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
					key: 'comment',
					label: {
						custom: 'Zostaw komentarz do zamówienia',
						type: 'custom'
					},
					type: 'text',
					optional: true,
				}
			],
			payment_method_types:[
				'blik','card','p24'
			],
			phone_number_collection:{
				enabled:true,
			},
		})

		return JSON.stringify(session)
	} catch(e) {
		console.error(e.message)
	}
}