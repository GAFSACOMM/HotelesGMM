'use client'

interface ComponentProps {

}

const VideoBandComponent: React.FC<ComponentProps> = ({

}) => {
    return (
        <div className="px-4 md:px-8 lg:px-20 py-12">
            <div className="grid grid-cols-4">
                <div className="uppercase text-center flex items-center mx-auto">
                    <p className="text-center text-gray-600 text-5xl font-bold">más contenido relacionado...</p>
                </div>
                <div className="">
                    <iframe width="400" height="250" 
                        src="https://www.youtube.com/embed/WoqSJmJGscU"
                        title="Anuncia ‘Grupo Mundo Maya’ relanzamiento de marca comercial en el Hotel Tulum Aeropuerto"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen>
                    </iframe>
                </div>
                <div className="">
                    <iframe width="400" height="250" 
                        src="https://www.youtube.com/embed/UdwyRzYQvB4"
                        title="Grupo Mundo Maya: turismo y cultura que transforman el sureste | Punto Ciego"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen>
                    </iframe>

                </div>
                <div className="">
                    <iframe width="400" height="250" 
                    src="https://www.youtube.com/embed/bydhvCF3utE" 
                    title="Nace Grupo Mundo Maya, promotor del turismo en México" 
                    frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    referrerPolicy="strict-origin-when-cross-origin" 
                    allowFullScreen></iframe>
                </div>
            </div>



        </div>
    )
}

export default VideoBandComponent