import { useState, useEffect, FC } from 'react';

import SettingsView from './settingsView';

interface SettingsTabProps {
}

function SettingsTab({ }: SettingsTabProps) {

  return (
    <div className="SettingsTab">
      <SettingsView />
    </div>
  );
}

export default SettingsTab;
