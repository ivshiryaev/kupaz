'use client'

import React from 'react'
import Typed from 'typed.js'

const sentences = [
	`Zestawy do tworzenia własnych nalewek`,
	`Idealny pomysł na prezent`,
	`Każdemu się spodoba`,
]

function TypedText() {
	// Create reference to store the DOM element containing the animation
	const el = React.useRef(null);

	React.useEffect(() => {
		const typed = new Typed(el.current, {
			strings: sentences,
			typeSpeed: 40,
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