'use client'
import Image from "next/image"

interface ComponentProps {

}

const AdditionalInformationComponent: React.FC<ComponentProps> = ({

}) => {
    return (
        <div className="px-4 md:px-8 lg:px-20 py-12">
            <div className="grid grid-cols-2">
                <div className="grid grid-cols-1 my-auto">
                    <p className="uppercase text-5xl font-bold text-center">el corazón del sureste mexicano</p>
                    <div className="mt-5 mb-5 m-32">
                        <p className="text-center font-light text-gray-500">¿Por qué elegir un solo destino cuando puedes tenerlos todos?</p>
                        <p className="text-center font-light text-gray-500">Nuestra increíble red de hoteles, te abre las puertas a un mundo de maravillas arqueológicas.</p>
                    </div>
                    <a href="https://grupomundomaya.com/index.html/servicios-turisticos/index.html" target="blank"
                        className="text-danger mx-auto border-1 border-black rounded-full bg-neutral-primary border border-danger hover:bg-black hover:text-white focus:ring-4 focus:ring-neutral-tertiary font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none transition-all duration-300 ease-in-out">
                        Saber Más
                    </a>

                </div>
                <div className="">
                    <Image src={"/images/686863c67fa8a296d0981f19_1_mapa 1.png"} alt="" width={500} height={500}></Image>
                </div>
            </div>
            <div className="grid grid-cols-2">
                <div className="flex justify-end">
                    <Image src={"/images/686bf8afbace0563854adb5b_puiopi.png"} alt="" width={500} height={500}></Image>
                </div>
                <div className="grid grid-cols-1 my-auto">
                    <p className="uppercase text-5xl font-bold text-center">zonas arqueológicas</p>
                    <div className="mt-5 mb-5 m-32">
                        <p className="text-center font-light text-gray-500">Estamos ubicados a solo minutos de las principales y emblemáticas zonas arqueológicas mayas...</p>
                    </div>
                    <button type="button"
                        className="text-danger mx-auto border-1 border-black rounded-full bg-neutral-primary border border-danger hover:bg-black hover:text-white focus:ring-4 focus:ring-neutral-tertiary font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none transition-all duration-300 ease-in-out">
                        Ver zonas arqueológicas
                    </button>

                </div>
            </div>
            <div className="grid grid-cols-2">
                <div className="grid grid-cols-1 my-auto">
                    <p className="uppercase text-5xl font-bold text-center">Business class</p>
                    <div className="mt-5 mb-5 m-32">
                        <p className="text-center font-light text-gray-500">A metros del Aeropuerto Internacional de Tulum...</p>
                        <p className="text-center font-bold text-gray-500">Esta tú conexión perfecta entre negocios y paraíso.</p>
                        <p className="text-center font-light text-gray-500">Hospedate en nuestro &quot;Hotel Tulum Aeropuerto&quot;, ya sea que vengas por trabajo o estés en tránsito hacia tu próxima aventura, aquí encontrarás el descanso ideal con el toque vibrante de Tulum.</p>
                        <p className="text-center font-bold text-gray-500">&quot;Hospédate inteligente, viaja sin límites&quot;</p>
                    </div>
                    <a href="https://hotels.cloudbeds.com/es/reservation/MNljx2?currency=mxn" target="blank"
                        className="text-danger mx-auto border-1 border-black rounded-full bg-neutral-primary border border-danger hover:bg-black hover:text-white focus:ring-4 focus:ring-neutral-tertiary font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none transition-all duration-300 ease-in-out">
                        Reservar
                    </a>

                </div>
                <div className="">
                    <Image src={"/images/686c1466f0f1ba5ceafa78da_ghjkhjgkhj.png"} alt="" width={500} height={500}></Image>
                </div>
            </div>
        </div>
    )
}

export default AdditionalInformationComponent