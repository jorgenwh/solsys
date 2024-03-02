import { useState, useEffect, FC } from 'react';

import OpenAIClient from '../api/openai/client';
import Settings from './settings/settings';
import ImageView from './imageView';

interface ImageTabProps {
  theme: 'light' | 'dark';
  openAiClient: OpenAIClient;
}

function ImageTab({ theme, openAiClient }: ImageTabProps) {
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
    console.log("Prompting with prompt: ", prompt + " and size: " + size + " and quality: " + quality + " and model: " + models[0]);

    const trimmedPrompt = prompt.trim();
    if (trimmedPrompt === '') {
      return;
    }

    setLoading(true);
    setPrompt('');

    const model = models[0];
    const response = openAiClient.imagePrompt(trimmedPrompt, size, quality, model);
    response.then((response) => {
      console.log(response);
      setUrl(response.data[0].url);
      setLoading(false);
    });
  }

  return (
    <div className="imageTab">
      <Settings
        theme={theme}
        models={models}
        setModels={setModels}
      />
      <ImageView 
        theme={theme}
        prompt={prompt}
        setPrompt={setPrompt}
        sendPrompt={sendPrompt}
        url={url}
        loading={loading}
        resetImageDisplay={resetImageDisplay}
      />
    </div>
  );
}

export default ImageTab;
