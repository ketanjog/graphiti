import logo from './logo.svg';
import './App.css';
import React from 'react';
import Header from './components/Header';
import Home from './components/Home';
import Uploader from './components/Uploader';
import HeaderNav from './components/HeaderNav';



import UAD from './components/UploadAndDisplayImage';



function App() {
  return (
	<div>
    <HeaderNav />
	<Header />		  
	<Uploader />
    <Home/>
	</div>
  );
};

export default App;
