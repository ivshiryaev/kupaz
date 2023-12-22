import React from 'react'

import Button from '@/components/Button'

function Newsletter() {
	return (
		<form className='
			p-6 lg:p-8 
			bg-white 
			rounded-2xl
			flex flex-col gap-4
		'>
			<p className='text-[1.5rem]'>Chcę zniżkę !</p>
			<p>Subskrybując nasz newsletter masz szansę otrzymać zniżkę aż do -30%. Zniżki wysyłane są losowo</p>
			<input className='bg-gray-100 rounded-2xl p-4' placeholder='Email' type="text"/>
			<Button appearance='fill' className='w-fit'>Wysyłam</Button>
			<p className='text-gray-400 text-sm'>Klikając przycisk zgadzasz się z regulaminem sklepu oraz polityką prywatności</p>
		</form>
	)
}

export default Newsletter