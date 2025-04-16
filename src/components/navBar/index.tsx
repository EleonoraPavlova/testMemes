import {Link as HeroLink, Navbar, NavbarBrand, NavbarContent, NavbarItem} from "@heroui/react";
import {Link as RouterLink, useLocation} from "react-router-dom";

import Logo from "../logo";


const NavbarHeroui = () => {
 const location = useLocation();

 // const activeClass = "text-[#1E40AF] font-bold transform transition-all duration-300 scale-105 text-[20px]";
 // const hoverClass = "text-white hover:text-[#60A5FA] text-[18px]";

 const isTable = location.pathname === "/table";
 const isList = location.pathname === "/list";


 return (
  <Navbar className="w-full bg-inherit text-inherit border border-gray-500 rounded-md justify-between">
   <NavbarBrand>
    <Logo/>
   </NavbarBrand>
   <NavbarContent className="sm:flex gap-[20px]" justify="center">
    <NavbarItem isActive={isTable}>
     <HeroLink as={RouterLink} to="/table" aria-current="page">
      Table
     </HeroLink>
    </NavbarItem>
    <NavbarItem isActive={isList}>
     <HeroLink as={RouterLink} to="/list">
      Lists
     </HeroLink>
    </NavbarItem>
   </NavbarContent>
  </Navbar>
 );
}

export default NavbarHeroui;
