import { Link } from "react-router-dom";
import brainFlixLogo from "../../assets/images/BrainFlix-logo.svg";
import profilePicture from "../../assets/images/Mohan-muruge.jpg";
import "./Header.scss";

const Header = () => {
  return (
    <header className="header">
      <Link to="/" className="header__logo">
        <img src={brainFlixLogo} alt="Brain Flix Logo" />
      </Link>
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
        <Link to="/upload ">
          <button className="header__button">Upload</button>
        </Link>
        <img
          src={profilePicture}
          alt="Profile picture"
          className="header__avater-tb"
        />
      </div>
    </header>
  );
};

export default Header;
