


import Header from './Header';

import Uploader from './Uploader';
import HeaderNav from './HeaderNav';
import WalletBalance from './WalletBalance';


import { BrowserRouter, Routes, Route } from "react-router-dom";


import UAD from './UploadAndDisplayImage';



function Home() {
  return (
	
    <div>
	<Header />		  
	<Uploader />
		  <center>
    <WalletBalance /> </center> 
	</div>
  );
};

export default Home;

