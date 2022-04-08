import { useState } from 'react';
import { ethers } from 'ethers';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Spinner from 'react-bootstrap/Spinner';






const API_KEY = '748ad11fcda7473dacdafd5fa572a5ba';
//const infuraProvider = new ethers.providers.InfuraProvider('rinkeby', API_KEY);
//const wallet = new ethers.Wallet(privateKey, infuraProvider);
//const signer = wallet.connect(infuraProvider);
//contract = new ethers.Contract(smartContractAddress, abi, signer);


function Loading() {
 return(
      <div className="spinner-border" role="status">
        <span className="sr-only">Loading...</span>
      </div>
 );
  };
  
export default Loading;
