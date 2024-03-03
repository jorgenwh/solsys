import { useState, useEffect, FC } from 'react';

import OpenAIClient from '../api/openai/client';
import Settings from './settings/settings';
import ImageView from './imageView';

interface ImageTabProps {
  openAiClient: OpenAIClient;
}

function ImageTab({ openAiClient }: ImageTabProps) {
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

    const model = models[0];
    const response = openAiClient.imagePrompt(trimmedPrompt, size, quality, model);
    response.then((response) => {
      setUrl(response.data[0].url);
      setLoading(false);
    });
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
