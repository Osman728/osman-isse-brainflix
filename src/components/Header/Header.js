import brainFlixLogo from "../../assets/images/BrainFlix-logo.svg"
import profilePicture from "../../assets/images/Mohan-muruge.jpg"
import "./Header.scss";
const Header = () => {
    return (
      <header className="header">
        <img src={brainFlixLogo} className="header__logo" alt="Brain Flix Logo"></img>
        <div className="header__container">
        <input placeholder="Search" className="header__searchbar"></input>
        <img src={profilePicture} alt="Profile picture"class="header__avartar"/>
        </div>
        <button className="header__button">Upload</button>
      </header>
    );
  };
  
  export default Header;
  