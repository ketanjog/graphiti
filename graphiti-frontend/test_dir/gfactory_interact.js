
var API_KEY = "fscTioSVWFvZy8h_M6QLWcVUS0Mgaiu8";
var ethers = require('ethers');
var project_id = '2178fe85034f4d15b946e14438b601e4';
var project_secret = '4b0556d799f94f35bad2f39936f8031e';
const api_url = 'https://eth-rinkeby.alchemyapi.io/v2/fscTioSVWFvZy8h_M6QLWcVUS0Mgaiu8';
//var provider = new ethers.providers.DefaultProvider(API_KEY);
//var provider = new ethers.providers.InfuraProvider('rinkeby', {
//		projectID: project_id,
//		projectSecret: project_secret
//	});
//const provider = ethers.getDefaultProvider(network="rinkeby",{alchemy : API_KEY});
    const private_key = '0x8515ae646f520611c26cd8d3e77064ea8e4928f968110c67f40a6f8bc4cd7b14';
var contract_address  = '0x19B708EDa605a213558df8631B521180CE546F84';
//const signer = new ethers.Wallet(private_key, provider);
const provider = new ethers.providers.JsonRpcProvider(api_url);
const wallet = new ethers.Wallet(private_key, provider);
const signer = wallet.provider.getSigner();


var abi = [ { "anonymous": false, "inputs": [ { "indexed": false, "internalType": "string", "name": "_serviceType", "type": "string" }, { "indexed": false, "internalType": "uint256", "name": "_graphitiId", "type": "uint256" } ], "name": "graphitiAvailable", "type": "event" }, { "inputs": [ { "internalType": "string", "name": "_serviceType", "type": "string" }, { "internalType": "string", "name": "_url", "type": "string" } ], "name": "createGraphiti", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "getUrl", "outputs": [ { "internalType": "string", "name": "", "type": "string" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "name": "graphitiToOwner", "outputs": [ { "internalType": "address", "name": "", "type": "address" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "name": "graphitiToPhaestus", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "name": "graphitis", "outputs": [ { "internalType": "string", "name": "serviceType", "type": "string" }, { "internalType": "string", "name": "status", "type": "string" }, { "internalType": "string", "name": "url", "type": "string" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "_graphitiId", "type": "uint256" }, { "internalType": "string", "name": "_newUrl", "type": "string" } ], "name": "returnUpscale", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "viewGraphitis", "outputs": [ { "components": [ { "internalType": "string", "name": "serviceType", "type": "string" }, { "internalType": "string", "name": "status", "type": "string" }, { "internalType": "string", "name": "url", "type": "string" } ], "internalType": "struct GraphitiFactory.Graphiti[]", "name": "", "type": "tuple[]" } ], "stateMutability": "view", "type": "function" } ]

var contract = new ethers.Contract(contract_address,abi,signer);
var url = "ketan iz fat xD";
//var callPromise = contract.createGraphiti('upscale',url);
async function main(){
    console.log('1');
    var callPromise = await contract.createGraphiti('upscale',url);
		//await callPromise.wait();
    console.log('lets goo');
    var output = await contract.getUrl();
    console.log(output);
}
main();
//callPromise.then(function(result){
//  console.log(result);
//});
