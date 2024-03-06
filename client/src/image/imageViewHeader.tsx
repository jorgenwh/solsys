import './imageViewHeader.css'
import { RotateCcw } from 'lucide-react';
import React from 'react';

interface ImageViewHeaderProps {
  loading: boolean;
  resetImageDisplay: () => void;
}

function ImageViewHeader({ loading, resetImageDisplay }: ImageViewHeaderProps) {
  return (
    <div className="ImageViewHeader">
      <label className="ImageView-label">Image generation</label>
      <button className={`ImageViewHeader-resetButton ${loading ? 'disabled' : ''}`} onClick={resetImageDisplay}>Reset {<RotateCcw/>}</button>
    </div>
  );
}
 
export default ImageViewHeader;