"use client";

import React, { useState } from "react";
import {
  Card,
  CardBody,
  Divider,
  Link,
  ScrollShadow,
  Skeleton,
} from "@nextui-org/react";
import UserComponent from "./UserComponent";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "next-themes";
import photoMe3 from "../assets/banners/photoMe3.png";
import Image from "next/image";
import ButtonLike from "./HeartComponentButton";
import { AiFillHeart } from "react-icons/ai";
import { BiLoader } from "react-icons/bi";
import NextLink from "next/link";

const BlogSection = ({ isLoaded }) => {
  const { theme, setTheme } = useTheme();

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <section className="w-full h-auto">
      {!isLoaded ? (
        <ScrollShadow
          hideScrollBar
          className="w-full h-screen space-y-5 py-10 px-10"
        >
          <Skeleton isLoaded={isLoaded} className="rounded-lg px-10 py-16" />
          <Skeleton isLoaded={isLoaded} className="rounded-lg px-10 py-20" />
          <Skeleton isLoaded={isLoaded} className="rounded-lg px-10 py-32" />
          <Skeleton isLoaded={isLoaded} className="rounded-lg px-10 py-20" />
          <Skeleton isLoaded={isLoaded} className="rounded-lg px-10 py-32" />
        </ScrollShadow>
      ) : (
        <ScrollShadow
          hideScrollBar
          className={`w-full h-screen space-y-5 py-10 px-10 ${theme}`}
        >
          <Card className="w-full text-sm md:text-base">
            <CardBody className="space-y-5">
              <UserComponent />

              <h3 className="text-xl md:text-2xl font-bold">botón de Like</h3>
              <p>
                Aprende a hacer un botón de like animado con React.js, Tailwind
                CSS y Framer Motion.
              </p>

              <NextLink
                href="/button-like"
                onClick={scrollUp}
                className="w-full h-80 px-5 py-10 border dark:border-white/50 rounded-md flex items-center justify-center hover:shadow-md dark:shadow-gray-500/20 transition-all cursor-pointer"
              >
                <div className="relative w-20 h-20 flex items-center justify-center">
                  <div className="bg-gray-400/20 dark:bg-gray-100/20 w-full h-full rounded-full absolute"></div>
                  <div className="bg-gray-400/20 dark:bg-gray-100/20 w-16 h-16 rounded-full absolute"></div>
                  <AiFillHeart className="text-gray-500 dark:text-gray-100 text-4xl z-[1]" />
                </div>
              </NextLink>

              <ButtonLike />
            </CardBody>
          </Card>

          <Card className="w-full text-sm md:text-base">
            <CardBody className="space-y-5">
              <UserComponent />

              <h3 className="text-xl md:text-2xl font-bold">
                botón Enviar + Loader
              </h3>
              <p>
                Aprende a hacer un botón de para tus formularios animado con
                React.js, Tailwind CSS y Framer Motion.
              </p>

              <div className="w-full h-80 px-5 py-10 border dark:border-white/50 rounded-md flex items-center justify-center hover:shadow-md dark:shadow-gray-500/20 transition-all cursor-pointer">
                <button className="relative overflow-hidden w-auto h-10 flex items-center justify-center bg-white text-gray-900 px-3 py-2.5 border dark:border-white rounded-md font-medium">
                  <div className="flex items-center justify-center flex-col">
                    <BiLoader />

                    <span className="mt-2">Enviar</span>
                  </div>
                </button>
              </div>

              <ButtonLike />
            </CardBody>
          </Card>

          <Card className="w-full text-sm md:text-base">
            <CardBody className="space-y-5">
              <UserComponent />

              <h3 className="text-xl md:text-2xl font-bold">
                Transición entre páginas
              </h3>
              <p>
                Aprende a hacer transiciones entre páginas con React.js,
                Tailwind CSS y Framer Motion.
              </p>

              <div className="w-full h-80 px-3 md:px-5 py-10 border dark:border-white/50 rounded-md flex items-center justify-center hover:shadow-md dark:shadow-gray-500/20 transition-all cursor-pointer">
                <div className="relative border overflow-hidden bg-white w-60 h-40 md:w-80 md:h-52 rounded">
                  <div className="bg-gray-300 dark:bg-gray-200 w-full h-5 flex items-center justify-start px-3 space-x-2">
                    <div className="bg-red-500 w-2 h-2 rounded-full"></div>
                    <div className="bg-yellow-500 w-2 h-2 rounded-full"></div>
                    <div className="bg-green-500 w-2 h-2 rounded-full"></div>
                  </div>

                  <div className="bg-gray-700 dark:bg-gray-400 w-[80%] h-[33%]"></div>
                  <div className="bg-gray-700 dark:bg-gray-400 w-[50%] h-[33%]"></div>
                  <div className="bg-gray-700 dark:bg-gray-400 w-[25%] h-[33%]"></div>
                </div>
              </div>

              <ButtonLike />
            </CardBody>
          </Card>
        </ScrollShadow>
      )}
    </section>
  );
};

export default BlogSection;
