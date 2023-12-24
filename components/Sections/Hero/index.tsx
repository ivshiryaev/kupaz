import Image from 'next/image'
import Button from '@/components/Button'
import TypedText from './TypedText'

import Link from 'next/link'

import Swiper from '@/components/Swiper'

function Hero() {
	return (
		<section className='
			hidden
			lg:flex
			gap-2 lg:gap-4
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
						<Swiper delay={4000}/>
					</div>
					{/*Right*/}
					<div className='hidden lg:flex flex-1 overflow-hidden bg-white rounded-2xl'>
						<Swiper delay={2500}/>
					</div>
				</div>
			</div>
			{/*Logo and button wrapper*/}
			<div className='flex-1 flex flex-col gap-2 lg:gap-4'>
				<div className='
					rounded-2xl bg-white
					p-8
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
					flex flex-col gap-4
					justify-center items-center
					rounded-2xl bg-white
					p-8
				'>
					<p className='text-center'>Zestawy do tworzenia własnych nalewek</p>
					<Link href='/Oferta' className='w-full'>
						<Button appearance='fill' className='w-full'>Zobacz nasze smaki</Button>
					</Link>
				</div>
			</div>
			{/*Right wrapper*/}
			<div className='hidden lg:flex overflow-hidden relative flex-1 bg-white rounded-2xl'>
				<Swiper delay={5000}/>
			</div>
		</section>
	)
}

export default Hero