import { Carousel } from "flowbite-react"
import Image from "next/image"

const CarouselComponent: React.FC = () => {

    return (
        <Carousel className="h-96 md:h-[500px] lg:h-[600px]">
            {/* Cada imagen debe estar en un div contenedor */}
            <div className="relative h-full w-full">
                <Image
                    src="/img/parque_jaguar-26.png"
                    alt="Parque Jaguar 26"
                    fill
                    className="object-cover"
                    sizes="100vw"
                />
            </div>

            <div className="relative h-full w-full">
                <Image
                    src="/img/parque_jaguar-27.png"
                    alt="Parque Jaguar 27"
                    fill
                    className="object-cover"
                    sizes="100vw"
                />
            </div>

            <div className="relative h-full w-full">
                <Image
                    src="/img/parque_jaguar-28.png"
                    alt="Parque Jaguar 28"
                    fill
                    className="object-cover"
                    sizes="100vw"
                />
            </div>

            <div className="relative h-full w-full">
                <Image
                    src="/img/parque_jaguar-29.png"
                    alt="Parque Jaguar 29"
                    fill
                    className="object-cover"
                    sizes="100vw"
                />
            </div>

            <div className="relative h-full w-full">
                <Image
                    src="/img/parque_jaguar-31.png"
                    alt="Parque Jaguar 31"
                    fill
                    className="object-cover"
                    sizes="100vw"
                />
            </div>
        </Carousel>
    )

}

export default CarouselComponent