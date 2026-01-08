'use client'
import Image from "next/image"

const FooterComponent = () => {
    return (

        <footer className="bg-black">
            <div className="mx-auto w-full max-w-screen-xl p-4 pt-6 lg:py-8">
                <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                    <div className="mb-6 md:mb-0">
                        <a href="#" className="flex items-center">
                            <Image
                                className="w-15 h-24"
                                alt="Logo GMM"
                                src={"/images/Copia-de-Hoteles-general-01.png"}
                                width={200}
                                height={100}
                            />
                        </a>
                    </div>

                    <div className="flex justify-center md:justify-end md:ml-auto space-x-6">
                        <a href="#" className="text-body hover:text-heading transform hover:scale-110 transition duration-300">
                            <svg className="w-6 h-6 text-slate-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                <path fillRule="evenodd" d="M13.135 6H15V3h-1.865a4.147 4.147 0 0 0-4.142 4.142V9H7v3h2v9.938h3V12h2.021l.592-3H12V6.591A.6.6 0 0 1 12.592 6h.543Z" clipRule="evenodd" />
                            </svg>
                            <span className="sr-only">Facebook page</span>
                        </a>
                        <a href="#" className="text-body hover:text-heading transform hover:scale-110 transition duration-300">
                            <svg className="w-6 h-6 text-slate-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M13.795 10.533 20.68 2h-3.073l-5.255 6.517L7.69 2H1l7.806 10.91L1.47 22h3.074l5.705-7.07L15.31 22H22l-8.205-11.467Zm-2.38 2.95L9.97 11.464 4.36 3.627h2.31l4.528 6.317 1.443 2.02 6.018 8.409h-2.31l-4.934-6.89Z" />
                            </svg>
                            <span className="sr-only">Twitter page</span>
                        </a>
                        <a href="#" className="text-body hover:text-heading transform hover:scale-110 transition duration-300">
                            <svg className="w-7 h-7 text-slate-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                <path fill="currentColor" fillRule="evenodd" d="M3 8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8Zm5-3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H8Zm7.597 2.214a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2h-.01a1 1 0 0 1-1-1ZM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm-5 3a5 5 0 1 1 10 0 5 5 0 0 1-10 0Z" clipRule="evenodd" />
                            </svg>
                            <span className="sr-only">Instagram page</span>
                        </a>
                    </div>
                </div>
                <hr className="border-default font-extralight sm:mx-auto lg:mb-2" />
                <div className="sm:flex sm:items-center sm:justify-start gap-6">
                    <span className="text-sm font-extralight text-white text-body sm:text-center">© 2026
                        <a className="hover:font-normal"> Grupo Mundo Maya</a>.
                    </span>

                    <a href="#" className="hover:font-normal font-extralight text-sm text-white">Aviso de provacidad integral</a>
                    <a href="#" className="hover:font-normal font-extralight text-sm text-white">Politicas de reservas</a>

                </div>
            </div>
        </footer>

    )
}

export default FooterComponent