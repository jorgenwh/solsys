import './chatHeader.css'
import { RotateCcw } from 'lucide-react';
import React from 'react';

import ModelSelect from './modelSelect';

interface ChatHeaderProps {
  model: string;
  setModel: (model: string) => void;
  resetChat: () => void;
  loading: boolean;
}

function ChatHeader({ model, setModel, resetChat, loading }: ChatHeaderProps) {
  return (
    <div className="ChatHeader">
      <label className="Chat-label">Chat</label>
      <div className="ChatHeader-ModelSelect-container">
        <ModelSelect 
          model={model}
          setModel={setModel}
        />
      </div>
      <button className={`ChatHeader-resetButton ${loading ? 'disabled' : ''}`} onClick={resetChat}>Reset {<RotateCcw/>}</button>
    </div>
  );
}
 
export default ChatHeader;