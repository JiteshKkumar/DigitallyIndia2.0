// import React, { useState, useEffect } from 'react';
// import footerLogo from "../assets/footer-logo1.png";
// import { HiOutlineMenuAlt3, HiOutlineX } from "react-icons/hi";

// const Navbar = () => {
//     const [isOpen, setIsOpen] = useState(false);
//     const [activeItem, setActiveItem] = useState('');

//     const toggleMenu = () => setIsOpen(!isOpen);

//     const handleMenuClick = (name) => {
//         setActiveItem(name);
//         setIsOpen(false);
//     };

//     const menuItems = [
//         { name: 'Home', href: '#about' },
//         { name: 'Services', href: '#services' },
//         { name: 'Use Cases', href: '#use-cases' },
//         { name: 'Team', href: '#team' },
//         { name: 'Testimonials', href: '#testimonials' },
//     ];

//     useEffect(() => {
//         const sections = menuItems.map(item => document.querySelector(item.href));
//         const handleScroll = () => {
//             const scrollPosition = window.scrollY + window.innerHeight / 2;
//             let currentSection = '';

//             sections.forEach((section) => {
//                 if (section && section.offsetTop < scrollPosition && section.offsetTop + section.offsetHeight > scrollPosition) {
//                     currentSection = section.getAttribute('id');
//                 }
//             });

//             setActiveItem(menuItems.find(item => item.href === `#${currentSection}`)?.name || '');
//         };

//         window.addEventListener('scroll', handleScroll);
//         handleScroll();

//         return () => window.removeEventListener('scroll', handleScroll);
//     }, []);

//     return (
//         <nav className="fixed top-0 left-0 w-full z-50 bg-gradient-to-br from-gray-900 via-neutral-900 to-black backdrop-blur-lg shadow-2xl border-b border-neutral-800">
//             <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
//                 <a href="/">
//                     <img className="h-10 w-auto rounded-md shadow-md hover:scale-105 transition-transform duration-300" src={footerLogo} alt="Logo" />
//                 </a>

//                 <div className="hidden md:flex items-center space-x-6">
//                     {menuItems.map((item, index) => (
//                         <a
//                             key={index}
//                             href={item.href}
//                             onClick={() => handleMenuClick(item.name)}
//                             className={`text-white text-sm font-semibold px-4 py-2 rounded-lg transition-all duration-300 bg-gradient-to-tr from-neutral-800 to-black/80 hover:from-indigo-600 hover:to-pink-600 hover:text-white ${
//                                 activeItem === item.name ? 'bg-gradient-to-tr from-indigo-600 to-pink-600 shadow-inner text-white' : ''
//                             }`}
//                         >
//                             {item.name}
//                         </a>
//                     ))}
//                     <a
//                         href="#contact"
//                         className="ml-4 px-5 py-2 bg-gradient-to-tr from-pink-500 to-indigo-500 text-white font-semibold rounded-full shadow-xl hover:brightness-110 transition-all"
//                     >
//                         Request a Quote
//                     </a>
//                 </div>

//                 <div className="md:hidden">
//                     <button onClick={toggleMenu} className="text-white hover:text-white">
//                         {isOpen ? <HiOutlineX className="h-6 w-6" /> : <HiOutlineMenuAlt3 className="h-6 w-6" />}
//                     </button>
//                 </div>
//             </div>

//             {isOpen && (
//                 <div className="md:hidden bg-black/90 backdrop-blur-lg border-t border-neutral-700 py-4 px-4 space-y-4">
//                     {menuItems.map((item, index) => (
//                         <a
//                             key={index}
//                             href={item.href}
//                             onClick={() => handleMenuClick(item.name)}
//                             className={`block text-white text-base font-semibold px-4 py-2 rounded-md transition-all bg-gradient-to-r from-neutral-800 to-black/80 hover:from-indigo-500 hover:to-pink-500 ${
//                                 activeItem === item.name ? 'bg-gradient-to-r from-indigo-500 to-pink-500' : ''
//                             }`}
//                         >
//                             {item.name}
//                         </a>
//                     ))}
//                     <a
//                         href="#contact"
//                         className="block text-center px-5 py-2 bg-gradient-to-tr from-pink-500 to-indigo-500 text-white rounded-full shadow-lg hover:brightness-110 transition-all"
//                     >
//                         Request a Quote
//                     </a>
//                 </div>
//             )}
//         </nav>
//     );
// };

// export default Navbar;


import React, { useState, useEffect } from 'react';
import footerLogo from "../assets/footer-logo1.png";
import { HiOutlineMenuAlt3, HiOutlineX } from "react-icons/hi";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeItem, setActiveItem] = useState('');

    const toggleMenu = () => setIsOpen(!isOpen);

    const handleMenuClick = (name) => {
        setActiveItem(name);
        setIsOpen(false);
    };

    const menuItems = [
        { name: 'Home', href: '#about' },
        { name: 'Services', href: '#services' },
        { name: 'Use Cases', href: '#use-cases' },
        { name: 'Team', href: '#team' },
        { name: 'Testimonials', href: '#testimonials' },
    ];

    useEffect(() => {
        const sections = menuItems.map(item => document.querySelector(item.href));
        const handleScroll = () => {
            const scrollPosition = window.scrollY + window.innerHeight / 2;
            let currentSection = '';

            sections.forEach((section) => {
                if (section && section.offsetTop < scrollPosition && section.offsetTop + section.offsetHeight > scrollPosition) {
                    currentSection = section.getAttribute('id');
                }
            });

            setActiveItem(menuItems.find(item => item.href === `#${currentSection}`)?.name || '');
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll();

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className="fixed top-0 left-0 w-full z-50 bg-gradient-to-br from-gray-900 via-neutral-900 to-black backdrop-blur-lg shadow-2xl border-b border-neutral-800">
            <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
                
                {/* Glossy Logo Container */}
                <a href="/">
                    <div className="p-[1px] rounded-2xl bg-gradient-to-br from-indigo-500 via-purple-600 to-pink-500 shadow-xl hover:shadow-pink-500/40 transition-all duration-300">
                        <div className="bg-black p-1 rounded-2xl backdrop-blur-md">
                            <img
                                className="h-10 w-auto rounded-xl hover:scale-105 transition-transform duration-300"
                                src={footerLogo}
                                alt="Logo"
                            />
                        </div>
                    </div>
                </a>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center space-x-6">
                    {menuItems.map((item, index) => (
                        <a
                            key={index}
                            href={item.href}
                            onClick={() => handleMenuClick(item.name)}
                            className={`text-white text-sm font-semibold px-4 py-2 rounded-lg transition-all duration-300 bg-gradient-to-tr from-neutral-800 to-black/80 hover:from-indigo-600 hover:to-pink-600 hover:text-white ${
                                activeItem === item.name ? 'bg-gradient-to-tr from-indigo-600 to-pink-600 shadow-inner text-white' : ''
                            }`}
                        >
                            {item.name}
                        </a>
                    ))}
                    <a
                        href="#contact"
                        className="ml-4 px-5 py-2 bg-gradient-to-tr from-pink-500 to-indigo-500 text-white font-semibold rounded-full shadow-xl hover:brightness-110 transition-all"
                    >
                        Request a Quote
                    </a>
                </div>

                {/* Mobile Toggle */}
                <div className="md:hidden">
                    <button onClick={toggleMenu} className="text-white hover:text-white">
                        {isOpen ? <HiOutlineX className="h-6 w-6" /> : <HiOutlineMenuAlt3 className="h-6 w-6" />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-black/90 backdrop-blur-lg border-t border-neutral-700 py-4 px-4 space-y-4">
                    {menuItems.map((item, index) => (
                        <a
                            key={index}
                            href={item.href}
                            onClick={() => handleMenuClick(item.name)}
                            className={`block text-white text-base font-semibold px-4 py-2 rounded-md transition-all bg-gradient-to-r from-neutral-800 to-black/80 hover:from-indigo-500 hover:to-pink-500 ${
                                activeItem === item.name ? 'bg-gradient-to-r from-indigo-500 to-pink-500' : ''
                            }`}
                        >
                            {item.name}
                        </a>
                    ))}
                    <a
                        href="#contact"
                        className="block text-center px-5 py-2 bg-gradient-to-tr from-pink-500 to-indigo-500 text-white rounded-full shadow-lg hover:brightness-110 transition-all"
                    >
                        Request a Quote
                    </a>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
