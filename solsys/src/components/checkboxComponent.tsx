import './checkboxComponent.css';
import { useState, useEffect, FC } from 'react';


interface CheckboxComponentProps {
  modelName: any;
  model: string;
  checked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function CheckboxComponent({ model, modelName, checked, onChange}: CheckboxComponentProps) {

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
