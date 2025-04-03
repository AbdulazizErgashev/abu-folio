import React from "react";
import FloatingNav from "./components/FloatingNav";
import Home from "./pages/Home";
import About from "./pages/About";
import Socials from "./pages/Socials";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <>
      <main>
        <nav>
          <FloatingNav />
        </nav>
        <Home />
        <About />
        <Socials />
        <Contact />
      </main>
    </>
  );
}
