import Image from 'next/image'
import Button from '@/components/Button'
import TypedText from './TypedText'

import Link from 'next/link'

import Swiper from '@/components/Swiper'

const mainSwiperImages = [
	'/Images/Hero/Swiper/1.jpg',
	'/Images/Hero/Swiper/2.jpg',
	'/Images/Hero/Swiper/3.jpg',
	'/Images/Hero/Swiper/4.jpg',
	'/Images/Hero/Swiper/5.jpg',
	'/Images/Hero/Swiper/6.jpg',
]

const leftSmallSwiperImages = [
	'/Images/Hero/Swiper/1.jpg'
]

const rightSmallSwiperImages = [
	'/Images/Hero/Swiper/6.jpg'
]

function Hero() {
	return (
		<section className='
			flex
			gap-2 
			lg:gap-4
		'>
			{/*Left Wrapper*/}
			<div className='
				hidden
				lg:flex
				flex-1
				flex flex-col 
				gap-2 lg:gap-4
			'>
				{/*Top*/}
				<div className='relative transition bg-white rounded-2xl flex-1 flex p-8 items-center overflow-hidden'>
					<p className='text-dark text-[2.25rem]'><TypedText/></p>
				</div>
				{/*Bottom*/}
				<div className='relative grid w-full grid-cols-2 gap-2 lg:gap-4 flex-1'>
					{/*Left*/}
					<div className='hidden lg:flex flex-1 overflow-hidden bg-white rounded-2xl'>
						<Swiper images={leftSmallSwiperImages} delay={4000}/>
					</div>
					{/*Right*/}
					<div className='hidden lg:flex flex-1 overflow-hidden bg-white rounded-2xl'>
						<Swiper images={rightSmallSwiperImages} delay={2500}/>
					</div>
				</div>
			</div>
			{/*Logo and button wrapper*/}
			<div className='
				relative
				overflow-hidden
				h-screen lg:h-auto rounded-2xl lg:rounded-none
				flex-1 flex flex-col gap-4
				lg:items-stretch
				items-center justify-center
				bg-white lg:bg-transparent
			'>
				<Image
					className='lg:hidden object-cover opacity-25'
					src='/Images/Hero/Background.jpg'
					alt='background image'
					fill
				/>
				<div className='
					relative
					rounded-2xl 
					lg:bg-white
					lg:p-8
					flex justify-center items-center
				'>
					<Image 
						src='/Images/logo.svg'
						alt='logo'
						width={323}
						height={351}
					/>
				</div>
				<div className='
					relative
					flex flex-col gap-4
					justify-center items-center
					rounded-2xl 
					lg:bg-white
					lg:p-8
				'>
					<h1 className='text-center'>Zestawy do tworzenia własnych nalewek</h1>
					<Link href='/smaki' className='lg:w-full'>
						<Button appearance='fill' className='lg:w-full'>Zobacz nasze smaki</Button>
					</Link>
				</div>
			</div>
			{/*Right wrapper*/}
			<div className='hidden lg:flex overflow-hidden relative flex-1 bg-white rounded-2xl'>
				<Swiper images={mainSwiperImages} delay={5000}/>
			</div>
		</section>
	)
}

export default Hero