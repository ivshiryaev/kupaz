//Dynamic component
export const dynamic = 'force-dynamic'

import { redirect, notFound, RedirectType } from 'next/navigation'
import { isRedirectError } from 'next/dist/client/components/redirect'
import { Metadata, ResolvingMetadata } from 'next'

import Image from 'next/image'
import Button from '@/components/Button'

import ListOfComponents from '@/components/Card/ListOfComponents'
import SimilarByTaste from './SimilarByTaste'

import { MdOutlineDescription } from "react-icons/md"
import { AiOutlineUnorderedList } from "react-icons/ai"

import AddToCartButton from './AddToCartButton'

import { getSmaki, getSmakById } from '@/lib/actions/smak.actions'
import { getIdFromSlug, getSmakSlug } from '@/lib/utils'

export async function generateMetadata({params}){
	const id = parseInt(getIdFromSlug(params.slug))

	const response = await getSmakById({id})
	const data = JSON.parse(response)

	const slug = getSmakSlug(data)

	return {
		title: `${data.title} - zestaw do samodzielnego przygotowania nalewki`,
		description: `${data.description.slice(0,152)}...`,
		robots: {
		    index: true,
		    googleBot: {
		        index: true,
		    }
		},
		alternates: {
		    canonical: `https://kupaz.pl/smaki/${slug}`
		},
		openGraph: {
			images: [`/Images/Smaki/${data.title}.jpg`]
		}
	}
}

export default async function Smak({ params } : { params: { slug: string }}) {
	const id = parseInt(getIdFromSlug(params.slug))

	let data

	try{
		const response = await getSmakById({id})
		data = JSON.parse(response)

		const correctSlug = getSmakSlug(data)

		// check whether the current URL's readable portion matches the post's actual slug
		if(correctSlug !== params.slug){
			// if not, redirect to the correct URL
			const redirectUrl = `/smaki/${correctSlug}`
			await redirect(redirectUrl, RedirectType.replace)
		}
	} catch(e) {
		// this is a hack to make redirects work from within a try/catch block
		// shout out to @jeengbe on github for the tip
		// https://github.com/vercel/next.js/issues/49298#issuecomment-1537433377
		if(isRedirectError(e)){
			throw e
		}

		// if the post doesn't exist, return the "not found" 404 page
		notFound()
	}

	const {
		// id,
		title,
		smak,
		description,
		price,
		skladniki,
		discountPercentage,
		promotionText
	} = data

	let discountAmount = 0
	let finalPrice = price

	if(discountPercentage){
		discountAmount = price * discountPercentage / 100
		finalPrice = price - discountAmount
	}

	const initialFormattedPrice = (price / 100).toFixed(2)
	const formattedPrice = (finalPrice / 100).toFixed(2)

	return (
		<>
			<article className='
				relative
				rounded-2xl
				flex flex-col gap-2
				lg:flex-row lg:gap-8
				lg:rounded-2xl lg:overflow-hidden
				lg:bg-white
			'>
				{/*Image*/}
				<div className='
					relative
					rounded-2xl overflow-hidden
					w-full h-[500px]
					lg:w-[450px] lg:h-[600px]
					lg:rounded-none lg:shrink-0
				'>
					<Image
						className='object-cover'
						src={`/Images/Smaki/${title}.jpg`}
						alt={`Zestaw o smaku: ${title}`}
						fill
					/>
					{/*Discount*/}
					{discountPercentage &&
						<div
							className={`
								flex justify-center items-center
								absolute
								w-8 h-8
								right-6 bottom-6
								lg:right-auto lg:bottom-auto
								lg:left-6 lg:top-6
							`}
						>
							<span className='
								whitespace-nowrap
								transition
								px-32 py-1
								text-white
								text-[0.75rem] lg:text-sm
								-rotate-45
								bg-alert
							'>
								Zniżka {discountPercentage}%
							</span>
						</div>
					}
					{/*Promotion text*/}
					{promotionText && !discountPercentage &&
						<div
							className={`
								flex justify-center items-center
								absolute
								w-8 h-8
								right-4 bottom-4
								lg:right-auto lg:bottom-auto
								lg:left-4 lg:top-4
							`}
						>
							<span className='
								transition
								px-32 py-1
								text-white
								text-[0.75rem] lg:text-sm
								-rotate-45
								bg-success
							'>
								{promotionText}
							</span>
						</div>
					}
				</div>

				{/*Right block on the lg screen*/}
				<div className='flex flex-col gap-2 lg:gap-4 justify-center'>
					{/*Title and taste*/}
					<div className='
						p-4
						flex flex-col 
						justify-center items-center 
						bg-white 
						rounded-2xl
						lg:bg-transparent lg:items-start
						lg:p-0
					'>
						<h1 className='text-[1.5rem]'>{title}</h1>
						<div className='flex justify-center items-center gap-2'>
							<h2 className='text-gray-400 text-sm'>Smak: <span>{smak}</span></h2>
						</div>
					</div>
					{/*Price*/}
					<div className='
						p-4
						flex 
						gap-0 lg:gap-2
						flex-col lg:flex-row
						bg-white 
						rounded-2xl
						justify-center items-center
						lg:justify-start lg:items-center
						lg:bg-transparent 
						lg:p-0
					'>
						<h3 className='text-[1.5rem]'>{formattedPrice} zł</h3>
						{discountPercentage && <span className='order-first lg:order-last text-white text-sm line-through flex justify-center items-center bg-alert rounded-2xl px-2 py-1'>{initialFormattedPrice} zł</span>}
					</div>
					{/*Add to cart button*/}
					<AddToCartButton id={id} className='lg:order-last flex gap-2 justify-center items-center lg:w-fit'/>
					{/*Description*/}
					<div className='
						p-6
						flex flex-col gap-1
						bg-white 
						rounded-2xl
						lg:bg-transparent lg:items-start
						lg:p-0
						max-w-[800px]
					'>
						<p className='text-gray-400 text-sm flex gap-2 items-center'><MdOutlineDescription/>Opis:</p>
						<h4 className='whitespace-pre-wrap'>{description}</h4>
					</div>
					{/*Components/Skladniki*/}
					<div className='
						p-6
						flex flex-col gap-2
						bg-white 
						rounded-2xl
						lg:bg-transparent lg:items-start
						lg:p-0
						lg:max-w-[550px]
					'>
						<p className='text-gray-400 text-sm flex gap-2 items-center'><AiOutlineUnorderedList/>Składniki:</p>
						<ListOfComponents items={skladniki}/>
					</div>
				</div>
			</article>
			<SimilarByTaste smak={smak} excludedId={id}/>
		</>
	)
}