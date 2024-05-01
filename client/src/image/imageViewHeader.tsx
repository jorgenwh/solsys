import './imageViewHeader.css'
import { RotateCcw } from 'lucide-react';

import {
  IMAGE_MODELS,
  MODEL_DISPLAY_NAMES,
  IMAGE_SIZE_OPTIONS,
  IMAGE_QUALITY_OPTIONS,
} from '../models/modelLists';
import DropdownSelect from '../components/dropdownSelect';

interface ImageViewHeaderProps {
  loading: boolean;
  model: string,
  size: string,
  quality: string,
  changeModel: (model: string) => void;
  setSize: (size: string) => void;
  setQuality: (quality: string) => void;
  resetImageDisplay: () => void;
}

function ImageViewHeader({ 
  loading, 
  model, 
  size, 
  quality, 
  changeModel, 
  setSize, 
  setQuality, 
  resetImageDisplay 
}: ImageViewHeaderProps) {
  const names = IMAGE_MODELS.map(option => MODEL_DISPLAY_NAMES[option]);

  const sizeOptions = IMAGE_SIZE_OPTIONS[model];
  const qualityOptions = IMAGE_QUALITY_OPTIONS[model];

  const buildDropdownSelects = () => {
    return (
      <>
        <DropdownSelect
          label={"Model"}
          loading={loading}
          options={IMAGE_MODELS}
          names={names}
          value={model}
          setValue={changeModel}
        />
        <DropdownSelect
          label={"Size"}
          loading={loading}
          options={sizeOptions}
          names={sizeOptions}
          value={size}
          setValue={setSize}
        />
        {(model === 'dall-e-3') ?
          <DropdownSelect
            label={"Quality"}
            loading={loading}
            options={qualityOptions}
            names={qualityOptions}
            value={quality}
            setValue={setQuality}
          />
          : null
        }
      </>
    );
  };

  return (
    <div className="ImageViewHeader">
      <label className="ImageViewHeader-label">Image generation</label>
      <div className="ImageViewHeader-interactable-container">
        <div className="ImageViewHeader-DropdownSelect-container">
          {buildDropdownSelects()}
        </div>
        <button className={`ImageViewHeader-resetButton ${loading ? 'disabled' : ''}`} onClick={resetImageDisplay}>Reset {<RotateCcw/>}</button>
      </div>
    </div>
  );
}
 
export default ImageViewHeader;