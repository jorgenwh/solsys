import { useState } from 'react';

import ApiHandler from '../api/apiHandler';
import ImageView from './imageView';

interface ImageTabProps {
  apiHandler: ApiHandler;
}

function ImageTab({ apiHandler }: ImageTabProps) {
  const [model, setModel] = useState<string>('dall-e-3');
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

    const promptType = 'image-generation';
    const parameters = {type: promptType, model: model, prompt: prompt, size: size, quality: quality};
    const response = apiHandler.promptServer(parameters);
    response.then((url) => {
      setUrl(url);
      setLoading(false);
    }).catch((error) => {
      setLoading(false);
    });
  }

  return (
    <div className="imageTab">
      <ImageView 
        loading={loading}
        model={model}
        size={size}
        quality={quality}
        prompt={prompt}
        url={url}
        setModel={setModel}
        setSize={setSize}
        setQuality={setQuality}
        setPrompt={setPrompt}
        sendPrompt={sendPrompt}
        resetImageDisplay={resetImageDisplay}
      />
    </div>
  );
}

export default ImageTab;
