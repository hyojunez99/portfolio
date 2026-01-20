import Gnb from "./Gnb";
import "./Header.scss";
const Header = () => {
  return (
    <header>
      <div className="header-desktop">
        <ul>
          <li>Intro</li>
          <li>About</li>
          <li>Skills</li>
          <li>Projects</li>
          <li>Contact</li>
        </ul>
      </div>
      <Gnb />
    </header>
  );
};

export default Header;
