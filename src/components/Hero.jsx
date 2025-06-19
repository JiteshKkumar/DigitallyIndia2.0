import React, { useState, useEffect } from 'react';
import BannerImg from "../assets/hero1.png";
import LogoCarousel from './LogoCarousel';
import { motion } from 'framer-motion';
import variants from '../utils/variants';
import ContactPopup from './ContactPopup';
import ContactUs from './ContactUs';

const Counter = ({ target }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        let start = 0;
        const end = target;
        const duration = 2000; // Duration of the counter animation (in milliseconds)
        const increment = (end - start) / (duration / 50); // Increment step

        const timer = setInterval(() => {
            start += increment;
            if (start >= end) {
                clearInterval(timer); // Stop when target is reached
                setCount(end); // Set to exact target number
            } else {
                setCount(Math.floor(start));
            }
        }, 50); // Update every 50ms

        return () => clearInterval(timer); // Cleanup on component unmount
    }, [target]);

    return <p className="text-4xl font-semibold text-primary">{count}+</p>;
};

const Hero = () => {
    return (
        <section className="bg-black pt-12" id='about'>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-24">

                <div className="flex flex-col md:flex-row items-center gap-6">
                    {/* Left Side - Text */}
                    <div className="md:w-1/2 mb-8 md:mb-0">
                        <div className='md:w-2/3'>
                            <motion.h1
                                className="text-4xl font-bold text-white mb-4"
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ amount: 0.1 }}
                                variants={variants("bottom", 0.2)}
                            >
                                We Don't Just Promise Growth. We Deliver It.
                            </motion.h1>
                            <motion.p
                                className="text-white mb-6"
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ amount: 0.1 }}
                                variants={variants("bottom", 0.5)}
                            >
                               Partner with digital marketing experts who understand your business goals. Our proven strategies have generated millions in revenue for ambitious brands ready to dominate their market.
                            </motion.p>
                        </div>
                        <motion.a
                            href="#contact"
                            className="inline-block px-6 py-3 bg-white text-black font-semibold rounded-md hover:bg-gray-800"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ amount: 0.1 }}
                            variants={variants("bottom", 0.7)}
                        >
                            Book a consultation
                        </motion.a>
                    </div>

                    {/* Right Side - Image */}
                    <div className="md:w-1/2 order-first md:order-last">
                        <motion.img
                            src={BannerImg}
                            alt="banner image"
                            className="w-auto h-auto ml-auto rounded-md"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ amount: 0.1 }}
                            variants={variants("bottom", 0.2)}
                        />
                    </div>
                </div>

                {/* Brand Logos Carousel */}
                
                <ContactPopup />

                {/* Client Stats Box */}
                <div className="mt-12 p-8 border-2 border-gray-300 rounded-lg shadow-lg bg-black">
                    <div className="grid md:grid-cols-4 gap-12">
                        <motion.div
                            className="flex flex-col items-center"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1 }}
                        >
                            <Counter target={232} />
                            <p className="text-lg text-gray-600">Happy Clients</p>
                        </motion.div>
                        <motion.div
                            className="flex flex-col items-center"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1 }}
                        >
                            <Counter target={521} />
                            <p className="text-lg text-gray-600">Projects</p>
                        </motion.div>
                        <motion.div
                            className="flex flex-col items-center"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1 }}
                        >
                            <Counter target={1463} />
                            <p className="text-lg text-gray-600">Hours Of Support</p>
                        </motion.div>
                        <motion.div
                            className="flex flex-col items-center"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1 }}
                        >
                            <Counter target={15} />
                            <p className="text-lg text-gray-600">Hard Workers</p>
                        </motion.div>
                    </div>
                </div>
                <LogoCarousel />
            </div>
        </section>
    );
};

export default Hero;


// import React from 'react';

// import BannerImg from "../assets/banner.png"
// import LogoCarousel from './LogoCarousel';
// import { motion } from 'framer-motion';
// import variants from '../utils/variants';
// import ContactPopup from './ContactPopup';
// import ContactUs from './ContactUs';

// const Hero = () => {
//     return (
//         <section className="bg-white pt-12" id='about'>
//             <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-24">

//                 <div className="flex flex-col md:flex-row items-center gap-6">
//                     {/* Left Side - Text */}
//                     <div
//                         className="md:w-1/2 mb-8 md:mb-0">
//                         <div className='md:w-2/3'>
//                             <motion.h1
//                                 className="text-4xl font-bold text-gray-900 mb-4"
//                                 initial="hidden"
//                                 whileInView="visible"
//                                 viewport={{ amount: 0.1 }}
//                                 variants={variants("bottom", 0.2)}
//                             >
//                                 Navigating the digital landscape for success
//                             </motion.h1>
//                             <motion.p
//                                 className="text-gray-600 mb-6"
//                                 initial="hidden"
//                                 whileInView="visible"
//                                 viewport={{ amount: 0.1 }}
//                                 variants={variants("bottom", 0.5)}
//                             >
//                                 Our digital marketing agency helps businesses grow and succeed online through a range of services including SEO, PPC, social media marketing, and content creation.
//                             </motion.p>
//                         </div>
//                         <motion.a
//                             href="#contact"
//                             className="inline-block px-6 py-3 bg-black text-white font-semibold rounded-md hover:bg-gray-800"
//                             initial="hidden"
//                             whileInView="visible"
//                             viewport={{ amount: 0.1 }}
//                             variants={variants("bottom", 0.7)}
//                         >
//                             Book a consultation
//                         </motion.a>
//                     </div>

//                     {/* Right Side - Image */}
//                     <div className="md:w-1/2 order-first md:order-last">
//                         <motion.img
//                             src={BannerImg}
//                             alt="banner image"
//                             className="w-full h-auto rounded-md"
//                             initial="hidden"
//                             whileInView="visible"
//                             viewport={{ amount: 0.1 }}
//                             variants={variants("bottom", 0.2)}
//                         />
//                     </div>
//                 </div>

//                 {/* Brand Logos Carousel */}
//                 <LogoCarousel />
//                 <ContactPopup />
//             </div>
//         </section>
//     );
// };

// export default Hero;
