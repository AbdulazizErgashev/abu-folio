import { createContext, useContext } from "react";

export const ScrollContext = createContext();

export const ScrollProvider = ({ children }) => {
  const scrollToPage = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <ScrollContext.Provider value={{ scrollToPage }}>
      {children}
    </ScrollContext.Provider>
  );
};

export const useScroll = () => useContext(ScrollContext);
