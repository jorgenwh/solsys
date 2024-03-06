import './settingsRow.css';
import { useState, useEffect, FC } from 'react';


interface SettingsRowProps {
  theme: 'light' | 'dark';
}

function SettingsRow({ theme }: SettingsRowProps) {

  return (
    <div className="SettingsRow">
    </div>
  );
}

export default SettingsRow;
