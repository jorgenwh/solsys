import './settingsView.css';

import SettingsViewHeader from './settingsViewHeader';

interface SettingsViewProps {

}

function SettingsView({ }: SettingsViewProps ) {
  return (
    <div className="settingsView">
      <SettingsViewHeader />
    </div>
  );
}

export default SettingsView;