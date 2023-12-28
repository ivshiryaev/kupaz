import * as z from 'zod'

const NewsletterSchema = z.object({
	email: z.string()
		.max(50, { message: 'Maksymalnie 50 liter'})
		.email({ message: 'Wpisz adres email'})
		.trim()
})

type FormValidation = z.infer<typeof NewsletterSchema>

export type { FormValidation } 
export { NewsletterSchema }