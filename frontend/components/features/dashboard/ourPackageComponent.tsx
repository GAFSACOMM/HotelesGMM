'use client'
import React from "react";
import Image from "next/image";

interface ComponentProps {

}

const OurPackageComponent: React.FC<ComponentProps> = ({

}) => {
    return (
        <div className="">
            <div className="grid lg:grid-cols-1 xl:grid-cols-2">
                <div className="mx-10 p-10 uppercase font-bold text-5xl">
                    Nuestros Paquetes de verano
                </div>
                <div className="mx-auto p-10 ">
                    <p className=" pl-20 pr-20 text-center font-light">
                        Experimenta el lujo entre la majestuosa selva maya, donde el legado ancestral y la comodidad de un hotel de cuatro estrellas se fusionan en una experiencia única. Vive
                        <label className="font-bold"> #UnVeranoEnElMundoMaya.</label>
                    </p>
                </div>
            </div>
            <div className="flex justify-center">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mx-auto w-3/4">
                    <div>
                        <Image className="h-auto mx-auto max-w-full rounded" src={"/images/PAQUETES-TURISTICOS/CALAKMUL/5 DÍAS 6 NOCHES/propuesta calakmul 2 .png"} alt={""} width={500} height={200} />
                    </div>
                    <div>
                        <Image className="h-auto mx-auto max-w-full rounded" src={"/images/PAQUETES-TURISTICOS/CALAKMUL/5 DÍAS 6 NOCHES/propuesta calakmul 2 .png"} alt={""} width={500} height={200} />
                    </div>
                    <div>
                        <Image className="h-auto mx-auto max-w-full rounded" src={"/images/PAQUETES-TURISTICOS/CALAKMUL/5 DÍAS 6 NOCHES/propuesta calakmul 2 .png"} alt={""} width={500} height={200} />
                    </div>
                    <div>
                        <Image className="h-auto mx-auto max-w-full rounded" src={"/images/PAQUETES-TURISTICOS/CALAKMUL/5 DÍAS 6 NOCHES/propuesta calakmul 2 .png"} alt={""} width={500} height={200} />
                    </div>
                    <div>
                        <Image className="h-auto mx-auto max-w-full rounded" src={"/images/PAQUETES-TURISTICOS/CALAKMUL/5 DÍAS 6 NOCHES/propuesta calakmul 2 .png"} alt={""} width={500} height={200} />
                    </div>
                    <div>
                        <Image className="h-auto mx-auto max-w-full rounded" src={"/images/PAQUETES-TURISTICOS/CALAKMUL/5 DÍAS 6 NOCHES/propuesta calakmul 2 .png"} alt={""} width={500} height={200} />
                    </div>
                    <div>
                        <Image className="h-auto mx-auto max-w-full rounded" src={"/images/PAQUETES-TURISTICOS/CALAKMUL/5 DÍAS 6 NOCHES/propuesta calakmul 2 .png"} alt={""} width={500} height={200} />
                    </div>
                    <div>
                        <Image className="h-auto mx-auto max-w-full rounded" src={"/images/PAQUETES-TURISTICOS/CALAKMUL/5 DÍAS 6 NOCHES/propuesta calakmul 2 .png"} alt={""} width={500} height={200} />
                    </div>
                    <div>
                        <Image className="h-auto mx-auto max-w-full rounded" src={"/images/PAQUETES-TURISTICOS/CALAKMUL/5 DÍAS 6 NOCHES/propuesta calakmul 2 .png"} alt={""} width={500} height={200} />
                    </div>
                    <div>
                        <Image className="h-auto mx-auto max-w-full rounded" src={"/images/PAQUETES-TURISTICOS/CALAKMUL/5 DÍAS 6 NOCHES/propuesta calakmul 2 .png"} alt={""} width={500} height={200} />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default OurPackageComponent