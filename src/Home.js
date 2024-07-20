import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import instagram from './instagram.png';
import facebook from './facebook.png';
import ampli from './ampli.png';
import TicketList from './TicketList';
import './App.css';

function Home() {
    return (
        <div className="Main">
            <div className='home-wrapper'>
                <h1 className='title-catch'>Catch flights, not feeling.</h1>
                <h1 className='title-help'>SkyLight will help you!</h1>
            </div>
            <TicketList />
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
              <h3 className='studying-group'>MY GROUP - AFE_34</h3>
            <a className='classroom-link' href='https://classroom.google.com/u/4/c/NjIxNzEzMDc0ODU2'>MY AMPLI CLASSROOM</a>

            </span>
            <h3 className='ampli-text'>AMPLI</h3>
            </footer>
        </div>
    );
  }
  
  export default Home
  