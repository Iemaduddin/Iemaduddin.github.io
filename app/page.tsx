"use client";

import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";
import About from "./components/About";
import Education from "./components/Education";
import ExperienceOrg from "./components/ExperienceOrg";
import ExperienceWork from "./components/ExperienceWork";
import Projects from "./components/Project/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Jumbotron />

      <section id="about" className="container mx-auto max-w-7xl px-4 py-16 md:py-20">
        <About />
      </section>

      <section id="education" className="bg-gray-50 dark:bg-gray-900/50 py-16 md:py-20">
        <div className="container mx-auto max-w-7xl px-4">
          <Education />
        </div>
      </section>

      <section id="org" className="container mx-auto max-w-7xl px-4 py-16 md:py-20">
        <ExperienceOrg />
      </section>

      <section id="work" className="bg-gray-50 dark:bg-gray-900/50 py-16 md:py-20">
        <div className="container mx-auto max-w-7xl px-4">
          <ExperienceWork />
        </div>
      </section>

      <section id="projects" className="container mx-auto max-w-7xl px-4 py-16 md:py-20">
        <Projects />
      </section>

      <section id="contact" className="bg-gray-50 dark:bg-gray-900/50 py-16 md:py-20">
        <div className="container mx-auto max-w-7xl px-4">
          <Contact />
        </div>
      </section>

      <Footer />
      <BackToTop />
    </main>
  );
}
