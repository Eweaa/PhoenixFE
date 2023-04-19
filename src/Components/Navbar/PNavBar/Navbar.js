import React, { useState } from "react";
import { useAuth } from "../../../Auth/AuthContext";
import { useNavigate } from "react-router-dom";
import Phoenix from "../../../Assets/Phoenix.png";
import GenericUser from "../../../Assets/GenericUser.jpg";
import NavbarCSS from "./Navbar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faMessage } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import Bell from "./Bell";

const Navbar = () => {
  const { currentUser, logout } = useAuth();
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      setError("");
      await logout();
      navigate("/login");
    } catch {
      setError("Failed to Logout");
    }
  };

  return (
    <nav className={[NavbarCSS.nav, "p-2"].join(" ")}>
      <div className={NavbarCSS.logo}>
        <img src={Phoenix} className="mx-2" />
        <h2 className="mx-2">Phoenix</h2>
      </div>
      <div className={NavbarCSS.search}>
        <input
          type="text"
          className="p-2"
          placeholder="🔍 Search for something here"
        />
      </div>
      <div className={NavbarCSS.Profile}>
        <Link
          to="/doctors"
          className={[NavbarCSS.bookBtn, "mx-1  p-2"].join(" ")}
        >
          Book Now
        </Link>
        <Bell opt1="1" />

        <button className="mx-1 p-2">
          <FontAwesomeIcon icon={faMessage} />
        </button>

        <button onClick={handleLogout} className="mx-1 p-2">
          <img src={GenericUser} />
        </button>
        <div></div>
      </div>
    </nav>
  );
};

export default Navbar;
