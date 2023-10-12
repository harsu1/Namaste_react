import logo from "./image.png";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  let btnName = "Login";
  const [btnNameReact, setBtnNameReact] = useState("login");

  const { loggedInUser } = useContext(UserContext);

  //subscribing to the store using selector
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="flex justify-between bg-pink-100 shadow-lg sm:bg-yellow-50 lg:bg-green-50">
      <div className="logo-container w-32">
      <Link to="/"><img className="w-80" src={logo} /> </Link>
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          <li className="px-5">
            <Link to="/">Home </Link>
          </li>
          <li className="px-4">
            <Link to="/about">Profile</Link>{" "}
          </li>
          <li className="px-4">
            <Link to="/contact">Contact us</Link>{" "}
          </li>
          <li className="px-4">
            <Link to="/grocery"> Grocery</Link>
          </li>
          <li className="px-4 font-bold ">
            {" "}
            <Link to="/cart">Cart-🛒</Link>({cartItems.length} items)
          </li>
          <button
            className="login"
            onClick={() => {
              btnNameReact === "login"
                ? setBtnNameReact("Logout")
                : setBtnNameReact("login");
            }}
          >
            {btnNameReact}
          </button>
          <li className="px-4 font-bold ">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};
export default Header;
