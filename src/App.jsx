import FloatingNav from "./components/FloatingNav";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";

export default function App() {
  return (
    <>
      <main>
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
