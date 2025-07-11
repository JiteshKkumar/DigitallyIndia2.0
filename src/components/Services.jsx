import React from 'react';
import { servicesData } from '../utils/services';
import LinkIcon from "../assets/link-icon.png";

const Services = () => {
    return (
        <section className="pt-24 pb-20 bg-gradient-to-br from-black via-neutral-900 to-black" id="services">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* Section Header */}
                <div className="flex justify-center items-center flex-col gap-4 mb-16 text-center">
                    <div className="inline-block bg-gradient-to-r from-pink-500 to-indigo-500 text-white px-10 py-2 rounded-full shadow-md">
                        <h2 className="text-2xl font-bold tracking-wide">Our Services</h2>
                    </div>
                    <p className="text-lg text-gray-300 max-w-2xl mt-2">
                        Explore the core services we offer to help your business scale and thrive in the digital world.
                    </p>
                </div>

                {/* Service Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    {servicesData.map((service, index) => (
                        <div
                            key={index}
                            className={`rounded-3xl border border-neutral-800 bg-gradient-to-tr from-neutral-900 via-black to-neutral-800 shadow-xl p-6 md:p-8 hover:shadow-pink-600/20 transition-all duration-500 backdrop-blur-md ${service.textColor}`}
                        >
                            <div className="flex flex-col-reverse sm:flex-row items-center justify-between gap-6">
                                
                                {/* Text Section */}
                                <div className="sm:w-1/2">
                                    <h4 className="text-sm font-medium uppercase text-pink-500 mb-1 tracking-wider">
                                        #Service
                                    </h4>
                                    <h1 className="text-4xl sm:text-5xl font-extrabold mb-2">
                                        {service.title1}
                                    </h1>
                                    <h2 className="text-xl font-semibold mb-3 text-gradient bg-gradient-to-r from-pink-500 to-indigo-500 bg-clip-text text-transparent">
                                        {service.title}
                                    </h2>
                                    <p className="text-sm text-gray-300 mb-4">{service.description}</p>

                                    <a
                                        href="#"
                                        className="inline-flex items-center gap-3 text-white text-sm font-medium bg-gradient-to-r from-pink-600 to-indigo-600 px-4 py-2 rounded-full hover:scale-105 transition-transform"
                                    >
                                        <img src={LinkIcon} alt="link icon" className="w-5 h-5 rounded-full" />
                                        Learn More
                                    </a>
                                </div>

                                {/* Image Section */}
                                <div className="sm:w-1/2">
                                    <img
                                        src={service.image}
                                        alt={service.title}
                                        className="w-full h-auto rounded-xl shadow-md hover:scale-105 transition-all duration-300"
                                    />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;


// import React, { useEffect, useState } from 'react';
// import { servicesData } from '../utils/services';
// import LinkIcon from "../assets/link-icon.png";
// import { motion, AnimatePresence } from 'framer-motion';
// import variants from '../utils/variants';

// const Services = () => {
//   const [index, setIndex] = useState(0);

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setIndex((prev) => (prev + 1) % servicesData.length);
//     }, 4000);
//     return () => clearInterval(timer);
//   }, []);

//   return (
//     <section className="pt-24 pb-20 bg-gradient-to-br from-black via-neutral-900 to-black" id="services">
//       <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
//         {/* Section Header */}
//         <motion.div
//           className="flex justify-center items-center flex-col gap-4 mb-16 text-center"
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ amount: 0.2 }}
//           variants={variants("bottom", 0.3)}
//         >
//           <div className="inline-block bg-gradient-to-r from-pink-500 to-indigo-500 text-white px-10 py-2 rounded-full shadow-md">
//             <h2 className="text-2xl font-bold tracking-wide">Our Services</h2>
//           </div>
//           <p className="text-lg text-gray-300 max-w-2xl mt-2">
//             Explore the core services we offer to help your business scale and thrive in the digital world.
//           </p>
//         </motion.div>

//         {/* Animated Service Card */}
//         <div className="relative h-[500px]">
//           <AnimatePresence mode="wait">
//             <motion.div
//               key={index}
//               initial={{ rotateX: 90, opacity: 0 }}
//               animate={{ rotateX: 0, opacity: 1 }}
//               exit={{ rotateX: -90, opacity: 0 }}
//               transition={{ duration: 0.8, ease: 'easeInOut' }}
//               className="absolute inset-0"
//             >
//               <div
//                 className={`flex flex-col sm:flex-row items-center justify-between h-full p-8 md:p-12 bg-gradient-to-tr from-neutral-900 via-black to-neutral-800 shadow-xl border border-neutral-800 transition-all duration-500 backdrop-blur-md
//                   rounded-l-none rounded-r-full w-full overflow-hidden`}
//               >
//                 {/* Left Side (Text) */}
//                 <div className="sm:w-1/2 pr-6">
//                   <h4 className="text-sm font-medium uppercase text-pink-500 mb-1 tracking-wider">#Service</h4>
//                   <h1 className="text-4xl sm:text-5xl font-extrabold mb-2">
//                     {servicesData[index].title1}
//                   </h1>
//                   <h2 className="text-xl font-semibold mb-3 text-gradient bg-gradient-to-r from-pink-500 to-indigo-500 bg-clip-text text-transparent">
//                     {servicesData[index].title}
//                   </h2>
//                   <p className="text-sm text-gray-300 mb-4">{servicesData[index].description}</p>
//                   <a
//                     href="#"
//                     className="inline-flex items-center gap-3 text-white text-sm font-medium bg-gradient-to-r from-pink-600 to-indigo-600 px-4 py-2 rounded-full hover:scale-105 transition-transform"
//                   >
//                     <img src={LinkIcon} alt="link icon" className="w-5 h-5 rounded-full" />
//                     Learn More
//                   </a>
//                 </div>

//                 {/* Right Side (Image) */}
//                 <div className="sm:w-1/2 mt-6 sm:mt-0">
//                   <img
//                     src={servicesData[index].image}
//                     alt={servicesData[index].title}
//                     className="w-full h-auto rounded-xl shadow-md hover:scale-105 transition-all duration-300"
//                   />
//                 </div>
//               </div>
//             </motion.div>
//           </AnimatePresence>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Services;
