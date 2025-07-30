import { useScroll } from "../context/ScrollContext";

export default function FloatingNav() {
  const { scrollToPage } = useScroll();

  const pageDots = [
    { id: 1, label: "Home", target: "home" },
    { id: 2, label: "About", target: "about" },
    { id: 3, label: "Portfolio", target: "portfolio" },
    { id: 4, label: "Contact", target: "contact" },
  ];

  return (
    <nav>
      <div className="flex flex-col items-center fixed top-1/2 left-4 transform -translate-y-1/2 space-y-6 z-50">
        {pageDots.map((dot) => (
          <button
            key={dot.id}
            onClick={() => scrollToPage(dot.target)}
            className="group relative flex items-center justify-center w-4 h-4 bg-white rounded-full hover:bg-sky-400 transition-all duration-300 shadow-lg"
          >
            <span className="w-2 h-2 bg-[#87ceeb] rounded-full group-hover:bg-white transition-all duration-300" />

            <span className="absolute left-6 opacity-0 group-hover:opacity-100 bg-[#87ceeb] text-white text-xs px-2 py-1 rounded-md shadow-md transition-all duration-300 whitespace-nowrap">
              {dot.label}
            </span>
          </button>
        ))}
      </div>
    </nav>
  );
}
