import './modelSettings.css';
import { useState, useEffect, FC } from 'react';

import CheckboxComponent from './checkboxComponent';
import SettingsRow from './settingsRow';

interface ModelSettingsProps{
  models: string[];
  setModels: (models: string[]) => void;
  modelSelection: any;
}

function ModelSettings({ models, setModels, modelSelection }: ModelSettingsProps) {

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
            <CheckboxComponent
              model={model}
              modelName={modelName}
              checked={models.includes(model)}
              onChange={onCheckboxChange}
            /> 
          );
        })}
      </div>
    </div>
  );
}

export default ModelSettings;
