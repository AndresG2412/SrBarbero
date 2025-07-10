'use client'
import { useEffect, useState } from 'react';
import Image from 'next/image'

import barba from './Images/barba.webp'
import letras from './Images/LetrasLogo.webp'

import ButtonMain from './Components/Common/ButtonMain';

export default function Home() {
    const [isMounted, setIsMounted] = useState(false);
    const [isBarbaScaled, setIsBarbaScaled] = useState(false); // Nuevo estado para la primera barba
    const [showOptions, setShowOptions] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    return (
        <div className='md:bg-[url(./Images/bgMD.webp)] bg-[url(./Images/bgfinal.webp)] bg-no-repeat bg-cover'>
            <Image
                src={barba}
                alt='Barba'
                className={`absolute ${isMounted ? 'animate-fadeInThenMove' : 'opacity-0'}`}
                priority
                onAnimationEnd={() => {
                    setShowOptions(true);
                    setIsBarbaScaled(true); // Marca que la primera barba ha terminado su animación de escalado
                }}
                style={{ display: isBarbaScaled ? 'none' : 'block' }} // Oculta la barba cuando termina su animación
            />

            <div className='h-screen w-full flex flex-col items-center justify-center gap-8'>
                <div className={`flex flex-col items-center justify-center ${showOptions ? 'animate-LogoCompleto' : 'opacity-0'}`}>
                    <Image
                        src={barba}
                        alt='Barba'
                        className={`w-24`}

                        priority
                    />
                    <Image
                        src={letras}
                        alt='letras'
                        className={``}
                        priority
                    />  
                </div>

                <div className={`flex flex-col md:gap-5 gap-7 md:w-6/12 w-9/12 btns-primary ${showOptions ? 'animate-LogoCompleto' : 'opacity-0'}`}>
                    <ButtonMain text="Menu" img="/Images/BtnImages/Menu.webp"/>
                    <ButtonMain text="Ubicacion" img="/Images/BtnImages/Ubi.webp"/>
                    <ButtonMain text="WhatsApp" img="/Images/BtnImages/Wpp.webp"/>
                </div>
                
                <p className={`text-center tracking-wide font-semibold text-lg md:w-[286px] w-4/6 mx-auto ${showOptions ? 'animate-LogoCompleto' : 'opacity-0'}`}>"Barberos con muchos años de experiencia, trabajando con dedicacion para poder mejorar tu imagen ante el mundo"</p>
                
                <p className={`mi-parrafo-con-imperial w-full text-3xl text-center ${showOptions ? 'animate-LogoCompleto' : 'opacity-0'}`}>Mas que un simple corte de pelo</p>
            </div>
        </div>
    )
}