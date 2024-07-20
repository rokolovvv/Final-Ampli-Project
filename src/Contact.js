import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import instagram from './instagram.png';
import facebook from './facebook.png';
import ampli from './ampli.png';
import './App.css';

function Contact() {
    return (
        <div className="Main">
            <div className='contact-wrapper'>
                <h1 className='Contact'>CONTACT ME</h1>
                <a className='contact-links' href='https://t.me/rokolovv'>TELEGRAM</a>
                <a className='contact-links'>+ 380 (68) 837 87 88</a>
                <script async src="https://tp.media/content?currency=usd&trs=335279&shmarker=559353&show_hotels=false&powered_by=false&locale=en&searchUrl=www.aviasales.com%2Fsearch&primary_override=%23DD3232ff&color_button=%23D2413Aff&color_icons=%23A83333ff&dark=%23262626&light=%23ffffff&secondary=%23B1ADABff&special=%23C4C4C4&color_focused=%234E3B3Bff&border_radius=0&no_labels=&plain=false&promo_id=7879&campaign_id=100" charset="utf-8"></script>
            </div>
          <footer>
            <h3 className='follow'>FOLLOW ME</h3>
            <span className='social'>
              <a href="https://www.instagram.com/rokolovvv/" target="_blank" rel="noopener noreferrer">
                <img src={instagram} alt="instagram" width={30} height={30} />
              </a>
              <a className='facebook' href="https://www.facebook.com/vlad.korolov.3" target="_blank" rel="noopener noreferrer">
                <img src={facebook} alt="facebook" width={30} height={30} />
              </a>
              <a className='ampli' href="https://ampli.com.ua" target="_blank" rel="noopener noreferrer">
                <img src={ampli} alt="ampli" width={30} height={30} />
              </a>
            </span>
            <h3 className='ampli-text'>AMPLI</h3>
          </footer>
        </div>
    );
  }
  
  export default Contact
  