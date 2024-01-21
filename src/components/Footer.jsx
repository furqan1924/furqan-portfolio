import { IMAGES } from "./images"

const Footer = () => {
    return (
        <>
            <footer className="bg-black  shadow dark:bg-gray-900 ">
                <div className=" w-full max-w-screen-xl mx-auto p-4 md:py-8">
                    <div className="sm:flex sm:items-center sm:justify-between">
                        <a href="https://flowbite.com/" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                            <img src={IMAGES.image2} className="h-8 w-10 rounded-xl" alt="Furqan Portfoio Logo" />
                            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
                        </a>
                        <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-white sm:mb-0 dark:text-gray-400">
                            <li>
                                <a href="/about" className="hover:underline me-4 md:me-6">About</a>
                            </li>
                            <li>
                                <a href="/service" className="hover:underline me-4 md:me-6">Services</a>
                            </li>
                            <li>
                                <a href="/portfolio" className="hover:underline me-4 md:me-6">Portfolio</a>
                            </li>
                            <li>
                                <a href="contact" className="hover:underline">Contact</a>
                            </li>
                        </ul>
                    </div>
                    <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                    <span className="block text-sm text-white sm:text-center dark:text-gray-400">© 2024 Muhammad Furqan <a href="https://flowbite.com/" className="hover:underline"></a>. All Rights Reserved.</span>
                </div>
            </footer>

        </>
    )
}

export default Footer