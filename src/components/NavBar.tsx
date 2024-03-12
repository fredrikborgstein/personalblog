import { ModeToggle } from "./mode-toggle";
import { Menu } from "lucide-react";
import useScreenSize from "./useScreenSize";
import { useState } from "react";
import "../assets/navbar.css";
import * as CSS from "csstype";

function NavBar() {
  const [isActive, setIsActive] = useState(false);
  const screenSize = useScreenSize();
  const isMobile = screenSize <= 1021;

  const siteLinks = [
    { title: "Home", href: "/" },
    { title: "Blog", href: "/blog" },
    { title: "Contact", href: "/contact" },
    { title: "About", href: "/about" },
  ];

  const mobileStyleMenu: CSS.Properties = {
    width: "300px",
    height: "calc(100vh - 80px)",
    position: "absolute",
    top: "80px",
    left: isActive ? "0px" : "-300px",
    zIndex: 1000,
  };

  const mobileStyleMenuItems: CSS.Properties = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: "30px 20px",
  };

  const modeToggleStyle: CSS.Properties = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginRight: "80px",
    marginTop: "10px",
  };

  return (
    <nav
      className=" w-screen bg-white text-black flex justify-between "
      id="site-navigation"
      style={{ height: "80px", position: "fixed", top: "0px", zIndex: 1000 }}
    >
      <div
        id="site-title"
        className=" ml-20 text-3xl font-bold text-center flex items-center lg:ml-64"
      >
        Fredrik Borgstein
      </div>
      <div
        id="nav-menu"
        className="bg-white ease-in duration-300 lg:flex-row lg:items-center lg:mr-20"
        {...(isMobile && { style: mobileStyleMenu })}
      >
        {isMobile && (
          <div id="mode-toggle" {...(isMobile && { style: modeToggleStyle })}>
            <ModeToggle />
          </div>
        )}
        <ul className="h-full mr-20 lg:flex lg:items-center ">
          {siteLinks.map((link, index) => (
            <li
              className="px-10 text-lg hover:cursor-pointer hover:text-blue-500"
              key={index}
              {...(isMobile && { style: mobileStyleMenuItems })}
            >
              <a href={link.href}>{link.title}</a>
            </li>
          ))}
          {!isMobile && (
            <div id="full-screen-modetoggler" className="pl-5">
              <ModeToggle />
            </div>
          )}
        </ul>
      </div>
      {isMobile && (
        <Menu
          onClick={() => setIsActive(!isActive)}
          className="hover:cursor-pointer mr-10 mt-5"
          style={{ height: "35px", width: "35px" }}
        />
      )}
    </nav>
  );
}

export default NavBar;
