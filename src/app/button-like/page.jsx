"use client";

import HeaderSection from "@/components/HeaderSection";
import ButtonLike from "@/components/HeartComponentButton";
import UserComponent from "@/components/UserComponent";
import {
  Button,
  Card,
  CardBody,
  ScrollShadow,
  Tooltip,
  Code,
  Divider,
  Link,
} from "@nextui-org/react";
import React from "react";
import { AiFillHeart } from "react-icons/ai";
import { useTheme } from "next-themes";
import NextLink from "next/link";

import { BsArrowLeftShort } from "react-icons/bs";

import { motion, AnimatePresence } from "framer-motion";

import SyntaxHighlighter from "react-syntax-highlighter";
import CodeComponent from "@/components/CodeComponent";

const ButtonLikeComp = () => {
  const { theme, setTheme } = useTheme();

  const componetButtonLike = `import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { motion } from "framer-motion";
  
  const ButtonLike = () => {
  
    return (
      <div>
        <AiFillHeart />
      </div>
    );
  };
  
  export default ButtonLike;`;

  const createState = `const ButtonLike = () => {
    const [state, setState] = React.useState(false);
  
    const toggle = () => {
      setState(!state);
    };
  
    return (
      <div>{state ? <AiFillHeart /> : <AiOutlineHeart />}</div>
    );
  };
  
  export default ButtonLike;`;

  return (
    <section className="container mx-auto max-w-3xl w-full felx items-center flex-col  h-auto">
      <ScrollShadow
        hideScrollBar
        className={`w-full h-screen space-y-5 py-10 px-10 ${theme}`}
      >
        <Card className="w-full text-sm md:text-base">
          <CardBody className="space-y-5">
            <Tooltip content="Volver" placement="right">
              <Button
                as={NextLink}
                href="/"
                isIconOnly
                className="text-3xl"
                variant="light"
                color="secondary"
              >
                <BsArrowLeftShort />
              </Button>
            </Tooltip>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <UserComponent />
            </motion.div>

            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="text-xl md:text-2xl font-bold"
            >
              botón de Like
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              Aprende a hacer un botón de like animado con React.js, Tailwind
              CSS y Framer Motion.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="w-full h-80 px-5 py-10 bg-white dark:bg-black border dark:border-white/50 rounded-md flex items-center justify-center transition-all cursor-pointer"
            >
              <ButtonLike justify="center" text="5xl" w="20" h="20" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <p>
                Para hacer este botón de like necesitamos crear un proyecto en
                react.
                <br />
                <br />
                Puedes crearlo con <Code>Vite.js</Code> o con{" "}
                <Code>Next.js</Code>.
                <br />
                <br />
                En mi caso voy a instalar <Code>Next.js</Code> ya que voy a usar{" "}
                <Link
                  color="secondary"
                  href="https://tailwindcss.com/"
                  target="_blank"
                  className="underline"
                >
                  Tailwind CSS
                </Link>{" "}
                para añadir estilos más rapido.
              </p>

              <div className="w-full flex items-start flex-col justify-center gap-5 py-5">
                <div className="w-full">
                  <p className="text-sm mb-2 ps-3">Vite</p>
                  <CodeComponent code="Terminal" copyCode={"npm create vite"}>
                    npm create vite
                  </CodeComponent>
                </div>

                <div className="w-full">
                  <p className="text-sm mb-2 ps-3">Next.js</p>
                  <CodeComponent
                    code="Terminal"
                    copyCode={"npx create-next-app@latest ."}
                  >
                    npx create-next-app@latest .
                  </CodeComponent>
                </div>
              </div>

              <p>
                Lo siguiente que tenemos que hacer es intalar las librerias{" "}
                <Code>react-icons</Code> para añadir iconos y{" "}
                <Code>framer-motion</Code> para añadir animaciones.
              </p>

              <div className="w-full flex items-start flex-col justify-center gap-5 py-5">
                <div className="w-full">
                  <p className="text-sm mb-2 ps-3">React Icons</p>

                  <CodeComponent code="Terminal" copyCode={"npm i react-icons"}>
                    npm i react-icons
                  </CodeComponent>
                </div>

                <div className="w-full">
                  <p className="text-sm mb-2 ps-3">Framer Motion</p>

                  <CodeComponent
                    code="Terminal"
                    copyCode={"npm i framer-motion"}
                  >
                    npm i framer-motion
                  </CodeComponent>
                </div>
              </div>

              <p>
                Lo siguiente que tenemos que hacer es crear un componente.
                Pueden llamarlo como quieran yo le voy a poner{" "}
                <Code>ButtonLike</Code> en{" "}
                <Code>src/components/ButtonLike.jsx</Code>.
                <br />
                <br />
                Una vez creado el componente, vamos a importar los iconos y
                framer motion.
                <br />
                <br />
                Dentro del elemento <Code>div</Code> vamos a colocar el icono{" "}
                <Code>{`<AiFillHeart />`}</Code>
              </p>

              <div className="w-full flex items-start flex-col justify-center gap-5 py-5">
                <div className="w-full">
                  <CodeComponent copyCode={componetButtonLike}>
                    {componetButtonLike}
                  </CodeComponent>
                </div>
              </div>

              <p>
                Crearemos un estado con <Code>useState</Code> y lo
                inicializaremos en <Code>false</Code>.
                <br />
                <br />
                Ademas de eso, crearemos una funcion que nos va a servir para
                cambiar el estado que vamos a ejecutar al darle click a un
                boton.
                <br />
                <br />
                En nuestro elemento <Code>div</Code> añadiremos una condicional.
                Dependiendo del estado vamos a mostrar el corazón relleno o el
                corazón con bordes.
                <br />
                <br />
                Si el <Code>state</Code> es <Code>true</Code> mostraremos{" "}
                <Code>{`<AiFillHeart />`}</Code>.
                <br />
                <br />
                Si el <Code>state</Code> es <Code>false</Code> mostraremos{" "}
                <Code>{`<AiOutlineHeart />`}</Code>.
              </p>

              <div className="w-full flex items-start flex-col justify-center gap-5 py-5">
                <div className="w-full">
                  <CodeComponent copyCode={createState}>
                    {createState}
                  </CodeComponent>
                </div>
              </div>
            </motion.div>

            {/*  <ButtonLike /> */}
          </CardBody>
        </Card>
      </ScrollShadow>
    </section>
  );
};

export default ButtonLikeComp;
