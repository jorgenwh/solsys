import { useState, useEffect, FC } from 'react';

import Chat from './chat';

function ChatTab() {

  return (
    <div className="chatTab">
      <Chat 
        messages={[]}
        resetChat={() => {}}
        prompt={''}
        setPrompt={() => {}}
        handleSend={() => {}}
        loading={false}
        disabled={false}
      />
    </div>
  );
}

export default ChatTab;
