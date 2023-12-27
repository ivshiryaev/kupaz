import React from 'react'

function Smak() {
	return (
		<div className='
			animate-pulse
			relative
			rounded-2xl
			flex flex-col gap-2
			lg:flex-row lg:gap-8
			lg:rounded-2xl lg:overflow-hidden
			lg:bg-white'
		>
			{/*Image*/}
			<div className='
				bg-gray-100
				relative
				rounded-2xl overflow-hidden
				w-full h-[500px]
				lg:w-[450px] lg:h-[600px]
				lg:rounded-none lg:shrink-0
			'>
			</div>
			<div className='flex flex-col gap-2 lg:gap-4 justify-center'>
				{/*Title*/}
				<div className='
					p-4
					flex flex-col gap-2
					justify-center items-center 
					bg-white 
					rounded-2xl
					lg:bg-transparent lg:items-start
					lg:p-0
				'>
					<div className='w-[8rem] h-[1.25rem] rounded-2xl bg-gray-200'></div>
					<div className='w-[6rem] h-[1rem] rounded-2xl bg-gray-200'></div>
				</div>
				{/*Opis*/}
				<div className='
					p-4
					flex flex-col gap-2
					justify-center items-center 
					bg-white 
					rounded-2xl
					lg:bg-transparent lg:items-start
					lg:p-0
				'>
					<div className='w-[16rem] h-[1rem] rounded-2xl bg-gray-200'></div>
					<div className='w-[20rem] h-[1rem] rounded-2xl bg-gray-200'></div>
				</div>
			</div>
		</div>
	)
}

export default Smak