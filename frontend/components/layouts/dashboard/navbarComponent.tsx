import Image from "next/image";
import React from "react";

interface ComponentProps {
}

const NavbarComponent: React.FC<ComponentProps> = () => {
    return (
        <div className="fixed top-0 right-0 left-0 z-50">
            <nav className="bg-black w-full h-24">
                <div className="max-w-screen-xl flex items-center justify-between mx-auto px-1">
                    <a href="#" className="flex items-center">
                        <Image className="w-15 h-24" alt="Logo GMM" src={"/images/Copia-de-Hoteles-general-01.png"} width={200} height={100} />
                    </a>

                    <div className="hidden md:flex items-center justify-end flex-1 py-6" id="navbar-user">
                        <ul className="flex items-center space-x-8 rtl:space-x-reverse">
                            <li>
                                <a href="#" className="text-white hover:text-teal-600 transition-colors py-2 rounded" aria-current="page">Inicio</a>
                            </li>
                            <li>
                                <a href="#" className="text-white hover:text-teal-600 transition-colors py-2 rounded">¿Quiénes Somos?</a>
                            </li>
                            <li>
                                <a href="#" className="text-white hover:text-teal-600 transition-colors py-2 rounded">Promociones</a>
                            </li>
                            <li>
                                <a href="#" className="text-white hover:text-teal-600 transition-colors py-2 rounded">Paquetes de verano</a>
                            </li>
                            <li>
                                <a href="#" className="text-white hover:text-teal-600 transition-colors py-2 rounded">Hoteles</a>
                            </li>
                            <li>
                                <a href="#" className="text-slate-100 hover:text-slate-50 rounded-full bg-teal-800 hover:bg-teal-600 box-border border border-transparent focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 text-sm px-3 py-2 focus:outline-none transition-all duration-300 ease-in-out">
                                    Contactános
                                </a>
                            </li>
                        </ul>
                    </div>


                    {/* Menú móvil (hamburguesa)*/}
                    <button
                        type="button"
                        className="md:hidden text-white p-2"
                        aria-label="Abrir menú"
                    >
                        {/* Icono hamburguesa */}
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>
            </nav>
        </div>
    );
};

export default NavbarComponent;