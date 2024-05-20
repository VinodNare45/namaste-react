import { useState } from "react";
import LOGO_LINK from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  const onlineStatus = useOnlineStatus();

  return (
    <div className="flex justify-between items-center bg-red-100 shadow-lg" >
      <img className="w-40" src={LOGO_LINK} />
      <div >
        <ul className="flex p-4 m-4 items-center">
          <li className="p-4">
            Online Status: {onlineStatus? "✅":"⭕"}
          </li>
          <li className="p-4">
            <Link to="/">Home</Link></li>
          <li className="p-4">
          <Link to="/about">About Us</Link></li>
          <li className="p-4"><Link to="/contact">Contact Us</Link></li>
          <li className="p-4"><Link to="/grocery">Grocery</Link></li>
          
          <li className="p-4">Cart</li>
          <button
            className="p-4"
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
