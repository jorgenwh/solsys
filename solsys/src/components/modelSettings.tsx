import './modelSettings.css';
import { useState, useEffect, FC } from 'react';

import CheckboxComponent from './checkboxComponent';
import SettingsRow from './settingsRow';

interface ModelSettingsProps{
  theme: 'light' | 'dark';
  models: string[];
  setModels: (models: string[]) => void;
  modelSelection: any;
}

function ModelSettings({ theme, models, setModels, modelSelection }: ModelSettingsProps) {

  const onCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (models.includes(value)) {
      setModels(models.filter((model) => model !== value));
    } else {
      setModels([...models, value]);
    }
  }

  return (
    <div className="ModelSettings">
      <label className="ModelSettings-label">Settings</label>
      <div className="ModelSettings-models">
        {Object.entries(modelSelection).map(([model, modelName]) => {
          return (
            <SettingsRow
              theme={theme}
            />
          );
        })}
      </div>
    </div>
  );
}

export default ModelSettings;
