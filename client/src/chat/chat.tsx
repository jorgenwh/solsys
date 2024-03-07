import './chat.css'
import ChatLog from './chatLog';
import ChatInput from './chatInput';
import { useState, useEffect, FC } from 'react';
import { ChevronsDown } from 'lucide-react';
import ChatHeader from './chatHeader';

interface ChatProps {
  modelNameTrail: string[];
  messages: any[];
  prompt: string;
  model: string;
  loading: boolean;
  resetChat: () => void;
  setPrompt: (prompt: string) => void;
  sendPrompt: () => void;
  setModel: (model: string) => void;
}

function Chat({ 
  modelNameTrail, 
  messages, 
  prompt, 
  model, 
  loading, 
  resetChat, 
  setPrompt, 
  sendPrompt, 
  setModel 
}: ChatProps) {
  const [isAtBottom, setIsAtBottom] = useState(true);

  const scrollToBottom = () => {
    const chatLogBottom = document.getElementById('chatLogBottom');
    if (chatLogBottom) {
      chatLogBottom.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const isScrollbarAtBottom = () => {
    const chatLog = document.querySelector('.ChatLog') as HTMLElement;
    if (!chatLog) return true;
    const difference = chatLog.scrollHeight - chatLog.scrollTop;
    return difference < chatLog.clientHeight + 5;
  };

  const getArrowCircle = () => {
    if (isScrollbarAtBottom()) {
      return null;
    }
    return (
      <ChevronsDown
        className="ChatLog-arrowDownCircle"
        onClick={scrollToBottom}
        size={35}
      />
    );
  };

  const onScroll = () => {
    setIsAtBottom(isScrollbarAtBottom());
  };

  useEffect(() => {
    scrollToBottom();

    const chatLog = document.querySelector('.ChatLog');
    if (chatLog) {
      chatLog.addEventListener('scroll', onScroll);

      return () => {
        chatLog.removeEventListener('scroll', onScroll);
      };
    }
  }, [messages]);

  return (
    <div className="Chat">
      <ChatHeader 
        model={model}
        setModel={setModel}
        resetChat={resetChat} 
        loading={loading}
      /> 
      {getArrowCircle()}
      <ChatLog 
        modelNameTrail={modelNameTrail}
        messages={messages}
      />
      <ChatInput 
        setPrompt={setPrompt}
        sendPrompt={sendPrompt}
        loading={loading}
      />
    </div>
  );
}
 
export default Chat;