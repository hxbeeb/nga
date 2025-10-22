import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";

export default function Home() {
  return (
   <div>
    <Header />
    <section id="home">
      <Hero />
    </section>
    <section id="about">
      <About />
    </section>
    <section id="services">
      <Services />
    </section>
    <section id="contact">
      <Contact />
    </section>
    <Footer />
   </div>
  );
}
