import React from 'react'

import Swiper from '@/components/Swiper'

function MobileSwiperSection() {
	return (
		<section className='
			lg:hidden w-full flex gap-2
			w-full
			aspect-video
		'>
			<div className='relative aspect-square overflow-hidden rounded-2xl'>
				<Swiper delay={2000}/>
			</div>
			<div className='relative aspect-square overflow-hidden rounded-2xl'>
				<Swiper delay={1000}/>
			</div>
		</section>
	)
}

export default MobileSwiperSection