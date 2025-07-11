// import React, { useState, useEffect } from 'react';
// import { motion } from 'framer-motion';
// import { IoMdArrowBack, IoMdArrowForward } from "react-icons/io";
// import { BsChatQuote } from "react-icons/bs";
// import testimonialsData from '../utils/testimonialsData';
// import variants from '../utils/variants';


// const Testimonials = () => {
//     const [currentIndex, setCurrentIndex] = useState(0);
//     const [itemsToShow, setItemsToShow] = useState(1);

//     useEffect(() => {
//         const interval = setInterval(() => {
//             handleNext();
//         }, 20000); // Auto-play every 20 seconds

//         return () => clearInterval(interval); // Cleanup interval on component unmount
//     }, [currentIndex]);

//     useEffect(() => {
//         // Update number of items to show based on screen size
//         const handleResize = () => {
//             if (window.innerWidth >= 768) { // Medium devices and up
//                 setItemsToShow(3);
//             } else { // Small devices
//                 setItemsToShow(1);
//             }
//         };

//         handleResize(); // Initial check
//         window.addEventListener('resize', handleResize);
//         return () => window.removeEventListener('resize', handleResize);
//     }, []);

//     const handleNext = () => {
//         setCurrentIndex((prevIndex) => (prevIndex + itemsToShow) % testimonialsData.length);
//     };

//     const handlePrevious = () => {
//         setCurrentIndex((prevIndex) => (prevIndex - itemsToShow + testimonialsData.length) % testimonialsData.length);
//     };

//     const handleDotClick = (index) => {
//         setCurrentIndex(index);
//     };

//     return (
//         <section className="pt-24 pb-8 bg-black" id="testimonials">
//             <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
//                 {/* Headline and Description */}
//                 <motion.div 
//                 className="flex flex-col md:flex-row gap-4 mb-8"
//                 initial="hidden"
//                 whileInView="visible"
//                 viewport={{ amount: 0.1 }}
//                 variants={variants("bottom", 0.1)}
//                 >
//                     <div className="flex-shrink-0 bg-primary text-black text-center py-2 px-6 rounded-md">
//                         <h2 className="text-2xl font-bold">What Our Clients Say</h2>
//                     </div>
//                     <div className="md:w-2/3">
//                         <p className="text-secondary text-white md:w-1/2">
//                             Hear directly from our satisfied clients about their experience working with us.
//                         </p>
//                     </div>
//                 </motion.div>

//                 {/* Testimonials Slider */}
//                 <div className="relative mb-12">
//                     <div className="flex flex-col md:flex-row gap-4 max-w-7xl mx-auto overflow-hidden">
//                         {testimonialsData.slice(currentIndex, currentIndex + itemsToShow).map((testimonial) => (
//                             <motion.div
//                                 key={testimonial.id}
//                                 initial={{ opacity: 0, x: 50 }}
//                                 animate={{ opacity: 1, x: 0 }}
//                                 exit={{ opacity: 0, x: -50 }}
//                                 transition={{ duration: 0.5 }}
//                                 className={`w-full relative py-5 ${itemsToShow === 1 ? 'md:max-w-md' : 'md:w-1/3'} px-2`}
//                             >   <div className='absolute top-0 left-0 z-30'>
//                                     <BsChatQuote  className='size-8'/>
//                                 </div>
//                                 <div className="bg-white hover:bg-primary rounded-lg border hover:border-primary shadow-lg p-6 cursor-pointer transition-all duration-300 h-48">
//                                     <p className="text-lg font-medium mb-4">{testimonial.text}</p>
//                                     <p className="text-sm font-semibold text-gray-700">- {testimonial.author}</p>
//                                 </div>
//                             </motion.div>
//                         ))}
//                     </div>

//                     {/* Dot Navigation */}
//                     <div className="absolute mt-5 left-1/2 transform -translate-x-1/2 flex items-center space-x-5 z-10">
//                         <button
//                             onClick={handlePrevious}
//                             className=" text-black"
//                         >
//                             <IoMdArrowBack />
//                         </button>
//                         <div className="flex space-x-2">
//                             {testimonialsData.map((_, index) => (
//                                 <button
//                                     key={index}
//                                     onClick={() => handleDotClick(index)}
//                                     className={`w-3 h-3 rounded-full ${index >= currentIndex && index < currentIndex + itemsToShow ? 'bg-primary' : 'bg-gray-400'}`}
//                                 />
//                             ))}
//                         </div>
//                         <button
//                             onClick={handleNext}
//                             className="text-black"
//                         >
//                             <IoMdArrowForward />
//                         </button>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default Testimonials;



import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { IoMdArrowBack, IoMdArrowForward } from "react-icons/io";
import { BsChatQuote } from "react-icons/bs";
import testimonialsData from '../utils/testimonialsData';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  const testimonialsPerSlide = 2;

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonialsData.length);
  };

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonialsData.length) % testimonialsData.length);
  };

  useEffect(() => {
    if (!autoPlay) return;

    const interval = setInterval(() => {
      handleNext();
    }, 8000);

    return () => clearInterval(interval);
  }, [autoPlay, currentIndex]);

  const visibleTestimonials = [
    testimonialsData[currentIndex],
    testimonialsData[(currentIndex + 1) % testimonialsData.length],
  ];

  return (
    <section className="pt-28 pb-20 bg-black" id="testimonials">
      <div className="max-w-6xl mx-auto px-6 relative">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="text-4xl font-bold text-white mb-4">
            What Our Clients Say
          </h2>
          <p className="text-gray-400 text-lg">
            Hear directly from our clients about their experience working with us.
          </p>
        </motion.div>

        {/* Testimonials Container */}
        <div className="grid md:grid-cols-2 gap-8">
          <AnimatePresence mode="wait">
            {visibleTestimonials.map((testimonial, i) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative p-6 bg-white/5 backdrop-blur-md border border-white/10 rounded-xl text-white shadow-md hover:shadow-[0_0_40px_rgba(255,255,255,0.05)] hover:border-primary group"
              >
                <div className="flex items-start space-x-4">
                  <BsChatQuote className="text-primary text-2xl mt-1 opacity-80" />
                  <div>
                    <p className="text-lg leading-relaxed mb-4 z-10 relative">
                      {testimonial.text}
                    </p>
                    <p className="text-sm text-gray-300 font-semibold text-right">
                      – {testimonial.author}
                    </p>
                  </div>
                </div>
                <div className="absolute inset-0 rounded-xl bg-gradient-to-tr from-white/10 to-transparent opacity-10 pointer-events-none group-hover:opacity-20 transition-all duration-300" />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Controls */}
        <div className="mt-10 flex items-center justify-center space-x-6">
          <button onClick={handlePrevious} className="text-white text-2xl hover:text-primary">
            <IoMdArrowBack />
          </button>
          <div className="flex space-x-2">
            {testimonialsData.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                className={`w-3 h-3 rounded-full ${i === currentIndex ? 'bg-primary' : 'bg-gray-600'} transition-all`}
              />
            ))}
          </div>
          <button onClick={handleNext} className="text-white text-2xl hover:text-primary">
            <IoMdArrowForward />
          </button>
        </div>

        {/* Play / Pause Button */}
        <div className="mt-6 flex justify-center">
          <button
            onClick={() => setAutoPlay(!autoPlay)}
            className="px-4 py-2 text-sm rounded bg-primary text-black font-semibold hover:bg-lime-300 transition-all"
          >
            {autoPlay ? "Pause" : "Play"}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;