import './settings.css';
import { useState, useEffect, FC } from 'react';

import { OPENAI_IMAGE_MODELS } from '../../api/directory';
import ModelSelect from '../../components/modelSettings';


interface SettingsProps {
  models: string[];
  setModels: (models: string[]) => void;
}

function Settings({ models, setModels }: SettingsProps) {

  return (
    <div className="Settings">
      <ModelSelect
        models={models}
        setModels={setModels}
        modelSelection={OPENAI_IMAGE_MODELS}
      />
    </div>
  );
}

export default Settings;
