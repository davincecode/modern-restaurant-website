import React, { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineRestaurantMenu } from 'react-icons/md';
import images from '../../constants/images';
import { navmenu } from '../../constants';
import './Navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <a href="/" className="p__opensans">
          <img src={ images.gericht } alt="app__logo" />
        </a>
      </div>
      <div className="app__navbar-links p__opensans">
      { navmenu.navbarmenu.map((item, index) => (
        <li key={ index }>
          <a href={ item.url }>
            { item.title }
          </a>
        </li>
      )) }
      </div>
      <div className="app__navbar-login">
        <a href="#login" className="p__opensans">Log In / Registration</a>
        <div />
        <a href="/" className="p__opensans">Book Table</a>
      </div>
      <div className="app__navbar-smallscreen">
        <GiHamburgerMenu color="#fff" fontSize={27} onClick={() => setToggleMenu(true)} />
        {toggleMenu && (
          <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
            <MdOutlineRestaurantMenu fontSize={27} className="overlay__close" onClick={() => setToggleMenu(false)} />
            <div className="app__navbar-smallscreen_links">
           { navmenu.navmobile.map((item, index) => (
             <li key={ index }>
               <a href={ item.url } onClick={ () => setToggleMenu(false) }>
                { item.title }
               </a>
             </li>
            )) }
      </div>


          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
