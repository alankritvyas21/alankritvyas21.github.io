import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Skills from './components/skills';
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Resume from "./components/Resume";
import Footer from "./components/Footer";
import ScrollUp from "./components/ScrollUp";
// import { ThemeProvider } from "./assets/js/themeContext";
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  AOS.init();
  AOS.refresh();
  return (
    <>
      {/* <ThemeProvider> */}
        <Header />

        <main className="main">
          <Home />
          <About />
          <Skills />
          <Resume />
          <Projects />
          <Contact />
        </main>

        <Footer />
        <ScrollUp />
      {/* </ThemeProvider> */}
    </>
  );
}

export default App;
