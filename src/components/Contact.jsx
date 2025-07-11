import React from 'react';
import { motion } from 'framer-motion';
import animation from '../assets/animation.mp4';
import variants from '../utils/variants';

const ContactUs = () => {
  return (
    <section className="pt-20 pb-12 bg-gradient-to-br from-white to-gray-100" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <motion.div
          className="flex flex-col md:flex-row gap-4 mb-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.1 }}
          variants={variants("bottom", 0.2)}
        >
          <div className="bg-primary text-black text-center py-2 px-10 rounded-md shadow-md">
            <h2 className="text-2xl font-bold">Contact Us</h2>
          </div>
          <div className="md:w-2/3">
            <p className="text-gray-700 text-sm md:text-base">
              Connect with Us: Let’s Discuss Your Digital Marketing Needs.
            </p>
          </div>
        </motion.div>

        {/* Main Content - Stack on mobile */}
        <div className="flex flex-col-reverse lg:flex-row gap-10">

          {/* Contact Form */}
          <motion.div
            className="w-full lg:w-1/2 rounded-xl p-6 shadow-lg bg-white"
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.1 }}
            variants={variants("left", 0.2)}
          >
            <form className="space-y-5 text-black">
              {/* Inquiry Type */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-6 space-y-2 sm:space-y-0">
                <label className="flex items-center text-sm">
                  <input type="radio" name="contact-type" className="mr-2" value="general" />
                  General Inquiry
                </label>
                <label className="flex items-center text-sm">
                  <input type="radio" name="contact-type" className="mr-2" value="support" />
                  Support
                </label>
              </div>

              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="mt-1 py-2 px-4 w-full rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-500"
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="mt-1 py-2 px-4 w-full rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-500"
                />
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  className="mt-1 py-2 px-4 w-full rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-500"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-black text-white rounded-md hover:bg-gray-800 transition-all"
              >
                Send Message
              </button>
            </form>
          </motion.div>

          {/* Video Section */}
          <motion.div
            className="w-full lg:w-1/2 rounded-xl overflow-hidden shadow-lg"
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.1 }}
            variants={variants("right", 0.2)}
          >
            <div className="w-full h-full">
              <video
                src={animation}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-auto rounded-xl object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
