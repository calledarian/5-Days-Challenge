import './App.css';
import React from 'react';
import Counter from './days/day1';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Main from './main.jsx';
import ToDo from './days/day2.jsx';
import WeatherApp from './days/day3.jsx';
import ProductPage from './days/day4.jsx';

function App() {
  return (
    <BrowserRouter>
      <div className='Title' style={{ display: 'flex', flexDirection: 'column', gap: '20px', alignItems: 'center' }}>
        <div>
          <Routes>
            <Route path='/' element={<Main />} />
            <Route path="/day1" element={<Counter />} />
            <Route path="/day2" element={<ToDo />} />
            <Route path="/day3" element={<WeatherApp />} />
            <Route path="/day4" element={<ProductPage />} />
            <Route path="/day5" element={<div>Day 5 Content</div>} />
          </Routes>
        </div>
        <div>
          <Link to="/">Back</Link>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
