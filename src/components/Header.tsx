"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Menu from "./Menu";
import styles from "./Header.module.css";

const Header = () => {
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrollHeaderVisible, setIsScrollHeaderVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > 350) {
        setIsScrollHeaderVisible(true);
      }
      if (currentScrollY < 350) {
        setIsScrollHeaderVisible(false);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    document.body.style.overflow = !isMenuOpen ? "hidden" : "";
  };

  const HeaderContent = () => (
    <div className="flex justify-between items-center">
      <Link href="/">
        <Image
          src="/agam_logo.webp"
          alt="agam logo"
          width={55}
          height={55}
          className="rounded-full w-[55px] h-[55px] lg:w-[100px] lg:h-[100px]"
        />
      </Link>
      <button
        onClick={toggleMenu}
        className="flex flex-col items-center text-white"
        aria-label="Toggle menu"
      >
        <div className={`${styles.navToggle} flex gap-[10px] items-center`}>
          <div
            className={`${styles.hamburger} ${
              isMenuOpen ? styles.scaleDown : ""
            }`}
          >
            <span className={styles.bar}></span>
            <span className={styles.bar}></span>
            <span className={styles.bar}></span>
          </div>
          <span className="uppercase text-[16px] font-normal leading-[19px] tracking-[3.2px] lg:text-[24px] lg:leading-[24px] lg:tracking-[6px]">
            Menu
          </span>
        </div>
      </button>
    </div>
  );

  return (
    <>
      <header className="absolute w-full py-[40px] px-[35px] overflow-hidden z-50">
        <HeaderContent />
      </header>

      <header
        className={`fixed top-0 left-0 w-full p-[30px] overflow-hidden z-50 transition-transform duration-500 bg-[#06010a80] backdrop-blur-[6.5px] ${
          isScrollHeaderVisible ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <HeaderContent />
      </header>

      <Menu isOpen={isMenuOpen} onClose={toggleMenu} />
    </>
  );
};

export default Header;
