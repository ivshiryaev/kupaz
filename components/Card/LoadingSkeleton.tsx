import React from 'react'

function LoadingSkeleton() {
	return (
		<div className='
			animate-pulse
			group
			flex items-center
			bg-white
			rounded-2xl overflow-hidden
			relative
			transition
			duration-300
			hover:duration-150
			hover:shadow-lg
			active:shadow-none
		'>
			{/*Image*/}
			<div className='
				w-[125px] lg:w-[250px]
				h-[150px] lg:h-[300px]
				bg-gray-100
			'/>
			{/*Main Content*/}
			<div className='flex flex-col gap-2 lg:gap-4 p-4'>
				{/*Heading*/}
				<div className='flex flex-col gap-2 leading-4'>
					<div className='w-24 h-4 bg-gray-100 rounded-2xl'/>
					<div className='w-32 h-4 bg-gray-100 rounded-2xl'/>
				</div>
			</div>

		</div>
	)
}

export default LoadingSkeleton