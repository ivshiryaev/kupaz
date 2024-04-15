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
export const getSmakSlug = (post: any) => {
	return `${titleToSlug(post.title)}-${post.id}`
}

// given any slug, try to extract an id from it
export const getIdFromSlug = (slug: string) => slug.split('-').pop()

/**
 * Converts slug into readable Format
 * @param {string} inputString - slug
 * @returns {string} a readable string
 */
export const convertSlugToReadableFormat = (inputString: string) => {
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

//Counts the date difference
export const countDateDifference = (date: string) => {
	const inputDate = new Date(date)
	const now = new Date();
	const diffMs = now.getTime() - inputDate.getTime();

	const diffYears = Math.floor(diffMs / 1000 / 60 / 60 / 24 / 365);
	const diffMonths = Math.floor(diffMs / 1000 / 60 / 60 / 24 / 30);
	const diffSecs = Math.floor(diffMs / 1000);
	const diffMins = Math.floor(diffSecs / 60);
	const diffHours = Math.floor(diffMins / 60);
	const diffDays = Math.floor(diffHours / 24);
  
	if (diffYears > 0) {
	  return `${diffYears} ${diffYears > 1 ? 'lat' : 'rok'} temu`;
	} else if (diffMonths > 0) {
	  return `${diffMonths} ${diffMonths > 1 ? 'miesięcy' : 'miesiąc'} temu`;
	} else if (diffDays > 0) {
	  return `${diffDays} ${diffDays > 1 ? 'dni' : 'dzień'} temu`;
	} else if (diffHours > 0) {
	  return `${diffHours} ${diffHours > 1 ? 'godzin' : 'godzina'} temu`;
	} else if (diffMins > 0) {
	  return `${diffMins} ${diffMins > 1 ? 'minut' : 'minuta'} temu`;
	} else {
	  return `${diffSecs} second${diffSecs > 1 ? 'sekundy' : 'sekund'} temu`;
	}
}

//Shufle the Array
export const shuffleArray = (arr: any[]) => {
	//ChatGPT generated this code:
	for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

export const getCookie = (name: string): string | undefined => {
	const value = `; ${document.cookie}`;
	const parts = value.split(`; ${name}=`);
	if (parts.length === 2) return parts.pop()?.split(';').shift();
	return undefined;
}

export const setCookie = (name: string, value: string, days: number) => {
	const date = new Date();
	date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
	document.cookie = `${name}=${value};expires=${date.toUTCString()};path=/`;
}

export const deleteCookie = (name: string) => {
	document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:01 GMT;path=/`;
}

/**
 * Calculates the time difference between the current date and a cookie date.
 * @param cookieName - The name of the cookie.
 * @returns The time difference in milliseconds.
 */
export const timeDifferenceInMsByCookie = (cookieName: string) => {
	const cookie = getCookie(cookieName)
	if (!cookie){
		console.error(`Can,t count timeDifferenceInMsByCookie, no such cookie found: ${cookieName}`)
		return null
	}

	const cookieDate = new Date(cookie)
	const currentDate = new Date()

	return currentDate.getTime() - cookieDate.getTime()
}