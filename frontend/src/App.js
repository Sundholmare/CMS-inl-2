import './App.css';
import { useEffect, useState } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import BooksLib from './components/BooksLib';
import MoviesLib from './components/MoviesLib';
import Main from './components/Main';

function App() {

  return (
    <div className="wrapper" >
      <Router>
        <Main>
          <Routes>
            <Route exact path="/movies" element={<MoviesLib />} />
            <Route exact path="/books" element={<BooksLib />} />
          </Routes>
        </Main>
      </Router>
    </div >
  );
}

export default App;
