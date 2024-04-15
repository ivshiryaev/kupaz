"use server"

import mongoose from 'mongoose'
import { connectToDB } from '@/lib/mongoose'
import Smak from '@/lib/models/smak.model'

/**
 * 
 * @param limit - limite the query 
 * @returns JSON.stringified response
 */
export async function getSmaki(limit = null){
	try{
		await connectToDB()

		let query = Smak.find().sort({ title: 'asc'})

		if (limit !== null) {
        	query = query.limit(limit);
        }

		const response = await query.exec();

		return JSON.stringify(response)
	} catch(error) {
		console.error((error as Error).message)
	}
	return ''
}

export async function getSmakiBySmak({smak} : {smak: string}){
	try{
		await connectToDB()

		const response = await Smak.find({smak: smak}).sort({title: 'asc'})

		return JSON.stringify(response)
	} catch(e) {
		console.error((e as Error).message)
	}
	return ''
}

export async function getSmakById({id} : {id: number}){
	try{
		await connectToDB()

		const response = await Smak.findOne({ id })

		return JSON.stringify(response)
	} catch(error) {
		console.error((error as Error).message)
	}
	return ''
}

export async function getSmakByTitle({title} : {title: string}){
	try{
		await connectToDB()

		const response = await Smak.findOne({ title })

		return JSON.stringify(response)
	} catch(error) {
		console.error((error as Error).message)
	}
	return ''
}

export async function getSimilarSmakiBySmak({smak, id, limit = 2} : {smak: string, id: number, limit: number}){
	try{
		await connectToDB()

		const response = await Smak.find({ id: {$ne: id}, smak: smak }).limit(limit).exec()

		return JSON.stringify(response)
	} catch(error) {
		console.error((error as Error).message)
	}
	return ''
}

export async function test(){
	await connectToDB()

	const data = await Smak.find({smak:'Gorzki'})

	return JSON.stringify(data)
}