import { useState } from "react";
import LOGO_LINK from "../utils/constants";
import { Link } from "react-router-dom";

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="header">
      <img className="logo" src={LOGO_LINK} />
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/">Home</Link></li>
          <li>
          <Link to="/about">About Us</Link></li>
          <li>
          <Link to="/contact">Contact Us</Link></li>
          <li>Cart</li>
          <button
            className="login-btn"
            onClick={() => setIsLoggedIn(!isLoggedIn)}
          >
            {isLoggedIn ? "Logout" : "Login"}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
