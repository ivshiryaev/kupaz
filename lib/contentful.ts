"use server"

// Import contentful
const contentful = require('contentful')

// Create client
async function createClient(){
    const client = await contentful.createClient({
        space: process.env.CONTENTFUL_SPACE_ID as string,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN as string,
        environment: process.env.CONTENTFUL_ENVIRONMENT as string
    })
    return client
}

export default createClient