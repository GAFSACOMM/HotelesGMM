'use client'

import NavbarComponent from "../../components/layouts/dashboard/navbarComponent"
import ReservationComponent from "../../components/features/dashboard/reservationComponent"
import OurPackageComponent from "../../components/features/dashboard/ourPackageComponent"
import FooterComponent from "../../components/layouts/dashboard/footerComponent"
import AdditionalInformationComponent from "../../components/features/dashboard/additionalInformationComponent"
import VideoBandComponent from "../../components/features/dashboard/videoBandComponent"
import TextOverImageComponent from "../../components/ui/images/textOverImageComponent"

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

                <TextOverImageComponent
                    image_src="/images/686da02b415d79e07d3ebc16_tututututu.jpg"
                    image_alt="Estancia"
                    image_black={false}
                    over_text="Tu estancia entre lujo y naturaleza,TE está esperando..."
                    vertical_position="top" 
                    horizontal_position="left" 
                    text_align="left"
                />

                <div className="relative overflow-hidden">
                    <div className="parallax-container inset-0 absolute h-[60vh] md:h-[100vh]">
                        <SimpleParallax scale={1.3}>
                            <Image
                                src="/images/68685657cd9b8869fc7e110d_23.png"
                                alt="Alberca"
                                fill
                                style={{ objectFit: 'cover' }}
                            />
                        </SimpleParallax>
                    </div>
                    <div className="relative z-10 flex flex-col justify-start min-h-screen px-4 py-12 text-white">
                        <div className="max-w-7xl w-full">
                            <p className="uppercase text-6xl font-extrabold ">
                                comparte momentos con tus seres queridos
                            </p>
                        </div>
                    </div>
                </div>

                <div className="">
                    <AdditionalInformationComponent />
                </div>

                <TextOverImageComponent 
                image_src="/images/686c21caae5f50747ff362ab_nvcxmnvmxnc.png"
                image_alt="Alberca"
                image_black={true}
                over_text="¿qué destino descrubriras hoy?"
                over_button_disable={true}
                over_button_text="Reserva Ahora"
                horizontal_position="center"
                vertical_position="bottom"
                text_align="center"
                size_content_text="w-full mb-20"
                text_size="text-6xl"
                />

                <div className="">
                    <VideoBandComponent />
                </div>
            </div>

            <FooterComponent />
        </div>
    )
}

export default Page