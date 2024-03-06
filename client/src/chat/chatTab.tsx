import { useState, useEffect, FC } from 'react';

import OpenAIClient from '../api/openai/client';
import AnthropicClient from '../api/anthropic/client';
import Settings from './settings/settings';
import Chat from './chat';


interface ChatTabProps {
  openAiClient: OpenAIClient;
  anthropicClient: AnthropicClient;
}

function ChatTab({ openAiClient, anthropicClient }: ChatTabProps) {
  const [models, setModels] = useState<string[]>(['gpt-4-turbo-preview']);
  const [messages, setMessages] = useState<Array<{ role: string; content: string }>>([]);
  const [prompt, setPrompt] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  const resetChat = () => {
    const chatElement = document.querySelector('.Chat') as HTMLElement;
    if (chatElement) {
      const originalHeight = chatElement.offsetHeight;
      chatElement.style.height = `${originalHeight - 45}px`;
      void window.getComputedStyle(chatElement).height;
      chatElement.style.transition = 'height 0.5s';
      chatElement.style.height = '173px';
      setTimeout(() => {
        setMessages([]);
        setPrompt('');
        setLoading(false);
        chatElement.style.removeProperty('height');
        chatElement.style.removeProperty('transition');
      }, 500);
    }
  }

  const sendPrompt = () => {
    const trimmedPrompt = prompt.trim();
    if (trimmedPrompt === '') {
      return;
    }
    const newMessages = [...messages, { role: 'user', content: trimmedPrompt }];
    setMessages(newMessages);

    setLoading(true);
    setPrompt('');

    //const model = models[0];
    const response = anthropicClient.chatPrompt(newMessages, 'claude-3-opus-20240229');
    response.then((response) => {
      setMessages(
        [...newMessages, { role: 'system', content: response.choices[0].message.content }]
      );
      setLoading(false);
    });
  }

  return (
    <div className="ChatTab">
      <Chat 
        messages={messages}
        resetChat={resetChat}
        prompt={prompt}
        setPrompt={setPrompt}
        sendPrompt={sendPrompt}
        loading={loading}
      />
    </div>
  );
}

export default ChatTab;
