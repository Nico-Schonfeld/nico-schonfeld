import React from "react";

import photoMe3 from "../assets/banners/photoMe3.png";
import Image from "next/image";
import Link from "next/link";

const UserComponent = () => {
  return (
    <>
      <div className="flex items-center gap-3">
        <Image
          src={photoMe3}
          alt="banner"
          width={40}
          height={40}
          className="rounded-full"
        />
        <div className="flex flex-col">
          <Link
            href="https://twitter.com/NicoSchonfeld__"
            target="_blank"
            className="font-bold"
          >
            Nico Schönfeld 🌵
          </Link>
          <Link
            href="https://twitter.com/NicoSchonfeld__"
            target="_blank"
            className="text-sm text-gray-500"
          >
            @NicoSchonfeld__
          </Link>
        </div>
      </div>
    </>
  );
};

export default UserComponent;
