 var XMLHttpRequest = require('xhr2');
const Http = new XMLHttpRequest();
const key = '8515ae646f520611c26cd8d3e77064ea8e4928f968110c67f40a6f8bc4cd7b14';
const image = 'https://raw.githubusercontent.com/xinntao/Real-ESRGAN/master/inputs/0030.jpg';
const url='https://graphiti-client.herokuapp.com/upscale/';
const send = url+key+'?url='+image;
//http request for send
Http.open("GET", send);
console.log(Http.responseText);

const https = require('https');

https.get(send, (resp) => {
  let data = '';
		console.log(send);
  // A chunk of data has been received.
  resp.on('data', (chunk) => {
    data += chunk;
  });

  // The whole response has been received. Print out the result.
  resp.on('end', () => {
    console.log(data);
    return data;
  });

}).on("error", (err) => {
  console.log("Error: " + err.message);
  
});
