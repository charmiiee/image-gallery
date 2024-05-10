// ImageGallery.js
import React, { useState, useEffect, lazy, Suspense } from 'react';
import axios from 'axios';
import './App.css';
// import Gallery from './Gallery';
const ImageGallery = () => {
  const [images, setImages] = useState([]);

  const Img = lazy(() => import('./Gallery'))
  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await axios.get('https://picsum.photos/v2/list?page=2&limit=100',)
        setImages(response.data);
      } catch (error) {
        console.error('Error fetching images:', error);
      }
    };  

    fetchImages();
  }, []);

  return (
    <div>
      <h2>Image Gallery</h2>
      <div className="image-gallery">
        {images.map(image => (
          <Suspense key={image.id} fallback={<div className='gallery'></div>}>
            <Img data={image}/> 
          </Suspense>
          // <img key={image.id} src={image.download_url} className='gallery' alt='finding nothing' />
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;
