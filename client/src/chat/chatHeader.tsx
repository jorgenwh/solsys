import './chatHeader.css'
import { RotateCcw } from 'lucide-react';
import React from 'react';

interface ChatHeaderProps {
  resetChat: () => void;
  loading: boolean;
}

function ChatHeader({ resetChat, loading }: ChatHeaderProps) {
  return (
    <div className="ChatHeader">
      <label className="Chat-label">Chat</label>
      <button className={`ChatHeader-resetButton ${loading ? 'disabled' : ''}`} onClick={resetChat}>Reset {<RotateCcw/>}</button>
    </div>
  );
}
 
export default ChatHeader;