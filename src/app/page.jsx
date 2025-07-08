'use client'
import { useEffect, useState } from 'react';
import Image from 'next/image'

import barba from './Images/barba.webp'
import letras from './Images/LetrasLogo.webp'

export default function Home() {
    const [isMounted, setIsMounted] = useState(false);

    const [showOptions, setShowOptions] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    return (
        <div className='md:hidden relative bg-[url(./Images/bgfinal.webp)] bg-no-repeat bg-cover h-screen'>
            <Image
                src={barba}
                alt='Barba'
                className={`w-auto h-1/6 absolute object-cover ${isMounted ? 'animate-fadeInThenMove' : 'opacity-0'}`}
                priority
                onAnimationEnd={() => setShowOptions(true)}
            />

            {/* colocar los botones */}
            {/* <div className='grid grid-cols-2 gap-8 w-10/12 absolute bottom-40 left-1/2 transform -translate-x-1/2'>
                <button className={`bg-red-200 h-44 rounded-lg ${showLetras ? 'animate-fadeInThenMoveBefore' : 'opacity-0'}`}>Boton1</button>
                <button className={`bg-red-200 h-44 rounded-lg ${showLetras ? 'animate-fadeInThenMoveBefore' : 'opacity-0'}`}>Boton2</button>
                <button className={`bg-red-200 h-44 rounded-lg ${showLetras ? 'animate-fadeInThenMoveBefore' : 'opacity-0'}`}>Boton3</button>
                <button className={`bg-red-200 h-44 rounded-lg ${showLetras ? 'animate-fadeInThenMoveBefore' : 'opacity-0'}`}>Boton4</button>
            </div> */}

            {/* <div className={`${setShowOptions ? 'animate-options' : 'opacity-0'} h-screen w-full flex flex-col items-center justify-center`}>
                <div className='flex flex-col items-center justify-center'>
                    <Image
                        src={barba}
                        alt='Barba'
                        className={`w-auto h-1/6 object-cover`}
                        priority
                    />
                    
                    <Image
                        src={letras}
                        alt='letras'
                        className={`w-2/3 h-auto object-cover`}
                        priority
                    />
                </div>
                
                <div className='grid grid-cols-1 gap-8 w-10/12 btns-primary bottom-40 left-1/2 transform -translate-x-1/2'>
                    <button className={`bg-linear-to-b bg-[#D2981D] to-[#3C2E09] py-5 rounded-lg`}>Boton1</button>
                    <button className={`bg-linear-to-b bg-[#D2981D] to-[#3C2E09] py-5 rounded-lg`}>Boton2</button>
                    <button className={`bg-linear-to-b bg-[#D2981D] to-[#3C2E09] py-5 rounded-lg`}>Boton3</button>
                </div>
                
                <p className={`text-center  font-semibold text-lg w-5/6 mx-auto`}>"Barberos con muchos años de experiencia, trabajando con dedicacion para poder mejorar tu imagen ante el mundo"</p>
                
                <p className={`mi-parrafo-con-imperial w-full bottom-12 text-3xl text-center left-1/2 transform -translate-x-1/2 `}>Mas que un simple corte de pelo</p>
            </div> */}

            <div className='h-screen w-full flex flex-col items-center justify-center gap-8'>
                <div className='flex flex-col items-center justify-center'>
                    <Image
                        src={barba}
                        alt='Barba'
                        className={``}
                        priority
                    />
                    <Image
                        src={letras}
                        alt='letras'
                        className={``}
                        priority
                    />  
                </div>

                <div className='flex flex-col gap-8 w-10/12 btns-primary'>
                    <button className={`bg-linear-to-b bg-[#D2981D] to-[#3C2E09] py-5 rounded-lg`}>Boton1</button>
                    <button className={`bg-linear-to-b bg-[#D2981D] to-[#3C2E09] py-5 rounded-lg`}>Boton2</button>
                    <button className={`bg-linear-to-b bg-[#D2981D] to-[#3C2E09] py-5 rounded-lg`}>Boton3</button>
                </div>
                
                <p className={`text-center  font-semibold text-lg w-5/6 mx-auto`}>"Barberos con muchos años de experiencia, trabajando con dedicacion para poder mejorar tu imagen ante el mundo"</p>
                
                <p className={`mi-parrafo-con-imperial w-full text-3xl text-center`}>Mas que un simple corte de pelo</p>
            </div>
        </div>
    )
}