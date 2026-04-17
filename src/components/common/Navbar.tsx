"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "motion/react";
import { Menu, MessageCircle, Phone, X } from "lucide-react";
import { cn } from "@/lib/utils";
import Button from "./Button";

const navLinks = [
  { name: "Accueil", href: "/" },
  { name: "Services", href: "/services" },
  { name: "À Propos", href: "/about" },
  { name: "Contact", href: "/contact" }
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500 py-4",
        isScrolled ? "bg-white/90 backdrop-blur-lg shadow-sm py-3" : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-11 h-11 rounded-lg overflow-hidden shadow-sm ring-1 ring-brand-blue/10 bg-white group-hover:rotate-3 transition-transform duration-300">
            <Image
              src="/images/logo.jpg"
              alt="Logo EPJE Construction"
              width={44}
              height={44}
              className="w-full h-full object-contain p-0.5"
              priority
            />
          </div>
          <div className="flex flex-col">
            <span className="font-display font-bold text-xl tracking-tighter leading-none text-brand-dark">EPJE</span>
            <span className="text-[10px] font-semibold text-brand-orange uppercase tracking-widest leading-normal">Construction</span>
          </div>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-brand-blue",
                  isActive ? "text-brand-blue" : "text-brand-secondary"
                )}
              >
                {link.name}
                {isActive && <motion.div layoutId="nav-underline" className="h-0.5 bg-brand-blue mt-0.5 rounded-full" />}
              </Link>
            );
          })}
        </div>

        <div className="hidden lg:flex items-center gap-4">
          <a href="tel:+237694538117" className="flex items-center gap-2 text-brand-blue font-semibold text-sm">
            <Phone size={16} />
            <span>+237 694 538 117</span>
          </a>
          <a href="https://wa.me/23753483397" target="_blank" rel="noopener noreferrer" aria-label="Discuter sur WhatsApp">
            <Button variant="secondary" size="sm" className="gap-2">
              <MessageCircle size={16} />
              <span>WhatsApp</span>
            </Button>
          </a>
        </div>

        <button className="md:hidden text-brand-dark p-2" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-brand-lightgray overflow-hidden"
          >
            <div className="container mx-auto px-6 py-8 flex flex-col gap-6">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={cn("text-xl font-display font-semibold", isActive ? "text-brand-blue" : "text-brand-anthracite")}
                  >
                    {link.name}
                  </Link>
                );
              })}
              <hr className="border-brand-lightgray" />
              <div className="flex flex-col gap-4">
                <a href="tel:+237694538117" className="flex items-center gap-3 text-brand-dark font-medium">
                  <div className="w-10 h-10 bg-brand-lightgray/50 rounded-full flex items-center justify-center">
                    <Phone size={20} className="text-brand-blue" />
                  </div>
                  <span>+237 694 538 117</span>
                </a>
                <a href="https://wa.me/23753483397" target="_blank" rel="noopener noreferrer" aria-label="Discuter sur WhatsApp">
                  <Button variant="secondary" className="w-full gap-2 py-4">
                    <MessageCircle size={20} />
                    <span>WhatsApp</span>
                  </Button>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
