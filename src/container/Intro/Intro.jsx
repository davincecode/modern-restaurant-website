import React from 'react';

import { meal } from '../../constants';
import './Intro.css';

const Intro = () => {

  const vidRef = React.useRef();

  return (
    <div className="app__video">
      <video
        ref={vidRef}
        src={meal}
        type="video/mp4"
        loop
        autoPlay={true}
        controls={false}
        muted
      />
      <div className="app__video-overlay flex__center">
        <div className="app__video-overlay_cto flex__center">
          BOOK TABLE NOW
        </div>
      </div>
    </div>
  );
};

export default Intro;
