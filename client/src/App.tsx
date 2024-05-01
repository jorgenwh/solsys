import React from 'react';
import './App.css';

import ApiHandler from './api/apiHandler';
import ChatTab from './chat/chatTab';
import ImageTab from './image/imageTab';


interface AppHeaderProps {
  mode: 'chat' | 'image';
  setMode: (mode: 'chat' | 'image') => void;
}

function AppHeader({ mode, setMode }: AppHeaderProps) {
  return (
    <div className="AppHeader">
      <div className="AppHeader-buttons-container">
        <button className={`AppHeader-chatButton${mode === 'chat' ? ' clicked' : ''}`} onClick={() => setMode('chat')}>Chat</button>
        <button className={`AppHeader-imageButton${mode === 'image' ? ' clicked' : ''}`} onClick={() => setMode('image')}>Images</button>
      </div>
      <h1 className="AppHeader-title">SOLSYS!</h1>
    </div>
  );
}


const apiHandler = new ApiHandler();
apiHandler.initialize(['openai', process.env.REACT_APP_OPENAI_API_KEY || '']);


function App() {
  const [mode, setMode] = React.useState<'chat' | 'image'>('chat');

  let content;
  switch (mode) {
    case 'chat':
      content = (
        <ChatTab
          apiHandler={apiHandler}
         />
      );
      break;
    case 'image':
      content = (
        <ImageTab
          apiHandler={apiHandler}
        />
      );
      break;
    default:
      content = <div>Invalid mode</div>;
  }

  return (
    <div className="App">
      <AppHeader 
        mode={mode} 
        setMode={setMode} 
      />
      {content}
    </div>
  );
}

export default App;
