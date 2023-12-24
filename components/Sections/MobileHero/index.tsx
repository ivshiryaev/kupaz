'use client'

import Link from 'next/link'

import Button from '@/components/Button'

import Image from 'next/image'

function Hero() {
	return (
		<section 
			className='
				rounded-2xl
				lg:hidden
				relative
				w-full h-screen
				flex flex-col justify-center items-center
				overflow-hidden
			'
		>
			{/*Background*/}
			<div 
				className='
					absolute 
					left-0 top-0
					w-full h-full
				'
			>
				<Image 
					className='opacity-[25%] h-full w-full object-cover' 
					src='/Images/Hero/Background.jpg' 
					alt='background'
					fill
				/>
			</div>

			{/*Front*/}
			<div className='
				relative
				w-full h-full
				p-8
				flex flex-col items-center justify-center gap-4
			'>
				<Image 
					className='object-cover' 
					src='/Images/logo.svg' 
					alt='logo'
					width={323}
					height={351}
				/>
				<div className='flex flex-col gap-4'>
					<p className='text-center'>
						Zestawy do robienia własnych nalewek.
					</p>
					<div className='flex flex-wrap gap-2 justify-center items-center'>
						<Link href='/Oferta'>
							<Button appearance='fill' className='w-fit'>Zobacz ofertę</Button>
						</Link>
						<Link href='/#AboutUs'>
							<Button appearance='outline' className='w-fit'>O nas</Button>
						</Link>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Hero