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

import photoMe3 from "../assets/banners/photoMe3.png";
import Image from "next/image";
import ButtonLike from "./HeartComponentButton";

const AboutMe = ({ isLoaded }) => {
  const [viewMore, setViewMore] = useState(false);

  const toggleViewMore = () => {
    setViewMore(!viewMore);
  };

  const skills = [
    { title: "JavaScript" },
    { title: "React.js" },
    { title: "Next.js" },
    { title: "Node.js" },
    { title: "Cómunicación efectiva" },
    { title: "Resolución de conflictos" },
    { title: "Habilidad para trabajar en equipo y de forma independiente." },
    { title: "Flexibilidad, adaptabilidad." },
    { title: "Figma" },
    { title: "Adobe Illustrator" },
    { title: "Adobe PhotoShop" },
    { title: "Express.js" },
    { title: "MySQL" },
    { title: "HTML" },
    { title: "CSS" },
    { title: "Tailwind Css" },
    { title: "ChakraUI" },
    { title: "bootstrap" },
    { title: "Sass" },
    { title: "Styled-Components" },
    { title: "Git" },
    { title: "GitHub" },
    { title: "Jira" },
    { title: "Google Meet" },
  ];

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
          className="w-full h-screen space-y-5 py-10 px-10"
        >
          <Card className="w-full text-sm md:text-base">
            <CardBody className="space-y-5">
              <UserComponent />

              <p>¡Holaa! 🙌🏻🙌🏻</p>

              <p>
                Me llamo Nicolás Schönfeld Desarrollar Front-End. Me encanta
                hacer proyectos usando React o Next.js como mi
                libreria/framework favorito.
              </p>

              <p>
                Tengo 22 años, resido en Córdoba Argentina. <br />
                Soy creativo y me esfuerzo por innovar o mejorar lo existente.
              </p>

              <ButtonLike />
            </CardBody>
          </Card>

          <Card className="w-full text-sm md:text-base">
            <CardBody className="space-y-5">
              <UserComponent />

              <p>Mis habilidades:</p>

              <ul className="list-disc px-10">
                {skills?.slice(0, viewMore ? 24 : 5).map((dato, index) => (
                  <li
                    key={index}
                    className="text-gray-500 hover:text-gray-400 transition-all"
                  >
                    {dato?.title}
                  </li>
                ))}{" "}
                <Link
                  color="secondary"
                  className="cursor-pointer py-2"
                  onClick={toggleViewMore}
                >
                  {!viewMore ? " Ver más..." : " Ver menos."}
                </Link>
              </ul>

              <ButtonLike />
            </CardBody>
          </Card>

          <Card className="w-full text-sm md:text-base">
            <CardBody className="space-y-5">
              <UserComponent />

              <p>Les dejo mi GitHub, ahí subo todos mis proyectos.</p>

              <p>
                GitHub:{" "}
                <Link
                  href="https://github.com/NicoSchonfeld"
                  target="_blank"
                  color="secondary"
                >
                  GitHub/NicoSchonfeld
                </Link>
              </p>

              <Link
                href="https://github.com/NicoSchonfeld"
                target="_blank"
                className="w-full overflow-hidden rounded-xl flex flex-col md:flex-row items-center gap-5 border border-black/20 dark:border-white/20 hover:scale-95 transition-all shadow-md"
              >
                <Image src={photoMe3} alt="banner" width={200} height={200} />
                <div className="text-center md:text-start text-sm md:text-base pb-10 px-10 md:pb-0 md:px-0">
                  <p className="text-gray-500">github.com</p>
                  <p>NicoSchonfeld - Overview</p>
                  <p className="text-gray-500">
                    Front-End Developer || React.js || Next.js .
                  </p>
                  <p className="text-gray-500">
                    NicoSchonfeld hs 24 repositories avalible. Follo...
                  </p>
                </div>
              </Link>

              <ButtonLike />
            </CardBody>
          </Card>
        </ScrollShadow>
      )}
    </section>
  );
};

export default AboutMe;
