import './message.css';
import React from 'react';
import ReactMarkdown from 'react-markdown';

interface MessageProps {
  role: string;
  content: string;
}

function Message({ role, content }: MessageProps) {

  return (
    <div className={`Message ${role === 'user' ? 'is-own' : ''}`}>
      <div className="Message-label">{role === 'system' ? 'GPT' : 'YOU'}</div>
      <div className="Message-text"><ReactMarkdown className="Message-text-mk">{content}</ReactMarkdown></div>
    </div>
  );
}

export default Message;