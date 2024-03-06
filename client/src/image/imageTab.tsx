import { useState, useEffect, FC } from 'react';

import ApiHandler from '../api/apiHandler';
import Settings from './settings/settings';
import ImageView from './imageView';

interface ImageTabProps {
  apiHandler: ApiHandler;
}

function ImageTab({ apiHandler }: ImageTabProps) {
  const [models, setModels] = useState<string[]>(['dall-e-3']);
  const [size, setSize] = useState<string>('1024x1024');
  const [quality, setQuality] = useState<string>('standard');
  const [prompt, setPrompt] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [url, setUrl] = useState<string>('');

  const resetImageDisplay = () => {
    setUrl('');
    setPrompt('');
  }

  const sendPrompt = () => {
    const trimmedPrompt = prompt.trim();
    if (trimmedPrompt === '') {
      return;
    }

    setLoading(true);
    setPrompt('');

    //
  }

  return (
    <div className="imageTab">
      <ImageView 
        prompt={prompt}
        setPrompt={setPrompt}
        sendPrompt={sendPrompt}
        url={url}
        loading={loading}
        resetImageDisplay={resetImageDisplay}
      />
      <Settings
        models={models}
        setModels={setModels}
      />
    </div>
  );
}

export default ImageTab;
