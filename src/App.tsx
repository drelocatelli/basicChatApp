import React, { useState } from 'react';
import './styles/basic.css';
import { Message } from './components/dialogs';
import { Commands } from './components/commands';
import { hasNullValue } from './utils/checkNulLValue';

function App() {
    const [dialogs, setDialogs] = useState<string[]>(['Olá, tudo bem?']);

    const addMessage = (e: React.KeyboardEvent) => {
      if(e.key == 'Enter' && e.ctrlKey) {
        const formItem = e.target as HTMLTextAreaElement;

        if(hasNullValue(formItem.value)) setDialogs(state => [...state, formItem.value]);
      }
    }

    return (
        <div className="chatApp">
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '-webkit-fill-available' }}>
                <h1>Basic Chat App</h1>
                <Message dialogs={dialogs} />
                <Commands addMessage={addMessage} />
            </div>
        </div>
    );
}

export default App;
