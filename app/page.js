'use client'
import { useEffect } from "react";
import { trackVisit } from "@/utils/trackVisit";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import Work from "./components/Work";

export default function Home() {
   useEffect(() => {
     if (typeof window !== "undefined" && !sessionStorage.getItem("visitTracked")) {
       trackVisit();
      sessionStorage.setItem("visitTracked", "1");
    }
  }, []);
  return (
    <>
      <Navbar />
      <Header /> 
      <About />
      <Services />
      <Work />
      <Contact />
      <Footer/>
    </>
  );
}
