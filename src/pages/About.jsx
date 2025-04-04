import { Code, Database, Server, Zap } from "lucide-react";
import { motion } from "framer-motion";

export default function About() {
  const skills = [
    {
      icon: <Code className="w-8 h-8 text-blue-500" />,
      title: "Frontend",
      description: "React, Next.js, Redux",
    },
    {
      icon: <Server className="w-8 h-8 text-green-500" />,
      title: "Backend",
      description: "Node.js, Express, Fastify",
    },
    {
      icon: <Database className="w-8 h-8 text-purple-500" />,
      title: "Database",
      description: "MongoDB, Mongoose",
    },
    {
      icon: <Zap className="w-8 h-8 text-yellow-500" />,
      title: "Performance",
      description: "Optimization, Caching",
    },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center px-5 bg-white">
      <motion.div
        className="container mx-auto mt-10 md:mt-0"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-3xl text-[#87ceeb] font-semibold text-center mb-10">
          About Me
        </h1>
        <div className="flex flex-col md:flex-row items-center justify-between">
          <motion.div
            className="md:w-1/2 mb-8 md:mb-0"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-xl text-[#87ceeb] leading-relaxed mb-6">
              As a dedicated MERN Stack Developer, I specialize in crafting
              dynamic and scalable web applications using MongoDB, Express.js,
              React, and Node.js. My focus is on building robust full-stack
              solutions that ensure a smooth and engaging user experience.
            </p>
            <p className="text-xl text-[#87ceeb] leading-relaxed">
              While my expertise lies in developing with the core MERN
              technologies, I am continually learning and expanding my skills to
              stay ahead of industry trends. Currently, I'm exploring advanced
              tools like Next.js to enhance my front-end development and
              optimize performance for modern web applications. With a passion
              for writing clean, efficient code, I’m committed to delivering
              high-quality solutions that meet both user needs and business
              goals.
            </p>
          </motion.div>

          <motion.div
            className="md:w-1/2 grid grid-cols-2 gap-6"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {skills.map((skill, index) => (
              <div
                key={index}
                className="bg-[#c6dfe9] p-6 rounded-lg shadow-md"
              >
                {skill.icon}
                <h3 className="text-xl font-semibold mt-4 mb-2 text-white">
                  {skill.title}
                </h3>
                <p className="text-gray-600">{skill.description}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
