import React from 'react';
import './App.css';

import ApiHandler from './api/apiHandler';
import ChatTab from './chat/chatTab';
import ImageTab from './image/imageTab';
import SettingsTab from './settings/settingsTab';


interface AppHeaderProps {
  mode: 'chat' | 'image' | 'settings';
  setMode: (mode: 'chat' | 'image' | 'settings') => void;
}

function AppHeader({ mode, setMode }: AppHeaderProps) {

  return (
    <div className="AppHeader">
      <div className="AppHeader-buttons-container">
        <button className={`AppHeader-chatButton${mode === 'chat' ? ' clicked' : ''}`} onClick={() => setMode('chat')}>Chat</button>
        <button className={`AppHeader-imageButton${mode === 'image' ? ' clicked' : ''}`} onClick={() => setMode('image')}>Images</button>
        <button className={`AppHeader-settingsButton${mode === 'settings' ? ' clicked' : ''}`} onClick={() => setMode('settings')}>Settings</button>
      </div>
      <h1 className="AppHeader-title">SOLSYS</h1>
    </div>
  );
}


const apiHandler = new ApiHandler();


function App() {
  const [mode, setMode] = React.useState<'chat' | 'image' | 'settings'>('chat');

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
    case 'settings':
      content = (
        <SettingsTab 
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
