import './settings.css';
import { useState, useEffect, FC } from 'react';

import { OPENAI_CHAT_MODELS } from '../../api/directory';
import ModelSelect from '../../components/modelSettings';


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
        modelSelection={OPENAI_CHAT_MODELS}
      />
    </div>
  );
}

export default Settings;
