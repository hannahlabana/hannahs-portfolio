"use client"

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image'

export default function Home() {
  return (
    <div className='h-screen flex flex-col w-full items-center gap-y-16 px-24 py-12'>
      {/* NAVIGATION */}
      <div className="w-full">
        <div className='flex justify-between h-full text-base'>
          <span className='hover:text-neutral hover:cursor-pointer'>
            <Link
              href={{
                pathname: "/",
              }}
            >
              @hannahlabana
            </Link>
          </span>
          <span className='text-2xl'>✿</span>
          <div className='flex gap-10'>
            <span className='hover:text-neutral hover:cursor-pointer'>
              <Link 
                href={{
                  pathname: "/about",
                }}
              >
                about me
              </Link> 
            </span>
            <span className='hover:text-neutral hover:cursor-pointer'>
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

      <div className='text-9xl left w-4/5 uppercase flex items-center leading-tight font-extralight'>
        hello:&#41; i am a ui/ux designer and frontend web developer
      </div>

      <div className="flex justify-between h-full text-base w-full">
        <span>developed by me</span>
        <span>last updated by june 30, 2024</span>
      </div>
    </div>
  );
}
