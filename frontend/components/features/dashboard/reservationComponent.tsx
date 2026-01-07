'use client'
import React from "react";
import Image from "next/image";


interface ReservationComponentProps {
    option: 1 | 2 | 3;
    title?: string;
    description?: string;
    imageUrl?: string;
}

const ReservationComponent: React.FC<ReservationComponentProps> = ({
    option = 1,
    title = "hoteles grupo mundo maya",
    description = "Aventúrate en un viaje inolvidable por el sureste mexicano.",
    imageUrl = "/images/686d5354c468605f89c569ae_calidad 5.jpg"
}) => {
    // Renderizar según la opción seleccionada
    switch (option) {
        case 1:
            return <Option1 title={title} description={description} imageUrl={imageUrl} />;
        case 2:
            return <Option2 title={title} description={description} imageUrl={imageUrl} />;
        case 3:
            return <Option3 title={title} description={description} imageUrl={imageUrl} />;
        default:
            return <Option1 title={title} description={description} imageUrl={imageUrl} />;
    }
};

// Componente interno para Opción 1
const Option1: React.FC<{ title: string; description: string; imageUrl: string }> = ({
    title,
    description,
    imageUrl
}) => {
    return (
        <div className="relative h-96 md:h-[400px] lg:h-[865px] overflow-hidden">
            <Image
                className="object-cover w-full h-full"
                alt="Imagen de Hoteles GMM"
                src={imageUrl}
                width={2000}
                height={2000}
                priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
                <p className="uppercase font-bold text-3xl md:text-5xl lg:text-6xl mb-4">
                    {title}
                </p>
                <p className="font-light text-base md:text-xl lg:text-2xl max-w-2xl mb-8">
                    {description}
                </p>
                <div className="flex gap-4">
                    <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition duration-300">
                        Reservar ahora
                    </button>
                    <button className="px-6 py-3 bg-transparent border-2 border-white hover:bg-white/10 text-white font-medium rounded-lg transition duration-300">
                        Ver hoteles
                    </button>
                </div>
            </div>
        </div>
    );
};

// Componente interno para Opción 2
const Option2: React.FC<{ title: string; description: string; imageUrl: string }> = ({
    title,
    description,
    imageUrl
}) => {
    return (
        <div
            className="relative h-96 md:h-[400px] lg:h-[865px] bg-cover bg-center bg-no-repeat"
            style={{
                backgroundImage: `url('${imageUrl}')`
            }}
        >
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
                <p className="uppercase font-bold text-3xl md:text-5xl lg:text-6xl mb-4">
                    {title}
                </p>
                <p className="font-light text-base md:text-xl lg:text-2xl max-w-2xl mb-8">
                    {description}
                </p>
                <div className="border border-white backdrop-blur-sm rounded-xl p-6 md:p-8 shadow-lg max-w-4xl w-full"
                    style={{
                        backgroundColor: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.6))')`
                    }}
                >
                    <p className="uppercase pb-5 font-bold">¿Qué destino descubriras hoy?</p>
                    <div className="grid md:grid-cols-5 gap-4">
                        <div>
                            <label className="block text-sm font-medium text-white mb-1">Check-in</label>
                            <input
                                type="date"
                                className="w-full p-3 border text-black border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-white mb-1">Check-out</label>
                            <input
                                type="date"
                                className="w-full p-3 border text-black border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            />
                        </div>
                        <div className="">
                            <label className="block text-sm font-medium text-white mb-1">Adultos</label>
                            <div className="relative flex items-center max-w-[9rem] shadow-xs rounded-base">
                                <button type="button" id="decrement-button" 
                                        data-input-counter-decrement="quantity-input-adult" 
                                        className="text-body bg-neutral-secondary-medium box-border border border-default-medium hover:bg-neutral-tertiary-medium hover:text-heading focus:ring-4 focus:ring-neutral-tertiary font-medium leading-5 rounded-s-base text-sm px-3 focus:outline-none h-10">
                                    <svg className="w-4 h-4 text-heading" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14" />
                                    </svg>
                                </button>
                                <input type="text" id="quantity-input-adult" data-input-counter aria-describedby="helper-text-explanation" className="border-x-0 h-10 placeholder:text-heading text-center text-black w-full bg-neutral-secondary-medium border-default-medium py-2.5 placeholder:text-body" placeholder="0" />
                                <button type="button" id="increment-button" 
                                        data-input-counter-increment="quantity-input-adult" 
                                        className="text-body bg-neutral-secondary-medium box-border border border-default-medium hover:bg-neutral-tertiary-medium hover:text-heading focus:ring-4 focus:ring-neutral-tertiary font-medium leading-5 rounded-e-base text-sm px-3 focus:outline-none h-10">
                                    <svg className="w-4 h-4 text-heading" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14m-7 7V5" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                        <div className="">
                            <label className="block text-sm font-medium text-white mb-1">Niños</label>
                            <div className="relative flex items-center max-w-[9rem] shadow-xs rounded-base">
                                <button type="button" id="decrement-button" 
                                        data-input-counter-decrement="quantity-input-ninos" 
                                        className="text-body bg-neutral-secondary-medium box-border border border-default-medium hover:bg-neutral-tertiary-medium hover:text-heading focus:ring-4 focus:ring-neutral-tertiary font-medium leading-5 rounded-s-base text-sm px-3 focus:outline-none h-10">
                                    <svg className="w-4 h-4 text-heading" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14" />
                                    </svg>
                                </button>
                                <input type="text" id="quantity-input-ninos" data-input-counter aria-describedby="helper-text-explanation" className="border-x-0 h-10 placeholder:text-heading text-center text-black w-full bg-neutral-secondary-medium border-default-medium py-2.5 placeholder:text-body" placeholder="0" />
                                <button type="button" id="increment-button" 
                                        data-input-counter-increment="quantity-input-ninos" 
                                        className="text-body bg-neutral-secondary-medium box-border border border-default-medium hover:bg-neutral-tertiary-medium hover:text-heading focus:ring-4 focus:ring-neutral-tertiary font-medium leading-5 rounded-e-base text-sm px-3 focus:outline-none h-10">
                                    <svg className="w-4 h-4 text-heading" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14m-7 7V5" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                        <div className="flex items-end">
                            <button className="w-full p-3 bg-teal-800 hover:bg-teal-500 text-white font-medium rounded-lg transition duration-300 h-[52px]">
                                Reservar
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

// Componente interno para Opción 3
const Option3: React.FC<{ title: string; description: string; imageUrl: string }> = ({
    title,
    description,
    imageUrl
}) => {
    return (
        <div className="relative h-96 md:h-[400px] lg:h-[865px] overflow-hidden">
            <div className="absolute inset-0 transform hover:scale-105 transition-transform duration-700">
                <Image
                    className="object-cover w-full h-full"
                    alt="Imagen de Hoteles GMM"
                    src={imageUrl}
                    fill
                    sizes="100vw"
                    style={{ objectFit: 'cover' }}
                    priority
                />
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent"></div>
            <div className="absolute inset-0 flex flex-col md:flex-row">
                <div className="flex-1 flex flex-col justify-center text-white p-6 md:p-12 lg:p-16">
                    <p className="uppercase font-bold text-3xl md:text-4xl lg:text-6xl mb-4">
                        {title}
                    </p>
                    <p className="font-light text-base md:text-xl lg:text-2xl max-w-xl">
                        {description}
                    </p>
                </div>
                <div className="flex-1 flex items-center justify-center p-6 md:p-12">
                    <div className="bg-white rounded-2xl shadow-2xl p-6 md:p-8 w-full max-w-md">
                        <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
                            Reserva tu estadía
                        </h3>
                        <form className="space-y-4">
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Check-in</label>
                                    <input
                                        type="date"
                                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Check-out</label>
                                    <input
                                        type="date"
                                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                                    />
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Adultos</label>
                                    <select className="w-full p-3 border border-gray-300 rounded-lg">
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4+</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Niños</label>
                                    <select className="w-full p-3 border border-gray-300 rounded-lg">
                                        <option>0</option>
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3+</option>
                                    </select>
                                </div>
                            </div>
                            <button
                                type="button"
                                className="w-full p-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold rounded-lg transition duration-300 shadow-lg hover:shadow-xl"
                            >
                                Buscar disponibilidad
                            </button>
                            <p className="text-xs text-gray-500 text-center mt-4">
                                Mejor precio garantizado • Cancelación gratuita
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReservationComponent;