import "../src/App.css";
import Contact from "./components/contact/Contact";
import Hero from "./components/hero/Hero";
import Navigation from "./components/navigation/Navigation";
import Projects from "./components/projects/Projects";

const App = () => {
  return (
    <main>
      <Navigation />
      <Hero />
      <Projects />
      <Contact />
    </main>
  );
};

export default App;
