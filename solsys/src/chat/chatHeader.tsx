import './chatHeader.css'
import { RotateCcw } from 'lucide-react';
import React from 'react';

interface ChatHeaderProps {
  resetChat: () => void;
}

const ChatHeader: React.FC<ChatHeaderProps> = ({ resetChat }) => {
  return (
    <div className="ChatHeader">
      <label className="Chat-label">Chat</label>
      <button className="ChatHeader-resetButton" onClick={resetChat}>Reset {<RotateCcw/>}</button>
    </div>
  );
}
 
export default ChatHeader;