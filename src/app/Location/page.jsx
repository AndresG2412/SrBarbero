import Image from "next/image";

// importacion desde public
import LogoH from "@/../../public/Images/LogoHorizontal.webp";
import Cita from "../../../public/Images/BtnImages/Cita.webp";
import Atras from "../../../public/Images/BtnImages/Atras.webp";

import UbiMaps from "../../../public/Images/UbiMaps.webp";

export default function page() {
    return (
        <div className='w-screen h-screen md:bg-[url(/Images/bgMD.webp)] bg-[url(/Images/bgfinal.webp)] bg-no-repeat bg-cover'>
            <Image
                src={LogoH}
                alt='Logo Horizontal'
                className='mx-auto object-cover'
                width={300}
                height={100}
            />

            <div className="flex justify-center items-center mt-10">
                <button className="border-white group hover:cursor-pointer flex items-center justify-center gap-x-3 border-r-2 pr-4 font-bold tracking-wider text-2xl">
                    <Image
                    src={Atras}
                    alt="img_button"
                    className="rotate-180 w-14 h-14"/>
                    <p className="group-hover:scale-110 group-hover:border-b-1 group-hover:border-amber-300 group-hover:duration-300 group-hover:pb-1">Volver Atras</p>
                </button>
                
                <button className="border-white group hover:cursor-pointer flex items-center justify-center gap-x-3 border-l-2 pl-4 font-bold tracking-wider text-2xl">
                    <p className="group-hover:scale-110 group-hover:border-b-1 group-hover:border-amber-300 group-hover:duration-300 group-hover:pb-1">Separar Cita</p>
                    <Image
                    src={Cita}
                    alt="img_button"
                    className="w-14 h-14"/>
                </button>
            </div>

            <Image
                src={UbiMaps}
                alt='Ubicacion en el mapa'
                className='rounded-lg mx-auto mt-10 object-cover'
                width={250}
                height={250}
            />
        </div>
    )
}
