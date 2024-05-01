import { useState } from 'react';

import ApiHandler from '../api/apiHandler';
import ImageView from './imageView';
import { 
  IMAGE_SIZE_OPTIONS, 
  IMAGE_QUALITY_OPTIONS 
} from '../models/modelLists';

interface ImageTabProps {
  apiHandler: ApiHandler;
}

function ImageTab({ apiHandler }: ImageTabProps) {
  const [model, setModel] = useState<string>('dall-e-3');
  const [size, setSize] = useState<string>('1024x1024');
  const [quality, setQuality] = useState<string>('hd');
  const [prompt, setPrompt] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [url, setUrl] = useState<string>('');

  const changeModel = (model: string) => {
    setModel(model);
    setSize(IMAGE_SIZE_OPTIONS[model][0]);
    setQuality(IMAGE_QUALITY_OPTIONS[model][0]);
  }

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

    const response = apiHandler.generateImage(prompt, size, quality, model);
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
        changeModel={changeModel}
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
