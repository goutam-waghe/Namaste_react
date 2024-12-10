import { useState } from "react";
import { LOGO_URL } from "../utils/constant";

export const Header = () => {
  let [loginbtn, setloginbtn] = useState("login");
  console.log("header render");
  return (
    <div className="header">
      <div className="logo">
        <img src={LOGO_URL} />
      </div>
      <ul className="navlinks">
        <li className="link">Home</li>
        <li className="link">Services</li>
        <li className="link">Contact us</li>
        <li className="link">Cart item</li>
        <button
          className="button"
          onClick={() => {
            loginbtn = loginbtn == "logout" ? "login" : "logout";
            setloginbtn(loginbtn);
          }}
        >
          {loginbtn}
        </button>
      </ul>
    </div>
  );
};
