
import { Dropdown, DropdownItem, Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle } from "flowbite-react";
import {Link} from "react-router-dom" ;
import logo from "../assets/ourfriend-logo.png"

 function Header() {
  return (
    
   <>
   <header className="bg-blue-500 text-white text-sm">
    <div className="container-fluid px-2 mx-auto  py-2 flex justify-between">
      <span>121 king street, Melbourne, Vic 3000</span>
      <span>(800)569-7890</span>
    </div>


   </header>
      <Navbar fluid rounded>
        <NavbarBrand as={Link} href="#">
          <img src={logo} className="mr-3 h-6 sm:h-9" alt="ourfriend-logo" />
        </NavbarBrand>
        <NavbarToggle />
        <NavbarCollapse>
          <NavbarLink href="#" active>
            Home
          </NavbarLink>
          <Dropdown inline label= "About">

          <DropdownItem as={Link} to="/about">
          About us
          </DropdownItem>
          <DropdownItem as={Link} to="/about">
          Founder
          </DropdownItem>
          <DropdownItem as={Link} to="/about">
          Team
          </DropdownItem>
          <DropdownItem as={Link} to="/about">
          About us
          </DropdownItem>

          </Dropdown>
          
          <NavbarLink href="#">Services</NavbarLink>
          <NavbarLink href="#">Pricing</NavbarLink>
          <NavbarLink href="#">Contact</NavbarLink>
          <button className="bg-amber-300 px-2 py-2 rounded">Book Appiontment</button>
          {/* <NavbarLink href="#">Book Appointment</NavbarLink> */}
        </NavbarCollapse>
        
      </Navbar>
   </>
  );
}
export default Header