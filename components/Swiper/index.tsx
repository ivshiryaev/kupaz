'use client'

import Image from 'next/image'
import React from 'react'

import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './styles.css'

const array = ['blbabal','sdsldlf','sdfskdfksdf']

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

type Props = {
	delay?: number,
	images?: string[]
}

function SwiperComponent(props: Props) {
	return (
		<Swiper 
			className='w-full h-full rounded-2xl overflow-hidden'
			navigation={true}
        	modules={[Autoplay, Pagination, Navigation]}
        	autoplay={{
				delay: props.delay || 5000,
				disableOnInteraction: false,
			}}
			pagination={{
				clickable: true,
			}}
			loop={true}
		>
			{props?.images.map((item, idx) => (
				<SwiperSlide key={idx}>
					<Image
						quality={100}
						className='object-cover'
						src={item}
						alt={`Photo: ${idx}`}
						fill
					/>
				</SwiperSlide>
			))}
		</Swiper>
	)
}

export default SwiperComponent