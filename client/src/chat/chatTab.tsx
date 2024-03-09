import { useState } from 'react';

import Chat from './chat';
import ApiHandler from '../api/apiHandler';
import { modelNameMap } from './modelOptions';

interface ChatTabProps {
  apiHandler: ApiHandler;
}

function ChatTab({ apiHandler }: ChatTabProps) {
  const [model, setModel] = useState<string>('claude-3-opus-20240229');
  const [modelNameTrail, setModelNameTrail] = useState<string[]>([]);
  const [messages, setMessages] = useState<Array<{ role: string; content: string }>>([]);
  const [prompt, setPrompt] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  const resetChat = () => {
    setModelNameTrail([]);
    setMessages([]);
    setPrompt('');
    setLoading(false);
  }

  const sendPrompt = () => {
    const trimmedPrompt = prompt.trim();
    if (trimmedPrompt === '') {
      return;
    }
    const modelName = modelNameMap[model];

    const newMessages = [...messages, { role: 'user', content: trimmedPrompt }];
    setMessages(newMessages);

    setLoading(true);
    setPrompt('');

    const response = apiHandler.chatPrompt(model, newMessages);
    response.then((responses) => {
      setModelNameTrail([...modelNameTrail, modelName, modelName]);
      setMessages(
        [...newMessages, { role: 'assistant', content: responses }]
      );
      setLoading(false);
    }).catch((error) => {
      setModelNameTrail([...modelNameTrail, modelName, modelName]);
      setMessages(
        [...newMessages, { role: 'assistant', content: error }]
      );
      setLoading(false);
    });
  }

  return (
    <div className="ChatTab">
      <Chat 
        modelNameTrail={modelNameTrail}
        messages={messages}
        prompt={prompt}
        model={model}
        loading={loading}
        resetChat={resetChat}
        setPrompt={setPrompt}
        sendPrompt={sendPrompt}
        setModel={setModel}
      />
    </div>
  );
}

export default ChatTab;
