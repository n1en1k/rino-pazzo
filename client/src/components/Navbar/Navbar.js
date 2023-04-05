import React, { useState } from "react";
import "./NavbarStyles.css";
import { Link } from "react-router-dom";
import Menu from "@mui/icons-material/Menu";
import MenuOpen from "@mui/icons-material/MenuOpen";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  return (
    <div className="header header-bg">
      <Link to="/">
        <h1>Rino Pazzo</h1>
      </Link>
      <ul className={click ? "nav-menu active" : "nav-menu"}>
        <li>
          <Link to="/">Etusivu</Link>
        </li>
        <li>
          <Link to="/ruokalista">Ruokalista</Link>
        </li>
        <li>
          <Link to="/yhteystiedot">Yhteystiedot</Link>
        </li>
      </ul>
      <div className="hamburger" onClick={handleClick}>
        {click ? (
          <MenuOpen size={20} style={{ color: "#fff" }} />
        ) : (
          <Menu size={20} style={{ color: "#fff" }} />
        )}
      </div>
    </div>
  );
};

export default Navbar;
