'use client'
import { useEffect, useState } from 'react';
import Image from 'next/image'

import barba from './Images/barba.webp'
import letras from './Images/LetrasLogo.webp'

export default function Home() {
    const [isMounted, setIsMounted] = useState(false);
    const [showLetras, setShowLetras] = useState(false);

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
                onAnimationEnd={() => setShowLetras(true)}
            />
            <Image
                src={letras}
                alt='letras'
                className={`w-2/3 h-auto absolute object-cover top-60 left-1/2 transform -translate-x-1/2 ${showLetras ? 'animate-fadeInThenMoveBefore' : 'opacity-0'}`}
                priority
            />

            {/* colocar los botones */}
            <div className='grid grid-cols-2 gap-8 w-10/12 absolute bottom-40 left-1/2 transform -translate-x-1/2'>
                <button className={`bg-red-200 h-44 rounded-lg ${showLetras ? 'animate-fadeInThenMoveBefore' : 'opacity-0'}`}>Boton1</button>
                <button className={`bg-red-200 h-44 rounded-lg ${showLetras ? 'animate-fadeInThenMoveBefore' : 'opacity-0'}`}>Boton2</button>
                <button className={`bg-red-200 h-44 rounded-lg ${showLetras ? 'animate-fadeInThenMoveBefore' : 'opacity-0'}`}>Boton3</button>
                <button className={`bg-red-200 h-44 rounded-lg ${showLetras ? 'animate-fadeInThenMoveBefore' : 'opacity-0'}`}>Boton4</button>
            </div>

            <p className={`mi-parrafo-con-imperial absolute w-full bottom-12 text-3xl text-center left-1/2 transform -translate-x-1/2 ${showLetras ? 'animate-fadeInThenMoveBefore' : 'opacity-0'}`}>Mas que un simple corte de pelo</p>        </div>
    )
}