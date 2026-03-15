import React from "react";
import About from "../Components/About";
import Hero from "../Components/Hero";
import Stat from "../Components/Stat";
import Features from "../Components/Features";
import Services from "../Components/Services";

export default function AboutPage() {
  return (
    <>
      <main className="main">
        <Hero title="About Us" />
        <Stat />
        <About />
        <Features />
        <Services />
      </main>
    </>
  );
}
