"use client";

import { useEffect, useState } from "react";
import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Skeleton,
} from "@nextui-org/react";
import { useTheme } from "next-themes";

import { BiSolidMoon } from "react-icons/bi";
import { BsFillSunFill } from "react-icons/bs";

export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <>
      <Dropdown>
        <DropdownTrigger>
          <Button variant="light" isIconOnly>
            {theme == "dark" ? <BsFillSunFill /> : <BiSolidMoon />}
          </Button>
        </DropdownTrigger>
        <DropdownMenu aria-label="Static Actions">
          <DropdownItem key="Light" onClick={() => setTheme("light")}>
            <span className="flex items-center gap-3">
              <BsFillSunFill /> Light
            </span>
          </DropdownItem>
          <DropdownItem key="Dark" onClick={() => setTheme("dark")}>
            <span className="flex items-center gap-3">
              <BiSolidMoon /> Dark
            </span>
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </>
  );
}
