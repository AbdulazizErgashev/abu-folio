import { ChevronDown, Github, Instagram, Mail } from "lucide-react";
import me from "../assets/me.jpg";
import { motion } from "framer-motion";
import { useScroll } from "../context/ScrollContext";

const fadeVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 1, delay },
  }),
};

const icons = [
  { Icon: Github, link: "https://github.com/AbdulazizErgashev" },
  { Icon: Instagram, link: "https://www.instagram.com/ergashev.abu_" },
  { Icon: Mail, link: "mailto:aeergashev0335@gmail.com" },
];

export default function Home() {
  const { scrollToPage } = useScroll();

  return (
    <div
      id="home"
      className="min-h-screen container mx-auto px-5 mb-20 md:mb-0 flex flex-col md:flex-row md:justify-between items-center gap-10"
    >
      <motion.div
        className="flex flex-col items-start gap-5"
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          className="text-2xl sm:text-3xl md:text-5xl font-bold text-white tracking-wide"
          custom={0.2}
          variants={fadeVariant}
        >
          Abdulaziz Ergashev
        </motion.h1>

        <motion.h2
          className="text-lg sm:text-xl md:text-xl font-semibold text-white"
          custom={0.4}
          variants={fadeVariant}
        >
          Software Engineer
        </motion.h2>

        <motion.p
          className="w-full sm:w-[20rem] md:w-[32rem] text-white/70 leading-relaxed"
          custom={0.6}
          variants={fadeVariant}
        >
          Creating outstanding digital experiences with cutting-edge web
          technologies. Expert in developing scalable full-stack applications
          using MongoDB, Express.js, React.js, Node.js, TypeScript, and
          JavaScript.
        </motion.p>

        <motion.div
          className="flex items-center gap-6 mt-4"
          custom={0.8}
          variants={fadeVariant}
        >
          {icons.map(({ Icon, link }, index) => (
            <a
              key={index}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-3 bg-white rounded-full shadow-lg transition-all cursor-pointer hover:bg-[#87ceeb]"
            >
              <Icon
                className="text-[#87ceeb] group-hover:text-white"
                size={24}
              />
            </a>
          ))}
        </motion.div>

        <motion.button
          onClick={() => scrollToPage("about")}
          className="flex items-center gap-1 bg-white py-3 px-6 rounded-xl font-semibold tracking-wide text-[#87ceeb] transition-all hover:scale-105 hover:bg-[#87ceeb] hover:text-white mt-6"
          custom={1}
          variants={fadeVariant}
        >
          Learn more <ChevronDown />
        </motion.button>
      </motion.div>

      <motion.div
        className="group relative w-80 h-80 sm:w-[18rem] md:w-[24rem] md:h-[24rem] mt-6 md:mt-0"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
      >
        <div className="absolute inset-0 bg-[#6ac7ec] rounded-3xl rotate-6 group-hover:rotate-12 transition-all duration-500"></div>
        <div className="absolute inset-0 bg-white rounded-3xl -rotate-6 opacity-60 group-hover:-rotate-12 transition-all duration-500"></div>
        <div className="relative rounded-2xl overflow-hidden shadow-2xl">
          <img
            src={me}
            loading="lazy"
            className="w-full h-full object-cover rounded-2xl"
            alt="Profile"
          />
        </div>
      </motion.div>
    </div>
  );
}
