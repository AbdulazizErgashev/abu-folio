import FloatingNav from "./components/FloatingNav";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
import Logo from "./assets/logo.png";
import { useScroll } from "./context/ScrollContext";

export default function App() {
  const { scrollToPage } = useScroll();

  return (
    <>
      <main>
        <section>
          <div className="fixed top-5 left-5 z-50 size-20">
            <img
              src={Logo}
              alt="Logo"
              className="w-full object-cover cursor-pointer"
              onClick={() => scrollToPage("home")}
            />
          </div>
        </section>
        <nav>
          <FloatingNav />
        </nav>
        <Home />
        <About />
        <Portfolio />
        <Contact />
      </main>
    </>
  );
}
