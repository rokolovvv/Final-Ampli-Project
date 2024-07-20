import { Link, Route, Routes } from 'react-router-dom';
import About from './About';
import Home from './Home'
import Contact from './Contact';
import RickMorty from './RickMorty';
import Films from './Films'
import './App.css'

function App() {
  return (
    <div className="App">
      <header className="Main-header">
          
          <Link to='/' className='page-now'>SKYLIGHT | EUROPE | USA</Link>
          <span className='nav-bar'>
            <Link className='navigation' to='/'>HOME</Link>
            <Link className='navigation' to='/RickMorty'>Rick and Morty</Link>
            <Link className='navigation' to='/Films'>Films</Link>
            <Link className='navigation' to='/About'>AUTHOR</Link>
            <Link className='navigation' to='/Contact'>CONTACT ME</Link>
          </span>
          <span className="menu-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 18V16H21V18H3ZM3 13V11H21V13H3ZM3 8V6H21V8H3Z" fill="#FFF9FF"/>
            </svg>
          </span>
        </header>
        <span className='line'></span>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/About' element={<About />} />
        <Route path='/RickMorty' element={<RickMorty />} />
        <Route path='/Films' element={<Films />} />
        <Route path='/Contact' element={<Contact />} />
      </Routes>
    </div>
  )
}

export default App;
