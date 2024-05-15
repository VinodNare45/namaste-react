import { useState } from "react";
import LOGO_LINK from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  const onlineStatus = useOnlineStatus();

  return (
    <div className="header">
      <img className="logo" src={LOGO_LINK} />
      <div className="nav-items">
        <ul>
          <li>
            Online Status: {onlineStatus? "✅":"⭕"}
          </li>
          <li>
            <Link to="/">Home</Link></li>
          <li>
          <Link to="/about">About Us</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
          <li><Link to="/grocery">Grocery</Link></li>
          
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
