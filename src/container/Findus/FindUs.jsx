import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './findus.css';

const FindUs = () => (
  <div className="app__bg app__wrapper app__wrapper-findus section__padding" id="contact">
    <div className="app__wrapper_findus-info">
      <SubHeading title="Contact" />
      <h1 className="headtext__Playfair" style={{ marginBottom: '3rem' }}>Find Us</h1>
      <div className="app__wrapper-content">
        <p className="p__opensans">Center St. Bungalow, Whatcroft Hall Lane, Rudheath, CW9 75G</p>
        <p className="p__Playfair" style={{ color: '#DCCA87', margin: '2rem 0' }}>Opening Hours</p>
        <p className="p__opensans">Mon - Fri: 10:00 am - 02:00 am</p>
        <p className="p__opensans">Sat - Sun: 10:00 am - 03:00 am</p>
      </div>
      <button type="button" className="custom__button" style={{ marginTop: '2rem' }}>Visit Us</button>
    </div>

    <div className="app__wrapper_img-left">
      <img src={images.findus} alt="finus_img" />
    </div>
  </div>
);

export default FindUs;
