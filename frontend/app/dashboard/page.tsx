import NavbarComponent from "../../components/layouts/navbarComponent"
import CarouselComponent from "../../components/features/dashboard/carouselComponent"
import { Carousel } from "flowbite-react"
import Image from "next/image"

const Page: React.FC = () => {

    return (
        <div className="relative">
            {/* Navbar fijo */}
            <div className="fixed top-0 right-0 left-0 z-50">
                <nav className="bg-neutral-primary w-full border-b border-default">
                    <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                        <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
                            <span className="self-center text-xl text-heading font-semibold whitespace-nowrap">Design</span>
                        </a>
                        <div className="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                            <button type="button" className="flex text-sm bg-neutral-primary rounded-full md:me-0 focus:ring-4 focus:ring-neutral-tertiary" id="user-menu-button" aria-expanded="false" data-dropdown-toggle="user-dropdown" data-dropdown-placement="bottom">
                                <span className="sr-only">Open user menu</span>
                                <Image width={100} height={100} className="w-8 h-8 rounded-full" src="/docs/images/people/profile-picture-5.jpg" alt="user photo" />
                            </button>

                            <div className="z-50 hidden bg-neutral-primary-medium border border-default-medium rounded-base shadow-lg w-44" id="user-dropdown">
                                <div className="px-4 py-3 text-sm border-b border-default">
                                    <span className="block text-heading font-medium">Joseph McFall</span>
                                    <span className="block text-body truncate">name@flowbite.com</span>
                                </div>
                                <ul className="p-2 text-sm text-body font-medium" aria-labelledby="user-menu-button">
                                    <li>
                                        <a href="#" className="inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded">Dashboard</a>
                                    </li>
                                    <li>
                                        <a href="#" className="inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded">Settings</a>
                                    </li>
                                    <li>
                                        <a href="#" className="inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded">Earnings</a>
                                    </li>
                                    <li>
                                        <a href="#" className="inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded">Sign out</a>
                                    </li>
                                </ul>
                            </div>
                            <button data-collapse-toggle="navbar-user" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-body rounded-base md:hidden hover:bg-neutral-secondary-soft hover:text-heading focus:outline-none focus:ring-2 focus:ring-neutral-tertiary" aria-controls="navbar-user" aria-expanded="false">
                                <span className="sr-only">Open main menu</span>
                            </button>
                        </div>
                        <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-user">
                            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-default rounded-base bg-neutral-secondary-soft md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-neutral-primary">
                                <li>
                                    <a href="#" className="block py-2 px-3 text-white bg-brand rounded md:bg-transparent md:text-fg-brand md:p-0" aria-current="page">Home</a>
                                </li>
                                <li>
                                    <a href="#" className="block py-2 px-3 text-heading rounded hover:bg-neutral-tertiary md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0 md:dark:hover:bg-transparent">About</a>
                                </li>
                                <li>
                                    <a href="#" className="block py-2 px-3 text-heading rounded hover:bg-neutral-tertiary md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0 md:dark:hover:bg-transparent">Services</a>
                                </li>
                                <li>
                                    <a href="#" className="block py-2 px-3 text-heading rounded hover:bg-neutral-tertiary md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0 md:dark:hover:bg-transparent">Pricing</a>
                                </li>
                                <li>
                                    <a href="#" className="block py-2 px-3 text-heading rounded hover:bg-neutral-tertiary md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0 md:dark:hover:bg-transparent">Contact</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>

            {/* Contenido principal con margen superior para compensar el navbar fijo */}
            <div className="pt-16"> {/* Ajusta este valor según la altura de tu navbar */}
                <CarouselComponent />
            </div>
        </div>
    )
}

export default Page