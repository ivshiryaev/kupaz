'use client'

import { AiOutlineLoading3Quarters } from "react-icons/ai"

import Link from 'next/link'
import { useState, useEffect } from 'react'

import Button from '@/components/Button'

import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm, SubmitHandler } from "react-hook-form"
import { FormValidation, ContactFormSchema } from '@/lib/validations/ContactForm'

// import { submitContactForm } from '@/lib/actions/formSpree.actions'


function Contact() {
	const [isSubmitSuccesfull, setIsSubmitSuccesfull] = useState(false)
	const [isSubmitting, setIsSubmitting] = useState(false)

	//If isSubmitSuccesfull - revert it to false after {timeout} - else show alert that submit unsuccesfull
	useEffect(() => {
		reset()
		setTimeout(()=>(
			setIsSubmitSuccesfull(false)
		),3000)
	}, [isSubmitSuccesfull])

	const {
		register,
		handleSubmit,
		watch,
		reset,
		formState: { errors },
	} = useForm<FormValidation>({
		resolver: zodResolver(ContactFormSchema),
		defaultValues: {
			name: '',
			email: '',
			opis: '',
		}
	});

	const processSubmit: SubmitHandler<FormValidation> = async (data) => {
		setIsSubmitting(true)

		// TESTING ->
		const promise = new Promise((resolve) => {
			setTimeout(()=>{
				resolve()
			},2000)
		})

		await promise

		setIsSubmitSuccesfull(true)

		// const isSubmitted = await submitContactForm(data)
		// setIsSubmitSuccesfull(isSubmitted)

		//If clicked on the submit button, reset isSubmitSuccessfull after {timeout}
		// if(isSubmitted){
		// 	reset()
		// 	setTimeout(()=>(
		// 		setIsSubmitSuccesfull(false)
		// 	),3000)
		// } else {
		// 	alert('Oops, coś poszło nie tak, skontaktuj się z nami przez maila: kupazsklep@gmail.com')
		// }

		setIsSubmitting(false)
	}

	return (
		<form 
			className='
				p-6 lg:p-8
				bg-white 
				rounded-2xl
				flex flex-col gap-4
				justify-center
				flex-1
			'
			onSubmit={handleSubmit(processSubmit)}
		>
			<p className='text-[1.5rem]'>Skontaktuj się</p>
			<input 
				className='bg-gray-100 rounded-2xl p-4' 
				placeholder='Imie...'  
				type="text"
				{...register('name')}
			/>
			{errors?.name?.message && <p className='text-sm text-alert'>{errors.name?.message}</p>}
			<input 
				className='bg-gray-100 rounded-2xl p-4' 
				placeholder='Email...' 
				type="email"
				{...register('email')}
			/>
			{errors?.email?.message && <p className='text-sm text-alert'>{errors.email?.message}</p>}
			<textarea 
				className='bg-gray-100 rounded-2xl p-4' 
				placeholder='Opis...' 
				rows={6}
				{...register('opis')}
			/>
			{errors?.opis?.message && <p className='text-sm text-alert'>{errors.opis?.message}</p>}
			{isSubmitSuccesfull ?
				<div className='px-[2rem] py-[1rem] rounded-2xl bg-success w-fit'>
					<p className='text-white'>Wysłane !</p>
				</div>
				:
				<div className='flex flex-col gap-4'>
					<Button 
						disabled={isSubmitting || isSubmitSuccesfull} 
						appearance='fill' 
						className='w-fit'
					>
						{isSubmitting ? (
							<span className='flex gap-[0.5rem]'>
								<span className='animate-spin'>
									<AiOutlineLoading3Quarters size={24}/>
								</span>
								Wysyłanie...
							</span>
						) : (
							<span>Wysyłam</span>
						)}
					</Button>
					<p className='text-gray-400 text-sm'>
						Klikając przycisk zgadzasz się z <Link className='underline' href='/regulamin' target='_blank'>regulaminem sklepu</Link> oraz <Link className='underline' href='/polityka-prywatnosci' target='_blank'>polityką prywatności</Link>
					</p>
				</div>
			}
		</form>
	)
}

export default Contact