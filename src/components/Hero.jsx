// import React, { useState, useEffect } from 'react';
// import LogoCarousel from './LogoCarousel';
// import { motion, AnimatePresence } from 'framer-motion';
// import variants from '../utils/variants';
// import ContactPopup from './ContactPopup';

// const Counter = ({ target }) => {
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     let start = 0;
//     const duration = 2000;
//     const increment = (target - start) / (duration / 50);
//     const timer = setInterval(() => {
//       start += increment;
//       if (start >= target) {
//         clearInterval(timer);
//         setCount(target);
//       } else {
//         setCount(Math.floor(start));
//       }
//     }, 50);
//     return () => clearInterval(timer);
//   }, [target]);

//   return <p className="text-4xl font-semibold text-red-500">{count}+</p>;
// };

// const rotatingWords = ['Growth', 'Efficiency', 'Insights', 'Alignment', 'Speed'];

// const Hero = () => {
//   const [currentWordIndex, setCurrentWordIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentWordIndex((prev) => (prev + 1) % rotatingWords.length);
//     }, 2000);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <section className="w-full bg-black text-white" id="about">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">

//         {/* 🔹 Hero Main Section */}
//         <div className="flex flex-col md:flex-row items-center justify-between gap-10 md:h-[600px]">
          
//           {/* 🔸 Left Side */}
//           <div className="w-full md:w-1/2 flex flex-col justify-center">
//             <motion.h1
//               className="text-4xl md:text-5xl font-bold mb-6"
//               initial="hidden"
//               whileInView="visible"
//               viewport={{ amount: 0.1 }}
//               variants={variants("bottom", 0.2)}
//             >
//               Transforming{" "}
//               <AnimatePresence mode="wait">
//                 <motion.span
//                   key={currentWordIndex}
//                   initial={{ opacity: 0, y: 20 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   exit={{ opacity: 0, y: -20 }}
//                   transition={{ duration: 0.6 }}
//                   className="text-red-500 inline-block"
//                 >
//                   {rotatingWords[currentWordIndex]}
//                 </motion.span>
//               </AnimatePresence>{" "}
//               Across Your Revenue Engine With AI + Automation
//             </motion.h1>

//             <motion.p
//               className="text-white/90 mb-6"
//               initial="hidden"
//               whileInView="visible"
//               viewport={{ amount: 0.1 }}
//               variants={variants("bottom", 0.4)}
//             >
//               Partner with digital marketing experts who understand your business goals.
//               Our proven strategies have generated millions in revenue for ambitious
//               brands ready to dominate their market.
//             </motion.p>

//             <motion.a
//               href="#contact"
//               className="inline-block px-6 py-3 bg-red-500 text-white font-semibold rounded-md hover:bg-red-600 transition"
//               initial="hidden"
//               whileInView="visible"
//               viewport={{ amount: 0.1 }}
//               variants={variants("bottom", 0.6)}
//             >
//               Book a consultation
//             </motion.a>
//           </div>

//           {/* 🔸 Right Side: AI */}
//           <div className="w-full md:w-1/2 h-[400px] md:h-full rounded-lg overflow-hidden shadow-xl">
//             <iframe
//               src="https://my.spline.design/aiassistanthoverandclickinteraction-LwewgU4D4xhl9MzBoFLLnfYy/"
//               frameBorder="0"
//               width="100%"
//               height="100%"
//               allow="autoplay; fullscreen"
//               title="AI Assistant"
//               className="w-full h-full"
//             ></iframe>
//           </div>
//         </div>

//         {/* 🔻 Client Stats Section */}
//         <div className="mt-10 w-full p-8 border border-white/10 rounded-lg bg-white/5 backdrop-blur-lg shadow-lg">
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
//             <motion.div
//               className="space-y-2"
//               initial={{ opacity: 0, y: 40 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8 }}
//             >
//               <Counter target={232} />
//               <p className="text-sm text-gray-300">Happy Clients</p>
//             </motion.div>
//             <motion.div
//               className="space-y-2"
//               initial={{ opacity: 0, y: 40 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8 }}
//             >
//               <Counter target={521} />
//               <p className="text-sm text-gray-300">Projects</p>
//             </motion.div>
//             <motion.div
//               className="space-y-2"
//               initial={{ opacity: 0, y: 40 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8 }}
//             >
//               <Counter target={1463} />
//               <p className="text-sm text-gray-300">Hours Of Support</p>
//             </motion.div>
//             <motion.div
//               className="space-y-2"
//               initial={{ opacity: 0, y: 40 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8 }}
//             >
//               <Counter target={15} />
//               <p className="text-sm text-gray-300">Hard Workers</p>
//             </motion.div>
//           </div>
//         </div>

//         {/* 🔻 Logo Carousel */}
//         <div className="mt-10 w-full">
//           <LogoCarousel />
//         </div>

//         {/* 📩 Contact Modal */}
//         <ContactPopup />
//       </div>
//     </section>
//   );
// };

// export default Hero;


import React, { useState, useEffect } from 'react';
import LogoCarousel from './LogoCarousel';
import { motion, AnimatePresence } from 'framer-motion';
import variants from '../utils/variants';
import ContactPopup from './ContactPopup';

const Counter = ({ target }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 2000;
    const increment = (target - start) / (duration / 50);
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        clearInterval(timer);
        setCount(target);
      } else {
        setCount(Math.floor(start));
      }
    }, 50);
    return () => clearInterval(timer);
  }, [target]);

  return <p className="text-4xl font-semibold text-red-500">{count}+</p>;
};

const rotatingWords = ['Growth', 'Efficiency', 'Insights', 'Alignment', 'Speed'];

const Hero = () => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prev) => (prev + 1) % rotatingWords.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full bg-black text-white" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">

        {/* 🔹 Hero Main Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-10 md:h-[600px]">

          {/* 🔸 Left Side */}
          <div className="w-full md:w-1/2 flex flex-col justify-center">
            <motion.h1
              className="text-4xl md:text-5xl font-bold mb-6"
              initial="hidden"
              whileInView="visible"
              viewport={{ amount: 0.1 }}
              variants={variants("bottom", 0.2)}
            >
              Transforming{" "}
              <AnimatePresence mode="wait">
                <motion.span
                  key={currentWordIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.6 }}
                  className="text-red-500 inline-block"
                >
                  {rotatingWords[currentWordIndex]}
                </motion.span>
              </AnimatePresence>{" "}
              Across Your Revenue Engine With AI + Automation
            </motion.h1>

            <motion.p
              className="text-white/90 mb-6"
              initial="hidden"
              whileInView="visible"
              viewport={{ amount: 0.1 }}
              variants={variants("bottom", 0.4)}
            >
              Partner with digital marketing experts who understand your business goals.
              Our proven strategies have generated millions in revenue for ambitious
              brands ready to dominate their market.
            </motion.p>

            <motion.a
              href="#contact"
              className="inline-block px-6 py-3 bg-red-500 text-white font-semibold rounded-md hover:bg-red-600 transition"
              initial="hidden"
              whileInView="visible"
              viewport={{ amount: 0.1 }}
              variants={variants("bottom", 0.6)}
            >
              Book a consultation
            </motion.a>
          </div>

          {/* 🔸 Right Side: AI Embed */}
          <div className="w-full md:w-1/2 h-[400px] md:h-full rounded-lg overflow-hidden shadow-xl">
            <iframe
              src="https://my.spline.design/aiassistanthoverandclickinteraction-LwewgU4D4xhl9MzBoFLLnfYy/"
              frameBorder="0"
              width="100%"
              height="100%"
              allow="autoplay; fullscreen"
              title="AI Assistant"
              className="w-full h-full"
            ></iframe>
          </div>
        </div>

        {/* 🔻 Client Stats Section (No visible border) */}
        <div className="mt-10 w-full p-8 rounded-lg bg-white/5 backdrop-blur-lg shadow-md">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
            <motion.div
              className="space-y-2"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Counter target={232} />
              <p className="text-sm text-gray-300">Happy Clients</p>
            </motion.div>
            <motion.div
              className="space-y-2"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Counter target={521} />
              <p className="text-sm text-gray-300">Projects</p>
            </motion.div>
            <motion.div
              className="space-y-2"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Counter target={1463} />
              <p className="text-sm text-gray-300">Hours Of Support</p>
            </motion.div>
            <motion.div
              className="space-y-2"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Counter target={15} />
              <p className="text-sm text-gray-300">Hard Workers</p>
            </motion.div>
          </div>
        </div>

        {/* 🔻 Logo Carousel */}
        <div className="mt-10 w-full">
          <LogoCarousel />
        </div>

        {/* 📩 Contact Modal */}
        <ContactPopup />
      </div>
    </section>
  );
};

export default Hero;
