import React from 'react';

import { SubHeading } from '../../components';
import './Header.css';

const Header = () => (
  
  <div className="app__header app__hero-bg flex__center section__padding" id="about">
      <div className="app__wrapper_hero-info">
        <SubHeading title="Chase the new flavour" />
        <h1 className="app__header-h1">The Key To Fine Dining</h1>
        <p className="p__opensans" style={{ margin: '2rem 0' }}>Sit tellus lobortis sed senectus vivamus molestie. Condimentum volutpat morbi facilisis quam scelerisque sapien. </p>
       <button type="button" className="custom__button">Explore Menu</button>
      </div>
    </div>
  
);

export default Header;
