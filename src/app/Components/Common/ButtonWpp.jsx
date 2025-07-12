import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function ButtonWpp({text ,img}) {

    const phoneNumber = '3157870130';

    return (
        <button
            onClick={() => {
                const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=Hola, estoy interesado en más información sobre el servicio de Sr Barbaro.`;
                window.open(whatsappUrl, '_blank');
            }}
            
            className={`bg-linear-to-b bg-[#D2981D] to-[#3C2E09] md:py-3 py-3 rounded-lg flex items-center justify-center hover:scale-105 transition-transform duration-300 tracking-widest font-semibold text-2xl uppercase`}>
            <Image src={img} alt={text} className="inline-block mr-2" width={30} height={30}/>
            {text}
        </button>
    )
}
