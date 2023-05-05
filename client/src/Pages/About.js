import React, { useState, useEffect } from 'react';
import ImgShowCase from '../Component/ImgShowCase';

function About() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetch('/images')
      .then(response => response.json())
      .then(data => {
        setImages(data);
        console.log(data);
      })
      .catch(error => {
        console.error('Error fetching images:', error);
      });
  }, []);
  
//   function hexToBase64(str) {
//     return btoa(String.fromCharCode.apply(null, str.replace(/\r|\n/g, "").replace(/([\da-fA-F]{2}) ?/g, "0x$1 ").replace(/ +$/, "").split(" ")));
// }
  return (
    <div>
    <h2 className='text-center'>Hello</h2>
    <ImgShowCase 
    imageUrls={images}
    columnCount = {4}
    gap ={2}

    />
    </div>
  );
}
export default About;