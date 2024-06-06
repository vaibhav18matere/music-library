"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/utils/cn";

const Navbar = ({ className }: { className?: string }) => {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        <MenuItem setActive={setActive} active={active} item="Home"></MenuItem>
        <MenuItem setActive={setActive} active={active} item="All Courses">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="#!">Rock</HoveredLink>
            <HoveredLink href="#!">Electronic music</HoveredLink>
            <HoveredLink href="#!">Rhythm and blues</HoveredLink>
            <HoveredLink href="#!">Classical music</HoveredLink>
            <HoveredLink href="#!">Heavy metal</HoveredLink>
            <HoveredLink href="#!">Folk music</HoveredLink>
            <HoveredLink href="#!">Indie rock</HoveredLink>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Contact">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/hobby">Github</HoveredLink>
            <HoveredLink href="/individual">LinkedIn</HoveredLink>
            <HoveredLink href="/team">Twitter</HoveredLink>
            <HoveredLink href="/enterprise">Website</HoveredLink>
          </div>
        </MenuItem>
      </Menu>
    </div>
  );
};

export default Navbar;
