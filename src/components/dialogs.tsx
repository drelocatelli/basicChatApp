import React, { useEffect, useRef } from "react";
import { scrollToBottom } from "../utils/scrollBottom";

function Message({dialogs}: {dialogs: string[]}) {

    const overflowRef = useRef(null);

    useEffect(() => {
        if(overflowRef.current) {
            scrollToBottom({element: overflowRef.current});
        }
    }, [dialogs]);
    
    return (
        <div className="dialogs" ref={overflowRef}>
            {dialogs.map((dialog, i) => (
                <div className="dialog" key={i}>
                    {dialog}
                </div>
            ))}
        </div>
    );
}

export { Message };
