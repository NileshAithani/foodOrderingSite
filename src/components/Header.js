import { useEffect, useState } from "react";
import { LOGO_URL } from "../config/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../config/useOnlineStatus";

const Header = () => {
  // const [isLoggedIn, setIsLoggedIn] = useState(false);

  // const handleLoginToggle = () => {
  //   setIsLoggedIn((prevIsLoggedIn) => !prevIsLoggedIn);
  // };

  useEffect(() => {
    console.log("UseEffect");
  });

  const [buttonName, setButtonName] = useState("Login");

  const ButtonNameHandler = () => {
    if (buttonName == "Login") {
      setButtonName("Logout");
    } else {
      setButtonName("Login");
    }
  };
 const onlineStatus = useOnlineStatus();
 console.log(onlineStatus);
  return (
    <div className="header">
      <div className="logoContainer">
      <Link to={"/"}><img className="logo" src={LOGO_URL} /></Link>
        
      </div>
      <div className="nav-items">
        <ul>
        
          <li><Link to={"/"} className="Link">Home</Link></li>
          <li>
            <Link to={"/about"} className="Link">About</Link>
          </li>
          <li>
            <Link to={"/contact"} className="Link">Contact Us</Link>
          </li>
          {/* <li>Cart</li> */}
          <li>OnlineStatus : {onlineStatus?"🟢":"🔴"}</li>

          {/* <button className="login-btn" onClick={handleLoginToggle}>
            {isLoggedIn ? "Logout" : "Login"}
          </button> */}

          <button className="login-btn" onClick={ButtonNameHandler}>
            {buttonName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
