'use client'

const appearanceList = [
	{
		title: 'fill',
		className: `
			px-8 py-4 
			bg-dark text-white 
			rounded-xl
			duration-300
			hover:duration-150
			hover:rounded-[2rem]
			disabled:opacity-50
		`,
	},
	{
		title: 'outline',
		className: `
			px-8 py-4 
			rounded-xl
			duration-300
			outline outline-1
			hover:duration-150
			hover:rounded-[2rem]
			disabled:opacity-50
		`
	}
]

type Props = {
	children: React.ReactNode,
	appearance?: string,
	className?: string,
	onClick?: Function,
	disabled?: boolean,
}

function Button(props: Props) {
	const appearance = appearanceList.find(item => item.title === props.appearance)?.className || ''

	return (
		<>
			<button
				className={`
					${appearance}
					${props.className && props.className}
					relative overflow-hidden
				`}
				onClick={props.onClick}
				disabled={props.disabled}
			>
				{props.children}
			</button>
		</>
	)
}

export default Button