"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";

import { AVATAR_IMAGE } from "@/components/home/components/hero";
import { Tilt } from "@/components/motion-primitives/tilt";

export function AvatarLightbox({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  if (!open) {
    return null;
  }

  return (
    <AnimatePresence>
      <motion.div
        onClick={onClose}
        exit={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="fixed top-0 left-0 w-full h-full z-50 bg-white/80 dark:bg-black/80 backdrop-blur-sm  items-center justify-center flex"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          transition={{ duration: 0.3 }}
          className="flex items-center justify-center p-4"
        >
          <Tilt rotationFactor={8} isRevese>
            <Image
              src={AVATAR_IMAGE}
              alt="Nico Schönfeld"
              width={300}
              height={3000}
              className="rounded-sm hover:scale-125 transition-all duration-300"
            />
          </Tilt>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
