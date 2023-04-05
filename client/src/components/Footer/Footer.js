import React from "react";
import "./FooterStyles.css";
import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter } from "@mui/icons-material";

const Footer = () => {
  return (
    <div className="footer">
      <div className="foot1">
        <p className="isompip">Rino Pazzo</p>
        <p>Osoite 123</p>
        <p>12345 Kaupunki</p>
        <p>&nbsp;</p>
        <p>012 345 6789</p>
        <p>asiakaspalvelu (a) rino.pazzo</p>
      </div>
      <div className="foot2">
        <p className="isompip">Aukioloajat</p>
        <p>ma - to: 10:30 - 22:00</p>
        <p>pe - su: 10:30 - 23:00</p>
      </div>
      <div className="foot3">
        <p className="isompip">Sivukartta</p>
        <p>
          <Link to="/">etusivu</Link>
        </p>
        <p>
          <Link to="/ruokalista">ruokalista</Link>
        </p>
        <p>
          <Link to="/yhteystiedot">yhteystiedot</Link>
        </p>
      </div>
      <div className="foot4">
        <p className="isompip">Sosiaalinen media</p>
        <p className="socialLink">
          <Facebook style={{ color: "#fff", width: "20px" }} />
          <Link to="/#">Facebook</Link>
        </p>
        <p className="socialLink">
          <Instagram style={{ color: "#fff", width: "20px" }} />
          <Link to="/#">Instagram</Link>
        </p>
        <p className="socialLink">
          <Twitter style={{ color: "#fff", width: "20px" }} />
          <Link to="/#">Twitter</Link>
        </p>
      </div>
    </div>
  );
};

export default Footer;
