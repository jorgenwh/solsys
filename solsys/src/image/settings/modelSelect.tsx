import './modelSelect.css';
import { useState, useEffect, FC } from 'react';

import IMAGEMODELS from '../models';
import CheckboxComponent from './checkboxComponent';

interface ModelSelectProps{
  theme: 'light' | 'dark';
  models: string[];
  setModels: (models: string[]) => void;
}

function ModelSelect({ theme, models, setModels }: ModelSelectProps) {

  const onCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (models.includes(value)) {
      setModels(models.filter((model) => model !== value));
    } else {
      setModels([...models, value]);
    }
  }

  return (
    <div className="ModelSelect">
      <label className="ModelSelect-label">Models</label>
      {Object.entries(IMAGEMODELS).map(([model, modelName]) => {
        console.log(model, modelName)
        return (
          <CheckboxComponent 
            theme={theme}
            model={model}
            modelName={modelName}
            checked={models.includes(model)}
            onChange={onCheckboxChange}
          />
        );
      })}
    </div>
  );
}

export default ModelSelect;
