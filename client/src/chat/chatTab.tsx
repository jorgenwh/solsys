import { useState } from 'react';

import Chat from './chat';
import ApiHandler from '../api/apiHandler';
import { MODEL_DISPLAY_NAMES } from '../models/modelLists';

interface ChatTabProps {
  apiHandler: ApiHandler;
}

function ChatTab({ apiHandler }: ChatTabProps) {
  const [model, setModel] = useState<string>('gpt-4-turbo');
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
    const modelName = MODEL_DISPLAY_NAMES[model];
    const newMessages = [...messages, { role: 'user', content: trimmedPrompt }];

    setMessages(newMessages);
    setLoading(true);
    setPrompt('');

    const response = apiHandler.generateText(newMessages, model);
    response.then((response) => {
      setModelNameTrail([...modelNameTrail, modelName, modelName]);
      setMessages(
        [...newMessages, { role: 'assistant', content: response.choices[0].message.content }]
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
