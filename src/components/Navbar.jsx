import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import logo from "../images/logo.png";

const Navbar = ({ navbarlinks }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;

      if (scrollTop > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navbarClass = isScrolled ? "navbar-white" : "bg-transparent";

  return (
    <header className="w-full fixed top-0 z-30">
      <nav className={`flex items-center items-center travels-container ${navbarClass}`}>
        <NavLink to={"/"} className="flex items-center">
          <img src={logo} alt="logo" className="w-20 h-16 mr-6" />
        </NavLink>
        <ul className="ml-20 flex items-center justify-center">
          {navbarlinks?.map((val, i) => (
            <li key={i} className="mr-8">
              <NavLink to={"#"} className="text-lg text-slate-900 hover:text-emrald-600">
                {val.link}
              </NavLink>
            </li>
          ))}
        </ul>
        <div className="ml-auto">
          <button className="button-emrald px-7 text-base">Login</button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
