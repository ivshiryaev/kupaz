import React from 'react'

function Step({data, idx}:{data: string, idx: number}) {
	const stepNumber = (idx + 1).toString().padStart(2,'0')

	return (
		<div
			className='
				last:border-none
				border-b 
				p-6 lg:px-0 lg:py-4
				overflow-hidden 
				flex gap-4
				items-center
			'
		>
			<p className='text-[2.25rem] text-gray-200 font-light'>
				{stepNumber}.
			</p>
			<p>
				{data}
			</p>
		</div>
	)
}

export default Step