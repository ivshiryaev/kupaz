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
	delay?: number
}

function SwiperComponent(props: Props) {
	return (
		<Swiper 
			className='w-full h-full rounded-2xl overflow-hidden'
			navigation={true}
        	modules={[Autoplay, Pagination, Navigation]}
        	autoplay={{
				delay: props.delay || 2500,
				disableOnInteraction: false,
			}}
			pagination={{
				clickable: true,
			}}
		>
			<SwiperSlide>
				<Image
					className='object-cover'
					src='/Images/Photos/1.jpg'
					alt='image'
					fill
				/>
			</SwiperSlide>
			<SwiperSlide>
				<Image
					className='object-cover'
					src='/Images/Photos/2.jpg'
					alt='image'
					fill
				/>
			</SwiperSlide>
		</Swiper>
	)
}

export default SwiperComponent