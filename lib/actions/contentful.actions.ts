'use server'

import contentful from 'contentful'
import Client from '@/lib/contentful'

//Get single entry
export async function getEntry(id: string){
    const client = await Client()

    try{
        const entry = await client.getEntry(id)
        return entry
    } catch (e){
        console.error((e as Error).message)
    }

    //Return null if no entry found
    return null
}

//Get all entries
export async function getEntries(){
    const client = await Client()

    try{
        const entries = await client.getEntries()
        return entries
    } catch (e){
        console.error((e as Error).message)
    }

    //Return null if no entry found
    return null
}

//Get all entries of type "Blog"
export async function getBlogEntries(){
    const client = await Client()

    try{
        const entries = await client.getEntries({
            content_type: 'blog',
            select: `
                fields.title,
                fields.slug,
                fields.subtitle,
                fields.body,
                fields.timeToRead,
                sys.createdAt
            `,
        })
        return entries
    } catch (e){
        console.error((e as Error).message)
    }

    //Return null if no entries found
    return null
}

//Get blog entry by slug
export async function getBlogsBySlug(slug: string){
    const client = await Client()

    try{
        const entries = await client.getEntries({
            content_type: 'blog',
            'fields.slug': slug,
            select: `
                sys.createdAt,
                fields.title,
                fields.subtitle,
                fields.body,
                fields.timeToRead
            `
        })
        return entries
    } catch (e){
        console.error((e as Error).message)
    }

    //Return null if no entries found
    return null
}


//Get all entries by type
export async function getEntriesByType(type: string){
    const client = await Client()

    try{
        const entries = await client.getEntries({
            content_type: type,
        })
        return entries
    } catch (e){
        console.error((e as Error).message)
    }

    //Return null if no entries found
    return null
}

//Get entry by id
export async function getEntryById(id: string){
    const client = await Client()

    try{
        const entry = await client.getEntry(id)
        return entry
    } catch (e){
        console.error((e as Error).message)
    }

    //Return null if no entry found
    return null
}