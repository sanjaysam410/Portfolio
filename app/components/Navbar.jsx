import { assets } from "@/assets/assets";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import styles from "../styles/Navbar.module.css";

const Navbar = () => {
  const [isScroll, setIsScroll] = useState(false);
  const sideMenuRef = useRef();

  const openMenu = () => {
    sideMenuRef.current.style.transform = "translateX(-16rem)";
  };

  const closeMenu = () => {
    sideMenuRef.current.style.transform = "translateX(16rem)";
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) setIsScroll(true);
      else setIsScroll(false);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Background Layer */}
      <div className="fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%]">
        <Image src={assets.header_bg_color} alt="" className="w-full" />
      </div>

      {/* Navbar */}
      <nav
        className={`w-full fixed top-0 px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-[1000] transition-all duration-300 ${
          isScroll ? "bg-white/50 backdrop-blur-lg shadow-md" : "bg-transparent"
        }`}
      >
        {/* Logo */}
        <a href="#top">
          <Image
            src={assets.portfolio_1}
            alt="Logo"
            className="w-28 cursor-pointer"
          />
        </a>
        {/* Desktop Navigation */}
        <ul
          className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 ${
            isScroll ? "" : "bg-white shadow-sm bg-opacity-55"
          }`}
        >
          {[
          { label: "Home", href: "#top" },
          { label: "About Me", href: "#about" },
          { label: "Services", href: "#services" },
          { label: "My Work", href: "#work" },
          { label: "Contact Me", href: "#contact" }
        ].map(
            (item, index) => (
              <li key={index} className={styles.navItem}>
                <a
                  className={`ovo-font relative overflow-hidden ${styles.navLink}`}
                  href={item.href}
                >
                  {item.label}
                </a>
              </li>
            )
          )}
        </ul>
        {/* Right Side Icons */}
        <div className="flex items-center gap-4">
          <a
            href="#contact"
            className={`hidden lg:flex justify-center items-center px-12 py-2 border border-gray-500 rounded-full ml-4 
    group relative overflow-hidden
    transform transition-all duration-300 ease-in-out
    hover:scale-105 hover:bg-white hover:border-transparent
    ${isScroll ? "shadow-md" : ""} ${styles.contactLink}`}
            style={{ minWidth: "110px" }} // Reduced width
          >
            <span className="relative z-10 group-hover:text-gray-800 text-center w-full transition-colors duration-300">
              Contact
            </span>
          </a>
          <button className="block md:hidden ml-3" onClick={openMenu}>
            <Image src={assets.menu_black} alt="Menu" className="w-6" />
          </button>
        </div>
        {/* Mobile Menu */}
        <ul
          ref={sideMenuRef}
          className="flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 h-screen w-64 z-50 bg-rose-50 transition duration-500"
        >
          <div className="absolute right-6 top-6" onClick={closeMenu}>
            <Image
              src={assets.close_black}
              alt="Close"
              className="w-5 cursor-pointer"
            />
          </div>
          <li>
            <a href="#top" onClick={closeMenu}>
              Home
            </a>
          </li>
          <li>
            <a href="#about" onClick={closeMenu}>
              About Me
            </a>
          </li>
          <li>
            <a href="#work" onClick={closeMenu}>
              My Work
            </a>
          </li>
          <li>
            <a href="#services" onClick={closeMenu}>
              Services
            </a>
          </li>
          <li>
            <a href="#contact" onClick={closeMenu}>
              Contact Me
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};
 
export default Navbar;
