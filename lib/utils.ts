import slugify from 'slugify'

/**
 * Converts input to a URL-safe slug
 * @param {string} title - the title of the post
 * @returns {string} a URL-safe slug based on the post's title
 */
export const titleToSlug = (title: string) => {
	const uriSlug = slugify(title, {
		lower: true, // convert everything to lower case
		trim: true, // remove leading and trailing spaces
	})

	// encode special characters like spaces and quotes to be URL-safe
	return encodeURI(uriSlug)
}

// given a post, return its slug
export const getSmakSlug = (post) => {
	return `${titleToSlug(post.title)}-${post.id}`
}

// given any slug, try to extract an id from it
export const getIdFromSlug = (slug: string) => slug.split('-').pop()

/**
 * Converts slug into readable Format
 * @param {string} inputString - slug
 * @returns {string} a readable string
 */
export const convertSlugToReadableFormat = (inputString) => {
	console.log('convertSlugToReadableFormat')

	//Remove the whitespace around
	inputString = inputString.trim()

	// Capitalize first letter
	inputString = inputString.charAt(0).toUpperCase() + inputString.slice(1)

	// Split the input string by hyphen
	const words = inputString.split('-')

	const returnValue = words.join(' ')
	console.log(returnValue)

	return words.join(' ')
}