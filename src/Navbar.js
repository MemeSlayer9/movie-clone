import React, { useState, useEffect } from "react";
import "./Navbar.css";
function Navbar() {
  const [show, handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);
  return (
    <div className={`nav  ${show && "nav-black"}`}>
      <img
        className="nav-logo"
        src="https://upload.wikimedia.org/wikipedia/commons/0/0f/Logo_Netflix.png"
        alt="netflix-logo"
      />
      <div className="nav-text">
        <a href="#">Home</a>
        <a href="#">TV shows</a>
        <a href="#">Movies</a>
        <a href="#">Home</a>
        <a href="#">Home</a>
        <img
          className="nav-avatar"
          src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png"
          alt="netflix-logo"
        />
      </div>
    </div>
  );
}

export default Navbar;
