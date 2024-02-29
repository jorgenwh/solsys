import { useEffect, useRef, FC } from 'react';
import { SendHorizontal } from 'lucide-react';
import './chatInput.css'

interface ChatInputProps {
  prompt: string;
  setPrompt: (prompt: string) => void;
  handleSend: () => void;
  loading: boolean;
  disabled: boolean;
}

const ChatInput: FC<ChatInputProps> = ({ prompt, setPrompt, handleSend, loading, disabled }) => {

  const promptTextareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (promptTextareaRef.current) {
      promptTextareaRef.current.style.height = 'auto';
      let newHeight = promptTextareaRef.current.scrollHeight - parseInt(getComputedStyle(promptTextareaRef.current).paddingTop) - parseInt(getComputedStyle(promptTextareaRef.current).paddingBottom);
      promptTextareaRef.current.style.height = `${newHeight}px`;
    }
  }, [prompt]);

  useEffect(() => {
    if (!disabled && !loading && promptTextareaRef.current) {
      promptTextareaRef.current.focus();
    }
  }, [loading, disabled]);

  return (
    <div className={`ChatInput ${loading ? 'disabled' : ''}`}>
      <textarea
        className="ChatInput-textarea"
        ref={promptTextareaRef}
        value={prompt}
        onChange={e => setPrompt(e.target.value)}
        onKeyDown={e => e.key === 'Enter' && !e.shiftKey && handleSend()} 
        placeholder=". . ."
        disabled={loading}
      />
      <button onClick={handleSend}>{
        <SendHorizontal/>
      }</button>
    </div>
  );
}
 
export default ChatInput;