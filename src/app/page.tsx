import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Cases from "@/components/Cases";
import Industries from "@/components/Industries";
import Team from "@/components/Team";
import About from "@/components/About";
import CTA from "@/components/CTA";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Cases />
        <Industries />
        <Team />
        <About />
        <CTA />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
