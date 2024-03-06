import './imageView.css';
import React from 'react';

import ImageViewHeader from './imageViewHeader';
import ImageViewDisplay from './imageViewDisplay';
import ImageViewInput from './imageViewInput';

interface ImageViewProps {
  prompt: string;
  setPrompt: (prompt: string) => void;
  sendPrompt: () => void;
  url: string;
  loading: boolean;
  resetImageDisplay: () => void;
}

function ImageView({ prompt, setPrompt, sendPrompt, url, loading, resetImageDisplay }: ImageViewProps) {

  return (
    <div className="imageView">
      <ImageViewHeader
        loading={loading}
        resetImageDisplay={resetImageDisplay}
      />
      <ImageViewDisplay 
        url={url}
        loading={loading}
      />
      <ImageViewInput
        prompt={prompt}
        setPrompt={setPrompt}
        sendPrompt={sendPrompt}
        loading={loading}
      />
    </div>
  );
}

export default ImageView;