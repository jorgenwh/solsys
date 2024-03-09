import './chatHeader.css'
import '../common/dropdownSelect.css';
import { RotateCcw } from 'lucide-react';

import { modelOptions, modelNameMap } from './modelOptions';
import DropdownSelect from '../common/dropdownSelect';

interface ChatHeaderProps {
  loading: boolean;
  model: string;
  setModel: (model: string) => void;
  resetChat: () => void;
}

function ChatHeader({ loading, model, setModel, resetChat }: ChatHeaderProps) {
  const options = Object.keys(modelOptions);
  const names = options.map(option => modelNameMap[option]);

  return (
    <div className="ChatHeader">
      <label className="ChatHeader-label">Chat</label>
      <div className="ChatHeader-interactable-container">
        <div className="ChatHeader-DropdownSelect-container">
          <DropdownSelect
            label={"Model"}
            loading={loading}
            options={options}
            names={names}
            value={model}
            setValue={setModel}
          />
        </div>
        <button className={`ChatHeader-resetButton ${loading ? 'disabled' : ''}`} onClick={resetChat}>Reset {<RotateCcw/>}</button>
      </div>
    </div>
  );
}
 
export default ChatHeader;