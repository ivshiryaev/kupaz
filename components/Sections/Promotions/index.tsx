import React from 'react'

import { GoGift } from "react-icons/go"
import { CiDeliveryTruck } from "react-icons/ci"

function Promotions() {
	return (
		<section className='flex flex-col lg:flex-row lg:gap-4 gap-2 items-center'>
			<div className='w-full bg-white rounded-2xl p-6 flex-1 flex flex-col items-center gap-2 text-center'>
				<GoGift className='text-[1.5rem]'/>
				<p>Za każde 4 zestawy dostajesz +1 za darmo</p>
			</div>
			<div className='w-full bg-white rounded-2xl p-6 flex-1 flex flex-col items-center gap-2 text-center'>
				<CiDeliveryTruck className='text-[1.5rem]'/>
				<p>Darmowa dostawa przy zamówieniu od 150 zł</p>
			</div>
		</section>
	)
}

export default Promotions