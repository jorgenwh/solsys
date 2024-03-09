import './imageView.css';

import ImageViewHeader from './imageViewHeader';
import ImageViewDisplay from './imageViewDisplay';
import ImageViewInput from './imageViewInput';

interface ImageViewProps {
  loading: boolean;
  model: string;
  size: string;
  quality: string;
  prompt: string;
  url: string;
  setModel: (model: string) => void;
  setSize: (model: string) => void;
  setQuality: (model: string) => void;
  setPrompt: (prompt: string) => void;
  sendPrompt: () => void;
  resetImageDisplay: () => void;
}

function ImageView({ 
  loading, 
  model, 
  size, 
  quality, 
  prompt, 
  url, 
  setModel, 
  setSize, 
  setQuality, 
  setPrompt, 
  sendPrompt, 
  resetImageDisplay 
}: ImageViewProps) {
  return (
    <div className="imageView">
      <ImageViewHeader
        loading={loading}
        model={model}
        size={size}
        quality={quality}
        setModel={setModel}
        setSize={setSize}
        setQuality={setQuality}
        resetImageDisplay={resetImageDisplay}
      />
      <ImageViewDisplay 
        loading={loading}
        url={url}
      />
      <ImageViewInput
        loading={loading}
        prompt={prompt}
        setPrompt={setPrompt}
        sendPrompt={sendPrompt}
      />
    </div>
  );
}

export default ImageView;