


import Header from './Header';

import Uploader from './Uploader';
import HeaderNav from './HeaderNav';

import { BrowserRouter, Routes, Route } from "react-router-dom";


import UAD from './UploadAndDisplayImage';



function Home() {
  return (
	
    <div>
	<Header />		  
	<Uploader />
	</div>
  );
};

export default Home;

