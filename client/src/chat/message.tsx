import './message.css';
import React from 'react';
import ReactMarkdown from 'react-markdown';

interface MessageProps {
  isOwn: boolean;
  label: string;
  content: string;
}

function Message({ isOwn, label, content }: MessageProps) {

  return (
    <div className={`Message ${isOwn ? 'is-own' : ''}`}>
      <div className="Message-label">{isOwn ? 'YOU' : label}</div>
      <div className="Message-text"><ReactMarkdown className="Message-text-mk">{content}</ReactMarkdown></div>
    </div>
  );
}

export default Message;