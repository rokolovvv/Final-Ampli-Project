import React from 'react';
import me from './me.png';
import instagram from './instagram.png';
import facebook from './facebook.png';
import ampli from './ampli.png';
import './App.css';

function About() {
    return (
        <div className="Main">
          <div className="Wrapper">
            <img className='me' src={me} alt="Vladyslav Korolov"/>
            <span className='initials'>
                <h1 className='red'>I AM</h1>
                <h1 className='white'>VLADYSLAV</h1>
                <h1 className='whitek'>KOROLOV</h1>
            </span>
          </div>
          <div className="Info">
            <h1 className='studying-title'>STUDYING INFO</h1>
            <h3 className='studying-school'>I AM STUDYING AT AMPLI SCHOOL</h3>
            <h3 className='studying-group'>MY GROUP - AFE_34</h3>
            <a className='studying-links' href='https://classroom.google.com/u/4/c/NjIxNzEzMDc0ODU2'>MY AMPLI CLASSROOM</a>
            <a className='studying-links' href='https://trello.com/invite/b/666898feb196ccff5885321a/ATTI2b38a297f04f9dc6a5d3f96c9932e444B83FEA66/korolov-vlad-afe34-final-project'>MY TRELLO BOARD</a>
            <a className='studying-links' href='https://github.com/rokolovvv'>MY GITHUB</a> {/* Додайте ваш правильний GitHub URL */}
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
  
  export default About
  