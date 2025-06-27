import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Resume from "./components/Resume";
import ProfessionalJourney from "./components/ProfessionalJourney";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-primary min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <About />
        {/* <ProfessionalJourney /> */}
        <Projects />
        <Services />
        <Resume />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
