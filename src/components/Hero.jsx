import React, { useState, useEffect } from 'react';
import LogoCarousel from './LogoCarousel';
import { motion } from 'framer-motion';
import variants from '../utils/variants';
import ContactPopup from './ContactPopup';

const Counter = ({ target }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        let start = 0;
        const end = target;
        const duration = 2000;
        const increment = (end - start) / (duration / 50);

        const timer = setInterval(() => {
            start += increment;
            if (start >= end) {
                clearInterval(timer);
                setCount(end);
            } else {
                setCount(Math.floor(start));
            }
        }, 50);

        return () => clearInterval(timer);
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

                    {/* Right Side - Spline 3D Embed */}
                    <div className="md:w-1/2 order-first md:order-last">
                        <motion.div
                            className="w-full h-[400px] md:h-[500px] rounded-md overflow-hidden"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ amount: 0.1 }}
                            variants={variants("bottom", 0.2)}
                        >
                            <iframe 
                                src="https://my.spline.design/r4xbot-rRnlJJJi8MTDrzAHBR9eTW4M/" 
                                frameBorder="0" 
                                width="100%" 
                                height="100%" 
                                allow="autoplay; fullscreen"
                                className="w-full h-full rounded-md"
                            ></iframe>
                        </motion.div>
                    </div>
                </div>

                {/* Contact Popup */}
                <ContactPopup />

                {/* Client Stats */}
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

                {/* Logo Carousel */}
                <LogoCarousel />
            </div>
        </section>
    );
};

export default Hero;
