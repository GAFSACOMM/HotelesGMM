import Image from "next/image";
import React from "react";

interface ComponentProps {
}

const NavbarComponent: React.FC<ComponentProps> = () => {
    return (
        <nav className="fixed top-0 right-0 left-0 z-50 bg-black h-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
                <div className="flex items-center justify-between h-full">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <a href="#" className="block">
                            <Image 
                                className="w-auto h-20 object-contain" 
                                alt="Logo GMM" 
                                src="/images/Copia-de-Hoteles-general-01.png" 
                                width={180} 
                                height={80} 
                            />
                        </a>
                    </div>

                    {/* Menú desktop */}
                    <div className="hidden md:flex items-center space-x-8">
                        <a href="#" className="text-white hover:text-teal-500 transition-colors duration-300 text-sm font-medium">
                            Inicio
                        </a>
                        <a href="#" className="text-white hover:text-teal-500 transition-colors duration-300 text-sm font-medium">
                            ¿Quiénes Somos?
                        </a>
                        <a href="#" className="text-white hover:text-teal-500 transition-colors duration-300 text-sm font-medium">
                            Promociones
                        </a>
                        <a href="#" className="text-white hover:text-teal-500 transition-colors duration-300 text-sm font-medium">
                            Paquetes de verano
                        </a>
                        <a href="#" className="text-white hover:text-teal-500 transition-colors duration-300 text-sm font-medium">
                            Hoteles
                        </a>
                        <button className="bg-teal-700 hover:bg-teal-600 text-white font-medium py-2 px-4 rounded-full transition-all duration-300 ease-in-out transform hover:scale-105">
                            Contactános
                        </button>
                    </div>

                    {/* Menú móvil */}
                    <button
                        type="button"
                        className="md:hidden text-white p-2 focus:outline-none"
                        aria-label="Abrir menú"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default NavbarComponent;