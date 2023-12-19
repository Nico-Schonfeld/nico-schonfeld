"use client";

import React from "react";
import { useTheme } from "next-themes";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { motion } from "framer-motion";

const ButtonLike = ({ justify = "end", text = "2xl", w = "8", h = "8" }) => {
  const [state, setState] = React.useState(false);
  const { theme, setTheme } = useTheme();

  const toggle = () => {
    setState(!state);
  };

  const styleContainer = `w-full flex items-center justify-${justify} px-5 ${theme}`;
  const styleDiv = `relative w-${w} h-${h} flex items-center justify-center cursor-pointer`;
  const styleCircle = `w-full h-full bg-red-100 dark:bg-red-600/30 absolute top-0 left-0 rounded-full`;
  const styleCircle2 = `w-full h-full bg-red-100/50 dark:bg-red-600/20 absolute top-0 left-0 rounded-full`;
  const styleHeart = `text-red-400 text-${text} z-[1]`;

  return (
    <div className={styleContainer}>
      <div className={styleDiv} onClick={toggle}>
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={state ? { opacity: 1, scale: 1 } : { opacity: 1, scale: 0 }}
          transition={{
            duration: 0.3,
            ease: [0, 0.71, 0.2, 1.01],
            scale: {
              type: "spring",
              damping: 5,
              stiffness: 100,
              restDelta: 0.001,
            },
            delay: 0.1,
          }}
          className={styleCircle}
        ></motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={
            state ? { opacity: 1, scale: 1.2 } : { opacity: 1, scale: 0 }
          }
          transition={{
            duration: 0.3,
            ease: [0, 0.71, 0.2, 1.01],
            scale: {
              type: "spring",
              damping: 5,
              stiffness: 100,
              restDelta: 0.001,
            },
          }}
          className={styleCircle2}
        ></motion.div>
        <motion.span
          whileHover={{ scale: 0.9 }}
          whileTap={{ scale: 1.2 }}
          className={styleHeart}
        >
          {state ? <AiFillHeart /> : <AiOutlineHeart />}
        </motion.span>
      </div>
    </div>
  );
};

export default ButtonLike;
