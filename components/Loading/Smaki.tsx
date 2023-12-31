import React from 'react'

import CardSkeleton from '@/components/Card/LoadingSkeleton'

function Smaki() {
	return (
		<div>
			<ul className='
				grid 
				grid-flow-row 
				lg:grid-flow-row
				lg:grid-cols-2
				gap-2 lg:gap-4
			'>
				<li>
					<CardSkeleton/>
				</li>
				<li>
					<CardSkeleton/>
				</li>
				<li>
					<CardSkeleton/>
				</li>
				<li>
					<CardSkeleton/>
				</li>
			</ul>
		</div>
	)
}

export default Smaki