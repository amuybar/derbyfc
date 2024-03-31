// News.js
import React from 'react';
import './News.css';

const News = () => {
  // Sample data for sports-related news
  const news = [
    {
      id: 1,
      photo: "images/players1.jpg",
      summary: "Derby FC Kenya wins the league championship for the third consecutive year!",
    },
    {
      id: 2,
      photo: "images/players1.jpg",
      summary: "Player Spotlight: Interview with Derby FC Kenya's star striker, John Doe.",
    },
    {
      id: 3,
      photo: "images/players1.jpg",
      summary: "Match Recap: Derby FC Kenya defeats rivals in thrilling derby match.",
    },
    // Add more sports-related news items as needed
  ];

  return (
    <div className="news-container">
      {news.map((item) => (
        <div key={item.id} className="news-card">
          <img src={item.photo} alt='' className="news-photo" />
          <a href={item.link} className="news-summary">{item.summary}</a>
          
          <div className="bottom-summary">
            <hr/>
            <div className='bs'>
            <p>News</p>
            <p>In 34 Minutes</p>
            </div>
          </div>
        </div>
        
      ))}
    </div>
  );
};

export default News;
