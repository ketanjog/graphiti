import { useState } from 'react';
import { ethers } from 'ethers';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';




const API_KEY = '748ad11fcda7473dacdafd5fa572a5ba';
//const infuraProvider = new ethers.providers.InfuraProvider('rinkeby', API_KEY);
//const wallet = new ethers.Wallet(privateKey, infuraProvider);
//const signer = wallet.connect(infuraProvider);
//contract = new ethers.Contract(smartContractAddress, abi, signer);


function WalletBalance() {
 return(
		 <Card>
<Form >

    <Form.Control className="form-control" type="email" placeholder="Enter Private Key to sign contract with node" />
<br />
<Form.Text className="text-muted">
      (for testing, final version will use secure metamask signing).
    </Form.Text>
    <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
</Card>
 );
  };
  
  export default WalletBalance;
