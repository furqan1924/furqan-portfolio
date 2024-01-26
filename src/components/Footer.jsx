import { IMAGES } from "./images"
import { Link } from "react-router-dom";
const Footer = () => {
    return (
        <>
            <footer className="bg-black  shadow dark:bg-gray-900 ">
                <div className=" w-full max-w-screen-xl mx-auto p-4 md:py-8">
                    <div className="sm:flex sm:items-center sm:justify-between">
                        <Link to="/" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                            <img src={IMAGES.image2} className="h-8 w-10 rounded-xl" alt="Furqan Portfoio Logo" />
                            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Furqan</span>
                        </Link>
                        <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-white sm:mb-0 dark:text-gray-400">
                            <li>
                                <Link to="/about" className="hover:underline me-4 md:me-6">About</Link>
                            </li>
                            <li>
                                <Link to="/service" className="hover:underline me-4 md:me-6">Services</Link>
                            </li>
                            {/* <li>
                                <Link to="/portfolio" className="hover:underline me-4 md:me-6">Portfolio</a>
                            </li> */}
                            <li>
                                <Link to="contact" className="hover:underline">Contact</Link>
                            </li>
                        </ul>
                    </div>
                    <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                    <span className="block text-sm text-white sm:text-center dark:text-gray-400">© 2024 Muhammad Furqan <Link to="/" className="hover:underline"></Link>. All Rights Reserved.</span>
                </div>
            </footer>

        </>
    )
}

export default Footer