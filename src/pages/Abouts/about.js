// AboutPage.js
import React from 'react';
import './AboutPage.css';
import AppBar from '../../components/AppBar/AppBar';

const AboutPage = () => {
  return (
    <div className="about-page">
      <AppBar/>
      <div className="content">
        <h1>About Our Club</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce euismod vestibulum lectus, eget tincidunt turpis mollis a. Nulla ultricies justo ac justo vulputate, nec dictum elit tincidunt. Nulla facilisi.</p>
        <p>Phasellus sit amet eros ut ipsum sodales vehicula. Curabitur ac leo magna. Integer commodo nisi ac sem dignissim, vel sollicitudin urna placerat. Nullam fermentum, est id hendrerit condimentum, felis tortor fermentum sapien, at consequat leo est quis felis.</p>
        <p>Etiam quis nunc non ex ultrices semper non sed erat. Nullam id ipsum ut lorem condimentum rhoncus. In hendrerit mauris ac lorem dapibus, eu vestibulum lacus commodo.</p>
      </div>
    </div>
  );
};

export default AboutPage;
