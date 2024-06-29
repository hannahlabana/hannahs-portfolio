"use client"

import React, { useState } from 'react';
import Link from 'next/link';
import { FaLink } from "react-icons/fa6";	
import Image from 'next/image'

export default function Portfolio() {
	const projects = [
		{
			name: 'Kicks for Kings',
			desc: 'Online platform for Kicks for Kings, a local business in Cebu, Philippines that sells a variety of shoes.',
			img: '/img/kicksforkings.png',
			link: 'https://www.figma.com/proto/Uogn0veCmfvbCpBg8B9OGd/Kicks-for-Kings-(Online-Shop)?node-id=3-2&t=K6f9B2rCOaxXft7h-0&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=3%3A2',
		},
		{
			name: 'Masterboard Content Management System',
			desc: 'CMS for a mock entertainment agency, Masterboard.',
			img: '/img/masterboard.png',
			link: 'https://www.figma.com/proto/eZMZ634OLPByH7Rtw0WnmB/Masterboard-(CMS)?node-id=141-7865&t=dibtm6s1fKNwNcsy-0&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=141%3A7865',
		},
		{
			name: 'Enmeasure',
			desc: 'Website for a mock company, Enmeasure, that provides test development solutions and services in the Philippines and Asia.',
			img: '/img/enmeasure.png',
			link: 'https://www.figma.com/proto/wgFsYy97XLrZXEpiXQCRUs/Enmeasure-(Company-Website)?node-id=1-2&t=yn9Xc4AB1schhBZY-0&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A2',
		},
		{
			name: 'Tea Paradise POS',
			desc: 'Point-of-sale system for a local milktea business named Tea Paradise located in Liloan, Cebu',
			img: '/img/tea-paradise.png',
			link: 'https://www.figma.com/design/E4U1xNtx4RNATInbfZ4H09/Tea-Paradise?node-id=0-1&t=O7duVnWKSbt2e9xB-1',
		},

	]

  return (
    <div className="h-full bg-black px-24 py-12">
    	{/* NAVIGATION */}
      <div className="w-full">
        <div className='flex justify-between h-full text-base'>
          <span className='hover:text-neutral hover:cursor-pointer text-white'>
            <Link
              href={{
                pathname: "/",
              }}
            >
              @hannahlabana
            </Link>
          </span>
          <span className='text-2xl text-white'>✿</span>
          <div className='flex gap-10'>
            <span className='hover:text-neutral hover:cursor-pointer text-white'>
              <Link 
                href={{
                  pathname: "/about",
                }}
              >
                about me
              </Link> 
            </span>
            <span className='hover:text-neutral hover:cursor-pointer text-white'>
              <Link 
                href={{
                  pathname: "/portfolio",
                }}
              >
                portfolio
              </Link> 
            </span>
          </div>
        </div>
      </div>

			{/* BODY */}
			<div>
				<p className='text-white text-8xl uppercase pt-10'>PORTFOLIO</p>
				<div className='flex flex-wrap w-full justify-between pt-10'>
					{projects.map((project, index) => (
						<div className='text-white w-[820px]' key={index}>
							<Image className="w-[820px] h-[420px]" src={project.img} alt="project display"/>
							<div className='uppercase text-2xl flex flex-row justify-between w-full pt-4'>
								<p>{project.name}</p>
								<a
									href={project.link}
									target="_blank"
									rel="noopener noreferrer"
									className='flex flex-row items-center gap-x-2'
								>
									<span>Mock Up</span><FaLink />
								</a>
							</div>
							<p className='text-wrap text-justify text-neutral pt-1'>{project.desc}</p>
						</div>
					))}
				</div>
			</div>

			{/* FOOTER */}
			<div className="pt-10 flex justify-between h-full text-base w-full text-white">
        <span>developed by me</span>
        <span>last updated by june 30, 2024</span>
      </div>
    </div>
  )
}
