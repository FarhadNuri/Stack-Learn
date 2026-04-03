import React, { useState } from "react";
import NavCss from "./Navbar.module.css";
import { Link } from "react-router-dom";
function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div>
      <div className={NavCss.header}>
        <div>
            <h1>LMS</h1>
        </div>
        <ul className={isMenuOpen ? NavCss.menuOpen : NavCss.menuClosed}>
          <li>
            {" "}
            <Link to="/" onClick={closeMenu}>Home</Link>{" "}
          </li>
          <li>
            {" "}
            <Link to="/OurCourses" onClick={closeMenu}>Our Courses</Link>{" "}
          </li>
          <li>
            {" "}
            <Link to="/Path" onClick={closeMenu}>Path</Link>{" "}
          </li>
          <li>
            {" "}
            <Link to="/FeaturedCourses" onClick={closeMenu}>Featured Courses</Link>{" "}
          </li>
          <li>
            {" "}
            <Link to="/Testimonials" onClick={closeMenu}>Testimonials</Link>{" "}
          </li>
          <li className={NavCss.mobileBtnsItem}>
            <div className={NavCss.mobileBtns}>
              <button onClick={closeMenu}>Login</button>
              <button className={NavCss.btn_sign} onClick={closeMenu}>Sign Up</button>
            </div>
          </li>
        </ul>
        <div className={`${NavCss.btns} ${NavCss.desktopBtns}`}>
            <button>Login</button>
            <button className={NavCss.btn_sign}>Sign Up</button>
        </div>
        <i
          className={`fa ${isMenuOpen ? "fa-times" : "fa-bars"} ${NavCss.bars}`}
          onClick={toggleMenu}
        ></i>
      </div>
    </div>
  );
}

export default Navbar;
