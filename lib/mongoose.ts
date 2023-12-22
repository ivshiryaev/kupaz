"use server"

import mongoose from 'mongoose'

let isConnected = false

export async function connectToDB(){
	// Set strict query mode for Mongoose to prevent unknown field queries.
	mongoose.set("strictQuery", true);

	if(!process.env.MONGODB_URI) return console.log('MONGODB_URI isn\'t found')

	try {
		await mongoose.connect(process.env.MONGODB_URI)
		isConnected = true
	} catch(error) {
		console.error((error as Error).message)
	}
}