import { useRef } from 'react';
import { SendHorizontal } from 'lucide-react';
import './imageViewInput.css'

interface ImageViewInputProps {
  loading: boolean;
  prompt: string;
  setPrompt: (prompt: string) => void;
  sendPrompt: () => void;
}

function ImageViewInput({ loading, setPrompt, sendPrompt }: ImageViewInputProps) {

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
      <div className="ImageViewInput-textarea">
        <div className="ImageViewInput-textarea-message-wrapper">
          <div 
            ref={inputRef}
            className="ImageViewInput-textarea-message-text"
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
    <div className={`ImageViewInput ${loading ? 'disabled' : ''}`}>
      {createTextArea()}
      {createSendButton()}
    </div>
  );
}
 
export default ImageViewInput;