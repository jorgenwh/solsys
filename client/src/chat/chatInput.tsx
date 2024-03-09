import { useRef } from 'react';
import { SendHorizontal } from 'lucide-react';
import './chatInput.css'

interface ChatInputProps {
  loading: boolean;
  setPrompt: (prompt: string) => void;
  sendPrompt: () => void;
}

function ChatInput({ loading, setPrompt, sendPrompt }: ChatInputProps) {

  const inputRef = useRef<HTMLDivElement>(null);

  const clearContent = () => {
    if (inputRef.current) {
      inputRef.current.textContent = '';
    }
  }

  const onKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendPrompt();
      clearContent();
    }
  }

  const createTextArea = () => {
    return (
      <div className="ChatInput-textarea">
        <div className="ChatInput-textarea-message-wrapper">
          <div 
            ref={inputRef}
            className="ChatInput-textarea-message-text"
            contentEditable
            onInput={(e) => setPrompt(e.currentTarget.textContent || '')}
            onKeyDown={onKeyDown} 
          ></div>
        </div>
      </div>
    );
  }

  const createSendButton = () => {
    return (
      <button onClick={() => { sendPrompt(); clearContent(); }}>
        { <SendHorizontal/> }
      </button>
    );
  }

  return (
    <div className={`ChatInput ${loading ? 'disabled' : ''}`}>
      {createTextArea()}
      {createSendButton()}
    </div>
  );
}
 
export default ChatInput;