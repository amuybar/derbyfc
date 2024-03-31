// News.js
import React from 'react';
import './News.css';

const News = () => {
  // Sample data for sports-related news
  const news = [
    {
      id: 1,
      photo: "images/players1.jpg",
      summary: "Derby FC Kenya wins the Sub County League championship in Zone A 2020!",
      link: "/404",
    },
    {
      id: 2,
      photo: "images/players1.jpg",
      summary: "Derby FC Kenya secures 2nd position out of 22 teams in the Moss League!",
      link: "/404",
    },
    {
      id: 3,
      photo: "images/players1.jpg",
      summary: "Derby FC Kenya crowned champions of the Maisha League 2018/19 in the Mbotela Zone!",
      link: "/404",
    }
    // Add more sports-related news items as needed
  ];

  return (
    <><h2>News</h2><div className="news-container">

      {news.map((item) => (
        <div key={item.id} className="news-card">
          <img src={item.photo} alt='' className="news-photo" />
          <a href={item.link} className="news-summary">{item.summary}</a>

          <div className="bottom-summary">
            <hr />
            <div className='bs'>
              <p>News</p>
              <p>In 34 Minutes</p>
            </div>
          </div>
        </div>

      ))}
    </div></>
  );
};

export default News;
