import './imageViewDisplay.css'
import React, { useState, useEffect } from 'react';

interface ImageViewDisplayProps {
  url: string;
  loading: boolean;
}

function ImageViewDisplay({ url, loading }: ImageViewDisplayProps) {
  const [isValidImage, setIsValidImage] = useState<boolean>(false);

  useEffect(() => {
    const image = new Image();
    image.src = url;
    image.onload = () => setIsValidImage(true);
    image.onerror = () => setIsValidImage(false);
  }, [url]);

  const imageStyle = {
    maxWidth: '65vw',
    maxHeight: '65vh',
    margin: '0 0 1em 0',
    borderRadius: '10px'
  };

  const createImageComponent = () => {
    if (loading) {
      return (
        <div className="Loading">
          <h1>Loading ...</h1>
        </div>
      );
    }
    if (isValidImage) {
      return (
        <img src={url} style={imageStyle}/>
      );
    } 
    else {
      return (
        <div className="EmptyUrl">
          <h1>Prompt to generate image</h1>
        </div>
      );
    }
  }

  return (
    <div className="ImageViewDisplay">
      {createImageComponent()}
    </div>
  );
}

export default ImageViewDisplay;