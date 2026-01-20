"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

import { TalkToTheFounderButton } from "./ui/talk-to-the-founder-button";
import {
  COMPANY_NAME,
  LOGO_SRC,
  LOGO_ALT,
  NAV_LINKS,
  CALL_TO_ACTION_URL,
} from "@/constants";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="border-none bg-gradient-to-b from-white to-transparent z-[100] fixed top-0 left-0 right-0">
      <AnimatePresence mode="wait">
        {!isScrolled ? (
          <motion.div
            key="default-nav"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="container mx-auto px-4 sm:px-6 md:px-8 py-15 grid grid-cols-1 md:grid-cols-3 items-center"
          >
            <Link
              href="/"
              className="flex items-baseline gap-3 justify-self-center md:justify-self-start cursor-pointer"
            >
              <Image src={LOGO_SRC} alt={LOGO_ALT} width={50} height={50} />
              <div className="text-5xl font-bold justify-self-start">
                {COMPANY_NAME}
              </div>
            </Link>

            <div className="hidden md:flex items-center justify-center space-x-10 text-xl">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={
                    pathname === link.href
                      ? "text-teal-500"
                      : "hover:text-teal-500"
                  }
                >
                  {link.label}
                </Link>
              ))}
            </div>

            <a
              href={CALL_TO_ACTION_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex justify-self-end"
            >
              <TalkToTheFounderButton className="w-full" />
            </a>
          </motion.div>
        ) : (
          <motion.div
            key="scrolled-nav"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className=" w-fullcontainer mx-auto px-4 sm:px-6 md:px-8 py-4 justify-left flex items-center space-x-4 backdrop-blur-sm bg-white/70 border-b border-gray-200"
          >
            <a
              href={CALL_TO_ACTION_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full"
            >
              <motion.div
                initial={{ width: "auto" }}
                animate={{ width: "100%" }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                <TalkToTheFounderButton className="w-full" />
              </motion.div>
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
