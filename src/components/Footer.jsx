"use client";

import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Button, Link, Snippet, Tooltip } from "@nextui-org/react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { FaInstagram } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";
import { SiVercel } from "react-icons/si";
import { motion, AnimatePresence } from "framer-motion";

import moment from "moment/moment";
import { CopyIcon } from "./CopyIcon";
import { CheckIcon } from "./CheckIcon";
moment.locale("es");

const formato = "YYYY";
const AñoActual = moment();

const Footer = () => {
  const { theme, setTheme } = useTheme();

  const [copy, setCopy] = useState(false);

  const toggleCopy = () => {
    setCopy(true);
    typeof window !== "undefined" &&
      window.navigator.clipboard.writeText("nicoschonfeld88@gmail.com");
  };

  useEffect(() => {
    setTimeout(() => {
      setCopy(false);
    }, 5500);
  }, [copy]);

  return (
    <>
      <footer className="w-full py-10 h-auto flex flex-col items-center justify-center gap-5">
        <div className="space-x-5 flex items-center">
          <Link
            href="https://drive.google.com/file/d/15kmPfuJ59yFkSqwMpr0WKOwLiR6xXrQz/view?usp=sharing"
            target="_blank"
            color="success"
            className="text-sm p-1 hover:scale-90 transition-all border rounded-full"
          >
            CV
          </Link>

          <Link
            href="https://www.linkedin.com/in/nicoschonfeld/"
            target="_blank"
            className="text-2xl hover:scale-90 transition-all"
            color="success"
          >
            <AiFillLinkedin />
          </Link>

          <Link
            href="https://www.instagram.com/nicoschonfeld_/"
            target="_blank"
            className="text-2xl hover:scale-90 transition-all"
            color="success"
          >
            <FaInstagram />
          </Link>

          <Link
            href="https://github.com/NicoSchonfeld"
            target="_blank"
            className="text-2xl hover:scale-90 transition-all"
            color="success"
          >
            <AiFillGithub />
          </Link>

          <Link
            href="https://twitter.com/NicoSchonfeld__"
            target="_blank"
            className="text-2xl hover:scale-90 transition-all"
            color="success"
          >
            <RiTwitterXFill />
          </Link>
        </div>

        <Tooltip content="Copiar en el portapapeles">
          <Button
            className="flex items-center gap-3 bg-transparent text-base"
            onClick={toggleCopy}
          >
            nicoschonfeld88@gmail.com {copy ? <CheckIcon /> : <CopyIcon />}
          </Button>
        </Tooltip>

        <Button
          variant="ghost"
          as={Link}
          href="https://vercel.com/"
          target="_blank"
        >
          Deployed on{" "}
          <span className="flex items-center">
            <SiVercel />
            Vercel.
          </span>
        </Button>

        <p className="text-gray-500">
          © {AñoActual.format(formato)} Nico Schönfeld.
        </p>
      </footer>

      <AnimatePresence>
        {copy && (
          <div className="fixed right-5 bottom-10 overflow-hidden py-2">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 1, y: 60 }}
              role="alert"
              className="bg-[#9455D3] flex items-center gap-3 p-3 w-full rounded-xl"
            >
              <span>
                <svg
                  className="text-white"
                  data-testid="geist-icon"
                  fill="none"
                  height="24"
                  shape-rendering="geometricPrecision"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  viewBox="0 0 24 24"
                  width="24"
                >
                  <path d="M20 6L9 17l-5-5" />
                </svg>
              </span>

              <p className="text-white sm:text-base text-sm">
                ¡Se copió en el portapapeles!
              </p>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Footer;
