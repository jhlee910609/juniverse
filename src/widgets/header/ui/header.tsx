"use client";

import { memo } from "react";
import { Navbar } from "@/features/navigation";

export const Header = memo(function Header() {
  return <Navbar />;
});