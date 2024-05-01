import './dropdownSelect.css';

interface DropdownSelectProps {
  label: string;
  loading: boolean;
  options: string[];
  names: string[];
  value: string;
  setValue: (value: string) => void;
}

function DropdownSelect({ label, loading, options, names, value, setValue }: DropdownSelectProps) {

  return (
    <div className="DropdownSelect">
      <label className="DropdownSelect-label">{label}</label>
      <select 
        className={`DropdownSelect-select ${loading ? 'disabled' : ''}`}
        value={value} 
        onChange={e => setValue(e.target.value)}>
        {options.map((model, index) => (
          <option key={index} value={model}>{names[index]}</option>
        ))}
      </select>
    </div>
  );
}
 
export default DropdownSelect;