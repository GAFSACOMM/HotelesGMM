'use client'
import React from "react";
import Image from "next/image";

interface ComponentProps {

}

const OurPackageComponent: React.FC<ComponentProps> = () => {

    const images = Array(10).fill("/images/PAQUETES-TURISTICOS/CALAKMUL/5 DÍAS 6 NOCHES/propuesta calakmul 2 .png");

    return (
        <div className="px-4 md:px-8 lg:px-20 py-12">

            <div className="grid lg:grid-cols-2 gap-8 mb-12">
                <div className="flex items-center">
                    <h1 className="text-3xl md:text-4xl lg:text-5xl px-28 font-bold uppercase leading-tight">
                        Nuestros Paquetes de verano
                    </h1>
                </div>
                <div className="flex items-center">
                    <p className="text-lg md:text-xl text-gray-700 px-20 text-center font-light">
                        Experimenta el lujo entre la majestuosa selva maya, donde el legado ancestral y la comodidad de un hotel de cuatro estrellas se fusionan en una experiencia única. Vive
                        <span className="font-bold text-teal-700"> #UnVeranoEnElMundoMaya.</span>
                    </p>
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-10 lg:px-20 auto-rows-fr">
                {images.map((src, index) => (
                    <div key={index} className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                        <div className="relative h-64 md:h-72">
                            <Image
                                className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
                                src={src}
                                alt={`Paquete turístico ${index + 1}`}
                                fill
                                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                            />

                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                                <div className="p-4 text-white">
                                    <h3 className="text-lg font-semibold">Paquete {index + 1}</h3>
                                    <p className="text-sm">Descubre más detalles</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}


                <nav aria-label="Page navigation example">
                    <div className="inline-flex rounded-base shadow-xs -space-x-px" role="group">
                        <button data-tooltip-target="tooltip-previous" type="button" className="inline-flex items-center justify-center text-body bg-neutral-secondary-medium rounded-s-base box-border border border-default-medium hover:bg-neutral-tertiary-medium hover:text-heading focus:ring-3 focus:ring-neutral-tertiary leading-5 w-9 h-9 focus:outline-none">
                            <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m15 19-7-7 7-7" /></svg>
                        </button>
                        <div id="tooltip-previous" role="tooltip" className="absolute z-10 invisible inline-block px-3 py-2 text-sm leading-4 font-medium text-white transition-opacity duration-300 bg-dark rounded-base shadow-xs opacity-0 tooltip">
                            Previous
                            <div className="tooltip-arrow" data-popper-arrow></div>
                        </div>
                        <button type="button" className="inline-flex shrink-0 text-sm items-center justify-center text-body bg-neutral-secondary-medium box-border border border-default-medium hover:bg-neutral-tertiary-medium hover:text-heading leading-5 px-3 h-9 focus:outline-none">
                            1 of 99
                        </button>
                        <button data-tooltip-target="tooltip-next" type="button" className="inline-flex items-center justify-center text-body bg-neutral-secondary-medium rounded-e-base box-border border border-default-medium hover:bg-neutral-tertiary-medium hover:text-heading focus:ring-3 focus:ring-neutral-tertiary leading-5 w-9 h-9 focus:outline-none">
                            <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m9 5 7 7-7 7" /></svg>
                        </button>
                        <div id="tooltip-next" role="tooltip" className="absolute z-10 invisible inline-block px-3 py-2 text-sm leading-4 font-medium text-white transition-opacity duration-300 bg-dark rounded-base shadow-xs opacity-0 tooltip">
                            Next
                            <div className="tooltip-arrow" data-popper-arrow></div>
                        </div>
                    </div>
                </nav>


            </div>
        </div>
    )
}

export default OurPackageComponent;