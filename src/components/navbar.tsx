"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

import { TalkToTheFounderButton } from "./ui/talk-to-the-founder-button";

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
              <Image
                src="/cradle-logo.svg"
                alt="Cradle Logo"
                width={50}
                height={50}
              />
              <div className="text-5xl font-bold justify-self-start">
                Cradle
              </div>
            </Link>

            <div className="hidden md:flex items-center justify-center space-x-10 text-xl">
              <Link
                href="/solutions"
                className={pathname === "/solutions" ? "text-teal-500" : "hover:text-teal-500"}
              >
                Solutions
              </Link>
              <Link
                href="/blog"
                className={pathname === "/blog" ? "text-teal-500" : "hover:text-teal-500"}
              >
                Blog
              </Link>
              <Link
                href="/about"
                className={pathname === "/about" ? "text-teal-500" : "hover:text-teal-500"}
              >
                About
              </Link>
            </div>

            <a
              href="https://cal.com/jared-gaynes-vjuiq7/30min"
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
            className="container mx-auto px-4 sm:px-6 md:px-8 py-4"
          >
            <a
              href="https://cal.com/jared-gaynes-vjuiq7/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full"
            >
              <motion.div
                initial={{ width: "auto" }}
                animate={{ width: "100%" }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                <TalkToTheFounderButton />
              </motion.div>
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
