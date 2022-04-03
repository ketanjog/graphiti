var ethers = require('ethers');
var provider = ethers.providers.getDefaultProvider('rinkeby');
var address  = '0x74a9a20f67d5499b62255bfa1dca195d06aa4617';
var abi = [{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getValue","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_name","type":"string"}],"name":"setValue","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"nonpayable","type":"function"}];
var contract = new ethers.Contract(address,abi,provider);

var callPromise = contract.getValue();

callPromise.then(function(result){
  console.log(result);
});
