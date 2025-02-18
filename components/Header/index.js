"use client";
import React from "react";
import Image from "next/image";

function Header() {
  return (
    <header className="flex justify-start items-center ">
      <Image
        src="/assets/images/eye-logo.png"
        alt="Header Logo"
        width={36}
        height={36}
        className="hidden md:block" // Hide on mobile
      />
    </header>
  );
}

export default Header;