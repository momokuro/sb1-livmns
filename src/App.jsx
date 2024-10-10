import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Products from './components/Products';
import Contact from './components/Contact';
import News from './components/News';
import './App.css';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <Router>
      <div className="App">
        <header>
          <div className="logo">
            <img src="https://via.placeholder.com/150x50?text=Logo" alt="企業ロゴ" />
          </div>
          <button className="menu-toggle" onClick={toggleMenu}>
            ☰
          </button>
          <nav className={isMenuOpen ? 'open' : ''}>
            <ul>
              <li><NavLink to="/" end onClick={toggleMenu}>ホーム</NavLink></li>
              <li><NavLink to="/about" onClick={toggleMenu}>会社概要</NavLink></li>
              <li><NavLink to="/products" onClick={toggleMenu}>製品・サービス</NavLink></li>
              <li><NavLink to="/contact" onClick={toggleMenu}>お問い合わせ</NavLink></li>
              <li><NavLink to="/news" onClick={toggleMenu}>ニュース</NavLink></li>
            </ul>
          </nav>
        </header>

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Products />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/news" element={<News />} />
          </Routes>
        </main>

        <footer>
          <p>&copy; 2023 企業名. All rights reserved.</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;