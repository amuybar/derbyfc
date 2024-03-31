import React, { useState, } from 'react';
import { useNavigate } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './Landing.css';

const Landing = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();

  const handleClickFixture=()=>{
    navigate('/fixture');
  }


 
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
            <button onClick={handleClickFixture}>Fixture</button>
          </div>
        </div>
        <div className="carousel-item">
          <img src="images/players2.jpg" alt="" />
          <div className="caption">
          <button onClick={handleClickFixture}>Standings</button>
          </div>
        </div>
        <div className="carousel-item">
          <img src="images/players3.jpg" alt="" />
          <div className="caption">
          <button onClick={handleClickFixture}>Results</button>
          </div>
        </div>
      </Carousel>
    
    </div>
  );
}

export default Landing;
