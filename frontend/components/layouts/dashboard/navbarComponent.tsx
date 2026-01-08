import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { ROUTES, EXTERNAL_LINKS } from "../../../app/constants/routes"
import { usePathname } from "next/navigation";


const NavbarComponent: React.FC = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const pathname = usePathname();

    const isActive = (path: string) => pathname === path;

    return (
        <nav className="fixed top-0 right-0 left-0 z-50 bg-black h-24">
            <div className="px-4 sm:px-6 lg:px-40 h-full">
                <div className="flex items-center justify-between h-full">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <a href={ROUTES.HOME} className="block">
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
                    <div className="hidden md:flex items-center space-x-5">
                        <Link href={ROUTES.HOME} 
                            className={`text-sm font-medium transition-colors duration-300 
                            ${
                                isActive(ROUTES.HOME) ? 'text-teal-500' : 'text-white hover:text-teal-500'
                            }`}
                        >
                            Inicio
                        </Link>
                        <a href={EXTERNAL_LINKS.ABOUT} target="_blank" className="text-white hover:text-teal-500 transition-colors duration-300 text-sm font-medium">
                            ¿Quiénes Somos?
                        </a>
                        <Link href={ROUTES.PROMOTIONS} 
                            className={`transition-colors duration-300 text-sm font-medium 
                            ${
                                isActive(ROUTES.PROMOTIONS) ? 'text-teal-500' : 'text-white hover:text-teal-500 '
                            }`}>
                            Promociones
                        </Link>
                        <Link href={ROUTES.SUMMER_PACKAGES} 
                            className={`text-white hover:text-teal-500 transition-colors duration-300 text-sm font-medium 
                            ${
                                isActive(ROUTES.SUMMER_PACKAGES)
                            }`}>
                            Paquetes de verano
                        </Link>
                        <Link href="#" className="text-white hover:text-teal-500 transition-colors duration-300 text-sm font-medium">
                            Hoteles
                        </Link>
                        <a href="https://www.facebook.com/HotelesGrupoMundoMaya" target="_blank" className="text-body hover:text-heading transform hover:scale-110 transition duration-300">
                            <svg className="w-6 h-6 text-slate-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                <path fillRule="evenodd" d="M13.135 6H15V3h-1.865a4.147 4.147 0 0 0-4.142 4.142V9H7v3h2v9.938h3V12h2.021l.592-3H12V6.591A.6.6 0 0 1 12.592 6h.543Z" clipRule="evenodd" />
                            </svg>
                            <span className="sr-only">Facebook page</span>
                        </a>
                        <a href="https://x.com/HGrupomundomaya" target="_blank" className="text-body hover:text-heading transform hover:scale-110 transition duration-300">
                            <svg className="w-6 h-6 text-slate-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M13.795 10.533 20.68 2h-3.073l-5.255 6.517L7.69 2H1l7.806 10.91L1.47 22h3.074l5.705-7.07L15.31 22H22l-8.205-11.467Zm-2.38 2.95L9.97 11.464 4.36 3.627h2.31l4.528 6.317 1.443 2.02 6.018 8.409h-2.31l-4.934-6.89Z" />
                            </svg>
                            <span className="sr-only">Twitter page</span>
                        </a>
                        <a href="https://www.instagram.com/hotelesgrupomundomaya/" target="_blank" className="text-body hover:text-heading transform hover:scale-110 transition duration-300">
                            <svg className="w-7 h-7 text-slate-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                <path fill="currentColor" fillRule="evenodd" d="M3 8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8Zm5-3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H8Zm7.597 2.214a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2h-.01a1 1 0 0 1-1-1ZM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm-5 3a5 5 0 1 1 10 0 5 5 0 0 1-10 0Z" clipRule="evenodd" />
                            </svg>
                            <span className="sr-only">Instagram page</span>
                        </a>
                        <button className="bg-teal-700 hover:bg-teal-600 text-white font-medium py-2 px-4 rounded-full transition-all duration-300 ease-in-out transform hover:scale-105">
                            Contactános
                        </button>

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
            </div>
        </nav>
    );
};

export default NavbarComponent;