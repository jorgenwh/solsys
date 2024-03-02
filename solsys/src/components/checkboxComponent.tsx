import './checkboxComponent.css';
import { useState, useEffect, FC } from 'react';


interface CheckboxComponentProps {
  theme: 'light' | 'dark';
  modelName: any;
  model: string;
  checked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function CheckboxComponent({ theme, model, modelName, checked, onChange}: CheckboxComponentProps) {

  return (
    <div className="Checkbox">
      <input 
        type="checkbox" 
        id={model}
        name={model}
        value={model}
        checked={checked} 
        onChange={onChange} 
      />
      <label>{modelName}</label>
    </div>
  );
}

export default CheckboxComponent;
