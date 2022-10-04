import React, { useEffect, useRef, useState } from 'react';
import './styles/basic.css';
//@ts-ignore
import autosize from 'autosize';

function App() {
    const [dialogs, setDialogs] = useState<string[]>(['Olá, tudo bem?']);

    const textareaRef = useRef(null);
    const overflowRef = useRef(null);

    useEffect(() => {autosize(textareaRef.current)}, []);

    useEffect(() => {
      if(textareaRef.current) {
        scrollToBottom({element: overflowRef.current});
      }
    }, [dialogs])

    const addMessage = (e: React.KeyboardEvent) => {
      if(e.key == 'Enter' && e.ctrlKey) {
        const formItem = e.target as HTMLTextAreaElement;

        if(formItem.value.length > 0) setDialogs(state => [...state, formItem.value]);
      }
    }

    return (
        <div className="chatApp">
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '-webkit-fill-available' }}>
                <h1>Basic Chat App</h1>
                <div className="dialogs" ref={overflowRef}>
                    {dialogs.map((dialog, i) => (
                        <div className="dialog" key={i}>{dialog}</div>
                    ))}
                </div>
                <div className="commands">
                    <textarea ref={textareaRef} onKeyDown={addMessage} style={{ resize: 'none' }} placeholder="Digite CTRL+ENTER pra enviar..."></textarea>
                </div>
            </div>
        </div>
    );
}

function scrollToBottom({element, behavior} : {element: HTMLElement | HTMLDivElement | null, behavior?: string}) {
  if(element) {
      element.style.scrollBehavior = behavior ?? 'auto';
      setTimeout(() => {
          element.scrollTop = element.scrollHeight;
          console.log('scrolled to bottom');
      }, 100);
  }
}

export default App;
