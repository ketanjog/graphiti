import logo from './logo.svg';
import './App.css';
import React from 'react';
import Header from './components/Header';
import Home from './components/Home';
import Uploader from './components/Uploader';
import HeaderNav from './components/HeaderNav';
import Recieve from './components/RecieveUpscale';

import { BrowserRouter, Routes, Route } from "react-router-dom";


import UAD from './components/UploadAndDisplayImage';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
	
	<HeaderNav />
	<Routes>
	  <Route path="/" element={<Home />} />
	  <Route path="/uploader" element={<Uploader />} />
	  <Route path="/uad" element={<UAD />} />
	<Route path="/recieve" element={<Recieve />} />
	</Routes>
      </BrowserRouter>
    </div>
  );

  
};

export default App;
