import './chatLog.css'
import Message from './message';

interface MessageProps {
  role: string;
  content: string;
}

interface ChatLogProps {
  modelNameTrail: string[];
  messages: MessageProps[];
}

function ChatLog({ modelNameTrail, messages }: ChatLogProps) {

  const buildContent = () => {
    if (messages.length === 0) {
      return (
        <div className="ChatLog-infoText">
          <h1>Prompt to start a conversation</h1>
        </div>
      );
    }

    return messages.map((message, index) => (
      <Message key={index} isOwn={index % 2 == 0} label={modelNameTrail[index]} content={message.content} />
    ));
  };

  return (
    <div className="ChatLog">
      { buildContent() }
      <div id="chatLogBottom"></div>
    </div>
  );
}

export default ChatLog;