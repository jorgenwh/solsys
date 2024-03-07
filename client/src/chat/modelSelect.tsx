import './modelSelect.css';

import { modelOptions, modelNameMap } from './modelOptions';

interface ModelSelectProps {
  model: string;
  setModel: (model: string) => void;
}

function ModelSelect({ model, setModel }: ModelSelectProps) {
  const modelRawNames = Object.keys(modelOptions);
  const modelNames = modelRawNames.map((model) => modelNameMap[model]);

  return (
    <div className="ModelSelect">
      <label className="ModelSelect-label">Model</label>
      <select 
        className="ModelSelect-select" 
        value={model} 
        onChange={e => setModel(e.target.value)}>
        {modelRawNames.map((model, index) => (
          <option key={index} value={model}>{modelNames[index]}</option>
        ))}
      </select>
    </div>
  );
}
 
export default ModelSelect;