import { useEffect, useState } from "react";
// import { LOGO_URL } from "../config/constants";
import companylogo from "../Image/CompanyLogo.png";
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
    <nav className="flex justify-evenly w-full p-3 text-lg shadow-lg rounded-md">
      {/* Logo of Company */}
      <div>
        <Link to={"/"}>
          <img className="w-24" src={companylogo} />
        </Link>{" "}
      </div>

      {/* Nav Items */}
      <ul className="flex justify-between items-center gap-9 font-mullish font-bold  transition-all duration-200  ">
        <li>
          <Link to={"/"} className="text-gray-700 hover:text-gray-950 ">
            Home
          </Link>
        </li>
        <li>
          <Link to={"/about"} className="text-gray-700 hover:text-gray-950">
            About
          </Link>
        </li>
        <li>
          <Link to={"/contact"} className="text-gray-700 hover:text-gray-950">
            Contact Us
          </Link>
        </li>
        <li>
          <Link to={"/grocery"} className="text-gray-700 hover:text-gray-950">
            Grocery
          </Link>
        </li>
        <li className="text-gray-700 hover:text-gray-950">OnlineStatus : {onlineStatus ? "🟢" : "🔴"}</li>
      </ul>

      <div className="flex justify-center items-center">
        <button className="w-10 font-mullish font-bold text-gray-700  px-5 text-center transition-all duration-200  hover:text-gray-950  " onClick={ButtonNameHandler}>
          {buttonName}
        </button>
      </div>
    </nav>
  );
};

export default Header;
