import React from 'react'
import {
    BrowserRouter as Router,
    Route,
    Routes,
    Link
  } from "react-router-dom";
import Home from './Home';
import Navbar from './navbar';
import Search from './search';

export default function App() {
  return (
    <div>
        <Navbar></Navbar>
         <Router>
        <Routes>
        <Route path="/search" element={<Search/>}>
          </Route>
          <Route path="/" element={<Home/>}>
          </Route>
          </Routes>
    </Router>
    </div>
  )
}
