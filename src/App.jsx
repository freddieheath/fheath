import { ThemeProvider } from "./context/ThemeContext";
import Layout from "./components/Layout";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <ThemeProvider>
        <Layout>
          <Navbar />
          <Hero />
          <Skills />
          <Projects />
          <Contact />
          <Footer />
        </Layout>
      </ThemeProvider>
    </>
  );
}

export default App;
