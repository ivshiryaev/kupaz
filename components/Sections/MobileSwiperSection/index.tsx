import React from 'react'

import Swiper from '@/components/Swiper'

const images = [
	'/Images/Hero/Swiper/1.jpg',
	'/Images/Hero/Swiper/2.jpg',
	'/Images/Hero/Swiper/3.jpg',
	'/Images/Hero/Swiper/4.jpg',
	'/Images/Hero/Swiper/5.jpg',
	'/Images/Hero/Swiper/6.jpg',
]

function MobileSwiperSection() {
	return (
		<section className='
			lg:hidden w-full flex gap-2
			relative 
			h-[500px]
			overflow-hidden 
			rounded-2xl
		'>
			<Swiper images={images} delay={1000}/>
		</section>
	)
}

export default MobileSwiperSection