// // src/components/LogoCarousel.js
// import React from 'react';
// import { motion } from 'framer-motion';

// // Example logo imports
// import Logo1 from "../assets/logos/web-development-icon.png";
// import Logo2 from "../assets/logos/google-ads-logo.png";
// import Logo3 from "../assets/logos/hubspot.png";
// import Logo4 from "../assets/logos/seo-icon.png";
// import Logo5 from "../assets/logos/smo-icon.png";
// import Logo6 from "../assets/logos/ui-ux-logo.png";
// import variants from '../utils/variants';

// const LogoCarousel = () => {
//     return (
//         <div

//             className=" pt-24 overflow-hidden">
//             <motion.div
//                 initial="hidden"
//                 whileInView="visible"
//                 viewport={{ amount: 0.1 }}
//                 variants={variants("right", 0.3)}
//                 className="flex space-x-12 justify-between items-center animate-marquee">
//                 <img src={Logo1} alt="Brand 1" className="h-12" />
//                 <img src={Logo2} alt="Brand 2" className="h-12" />
//                 <img src={Logo3} alt="Brand 3" className="h-12" />
//                 <img src={Logo4} alt="Brand 4" className="h-12" />
//                 <img src={Logo5} alt="Brand 5" className="h-12" />
//                 <img src={Logo6} alt="Brand 6" className="h-12" />
//             </motion.div>
//         </div>
//     );
// };

// export default LogoCarousel;


import React, { useEffect, useRef, useState } from 'react';
import Logo1 from "../assets/logos/web-development-icon.png";
import Logo2 from "../assets/logos/google-ads-logo.png";
import Logo3 from "../assets/logos/hubspot.png";
import Logo4 from "../assets/logos/seo-icon.png";
import Logo5 from "../assets/logos/smo-icon.png";
import Logo6 from "../assets/logos/ui-ux-logo.png";

const logos = [Logo1, Logo2, Logo3, Logo4, Logo5, Logo6];
const duplicatedLogos = [...logos, ...logos]; // for infinite scroll illusion

const LogoItem = ({ src, alt }) => {
  const logoRef = useRef();
  const [isFaded, setIsFaded] = useState(false);

  useEffect(() => {
    const updateVisibility = () => {
      const rect = logoRef.current?.getBoundingClientRect();
      if (!rect) return;

      const centerX = window.innerWidth / 2;
      const logoCenterX = rect.left + rect.width / 2;
      const distanceFromCenter = Math.abs(centerX - logoCenterX);

      const fadeThreshold = window.innerWidth / 2.5;
      setIsFaded(distanceFromCenter > fadeThreshold);
    };

    let frame;
    const loop = () => {
      updateVisibility();
      frame = requestAnimationFrame(loop);
    };

    frame = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <div
      ref={logoRef}
      className={`h-20 w-20 sm:h-24 sm:w-24 rounded-full flex items-center justify-center p-2 mx-3 sm:mx-6 transition-all duration-300 ease-in-out
        ${isFaded ? 'grayscale opacity-40' : 'grayscale-0 opacity-100 scale-105 shadow-md shadow-indigo-400/30'}
        hover:scale-110 hover:shadow-xl hover:shadow-indigo-500/60 hover:z-10`}
    >
      <img
        src={src}
        alt={alt}
        className="object-contain h-full w-full rounded-full transition-transform duration-300"
      />
    </div>
  );
};

const LogoCarousel = () => {
  return (
    <section className="py-16 sm:py-24 bg-black overflow-hidden relative">
      {/* Background Blur */}
      <div className="absolute inset-0 blur-2xl bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-pink-500/10 pointer-events-none"></div>

      {/* Carousel */}
      <div className="relative w-[200vw] sm:w-[140vw] max-w-none mx-auto">
        <div className="whitespace-nowrap animate-scroll flex items-center">
          {duplicatedLogos.map((logo, index) => (
            <LogoItem key={index} src={logo} alt={`Brand ${index + 1}`} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default LogoCarousel;
