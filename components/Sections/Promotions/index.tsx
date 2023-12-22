import React from 'react'

import { GoGift } from "react-icons/go"
import { CiDeliveryTruck } from "react-icons/ci"

function Promotions() {
	return (
		<section className='hidden lg:flex gap-4 items-center'>
			<div className='bg-white rounded-2xl px-8 py-4 flex-1 flex items-center gap-2'>
				<GoGift className='text-[1.25rem]'/>
				<p>Za każde 4 zestawy dostajesz +1 za darmo</p>
			</div>
			<div className='bg-white rounded-2xl px-8 py-4 flex-1 flex items-center gap-2'>
				<CiDeliveryTruck className='text-[1.25rem]'/>
				<p>Darmowa dostawa przy zamówieniu od 150 zł</p>
			</div>
		</section>
	)
}

export default Promotions