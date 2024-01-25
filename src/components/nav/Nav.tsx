import React from "react";
import "./Nav.scss";
import Logo from "./Logo";

type Link = {
  title: string;
  href: string;
};

type NavProps = {
  page: any;
  setPage: any;
setInScene: any;
};

const Nav = ({ page, setPage, setInScene }: NavProps) => {
  const links: Link[] = [
    { title: "Home", href: "/home" },
    { title: "Past Projects", href: "/past-projects" },
    { title: "Information", href: "/information" },
  ];

  return (
    <nav>
      {links.map((link, idx) => (
        <a
          key={idx}
          onClick={() => setPage(link.title)}
          className={`link ${
            page == link.title ? "active" : ""
          }`}
        >
          {link.title}
        </a>
      ))}

      <div className="spacer"></div>
      
      <div onClick={() => {
        window.location.reload();
      }} className="logo">
        <Logo />
      </div>
    </nav>
  );
};

export default Nav;
