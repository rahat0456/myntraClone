import React from "react";
import { IoMdPerson } from "react-icons/io";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { RiShoppingBagLine } from "react-icons/ri";
import { CiSearch } from "react-icons/ci";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const gatherBagItems = useSelector((items) => items.baggyItems);
  const sales = gatherBagItems.length;
  return (
    <div>
      <header>
        <div className="logo_container">
          <Link to="/">
            <img
              className="myntra_home"
              src="images/myntra_logo.webp"
              alt="Myntra Home"
            />
          </Link>
        </div>
        <nav className="nav_bar">
          <Link to="#">Men</Link>
          <Link to="#">Women</Link>
          <Link to="#">Kids</Link>
          <Link to="#">Home & Living</Link>
          <Link to="#">Beauty</Link>
          <Link to="#">
            Studio <sup>New</sup>
          </Link>
        </nav>
        <div className="search_bar">
          <span className="search_icon">
            <CiSearch />
          </span>
          <input
            className="search_input"
            name="error"
            placeholder="Search for products, brands and more"
          />
        </div>
        <div className="action_bar">
          <div className="action_container">
            <IoMdPerson />
            <span className="action_name">Profile</span>
          </div>

          <div className="action_container">
            <MdOutlineFavoriteBorder />
            <span className="action_name">Wishlist</span>
          </div>

          <Link className="action_container" to="/bag">
            <RiShoppingBagLine />
            <span className="action_name">Bag</span>
            {sales > 0 && <span className="bag-item-count">{sales}</span>}
          </Link>
        </div>
      </header>
    </div>
  );
};

export default Header;
