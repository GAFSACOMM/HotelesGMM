'use client'
import React, { useState } from "react";
import Image from "next/image";
import SimpleParallax from "simple-parallax-js";

interface ReservationComponentProps {
    option: 1 | 2 | 3;
    title?: string;
    description?: string;
    imageUrl?: string;
}

const ReservationComponent: React.FC<ReservationComponentProps> = ({
    option = 1,
    title = "Hoteles Grupo Mundo Maya",
    description = "Aventúrate en un viaje inolvidable por el sureste mexicano.",
    imageUrl = "/images/686d5354c468605f89c569ae_calidad 5.jpg"
}) => {
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


const Option1: React.FC<{ title: string; description: string; imageUrl: string }> = ({
    title,
    description,
    imageUrl
}) => {
    return (
        <div className="relative min-h-screen">
            <Image
                className="object-cover"
                alt="Imagen de Hoteles GMM"
                src={imageUrl}
                fill
                sizes="100vw"
                priority
                style={{ objectFit: 'cover' }}
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


const Option2: React.FC<{ title: string; description: string; imageUrl: string }> = ({
    title,
    description,
    imageUrl
}) => {
    const [adults, setAdults] = useState(2);
    const [children, setChildren] = useState(0);

    const incrementAdults = () => setAdults(prev => prev + 1);
    const decrementAdults = () => setAdults(prev => Math.max(1, prev - 1));

    const incrementChildren = () => setChildren(prev => prev + 1);
    const decrementChildren = () => setChildren(prev => Math.max(0, prev - 1));

    const today = new Date().toISOString().split('T')[0];
    const tomorrow = new Date(new Date().setDate(new Date().getDate() + 1)).toISOString().split('T')[0];

    return (
        <div className="relative min-h-screen">
            <div className="absolute inset-0 h-[60vh] md:h-[100vh]">
                <Image
                    src={imageUrl}
                    alt="Fondo Hoteles GMM"
                    fill
                    priority
                    className="object-cover"
                    sizes="100vw"
                    quality={90}
                    style={{ objectFit: 'cover' }}
                    />
            </div>

            <div className="relative z-10 flex flex-col justify-center min-h-screen px-4 py-12 text-white">
                <div className="max-w-7xl mx-auto w-full">
                    <div className="text-center mb-8 md:mb-12 lg:mb-16">
                        <h1 className="uppercase font-bold text-3xl md:text-5xl lg:text-6xl mb-4 tracking-tight">
                            {title}
                        </h1>
                        <p className="font-light text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto">
                            {description}
                        </p>
                    </div>

                    <div className="backdrop-blur-md bg-black/40 border border-white/20 rounded-2xl p-6 md:p-8 lg:p-10 shadow-2xl max-w-6xl mx-auto">
                        <h2 className="uppercase pb-6 font-bold text-xl md:text-2xl lg:text-3xl text-center">
                            ¿Qué destino descubrirás hoy?
                        </h2>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 md:gap-6">
                            <div>
                                <label className="block text-sm font-medium mb-2">
                                    Check-in
                                </label>
                                <input
                                    type="date"
                                    defaultValue={today}
                                    min={today}
                                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 text-gray-800 bg-white"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium mb-2">
                                    Check-out
                                </label>
                                <input
                                    type="date"
                                    defaultValue={tomorrow}
                                    min={tomorrow}
                                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 text-gray-800 bg-white"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium mb-2">
                                    Adultos
                                </label>
                                <div className="flex items-center bg-white rounded-lg overflow-hidden border border-gray-300">
                                    <button
                                        type="button"
                                        onClick={decrementAdults}
                                        className="px-4 py-3 text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors"
                                        aria-label="Disminuir adultos"
                                    >
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14" />
                                        </svg>
                                    </button>
                                    <input
                                        type="number"
                                        value={adults}
                                        onChange={(e) => setAdults(Math.max(1, parseInt(e.target.value) || 1))}
                                        min="1"
                                        className="w-full text-center py-3 text-gray-800 bg-transparent focus:outline-none"
                                    />
                                    <button
                                        type="button"
                                        onClick={incrementAdults}
                                        className="px-4 py-3 text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors"
                                        aria-label="Aumentar adultos"
                                    >
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14m-7 7V5" />
                                        </svg>
                                    </button>
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium mb-2">
                                    Niños
                                </label>
                                <div className="flex items-center bg-white rounded-lg overflow-hidden border border-gray-300">
                                    <button
                                        type="button"
                                        onClick={decrementChildren}
                                        className="px-4 py-3 text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors"
                                        aria-label="Disminuir niños"
                                    >
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14" />
                                        </svg>
                                    </button>
                                    <input
                                        type="number"
                                        value={children}
                                        onChange={(e) => setChildren(Math.max(0, parseInt(e.target.value) || 0))}
                                        min="0"
                                        className="w-full text-center py-3 text-gray-800 bg-transparent focus:outline-none"
                                    />
                                    <button
                                        type="button"
                                        onClick={incrementChildren}
                                        className="px-4 py-3 text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors"
                                        aria-label="Aumentar niños"
                                    >
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14m-7 7V5" />
                                        </svg>
                                    </button>
                                </div>
                            </div>

                            <div className="flex items-end">
                                <button className="p-3 bg-gradient-to-r from-teal-700 to-teal-600 hover:from-teal-600 hover:to-teal-500 text-white font-semibold rounded-lg transition-all duration-300 h-[52px] transform hover:scale-[1.02] shadow-lg hover:shadow-xl">
                                    Reservar Ahora
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const Option3: React.FC<{ title: string; description: string; imageUrl: string }> = ({
    title,
    description,
    imageUrl
}) => {
    return (
        <div className="relative min-h-screen">
            <div className="absolute inset-0">
                <Image
                    className="object-cover"
                    alt="Imagen de Hoteles GMM"
                    src={imageUrl}
                    fill
                    sizes="100vw"
                    priority
                    quality={90}
                    style={{ objectFit: 'cover' }}
                />
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent"></div>
            <div className="relative z-10 flex flex-col md:flex-row min-h-screen items-center">
                <div className="flex-1 flex flex-col justify-center text-white p-6 md:p-12 lg:p-16">
                    <p className="uppercase font-bold text-3xl md:text-4xl lg:text-6xl mb-4">
                        {title}
                    </p>
                    <p className="font-light text-base md:text-xl lg:text-2xl max-w-xl">
                        {description}
                    </p>
                </div>
                <div className="flex-1 flex items-center justify-center p-6 md:p-12">
                    <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl p-6 md:p-8 w-full max-w-md transform transition-all duration-300 hover:shadow-3xl">
                        <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
                            Reserva tu estadía
                        </h3>
                        <form className="space-y-4">
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Check-in</label>
                                    <input
                                        type="date"
                                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Check-out</label>
                                    <input
                                        type="date"
                                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                    />
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Adultos</label>
                                    <select className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500">
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4+</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Niños</label>
                                    <select className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500">
                                        <option>0</option>
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3+</option>
                                    </select>
                                </div>
                            </div>
                            <button
                                type="button"
                                className="w-full p-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-[1.02]"
                            >
                                Buscar disponibilidad
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReservationComponent;