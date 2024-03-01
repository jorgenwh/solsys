import { useState, useEffect, FC } from 'react';
import OpenAIClient from '../api/openai/client';

interface ImageTabProps {
  theme: 'light' | 'dark';
  openAiClient: OpenAIClient;
}

function ImageTab({ theme: string, openAiClient: OpenAIClient }: ImageTabProps) {

  return (
    <div className="imageTab">
      <h1>Image Tab</h1>
    </div>
  );
}

export default ImageTab;
