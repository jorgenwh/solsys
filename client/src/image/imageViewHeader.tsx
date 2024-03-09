import './imageViewHeader.css'
import { RotateCcw } from 'lucide-react';

import { 
  modelOptions, 
  modelNameMap, 
  modelSizeOptions,
  modelQualityOptions,
} from './modelOptions';
import DropdownSelect from '../common/dropdownSelect';

interface ImageViewHeaderProps {
  loading: boolean;
  model: string,
  size: string,
  quality: string,
  setModel: (model: string) => void;
  setSize: (size: string) => void;
  setQuality: (quality: string) => void;
  resetImageDisplay: () => void;
}

function ImageViewHeader({ 
  loading, 
  model, 
  size, 
  quality, 
  setModel, 
  setSize, 
  setQuality, 
  resetImageDisplay 
}: ImageViewHeaderProps) {
  const options = Object.keys(modelOptions);
  const names = options.map(option => modelNameMap[option]);

  const sizeOptions = modelSizeOptions[model];
  const qualityOptions = modelQualityOptions[model];

  return (
    <div className="ImageViewHeader">
      <label className="ImageViewHeader-label">Image generation</label>
      <div className="ImageViewHeader-interactable-container">
        <div className="ImageViewHeader-DropdownSelect-container">
          <DropdownSelect
            label={"Model"}
            loading={loading}
            options={options}
            names={names}
            value={model}
            setValue={setModel}
          />
          <DropdownSelect
            label={"Size"}
            loading={loading}
            options={sizeOptions}
            names={sizeOptions}
            value={size}
            setValue={setSize}
          />
          <DropdownSelect
            label={"Quality"}
            loading={loading}
            options={qualityOptions}
            names={qualityOptions}
            value={quality}
            setValue={setQuality}
          />
        </div>
        <button className={`ImageViewHeader-resetButton ${loading ? 'disabled' : ''}`} onClick={resetImageDisplay}>Reset {<RotateCcw/>}</button>
      </div>
    </div>
  );
}
 
export default ImageViewHeader;