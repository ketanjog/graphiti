import React, { useState } from 'react';

//import Jumbotron from 'react-bootstrap/Jumbotron';
//import Toast from 'react-bootstrap/Toast';
//import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';


import '../App.css';

const Header = () => (
  <div className="Header pt-5 pb-6">
		<div class="container">
		<div class="row">
         
        </div>
        <div class="row mt-6">
		{/*<div class="col-md-8 mx-auto text-center">*/}
                <h1>Decentralized Compute for AI art</h1>
                <p class="lead mb-5"> off chain gpu + on chain verification and payment</p>

				<a href="https://github.com/LeaVerou/prism/" class="btn btn-success svg-icon">
                    <em class="mr-2" data-feather="github"></em>
                    Become a Phaestus Node
                </a>
			    &nbsp;
				<Button variant="dark"><div className="black_text">Whitepaper</div></Button>{' '}
       
				{/*</div>*/}    
		</div>
<div class="row mt-5">
            <div class="col-md-9 mx-auto">
		
		</div>
		</div>

		</div>
		
  </div>
);
export default Header;
