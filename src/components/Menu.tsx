"use client";

import { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./Menu.module.css";

interface MenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const Menu = ({ isOpen, onClose }: MenuProps) => {
  useEffect(() => {
    const handleEscKey = (event: KeyboardEvent) => {
      if (event.key === "Escape" && isOpen) {
        onClose();
      }
    };

    window.addEventListener("keydown", handleEscKey);
    return () => window.removeEventListener("keydown", handleEscKey);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 backdrop-blur-[15px] overflow-hidden z-50">
      <div className="flex justify-end p-[25px]">
        <button
          onClick={onClose}
          className={`text-white text-3xl ${styles.closeButton}`}
        >
          ✕
        </button>
      </div>

      <div className="flex flex-col items-center h-full mt-[50px] lg:mt-[150px]">
        <p className="text-[45px] text-white text-center font-semibold leading-[45px] tracking-[6px] lg:text-[100px] lg:leading-[100px] lg:tracking-[8px]">
          AGAM
        </p>
        <nav className="flex flex-col items-center gap-[25px] mt-[40px]">
          <Link
            href="/band"
            onClick={onClose}
            className="text-white text-[27px] font-medium uppercase tracking-[4px] lg:text-[50px] lg:tracking-[8px]"
          >
            Band
          </Link>
          <Link
            href="/videos"
            onClick={onClose}
            className="text-white text-[27px] font-medium uppercase tracking-[4px] lg:text-[50px] lg:tracking-[8px]"
          >
            Videos
          </Link>
        </nav>

        <div className="flex items-center gap-[30px] mt-[60px]">
          <Link
            href="https://www.instagram.com/agamtheband"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/instagram-logo-white.png"
              alt="instagram logo"
              width={24}
              height={24}
              className="w-[24px] h-[24px] lg:w-[32px] lg:h-[32px]"
            />
          </Link>
          <Link
            href="https://www.youtube.com/@agamtheband"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/yt-logo-white.png"
              alt="yt logo"
              width={24}
              height={24}
              className="w-[32px] h-[24px] lg:w-[40px] lg:h-[32px]"
            />
          </Link>
          <Link
            href="https://x.com/agamlive"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/x-logo-white.png"
              alt="x logo"
              width={24}
              height={24}
              className="w-[24px] h-[24px] lg:w-[32px] lg:h-[32px]"
            />
          </Link>
          <Link
            href="https://www.facebook.com/agamtheband"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/fb-logo-white.png"
              alt="fb logo"
              width={24}
              height={24}
              className="w-[24px] h-[24px] lg:w-[32px] lg:h-[32px]"
            />
          </Link>
        </div>

        <Image
          src="/agam_logo.webp"
          alt="agam logo"
          width={90}
          height={90}
          className="rounded-full mt-[70px] lg:w-[100px] lg:h-[100px]"
        />
      </div>
    </div>
  );
};

export default Menu;
