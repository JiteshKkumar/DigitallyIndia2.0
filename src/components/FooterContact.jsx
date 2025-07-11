import React from 'react';
import googleReview from "../assets/google-review.png";

const FooterContact = () => {
  return (
    <div className="bg-gradient-to-br from-neutral-900 via-black to-neutral-900 px-4 sm:px-6 lg:px-8 py-12 text-white">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-10 md:gap-16">
        
        {/* Left Side: Contact Info */}
        <div className="flex-1 space-y-5">
          <h3 className="text-2xl font-bold text-pink-500">Get in Touch</h3>
          <p className="text-gray-300">
            We'd love to hear from you. Reach out through any of the contact details below.
          </p>

          <div className="space-y-2 text-sm">
            <p><strong>Email:</strong> <span className="text-indigo-400">Digitallyindia@gmail.com</span></p>
            <p><strong>Phone:</strong> <span className="text-indigo-400">+91 8210720570</span></p>
            <p><strong>Address:</strong> Greater Noida West, India</p>
          </div>

          {/* Google Review Badge */}
          <div className="mt-4">
            <img src={googleReview} alt="Google Review" className="h-20 w-auto rounded-full shadow-lg" />
          </div>
        </div>

        {/* Right Side: Static Subscription Box */}
        <div className="flex-1 bg-[#1e1f26] p-6 md:p-8 rounded-lg shadow-md">
          <h4 className="text-xl font-semibold mb-4">Subscribe to our newsletter</h4>
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 px-4 py-3 rounded-md bg-neutral-800 border border-neutral-600 text-white text-sm">
              Enter your email
            </div>
            <div className="bg-pink-500 text-white px-6 py-3 rounded-md text-sm font-medium cursor-default">
              Subscribe
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterContact;



// import React from 'react';
// import { motion } from 'framer-motion';
// import { Mail, Phone, MapPin, ShieldCheck, ScrollText, Settings, Facebook, Twitter, Linkedin } from 'lucide-react';
// import variants from '../utils/variants';
// import googleReview from "../assets/google-review.png";

// const FooterContact = () => {
//   return (
//     <motion.footer
//       initial="hidden"
//       whileInView="visible"
//       viewport={{ amount: 0.1 }}
//       variants={variants("bottom", 0.2)}
//       className="bg-gradient-to-br from-[#0f0f0f] to-[#1c1c1c] text-white px-4 md:px-10 py-20 relative z-10 shadow-inner"
//     >
//       <div className="max-w-7xl mx-auto">
//         {/* Top CTA Block */}
//         <div className="relative bg-gradient-to-tr from-[#1a1a1a] to-[#2a2a2a] rounded-3xl p-10 md:p-16 shadow-xl border border-white/10 backdrop-blur-xl flex flex-col md:flex-row items-center justify-between mb-20 overflow-hidden">
//           <div className="z-10">
//             <h3 className="text-4xl font-bold mb-3">Experience superior skip tracing</h3>
//             <p className="text-gray-400 text-sm mb-6">150+ data points per search.</p>
//             <button className="bg-primary text-black px-6 py-3 rounded-lg font-medium shadow-md hover:scale-105 transition-all duration-300">
//               Get Started
//             </button>
//           </div>
//           <div className="z-10 mt-10 md:mt-0">
//             <img
//               src={googleReview}
//               alt="Google Review"
//               className="w-32 h-32 object-contain opacity-70 hover:opacity-100 transition duration-300"
//             />
//           </div>
//           <div className="absolute -top-10 -right-10 w-72 h-72 bg-gradient-radial from-primary/30 to-transparent rounded-full blur-3xl" />
//         </div>

//         {/* Footer Columns */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 text-sm">
//           {/* Contact Info */}
//           <div className="bg-[#1a1a1a] rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300">
//             <h4 className="text-lg font-semibold flex items-center gap-2 mb-4"><MapPin size={18}/> Digitally India</h4>
//             <p className="text-gray-400 mb-2">Greater Noida West, India</p>
//             <p className="flex items-center gap-2 text-gray-400 mb-2"><Mail size={16}/> <a href="mailto:Digitallyindia@gmail.com">Digitallyindia@gmail.com</a></p>
//             <p className="flex items-center gap-2 text-gray-400"><Phone size={16}/> <a href="tel:+918210720570">+91 8210720570</a></p>
//           </div>

//           {/* Quick Links */}
//           <div className="bg-[#1a1a1a] rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300">
//             <h5 className="text-md font-semibold mb-4 flex items-center gap-2"><Settings size={16}/> Quick Links</h5>
//             <ul className="space-y-3 text-gray-400">
//               <li><a href="#" className="hover:text-white">Services</a></li>
//               <li><a href="#" className="hover:text-white">Pricing</a></li>
//               <li><a href="#" className="hover:text-white">Location</a></li>
//               <li><a href="#" className="hover:text-white">About</a></li>
//             </ul>
//           </div>

//           {/* Legal */}
//           <div className="bg-[#1a1a1a] rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300">
//             <h5 className="text-md font-semibold mb-4 flex items-center gap-2"><ScrollText size={16}/> Legal</h5>
//             <ul className="space-y-3 text-gray-400">
//               <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
//               <li><a href="#" className="hover:text-white">Terms of Service</a></li>
//               <li><a href="#" className="hover:text-white">Security</a></li>
//             </ul>
//           </div>

//           {/* Social */}
//           <div className="bg-[#1a1a1a] rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300">
//             <h5 className="text-md font-semibold mb-4 flex items-center gap-2"><ShieldCheck size={16}/> Social</h5>
//             <ul className="space-y-3 text-gray-400">
//               <li className="flex items-center gap-2"><Linkedin size={16}/> <a href="#" className="hover:text-white">LinkedIn</a></li>
//               <li className="flex items-center gap-2"><Twitter size={16}/> <a href="#" className="hover:text-white">Twitter</a></li>
//               <li className="flex items-center gap-2"><Facebook size={16}/> <a href="#" className="hover:text-white">Facebook</a></li>
//             </ul>
//           </div>
//         </div>

//         {/* Footer Bottom */}
//         <div className="mt-14 text-center text-gray-600 text-xs">
//           © {new Date().getFullYear()} Digitally India. All rights reserved.
//         </div>
//       </div>
//     </motion.footer>
//   );
// };

// export default FooterContact;
