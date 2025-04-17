import {Navbar, NavbarBrand, NavbarContent, NavbarItem} from "@heroui/react";
import {ReactElement} from "react";
import {NavLink} from "react-router-dom";

import Logo from "../logo";

const NavbarHeroui = (): ReactElement => {

 const customClass = ({isActive}: { isActive: boolean }) =>
  isActive
   ? 'text-violet-500 underline underline-offset-4 decoration-violet-500 font-semibold'
   : 'text-white';

 return (
  <Navbar className="w-full bg-inherit text-inherit border border-gray-500 rounded-md justify-center mb-8">
   <NavbarBrand>
    <Logo/>
   </NavbarBrand>
   <NavbarContent className="sm:flex gap-[20px]" justify="center">
    <NavbarItem>
     <NavLink to="/table" className={customClass}>
      Table
     </NavLink>
    </NavbarItem>
    <NavbarItem>
     <NavLink to="/list" className={customClass}>
      Lists
     </NavLink>
    </NavbarItem>
   </NavbarContent>
  </Navbar>
 );
}

export default NavbarHeroui;
