import React from "react";
import { Container } from "react-bootstrap";
import headerlogo from "../assets/image/header_logo.png";

const Header = () => {
  return (
    <header>
      <div className="header_wapper">
        <div className="header_wapper_inner">
          <div className="header_logo">
            <img src={headerlogo} alt="Header Logo" />
          </div>
          <div className="header_menu">
            <ul>
              <li>
                <a href="/">Blog</a>
              </li>
              <li>
                <a href="/">Buy/Sell</a>
              </li>
              <li>
                <a href="/">About Us</a>
              </li>
              <li>
                <a href="/">Projects</a>
              </li>

              <li>
                <a href="/">Contact</a>
              </li>
            </ul>
            <div className="phone_number">
              <a href="tel:03312299471">03312299471</a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
