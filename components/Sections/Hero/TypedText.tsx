'use client'

import React from 'react'
import Typed from 'typed.js'

const sentences = [
	`Idealny pomysł na prezent`,
	`Każdemu się spodoba`,
	`Wyłącznie naturalne składniki`,
]

function TypedText() {
	// Create reference to store the DOM element containing the animation
	const el = React.useRef(null);

	React.useEffect(() => {
		const typed = new Typed(el.current, {
			strings: sentences,
			shuffle: true,
			typeSpeed: 40,
			backDelay: 1000,
			loop: true,
			backSpeed: 10,
		})
		return () => {
			// Destroy Typed instance during cleanup to stop animation
			typed.destroy();
		}
	}, [])

	return <span ref={el}/>
}

export default TypedText