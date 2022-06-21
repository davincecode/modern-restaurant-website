import React from 'react';

import { SubHeading } from '../../components';
import { images, data } from '../../constants';
import './Laurels.css';

const AwardCard = ({ award: { imgUrl, title, subtitle } }) => (
  <div className="app__laurels_awards-card">
    <img src={imgUrl} alt="awards" />
    <div className="app__laurels_awards-card_content">
      <p className="p__Playfair" style={{ color: '#DCCA87' }}>{title}</p>
      <p className="p__opensans">{subtitle}</p>
    </div>
  </div>
);

const Laurels = () => (
  <div className="app__laurels app__bg app__wrapper section__padding" id="awards">
    <div className="app__wrapper_laurel-info">
      <SubHeading title="Awards & recognition" />
      <h1 className="headtext__Playfair">Our Laurels</h1>

      <div className="app__laurels_awards">
        {data.awards.map((award) => <AwardCard award={award} key={award.title} />)}
      </div>
    </div>
    
    <div className="app__laurels_images">
      <div className="app__wrapper_laurel-img">
        <img src={images.laurels} alt="laurels_img" />
      </div>
    </div>
  </div>
);

export default Laurels;
