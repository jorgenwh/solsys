import React from 'react';
import './App.css';
import { DarkModeSwitch } from 'react-toggle-dark-mode';

import ChatTab from './chat/chatTab';
import ImageTab from './image/imageTab';
import SettingsTab from './settings/settingsTab';


interface AppHeaderProps {
  mode: 'chat' | 'image' | 'settings';
  setMode: (mode: 'chat' | 'image' | 'settings') => void;
  theme: 'light' | 'dark';
  setTheme: (theme: 'light' | 'dark') => void;
}

function AppHeader({ mode, setMode, theme, setTheme }: AppHeaderProps) {

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
          onChange={checked => {
            if (checked) {
              setTheme('light');
            } else {
              setTheme('dark');
            }
          }}
          size={45}
        />
      </div>
    </div>
  );
}

function App() {
  const [mode, setMode] = React.useState<'chat' | 'image' | 'settings'>('chat');
  const [theme, setTheme] = React.useState<'light' | 'dark'>('light');

  let content;
  switch (mode) {
    case 'chat':
      content = <ChatTab />;
      break;
    case 'image':
      content = <ImageTab/>;
      break;
    case 'settings':
      content = <SettingsTab />;
      break;
    default:
      content = <div>Invalid mode</div>;
  }

  return (
    <div className="App">
      <AppHeader mode={mode} setMode={setMode} theme={theme} setTheme={setTheme}/>
      {content}
    </div>
  );
}

export default App;
