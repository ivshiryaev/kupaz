import React from 'react'

import dynamic from 'next/dynamic'

type Props = {
	children: React.ReactNode,
	backgroundColor: string,
}

function Component(props: Props) {
	return (
		<p 
			style={{
				backgroundColor: props.backgroundColor
			}}
			className={`
				rounded-full 
				w-fit 
				px-3 py-0.5
			`}
		>
			{props.children}
		</p>
	)
}

export default dynamic(() => Promise.resolve(Component),{ssr: false})
