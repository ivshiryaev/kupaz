"use client"

import { motion } from 'framer-motion'

import React from 'react'

import Link from 'next/link'
import ContactForm from '@/components/Forms/Contact'
import Newsletter from '@/components/Forms/Newsletter'

import { BsInstagram, BsFacebook } from "react-icons/bs"

function Contact() {
	return (
		<section className='flex flex-col lg:flex-row gap-2 lg:gap-4'>
			<ContactForm/>
			<div className='flex flex-col gap-2 lg:gap-4 w-full lg:w-1/2'>
				<motion.div whileInView={{ opacity: 1, translateX: 0 }} initial={{ translateX: 50, opacity: 0 }} viewport={{ once: true }} className='flex flex-col justify-center items-center lg:items-start gap-4 p-6 lg:p-8 bg-white rounded-2xl grow'>
					<p className='text-[1.5rem]'>Przydatne linki</p>
					<div className='flex gap-4'>
						<Link target='_blank' href='https://www.instagram.com/kupaz.pl/' className='hover:shadow-lg cursor-pointer active:shadow-inner active:bg-gray-100 transition w-[3rem] h-[3rem] bg-white flex justify-center items-center rounded-full text-[1.5rem]'>
							<BsInstagram/>
						</Link>
						<Link target='_blank' href='https://www.facebook.com/kupazpl/' className='hover:shadow-lg cursor-pointer active:shadow-inner active:bg-gray-100 transition w-[3rem] h-[3rem] bg-white flex justify-center items-center rounded-full text-[1.5rem]'>
							<BsFacebook/>
						</Link>
					</div>
				</motion.div>
				<Newsletter/>
			</div>
		</section>
	)
}

export default Contact