import React from 'react';
import './App.css';
import { DarkModeSwitch } from 'react-toggle-dark-mode';

import ChatTab from './chat/chatTab';
import ImageTab from './image/imageTab';
import SettingsTab from './settings/settingsTab';

import OpenAIClient from './api/openai/client';


interface AppHeaderProps {
  mode: 'chat' | 'image' | 'settings';
  setMode: (mode: 'chat' | 'image' | 'settings') => void;
  theme: 'light' | 'dark';
  setTheme: (theme: 'light' | 'dark') => void;
}

function AppHeader({ mode, setMode, theme, setTheme }: AppHeaderProps) {

  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    }
    else {
      setTheme('light');
    }
  }

  return (
    <div className="AppHeader">
      <div className="AppHeader-buttons">
        <button className={`AppHeader-chatButton${mode === 'chat' ? ' clicked' : ''}`} onClick={() => setMode('chat')}>Chat</button>
        <button className={`AppHeader-imageButton${mode === 'image' ? ' clicked' : ''}`} onClick={() => setMode('image')}>Images</button>
        <button className={`AppHeader-settingsButton${mode === 'settings' ? ' clicked' : ''}`} onClick={() => setMode('settings')}>Settings</button>
      </div>
      <div className="AppHeader-title">
        <h1>SOLSYS</h1>
      </div>
      <div className="AppHeader-themeSwitch">
        <DarkModeSwitch
          checked={theme === 'dark'}
          onChange={toggleTheme}
          size={40}
          moonColor="black"
          sunColor="sun"
        />
      </div>
    </div>
  );
}


const openAiClient = new OpenAIClient();
openAiClient.initialize(process.env.REACT_APP_OPENAI_API_KEY || '');

function App() {
  const [mode, setMode] = React.useState<'chat' | 'image' | 'settings'>('chat');
  const [theme, setTheme] = React.useState<'light' | 'dark'>('light');

  let content;
  switch (mode) {
    case 'chat':
      content = (
        <ChatTab
          theme={theme}
          openAiClient={openAiClient}
         />
      );
      break;
    case 'image':
      content = (
        <ImageTab
          theme={theme}
          openAiClient={openAiClient}
        />
      );
      break;
    case 'settings':
      content = (
        <SettingsTab 
          theme={theme}
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
        theme={theme} 
        setTheme={setTheme}
      />
      {content}
    </div>
  );
}

export default App;
