"use client"

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image'

export default function About() {
	const tech = ['Figma', 'Tailwind', 'Bootstrap', 'React', 'Next.js', 'VueJS', 'Flutter', 'GraphQL', 'Firebase', 'C', 'Java', 'Git'];
	const skills = ['UI/UX Design', 'Frontend Web Development'];
	
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
      <div className='flex flex-row w-full justify-center gap-x-20 pt-10'>
        <div className='w-2/5'>
					<Image className="" src="/img/hannah.jpg" alt="picture of Hannah" />
				</div>
				<div className='w-3/5 flex flex-col gap-y-6'>
					<p className='text-white text-8xl uppercase'>about me</p>
					<p className='text-neutral text-lg text-justify'>
						With 6 years of being involved in graphic design in academic organizations, I was able to smoothly transition into UI/UX design as I navigated by college program in BS Computer Science from the University of San Carlos. In my 4 years of academic projects, I always initiate and lead the wireframe and mock up process. Consequently, I am able to transform these designs into interactive and functioning websites through coding.  My style strongly leans on minimalism, keeping my web designs eye-catching and intuitive.
					</p>
					<div className='w-4/5 flex flex-row justify-between'>
						<div>
							<p className='text-white uppercase text-2xl'>Technologies</p>
							<ul>
								{tech.map((item, index) => (
									<li className='text-neutral text-2xl' key={index}>- {item}</li>
								))}
							</ul>
						</div>
						<div>
							<p className='text-white uppercase text-2xl'>Skills</p>
							<ul>
								{skills.map((item, index) => (
									<li className='text-neutral text-2xl' key={index}>- {item}</li>
								))}
							</ul>
						</div>
					</div>
					<div>
						<p className='text-white uppercase text-2xl'>Experience</p>
						<div className='flex flex-col'>
							<div className='flex flex-row justify-between text-neutral text-2xl'>
								<p>Frontend Developer Intern</p>
								<p>September 2023 - February 2024</p>
							</div>
							<p className='text-neutral text-2xl'>LoPhils, Inc.</p>
						</div>
					</div>					
				</div>
      </div>

			<div className='flex flex-row w-full justify-between text-white uppercase pt-6 items-baseline'>
				<p className='text-6xl'>Hannah Labana</p>
				<p className='text-3xl'>HANNAHRUTH.LABANA@GMAIL.COM</p>
				<p className='text-3xl'>
					<a
						href="https://github.com/hannahlabana"
						target="_blank"
						rel="noopener noreferrer"
					>
							GITHUB
					</a>
				</p>
				<p className='text-3xl'>
					<a
						href="https://www.linkedin.com/in/hannahlabana/"
						target="_blank"
						rel="noopener noreferrer"
					>
							LINKEDIN
					</a>
				</p>
			</div>

			{/* FOOTER */}
			<div className="pt-10 flex justify-between h-full text-base w-full text-white">
        <span>developed by me</span>
        <span>last updated by june 30, 2024</span>
      </div>

    </div>
  )
}
