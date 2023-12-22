"use server"

export async function Stripe(){
	const stripe = require('stripe')(process.env.STRIPE_LIVE_KEY);
	return stripe
}