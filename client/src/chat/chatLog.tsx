import './chatLog.css'
import React from 'react';
import Message from './message'; // Assuming the correct file name is Message.tsx

interface MessageProps {
  role: string;
  content: string;
}

interface ChatLogProps {
  modelNameTrail: string[];
  messages: MessageProps[];
}

function ChatLog({ modelNameTrail, messages }: ChatLogProps) {
  return (
    <div className="ChatLog">
      {messages.map((message, index) => (
        <Message key={index} isOwn={index % 2 == 0} label={modelNameTrail[index]} content={message.content} />
      ))}
      <div id="chatLogBottom"></div>
    </div>
  );
}

export default ChatLog;