import './chatLog.css'
import React from 'react';
import Message from './message'; // Assuming the correct file name is Message.tsx

interface MessageProps {
  role: string;
  content: string;
}

interface ChatLogProps {
  messages: MessageProps[];
}

const ChatLog: React.FC<ChatLogProps> = ({ messages }) => {
  return (
    <div className="ChatLog">
      {messages.map((message, index) => (
        <Message key={index} role={message.role} content={message.content} />
      ))}
      <div id="chatLogBottom"></div>
    </div>
  );
}

export default ChatLog;