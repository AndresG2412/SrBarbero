import React from 'react'
import Image from 'next/image'

export default function ButtonMain({text ,img}) {
    return (
        <button className={`bg-linear-to-b bg-[#D2981D] to-[#3C2E09] md:py-3 py-3 rounded-lg flex items-center justify-center hover:scale-105 transition-transform duration-300 tracking-widest font-semibold text-2xl uppercase`}>
            <Image src={img} alt={text} className="inline-block mr-2" width={30} height={30}/>
            {text}
        </button>
    )
}
