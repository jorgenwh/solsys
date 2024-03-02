import './settings.css';
import { useState, useEffect, FC } from 'react';

import ModelSelect from './modelSelect';


interface SettingsProps {
  theme: 'light' | 'dark';
  models: string[];
  setModels: (models: string[]) => void;
}

function Settings({ theme, models, setModels }: SettingsProps) {

  return (
    <div className="Settings">
      <ModelSelect
        theme={theme}
        models={models}
        setModels={setModels}
      />
    </div>
  );
}

export default Settings;
