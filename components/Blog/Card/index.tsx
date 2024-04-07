import Link from 'next/link'
import Image from 'next/image'

import { countDateDifference } from '@/lib/utils'

function Card({
    title,
    subtitle,
    createdAt,
    timeToRead,
    slug
}: {
    title: string,
    subtitle: string,
    createdAt: string,
    timeToRead: number,
    slug: string
}){
    
    return (
        <Link className='bg-white flex gap-2 rounded-2xl p-6 lg:p-8 items-start shadow-black hover:shadow-lg transition-shadow' href={`/blog/${slug}`}>
            <div className='hidden lg:flex bg-white rounded-full w-[64px] h-[64px] justify-center items-center stroke-gray-50 stroke-1'>
                <Image
                    src='/logo32x34.png'
                    width={32}
                    height={34}
                    alt='logo'
                />
            </div>
            <div className='flex flex-col gap-2'>
                <time dateTime={createdAt} className='text-xs'>{countDateDifference(createdAt)}</time>
                <p className='text-xl font-semibold'>{title}</p>
                {subtitle && <p>{subtitle}</p>}
                {timeToRead && 
                    <span className='bg-gray-50 px-2 py-1 rounded-2xl w-fit text-xs'>
                        {timeToRead} {timeToRead > 4 ? 'minut' : timeToRead > 1 ? 'minuty' : 'minuta'} czytania
                    </span>
                }
            </div>
        </Link>
    )   
}

export default Card