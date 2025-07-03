'use client'

import { useEffect, useState } from 'react';
import Image from 'next/image'
import barba from './Images/barba.webp'

export default function Home() {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    return (
        <div className='md:hidden relative bg-[url(./Images/bgfinal.webp)] bg-no-repeat bg-cover h-screen'>
            <Image
                src={barba}
                alt='Barba'
                className={`w-auto h-1/5 absolute object-cover ${isMounted ? 'animate-fadeInThenMove' : 'opacity-0'}`}
                priority
            />
        </div>
    )
}