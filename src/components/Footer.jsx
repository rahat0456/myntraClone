import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <footer>
        <div className="footer_container">
          <div className="footer_column">
            <h3>ONLINE SHOPPING</h3>

            <Link to="#">Men</Link>
            <Link to="#">Women</Link>
            <Link to="#">Kids</Link>
            <Link to="#">Home & Living</Link>
            <Link to="#">Beauty</Link>
            <Link to="#">Gift Card</Link>
            <Link to="#">MyntrLinkInsider</Link>
          </div>

          <div className="footer_column">
            <h3>ONLINE SHOPPING</h3>

            <Link to="#">Men</Link>
            <Link to="#">Women</Link>
            <Link to="#">Kids</Link>
            <Link to="#">Home & Living</Link>
            <Link to="#">Beauty</Link>
            <Link to="#">Gift Card</Link>
            <Link to="#">MyntrLinkInsider</Link>
          </div>

          <div className="footer_column">
            <h3>ONLINE SHOPPING</h3>

            <Link to="#">Men</Link>
            <Link to="#">Women</Link>
            <Link to="#">Kids</Link>
            <Link to="#">Home & Living</Link>
            <Link to="#">Beauty</Link>
            <Link to="#">Gift Card</Link>
            <Link to="#">MyntrLinkInsider</Link>
          </div>
        </div>
        <hr />

        <div className="copyright">
          © 2023 www.myntra.com. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Footer;
