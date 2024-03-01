import { useEffect, useRef, FC } from 'react';
import { SendHorizontal } from 'lucide-react';
import './chatInput.css'

interface ChatInputProps {
  prompt: string;
  setPrompt: (prompt: string) => void;
  sendPrompt: () => void;
  loading: boolean;
}

const ChatInput: FC<ChatInputProps> = ({ prompt, setPrompt, sendPrompt, loading }) => {

  const promptTextareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (promptTextareaRef.current) {
      promptTextareaRef.current.style.height = 'auto';
      let newHeight = promptTextareaRef.current.scrollHeight - parseInt(getComputedStyle(promptTextareaRef.current).paddingTop) - parseInt(getComputedStyle(promptTextareaRef.current).paddingBottom);
      promptTextareaRef.current.style.height = `${newHeight}px`;
    }
  }, [prompt]);

  useEffect(() => {
    if (!loading && promptTextareaRef.current) {
      promptTextareaRef.current.focus();
    }
  }, [loading]);

  return (
    <div className={`ChatInput ${loading ? 'disabled' : ''}`}>
      <textarea
        className="ChatInput-textarea"
        ref={promptTextareaRef}
        value={prompt}
        onChange={e => setPrompt(e.target.value)}
        onKeyDown={e => e.key === 'Enter' && !e.shiftKey && sendPrompt()} 
        placeholder=". . ."
        disabled={loading}
      />
      <button onClick={sendPrompt}>{
        <SendHorizontal/>
      }</button>
    </div>
  );
}
 
export default ChatInput;