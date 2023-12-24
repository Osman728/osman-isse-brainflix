// Header.jsx
import React from "react";
import brainFlixLogo from "../../assets/images/BrainFlix-logo.svg";
import profilePicture from "../../assets/images/Mohan-muruge.jpg";
import "./Header.scss";

const Header = () => {
  return (
    <header className="header">
      <img src={brainFlixLogo} className="header__logo" alt="Brain Flix Logo" />
      <div className="header__wrapper-tb">
        <div className="header__container">
          <input
            placeholder="Search"
            className="header__searchbar"
            type="text"
          />
          <img
            src={profilePicture}
            alt="Profile picture"
            className="header__avatar"
          />
        </div>
        <button className="header__button">Upload</button>
        <img
          src={profilePicture}
          alt="Profile picture"
          className="header__avatar-tb"
        />
      </div>
    </header>
  );
};

export default Header;
