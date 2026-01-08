'use client'

import NavbarComponent from "../../components/layouts/dashboard/navbarComponent"
import ReservationComponent from "../../components/features/dashboard/reservationComponent"
import OurPackageComponent from "../../components/features/dashboard/ourPackageComponent"
import FooterComponent from "../../components/layouts/dashboard/footerComponent"
import AdditionalInformationComponent from "../../components/features/dashboard/additionalInformationComponent"
import VideoBandComponent from "../../components/features/dashboard/videoBandComponent"

import SimpleParallax from "simple-parallax-js"
import Image from "next/image"

const Page: React.FC = () => {

    return (
        <div className="relative">
            <NavbarComponent />

            <div className="min-h-screen">
                <div className="">
                    <ReservationComponent option={2} />
                </div>

                <div className="mt-16">
                    <OurPackageComponent />
                </div>

                <div className="relative overflow-hidden mt-16">
                    <div className="parallax-container relative h-[60vh] md:h-[100vh]">
                        <SimpleParallax scale={1.2}>
                            <Image
                                src="/images/686da02b415d79e07d3ebc16_tututututu.jpg"
                                alt="Estancia"
                                fill
                                style={{ objectFit: 'cover' }}
                            />
                        </SimpleParallax>
                    </div>
                </div>

                <div className="relative overflow-hidden">
                    <div className="parallax-container relative h-[60vh] md:h-[100vh]">
                        <SimpleParallax scale={1.3}>
                            <Image
                                src="/images/68685657cd9b8869fc7e110d_23.png"
                                alt="Alberca"
                                fill
                                style={{ objectFit: 'cover' }}
                            />
                        </SimpleParallax>
                    </div>
                </div>

                <div className="">
                    <AdditionalInformationComponent />
                </div>

                <div className="relative overflow-hidden">
                    <div className="parallax-container inset-0 absolute h-[60vh] md:h-[100vh] ">
                        <SimpleParallax scale={1.3} orientation="down">
                            <Image
                                src="/images/686c21caae5f50747ff362ab_nvcxmnvmxnc.png"
                                alt="Alberca"
                                fill
                                style={{ objectFit: 'cover' }}
                            />
                        </SimpleParallax>
                        <div className="absolute inset-0 bg-black/30"></div>
                    </div>
                    <div className="relative z-10 flex flex-col justify-end min-h-screen px-4 py-12 text-white">
                        <div className="max-w-7xl mx-auto w-full">
                            <p className="uppercase text-6xl font-extrabold text-center">¿qué destino descrubriras hoy?</p>
                            <div className="flex items-end mb-28">
                                <button className="mx-auto p-3 bg-gradient-to-r from-teal-700 to-teal-600 hover:from-teal-600 hover:to-teal-500 text-white font-semibold rounded-full transition-all duration-300 h-[52px] transform hover:scale-[1.02] shadow-lg hover:shadow-xl">
                                    Reserva Ahora
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="">
                    <VideoBandComponent/>
                </div>
            </div>

            <FooterComponent />
        </div>
    )
}

export default Page