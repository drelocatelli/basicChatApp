import React, { useEffect, useRef } from "react";
//@ts-ignore
import autosize from 'autosize';

interface AppProps {
    addMessage: (e: React.KeyboardEvent) => void;
}

function Commands({addMessage} : AppProps) {

    const textareaRef = useRef(null);

    useEffect(() => {autosize(textareaRef.current)}, []);
    
    return (
        <div className="commands">
            <textarea ref={textareaRef} onKeyDown={addMessage} style={{ resize: 'none', maxHeight: '40px', overflowY: 'auto' }} placeholder="Digite CTRL+ENTER pra enviar..."></textarea>
        </div>
    );
}

export {Commands};
