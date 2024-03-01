import './message.css';
import React from 'react';
import ReactMarkdown from 'react-markdown';

interface MessageProps {
  role: string;
  content: string;
}

const Message: React.FC<MessageProps> = ({ role, content }) => {

  const messageStyle = {
    backgroundColor: role === 'system' ? 'rgba(0, 0, 0, 0)' : 'rgba(0, 0, 255, 0.035)',
    textAlign: 'left' as const // Align text to the left
  };

  return (
    <div className="Message" style={messageStyle}>
      <div className="Message-label">{role === 'system' ? 'AI' : 'YOU'}</div>
      <div className="Message-text"><ReactMarkdown className="Message-text-mk">{content}</ReactMarkdown></div>
    </div>
  );
}

export default Message;