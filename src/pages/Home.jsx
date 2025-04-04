import { ChevronDown, Github, Instagram, Mail } from "lucide-react";
import me from "../assets/me.jpg";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="min-h-screen container mx-auto px-5 flex flex-col md:flex-row md:justify-between items-center gap-10">
      <motion.div
        className="flex flex-col items-start gap-5"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.h1
          className="text-2xl sm:text-3xl md:text-5xl font-bold text-white tracking-widest"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          Abdulaziz Ergashev
        </motion.h1>
        <motion.h1
          className="text-lg sm:text-xl md:text-xl font-semibold text-white"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          Software Engineer
        </motion.h1>
        <motion.span
          className="w-full sm:w-[20rem] md:w-[32rem] opacity-80"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          Creating outstanding digital experiences with cutting-edge web
          technologies. Expert in developing scalable full-stack applications
          using MongoDB, Express.js, React.js, Node.js, TypeScript, and
          JavaScript.
        </motion.span>
        <motion.div
          className="flex items-center gap-6 mt-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          {[
            { Icon: Github, link: "https://github.com/AbdulazizErgashev" },
            { Icon: Instagram, link: "https://www.instagram.com/ergaweff_a" },
            { Icon: Mail, link: "mailto:aeergashev0335@gmail.com" },
          ].map(({ Icon, link }, index) => (
            <a
              key={index}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-shadow cursor-pointer"
            >
              <Icon className="text-[#87ceeb]" size={24} />
            </a>
          ))}
        </motion.div>
        <motion.button
          className="flex items-center gap-1 bg-white py-3 px-6 rounded-xl font-semibold tracking-widest text-[#87ceeb] transition-transform transform hover:scale-105 mt-6"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          Learn more <ChevronDown />
        </motion.button>
      </motion.div>

      <motion.div
        className="relative w-80 h-80 sm:w-[18rem] md:w-[24rem] md:h-[24rem] mx-auto mt-6 md:mt-0"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
      >
        <div className="absolute inset-0 bg-white rounded-3xl transform rotate-6 opacity-50"></div>
        <div className="absolute inset-0 bg-[#87ceeb] rounded-3xl transform -rotate-6 opacity-50"></div>
        <div className="relative rounded-2xl overflow-hidden shadow-2xl">
          <img
            src={me}
            className="w-full h-full object-cover rounded-2xl"
            alt="Profile"
          />
        </div>
      </motion.div>
    </div>
  );
}
