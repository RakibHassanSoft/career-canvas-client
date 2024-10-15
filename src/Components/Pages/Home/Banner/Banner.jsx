
import { motion } from "framer-motion"; // Import Framer Motion

const Banner = () => {
  return (
    <div>
      <header className="bg-white w-11/12 m-auto dark:bg-gray-900 mt-12">
        <div className="lg:flex">
          {/* Text section with animated slide-in effect */}
          <motion.div
            className="flex items-center justify-center w-full px-6 py-8 lg:h-[32rem] lg:w-1/2"
            initial={{ x: -200, opacity: 0 }} // Initial position: off-screen to the left
            animate={{ x: 0, opacity: 1 }} // Animate to center position
            transition={{ duration: 0.8, ease: "easeOut" }} // Animation duration and easing
          >
            <div className="max-w-xl">
              <motion.h2
                className="text-3xl font-semibold text-gray-800 dark:text-white lg:text-4xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                Build Your Professional{" "}
                <span className="text-green-600 dark:text-green-400">Resume</span>{" "}
                with Ease
              </motion.h2>

              <motion.p
                className="mt-4 text-sm text-gray-500 dark:text-gray-400 lg:text-base"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.8 }}
              >
                At{" "}
                <span className="bg-gradient-to-r from-green-500 to-slate-500 bg-clip-text text-transparent">
                  Career Canvas
                </span>
                , we provide you with the tools to create a standout resume in minutes.
                Showcase your skills, achievements, and experiences with our user-friendly
                resume builder designed for modern professionals.
              </motion.p>

              <motion.div
                className="flex flex-col mt-6 space-y-3 lg:space-y-0 lg:flex-row"
                initial={{ opacity: 0, y: 50 }} // Starts below the visible area
                animate={{ opacity: 1, y: 0 }} // Animate upwards to normal position
                transition={{ delay: 1, duration: 0.8 }}
              >
                <a
                  href="#"
                  className="block px-5 py-2 text-sm font-medium tracking-wider text-center text-white transition-transform duration-300 transform bg-green-500 rounded-md hover:scale-105"
                >
                  Get Started
                </a>
                <a
                  href="#"
                  className="block px-5 py-2 text-sm font-medium tracking-wider text-center text-white transition-transform duration-300 transform bg-green-500 rounded-md lg:mx-4 hover:scale-105"
                >
                  Learn More
                </a>
              </motion.div>
            </div>
          </motion.div>

          {/* Background Image with subtle zoom animation */}
          <motion.div
            className="relative w-full h-64 lg:w-1/2 lg:h-auto overflow-hidden"
            initial={{ scale: 1.1 }} // Start zoomed-in
            animate={{ scale: 1 }} // Zoom out to normal size
            transition={{ duration: 8, ease: "easeOut" }} // Slow zoom animation
          >
            <div
              className="w-full h-full bg-cover bg-center"
              style={{
                backgroundImage:
                  "url('https://i.ibb.co/qdj6Y73/banner-image.webp')",
              }}
            >
              <div className="w-full h-full"></div>
            </div>
          </motion.div>
        </div>
      </header>
    </div>
  );
};

export default Banner;
