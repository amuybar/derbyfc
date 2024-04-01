// index.js
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import App from './App';
import AboutPage from './pages/Abouts/about';
import ClubPartnerPage from './pages/Abouts/ClubPartners';
import CareerPage from './pages/Abouts/Careers';
import GeneralInfoPage from './pages/Abouts/Generalinfo';
import NotFound from './pages/404';
import FAQ from './pages/FAQ/fqa';
import Contact from './pages/Contact/contacts';
import FixturePage from './pages/Fixture/Fixture';
import Register from './pages/Auth/Register';
import Login from './pages/Auth/Login';
import TicketPurchase from './pages/Ticket/Ticket';

ReactDOM.render(
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/clubpatners" element={<ClubPartnerPage />} />
      <Route path="/careers" element={<CareerPage />} />
      <Route path='/info'element={<GeneralInfoPage />} />
      <Route path='/faq'element={<FAQ />} />
      <Route path='/contact'element={<Contact />} />
      <Route path='/404' element={<NotFound/>} /> 
      <Route path='/fixture' element={<FixturePage/>} /> 
      <Route path='/register' element={<Register/>} />
      <Route path='/login' element={<Login/>} />
      <Route path='/aticket' element={<TicketPurchase/>} />

    </Routes>

   
  </Router>,
  document.getElementById('root')
);
