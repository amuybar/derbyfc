import React, { useState, } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './Landing.css';

const Landing = () => {
  const [currentIndex, setCurrentIndex] = useState(0);


 
  return (
    <div className="landing">
        <Carousel
        showArrows={true}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        autoPlay={true} 
        selectedItem={currentIndex}
        onChange={index => setCurrentIndex(index)}
      >
        <div className="carousel-item">
          <img src="images/players3.jpg" alt="" />
          <div className="caption">
            <h2>Training session</h2>
            <p>Inclass Trainning session with all the players</p>
          </div>
        </div>
        <div className="carousel-item">
          <img src="images/players2.jpg" alt="" />
          <div className="caption">
            <h2>MatchDay</h2>
            <p>Description 2</p>
          </div>
        </div>
        <div className="carousel-item">
          <img src="images/players3.jpg" alt="" />
          <div className="caption">
            <h2>MatchDay</h2>
            <p>Description 3</p>
          </div>
        </div>
      </Carousel>
    
    </div>
  );
}

export default Landing;
