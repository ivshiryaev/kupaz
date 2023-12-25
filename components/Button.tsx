'use client'

const appearanceList = [
	{
		title: 'fill',
		className: `
			bg-dark text-white 
		`,
	},
	{
		title: 'outline',
		className: `
			outline outline-1
		`
	},
	{
		title: 'underline',
		className: `
			border-b hover:shadow-md
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
					px-8 py-4
					relative overflow-hidden
					rounded-2xl
					duration-300
					hover:duration-150
					hover:rounded-[2rem]
					disabled:opacity-50
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