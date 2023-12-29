'use server'

const contactFormUrl = process.env.FORMSPREE_CONTACT_FORM_URL ?? ''
const newsletterFormUrl = process.env.FORMSPREE_NEWSLETTER_FORM_URL ?? ''

export async function submitContactForm(data: any){
	try{
		const response = await fetch(contactFormUrl, {
			method: 'POST',
			body: JSON.stringify(data),
			headers: {
				'Accept': 'application/json',
			},
		})

		if(response.ok){
			return true
		} else {
			console.error(`Can't submit the form, status code: ${response.status}`)
			return false
		}
	} catch(error) {
		console.error((error as Error).message)
	}
	return false
}

export async function submitNewsletterForm(data: any){
	try{
		const response = await fetch(newsletterFormUrl, {
			method: 'POST',
			body: JSON.stringify(data),
			headers: {
				'Accept': 'application/json',
			},
		})

		if(response.ok){
			return true
		} else {
			console.error(`Can't submit the form, status code: ${response.status}`)
			return false
		}
	} catch(error) {
		console.error((error as Error).message)
	}
	return false
}