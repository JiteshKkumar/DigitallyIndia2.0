import React, { useRef, useEffect, useState } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import ctaanimation from "../assets/ctaanimation.mp4";
import variants from '../utils/variants';

const CTA = () => {
  const cardRef = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [15, -15]);
  const rotateY = useTransform(x, [-100, 100], [-15, 15]);

  // State to check if device supports hover (mouse)
  const [isHoverSupported, setIsHoverSupported] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(hover: hover)").matches) {
      setIsHoverSupported(true);
    }
  }, []);

  const handleMouseMove = (e) => {
    if (!isHoverSupported) return; // Disable on touch devices

    const rect = cardRef.current.getBoundingClientRect();
    const offsetX = e.clientX - rect.left - rect.width / 2;
    const offsetY = e.clientY - rect.top - rect.height / 2;
    x.set(offsetX);
    y.set(offsetY);
  };

  const handleMouseLeave = () => {
    if (!isHoverSupported) return;
    x.set(0);
    y.set(0);
  };

  return (
    <section className="relative pt-24 lg:pt-40 pb-24 bg-gradient-to-br from-black via-[#0f0f0f] to-neutral-900 overflow-hidden">

      {/* Background gradient glows */}
      <div className="absolute -top-24 -left-32 w-[600px] h-[600px] bg-purple-600/20 blur-3xl rounded-full z-0 animate-pulse-slow" />
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-indigo-400/20 blur-2xl rounded-full z-0 animate-pulse-slower" />

      <motion.div
        className="max-w-7xl mx-auto bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl shadow-lg z-10 relative overflow-visible flex flex-col md:flex-row items-center justify-between px-6 sm:px-10 md:px-16 lg:px-20 py-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.1 }}
        variants={variants("bottom", 0.4)}
      >
        {/* Left content */}
        <motion.div
          className="md:w-1/2 text-center md:text-left text-white z-10"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 leading-tight">
            Let’s make things <span className="text-primary">happen</span>
          </h2>
          <p className="text-lg text-gray-300 mb-6">
            Contact us today to learn more about how our digital marketing services can help your business grow and succeed online.
          </p>
          <a
            href="#contact"
            className="inline-block px-8 py-3 text-lg bg-primary text-black font-semibold rounded-lg transition-all duration-300 hover:shadow-[0_0_30px_#B9FF66] hover:scale-105"
          >
            Get your free proposal
          </a>
        </motion.div>

        {/* Right: Popping video */}
        <motion.div
          ref={cardRef}
          className="md:w-1/2 mt-16 md:mt-0 flex justify-center items-end relative z-20 overflow-visible"
          style={isHoverSupported ? { rotateX, rotateY } : { rotateX: 0, rotateY: 0 }}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {/* Video container */}
          <motion.div
            className="relative w-[280px] sm:w-[380px] rounded-xl z-10 shadow-[0_30px_60px_rgba(180,100,255,0.4)]"
            whileHover={isHoverSupported ? { scale: 1.1 } : {}}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <video
              src={ctaanimation}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-auto object-cover rounded-xl border border-purple-500/20"
            />
            <div className="absolute inset-0 rounded-xl ring-2 ring-purple-500/20 hover:ring-4 hover:ring-purple-300/50 transition-all duration-500 pointer-events-none" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default CTA;

// import React from 'react';

// import ctaImage from "../assets/cta-image.png"
// import ctaanimation from "../assets/ctaanimation.mp4"
// import { motion } from 'framer-motion';
// import variants from '../utils/variants';

// const CTA = () => {
//     return (
//         <section className="relative py-12">
//             <motion.div 
//             className="max-w-7xl mx-auto bg-[#F3F3F3] rounded-md sm:pt-24 pt-8 pb-12 flex flex-col md:flex-row items-center justify-between px-4 sm:px-6 lg:px-8"
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ amount: 0.1 }}
//             variants={variants("bottom", 0.4)}
//             >
                
//                 {/* Left Side: Headline, Text, and Button */}
//                 <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0">
//                     <h2 className="text-3xl font-bold mb-4">Let’s make things happen</h2>
//                     <p className="text-lg mb-6">Contact us today to learn more about how our digital marketing services can help your business grow and succeed online.</p>
//                     <a href="#contact" className="inline-block px-6 py-3 bg-black text-white font-semibold rounded-md hover:bg-gray-800">Get your free proposal</a>
//                 </div>

//                 {/* Right Side: Image */}
//                 <div className="md:w-1/2 flex justify-center items-center relative">
//                     <img
//                         src={ctaImage/type="video/ctaanimation.mp4"} 
//                         alt="CTA Image"
//                         className=" md:absolute md:-top-52 md:bottom-0"
//                         style={{ transform: 'scale(1.05)' }} 
//                     />
//                 </div>
//             </motion.div>
//         </section>
//     );
// };

// export default CTA;




// import React, { useRef } from 'react';
// import { motion, useMotionValue, useTransform } from 'framer-motion';
// import ctaanimation from "../assets/ctaanimation.mp4";
// import variants from '../utils/variants';

// const CTA = () => {
//   const cardRef = useRef(null);
//   const x = useMotionValue(0);
//   const y = useMotionValue(0);
//   const rotateX = useTransform(y, [-100, 100], [15, -15]);
//   const rotateY = useTransform(x, [-100, 100], [-15, 15]);

//   const handleMouseMove = (e) => {
//     const rect = cardRef.current.getBoundingClientRect();
//     const offsetX = e.clientX - rect.left - rect.width / 2;
//     const offsetY = e.clientY - rect.top - rect.height / 2;
//     x.set(offsetX);
//     y.set(offsetY);
//   };

//   const handleMouseLeave = () => {
//     x.set(0);
//     y.set(0);
//   };

//   return (
//     <section className="relative py-24 bg-gradient-to-br from-black via-[#0f0f0f] to-neutral-900 overflow-hidden">
//       <div className="absolute -top-24 -left-32 w-[600px] h-[600px] bg-purple-600/20 blur-3xl rounded-full z-0 animate-pulse-slow" />
//       <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-indigo-400/20 blur-2xl rounded-full z-0 animate-pulse-slower" />

//       <motion.div
//         className="max-w-7xl mx-auto bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl shadow-lg z-10 relative overflow-hidden flex flex-col md:flex-row items-center justify-between px-6 sm:px-10 md:px-16 lg:px-20 py-16"
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ amount: 0.1 }}
//         variants={variants("bottom", 0.4)}
//       >

//         {/* Left Text */}
//         <motion.div 
//           className="md:w-1/2 text-center md:text-left text-white z-10"
//           initial={{ opacity: 0, x: -40 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.6, delay: 0.2 }}
//         >
//           <h2 className="text-4xl sm:text-5xl font-bold mb-4 leading-tight">
//             Let’s make things <span className="text-primary">happen</span>
//           </h2>
//           <p className="text-lg text-gray-300 mb-6">
//             Contact us today to learn more about how our digital marketing services can help your business grow and succeed online.
//           </p>
//           <a
//             href="#contact"
//             className="inline-block px-8 py-3 text-lg bg-primary text-black font-semibold rounded-lg transition-all duration-300 hover:shadow-[0_0_30px_#B9FF66] hover:scale-105"
//           >
//             Get your free proposal
//           </a>
//         </motion.div>

//         {/* Right Video Card with Pop & Mouse Effect */}
//         <motion.div 
//           ref={cardRef}
//           className="md:w-1/2 mt-12 md:mt-0 flex justify-center items-center relative z-10"
//           style={{ rotateX, rotateY }}
//           onMouseMove={handleMouseMove}
//           onMouseLeave={handleMouseLeave}
//           initial={{ opacity: 0, scale: 0.5 }}
//           whileInView={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 0.6, delay: 0.3 }}
//         >
//           <motion.div
//             className="relative w-[280px] sm:w-[360px] overflow-hidden rounded-xl shadow-2xl shadow-purple-400/40"
//             whileHover={{ scale: 1.05 }}
//             transition={{ type: 'spring', stiffness: 300 }}
//           >
//             <video
//               src={ctaanimation}
//               autoPlay
//               loop
//               muted
//               playsInline
//               className="w-full h-auto object-cover rounded-xl"
//             />
//             <div className="absolute inset-0 rounded-xl ring-2 ring-purple-500/10 hover:ring-4 hover:ring-purple-400/40 transition-all duration-500 pointer-events-none" />
//           </motion.div>
//         </motion.div>
//       </motion.div>
//     </section>
//   );
// };

// export default CTA;


// import React, { useRef } from 'react';
// import { motion, useMotionValue, useTransform } from 'framer-motion';
// import ctaanimation from "../assets/ctaanimation.mp4";
// import variants from '../utils/variants';

// const CTA = () => {
//   const cardRef = useRef(null);
//   const x = useMotionValue(0);
//   const y = useMotionValue(0);
//   const rotateX = useTransform(y, [-100, 100], [15, -15]);
//   const rotateY = useTransform(x, [-100, 100], [-15, 15]);

//   const handleMouseMove = (e) => {
//     const rect = cardRef.current.getBoundingClientRect();
//     const offsetX = e.clientX - rect.left - rect.width / 2;
//     const offsetY = e.clientY - rect.top - rect.height / 2;
//     x.set(offsetX);
//     y.set(offsetY);
//   };

//   const handleMouseLeave = () => {
//     x.set(0);
//     y.set(0);
//   };

//   return (
//     <section className="relative pt-38 lg:pt-60 pb-24 bg-gradient-to-br from-black via-[#0f0f0f] to-neutral-900 overflow-hidden">

//       {/* Background gradient glows */}
//       <div className="absolute -top-24 -left-32 w-[600px] h-[600px] bg-purple-600/20 blur-3xl rounded-full z-0 animate-pulse-slow" />
//       <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-indigo-400/20 blur-2xl rounded-full z-0 animate-pulse-slower" />

//       <motion.div
//         className="max-w-7xl mx-auto bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl shadow-lg z-10 relative overflow-visible flex flex-col md:flex-row items-center justify-between px-6 sm:px-10 md:px-16 lg:px-20 py-16"
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ amount: 0.1 }}
//         variants={variants("bottom", 0.4)}
//       >
//         {/* Left content */}
//         <motion.div
//           className="md:w-1/2 text-center md:text-left text-white z-10"
//           initial={{ opacity: 0, x: -40 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.6, delay: 0.2 }}
//         >
//           <h2 className="text-4xl sm:text-5xl font-bold mb-4 leading-tight">
//             Let’s make things <span className="text-primary">happen</span>
//           </h2>
//           <p className="text-lg text-gray-300 mb-6">
//             Contact us today to learn more about how our digital marketing services can help your business grow and succeed online.
//           </p>
//           <a
//             href="#contact"
//             className="inline-block px-8 py-3 text-lg bg-primary text-black font-semibold rounded-lg transition-all duration-300 hover:shadow-[0_0_30px_#B9FF66] hover:scale-105"
//           >
//             Get your free proposal
//           </a>
//         </motion.div>

//         {/* Right: Popping video from hole */}
//         <motion.div
//           ref={cardRef}
//           className="md:w-1/2 mt-48 md:mt-0 flex justify-center items-end relative z-20 overflow-visible"
//           style={{ rotateX, rotateY }}
//           onMouseMove={handleMouseMove}
//           onMouseLeave={handleMouseLeave}
//           initial={{ opacity: 0, y: 50, scale: 0.9 }}
//           whileInView={{ opacity: 1, y: 0, scale: 1 }}
//           transition={{ duration: 0.8, delay: 0.4 }}
//         >
        

//           {/* Video */}
//           <motion.div
//             className="relative w-[300px] sm:w-[380px] -mt-60 rounded-xl z-10 shadow-[0_30px_60px_rgba(180,100,255,0.4)]"
//             whileHover={{ scale: 1.1 }}
//             transition={{ type: 'spring', stiffness: 300 }}
//           >
//             <video
//               src={ctaanimation}
//               autoPlay
//               loop
//               muted
//               playsInline
//               className="w-full h-auto object-cover rounded-xl border border-purple-500/20"
//             />
//             <div className="absolute inset-0 rounded-xl ring-2 ring-purple-500/20 hover:ring-4 hover:ring-purple-300/50 transition-all duration-500 pointer-events-none" />
//           </motion.div>
//         </motion.div>
//       </motion.div>
//     </section>
//   );
// };

// export default CTA;
