import './chatHeader.css'
import '../components/dropdownSelect.css';
import { RotateCcw } from 'lucide-react';

import { TEXT_MODELS, MODEL_DISPLAY_NAMES } from '../models/modelLists';
import DropdownSelect from '../components/dropdownSelect';

interface ChatHeaderProps {
  loading: boolean;
  model: string;
  setModel: (model: string) => void;
  resetChat: () => void;
}

function ChatHeader({ loading, model, setModel, resetChat }: ChatHeaderProps) {
  const names = TEXT_MODELS.map(option => MODEL_DISPLAY_NAMES[option]);

  return (
    <div className="ChatHeader">
      <label className="ChatHeader-label">Chat</label>
      <div className="ChatHeader-interactable-container">
        <div className="ChatHeader-DropdownSelect-container">
          <DropdownSelect
            label={"Model"}
            loading={loading}
            options={TEXT_MODELS}
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