import { ChevronDown, Github, Instagram, Mail } from "lucide-react";
import me from "../assets/me.jpg";

export default function Home() {
  return (
    <div className="min-h-screen container mx-auto px-5 flex justify-between items-center gap-10">
      <div className="flex flex-col items-start gap-5">
        <h1 className="text-5xl font-bold text-white tracking-widest">
          Abdulaziz Ergashev
        </h1>
        <h1 className="text-xl font-semibold text-white">Software Engineer</h1>
        <span className="w-[32rem] opacity-80">
          Creating outstanding digital experiences with cutting-edge web
          technologies. Expert in developing scalable full-stack applications
          using MongoDB, Express.js, React.js, Node.js, TypeScript, and
          JavaScript.
        </span>
        <div className="flex items-center gap-6">
          {[Github, Instagram, Mail].map((Icon, index) => (
            <div
              key={index}
              className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-shadow cursor-pointer"
            >
              <Icon className="text-[#87ceeb]" size={24} />
            </div>
          ))}
        </div>
        <button className="flex items-center gap-1 bg-white py-3 px-6 rounded-xl font-semibold tracking-widest text-[#87ceeb] transition-transform transform hover:scale-105">
          Learn more <ChevronDown />
        </button>
      </div>
      <div className="relative w-80 h-80 md:w-[24rem] md:h-[24rem] mx-auto">
        <div className="absolute inset-0 bg-white rounded-3xl transform rotate-6 opacity-50"></div>
        <div className="absolute inset-0 bg-[#87ceeb] rounded-3xl transform -rotate-6 opacity-50"></div>
        <div className="relative rounded-2xl overflow-hidden shadow-2xl">
          <img
            src={me}
            className="w-full h-full object-cover rounded-2xl"
            alt="Profile"
          />
        </div>
      </div>
    </div>
  );
}
