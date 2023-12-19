import About from "./components/About";
import Demo from "./components/Demo";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="w-full min-h-screen bg-gray-100 dark:bg-gradient-to-b from-black to-slate-600">
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Demo />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
