import React from 'react'

import dynamic from 'next/dynamic'

type Props = {
	children: React.ReactNode,
	backgroundColor: string,
}

function Component(props: Props) {
	const text = props.children

	return (
		<p 
			className={`
				${props.backgroundColor}
				rounded-full 
				w-fit 
				px-3 py-0.5
				${text === '💖 Miłość' && `
					bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400
					text-white
					
				`}
			`}
		>
			{text}
		</p>
	)
}

export default dynamic(() => Promise.resolve(Component),{ssr: false})
