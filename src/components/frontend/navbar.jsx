import React, { useState } from "react";

const Navbar = () => {
    // State for mobile menu toggle
    const [isOpen, setIsOpen] = useState(false);

    // Function to toggle mobile menu
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    // Function to close mobile menu
    const closeMenu = () => {
        setIsOpen(false);
    };

    return (
        <nav className="bg-gray-800 text-white w-full shadow-md sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo/Name */}
                    <div className="flex-shrink-0">
                        <a href="/" className="text-2xl font-bold font-mono tracking-tight">
                            M Gowrishankar
                        </a>
                        <p className="text-sm">Frontend Developer</p>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex space-x-8">
                        <a
                            href="/"
                            className="hover:text-blue-400 transition-colors duration-200"
                        >
                            Home
                        </a>
                        <a
                            href="#about"
                            className="hover:text-blue-400 transition-colors duration-200"
                        >
                            About
                        </a>
                        <a
                            href="#projects"
                            className="hover:text-blue-400 transition-colors duration-200"
                        >
                            Projects
                        </a>
                        <a
                            href="#contact"
                            className="hover:text-blue-400 transition-colors duration-200"
                        >
                            Contact
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button
                            onClick={toggleMenu}
                            className="focus:outline-none focus:ring-2 focus:ring-blue-400"
                        >
                            <svg
                                className="w-6 h-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                                ></path>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-gray-700">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        <a
                            href="#home"
                            className="block px-3 py-2 text-white hover:bg-gray-600 rounded-md"
                            onClick={closeMenu}
                        >
                            Home
                        </a>
                        <a
                            href="#about"
                            className="block px-3 py-2 text-white hover:bg-gray-600 rounded-md"
                            onClick={closeMenu}
                        >
                            About
                        </a>
                        <a
                            href="#projects"
                            className="block px-3 py-2 text-white hover:bg-gray-600 rounded-md"
                            onClick={closeMenu}
                        >
                            Projects
                        </a>
                        <a
                            href="#contact"
                            className="block px-3 py-2 text-white hover:bg-gray-600 rounded-md"
                            onClick={closeMenu}
                        >
                            Contact
                        </a>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;