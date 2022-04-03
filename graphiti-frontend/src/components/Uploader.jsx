import { useState } from 'react';
import Head from 'next/head'
import styles from '../styles/Home.module.scss'
import WalletBalance from './WalletBalance';
import axios from 'axios'
const sleep = ms => new Promise(r => setTimeout(r, ms));


const Uploader = () => {
  const [imageSrc, setImageSrc] = useState();
  const [uploadData, setUploadData] = useState();
  let requestCompleted = false;
  const getUpscaled = async (image, key) =>{
		const url='https://graphiti-client.herokuapp.com/upscale/';
		const send = url+key+'?url='+image;
		//http request for send
console.log('deez nuts');
		  fetch('send')
.then(response =>{
    sleep(150000);
}).then(data =>{
    console.log(data);
    requestCompleted = true;
    return data;
})
  }

  
  /**
   * handleOnChange
   * @description Triggers when the file input changes (ex: when a file is selected)
   */

  function handleOnChange(changeEvent) {
    const reader = new FileReader();

    reader.onload = function(onLoadEvent) {
      setImageSrc(onLoadEvent.target.result);
      setUploadData(undefined);
    }

    reader.readAsDataURL(changeEvent.target.files[0]);
  }

  /**
   * handleOnSubmit
   * @description Triggers when the main form is submitted
   */

  async function handleOnSubmit(event) {
    const form = event.currentTarget;
    const fileInput = Array.from(form.elements).find(({ name }) => name === 'file');
    event.preventDefault();
    console.log('fileInput', fileInput);
    
    const formData = new FormData();
    for ( const file of fileInput.files ) {
    formData.append('file', file);
    }
    formData.append('upload_preset', 'my-uploads');
    const res = await fetch('https://api.cloudinary.com/v1_1/dyofebyjd/image/upload', {
      method: 'POST',
      body: formData
    }).then(res => res.json());
    console.log('res', res.secure_url);
    //document.location.href = 'recieve?'+res.secure_url;
    //downloadFile(res.secure_url, 'download');
	//
		  //request upscale and then redirect 
    await sleep(15000);
    await getUpscaled(res.secure_url,'8515ae646f520611c26cd8d3e77064ea8e4928f968110c67f40a6f8bc4cd7b14')
			     .then(data =>{
	console.log(data);
	requestCompleted = true;
	window.location.replace('https://res.cloudinary.com/dzuirpp86/image/upload/v1648995310/g2oanrsghq1nn3ubfitq.jpg');
    })
		  requestCompleted = true;
		  //window.location.replace(tempUpscale);
		 // console.log('tempUpscale', tempUpscale);
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Image Uploader</title>
        <meta name="description" content="Upload your image to Cloudinary!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Image Upscaler
        </h1>
		  {requestCompleted && (<h1>{}</h1>)}
        <p className={styles.description}>
          Send your image to a phaestus node and get an upscaled version.
        </p>

        <form className={styles.form} method="post" onChange={handleOnChange} onSubmit={handleOnSubmit}>
          <p>
            <input type="file" name="file" />
          </p>
		<div className="image_container">
          <img src={imageSrc} />
		<br/>
          {imageSrc && !uploadData && (
            <p>
              <button>Upload Files</button>
            </p>
          )}
		  
		</div>

          {uploadData && (
            <code><pre>{JSON.stringify(uploadData, null, 2)}</pre></code>
          )}
        </form>
      </main>


    </div>
  )
}

export default Uploader;
