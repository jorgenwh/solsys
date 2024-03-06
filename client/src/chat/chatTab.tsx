import { useState, useEffect, FC } from 'react';

import Settings from './settings/settings';
import Chat from './chat';
import ApiHandler from '../api/apiHandler';


interface ChatTabProps {
  apiHandler: ApiHandler;
}

function ChatTab({ apiHandler }: ChatTabProps) {
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
    console.log("hey");
    const trimmedPrompt = prompt.trim();
    if (trimmedPrompt === '') {
      return;
    }
    const newMessages = [...messages, { role: 'user', content: trimmedPrompt }];
    setMessages(newMessages);

    setLoading(true);
    setPrompt('');

    const response = apiHandler.promptChat(trimmedPrompt, models, [newMessages]);
    response.then((responses) => {
      setMessages(
        [...newMessages, { role: 'assistant', content: responses[0] }]
      );
      setLoading(false);
    }).catch((error) => {
      console.error(error);
      setMessages(
        [...newMessages, { role: 'assistant', content: error }]
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
