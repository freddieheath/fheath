import { ThemeProvider } from "./context/ThemeContext";
import { BrowserRouter as Router } from "react-router-dom";
import Layout from "./components/Layout";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Jobs from "./components/Jobs";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Footer from "./components/Footer";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <div data-aos="fade-down">
        <ThemeProvider>
          <Router>
            <Layout>
              <Navbar />
              <Hero />
              <Jobs />
              <Projects />
              <Skills />
              <Footer />
            </Layout>
          </Router>
        </ThemeProvider>
      </div>
    </>
  );
}

export default App;
