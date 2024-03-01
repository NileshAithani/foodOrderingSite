import { useEffect, useState } from "react";
import { LOGO_URL } from "../config/constants";

const Header = () => {
  // const [isLoggedIn, setIsLoggedIn] = useState(false);

  // const handleLoginToggle = () => {
  //   setIsLoggedIn((prevIsLoggedIn) => !prevIsLoggedIn);
  // };

  useEffect(()=>{
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

  return (
    <div className="header">
      <div className="logoContainer">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact Us</li>
          <li>Cart</li>

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
