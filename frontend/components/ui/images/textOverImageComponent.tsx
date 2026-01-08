'use client'

import SimpleParallax from "simple-parallax-js"
import Image from "next/image"

interface ComponentProps {
    image_src: string,
    image_alt: string,
    image_black?: boolean,
    over_text: string,
    text_align?: "left" | "center" | "right",
    vertical_position?: "top" | "middle" | "bottom",
    horizontal_position?: "left" | "center" | "right",
    over_button_disable?: boolean,
    over_button_text?: string,
    button_align?: "left" | "center" | "right",
    size_content_text?: string,
    text_size?: string
}

const TextOverImageComponent: React.FC<ComponentProps> = ({
    image_src = "",
    image_alt = "",
    image_black = false,
    over_text = "",
    text_align = "center",
    vertical_position = "middle",
    horizontal_position = "center",
    button_align,
    over_button_disable = false,
    over_button_text = "",
    size_content_text = "max-w-7xl",
    text_size = "text-6xl"
}) => {
    const verticalClasses = {
        "top": "justify-start",
        "middle": "justify-center", 
        "bottom": "justify-end"
    }

    const horizontalClasses = {
        "left": "items-start",
        "center": "items-center",
        "right": "items-end"
    }

    const textAlignClasses = {
        "left": "text-left",
        "center": "text-center",
        "right": "text-right"
    }

    const buttonAlignClasses = {
        "left": "justify-start",
        "center": "justify-center",
        "right": "justify-end"
    }

    return (
        <div className="relative overflow-hidden mt-16">
            <div className="parallax-container inset-0 absolute h-[60vh] md:h-[100vh]">
                <SimpleParallax scale={1.2}>
                    <Image
                        src={image_src}
                        alt={image_alt}
                        fill
                        style={{ objectFit: 'cover' }}
                    />
                </SimpleParallax>
                {image_black && (
                    <div className="absolute inset-0 bg-black/30"></div>
                )}
            </div>
            <div className={`relative z-10 flex flex-col min-h-screen px-4 py-12 text-white 
                ${verticalClasses[vertical_position]} 
                ${horizontalClasses[horizontal_position]}`}>
                
                <div className="w-full px-4">
                    <div className={`flex flex-col ${size_content_text} space-y-8`}>
                        <p className={`uppercase ${text_size} font-extrabold ${textAlignClasses[text_align]}`}>
                            {over_text}
                        </p>
                        
                        {over_button_disable && (
                            <div className={`flex ${buttonAlignClasses[button_align || horizontal_position]}`}>
                                <button className="p-3 bg-gradient-to-r from-teal-700 to-teal-600 hover:from-teal-600 hover:to-teal-500 text-white font-semibold rounded-full transition-all duration-300 h-[52px] transform hover:scale-[1.02] shadow-lg hover:shadow-xl">
                                    {over_button_text}
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TextOverImageComponent