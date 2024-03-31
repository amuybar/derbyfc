// FAQ.js
import React from 'react';
import './faq.css'
import AppBar from '../../components/AppBar/AppBar';

import Add from '../../components/Add/Add';
const FAQ = () => {
  // Array of questions and answers
  const faqs = [
    {
      question: "When was Derby FC started?",
      answer: "Derby FC was started back in 2017."
    },
    {
      question: "Where is Derby FC based?",
      answer: "Derby FC is based in South B."
    },
    {
      question: "Where does Derby FC train?",
      answer: "Derby FC trains at Police Band."
    },
    {
      question: "Who is the head coach of Derby FC?",
      answer: "The head coach of Derby FC is Sam Ongeri."
    },
    {
      question: "What league is Derby FC currently playing in?",
      answer: "Derby FC is currently playing in the County League Nairobi West Branch Zone C."
    },
    {
      question: "What is Derby FC's current game record?",
      answer: "So far, Derby FC has played 6 games, won 1, drawn 1, and lost 4."
    },
    {
      question: "What is the contact number for Derby FC?",
      answer: "You can contact Derby FC at 0707813742."
    },
    {
      question: "What achievements has Derby FC had?",
      answer: "Derby FC was the Sub County League champion Zone A in 2020. They also secured the Moss League position 2 out of 22 teams and were the Maisha League 2018/19 champion in Mbotela Zone."
    }
  ];

  return (
    <div>
      <AppBar/>
      <Add/>
      <h1>Frequently Asked Questions</h1>
      <div className="faq-list">
        {faqs.map((faq, index) => (
          <div key={index} className="faq-item">
            <h3>{faq.question}</h3>
            <p>{faq.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
