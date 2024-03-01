import { useState, useEffect, FC } from 'react';

interface SettingsTabProps {
  theme: 'light' | 'dark';
}

function SettingsTab({ theme: string }: SettingsTabProps) {

  return (
    <div className="settingsTab">
      <h1>Settings Tab</h1>
    </div>
  );
}

export default SettingsTab;
