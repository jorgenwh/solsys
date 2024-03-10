import './imageViewDisplay.css'
import { useState, useEffect } from 'react';

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
    maxWidth: '60vw',
    maxHeight: '70vh',
    borderRadius: '8px'
  };

  const createImageComponent = () => {
    if (loading) {
      return (
        <div className="ImageViewDisplay-infoText">
          <h1>Loading...</h1>
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
        <div className="ImageViewDisplay-infoText">
          <h1>Prompt to generate an image</h1>
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