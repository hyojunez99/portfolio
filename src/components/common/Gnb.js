import { useState } from "react";
import "./Gnb.scss";

const Gnb = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen((prev) => !prev);
  };
  return (
    <nav className={isOpen ? "open" : ""}>
      <div className="mobile-toggle">
        <button
          onClick={handleClick}
          className={isOpen ? "open" : ""}
          aria-label="menu toggle"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
      <div className={`menu-wrap ${isOpen ? "open" : ""}`}>
        <ul>
          <li>Intro</li>
          <li>About</li>
          <li>Skills</li>
          <li>Projects</li>
          <li>Contact</li>
        </ul>
      </div>
    </nav>
  );
};

export default Gnb;
