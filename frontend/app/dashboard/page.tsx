'use client'

import NavbarComponent from "../../components/layouts/dashboard/navbarComponent"
import ReservationComponent from "../../components/features/dashboard/reservationComponent"
import OurPackageComponent from "../../components/features/dashboard/ourPackageComponent"
import SimpleParallax from "simple-parallax-js"

import Image from "next/image"

const Page: React.FC = () => {

    return (
        <div className="relative">
            {/*Barra de navegacion*/}
            <NavbarComponent />
            
            {/*Motor de reservaciones*/}
            <div className="pt-24">
                <ReservationComponent option={2}/>
            </div>
            {/* Galeria de paquetes */}
            <div className="">
                <OurPackageComponent />
            </div> 

            {/*Imagen estancia*/}
            <SimpleParallax scale={1.3}>
                <Image src={"/images/686da02b415d79e07d3ebc16_tututututu.jpg"} alt="" width={3000} height={1500}/>
            </SimpleParallax>
            
            {/*Imagen alberca*/}
            <SimpleParallax scale={1.3}>
                <Image src={"/images/68685657cd9b8869fc7e110d_23.png"} alt="" width={3000} height={2000}/>
            </SimpleParallax>

            {/*Informacion adicional*/}

            {/*Pregunta destino*/}

            {/*Mas contenido*/}

            {/*Footer */}

        </div>
    )
}

export default Page