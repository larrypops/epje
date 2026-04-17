"use client";

import Image from "next/image";
import { motion } from "motion/react";

export default function WhatsAppButton() {
  const whatsappUrl = "https://wa.me/237694538117";

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.94 }}
      className="fixed bottom-6 right-6 z-40 w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-2xl ring-1 ring-black/5"
      aria-label="Discuter sur WhatsApp"
    >
      <Image
        src="/icons/whatsapp-official.svg"
        alt="Logo officiel WhatsApp"
        width={36}
        height={36}
        className="w-9 h-9"
      />
      <span className="absolute -top-1 -right-1 flex h-4 w-4">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-75" />
        <span className="relative inline-flex rounded-full h-4 w-4 bg-[#25D366]" />
      </span>
    </motion.a>
  );
}
