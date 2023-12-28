import * as z from 'zod'

const ContactFormSchema = z.object({
	name: z.string()
		.min( 3, { message: 'Przynajmniej 3 litery'})
		.max(30, { message: 'Maksymalnie 30 liter'})
		.trim(),
	email: z.string()
		.min(3, { message: 'Przynajmniej 3 litery'})
		.max(30, { message: 'Maksymalnie 30 liter'})
		.email({ message: 'Wpisz adres email'})
		.trim(),
	opis: z.string()
		.min(3, { message: 'Przynajmniej 3 litery'})
		.max(1000, { message: 'Maksymalnie 1000 liter'})
		.trim(),
})

type FormValidation = z.infer<typeof ContactFormSchema>

export type { FormValidation } 
export { ContactFormSchema }