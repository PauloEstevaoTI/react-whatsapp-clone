import React from "react";
import './Message.css'

export const Message = () => {
    return(
        <div className="messageLine">
            <div className="messagetItem">
                <div className="messageText">
                    Bla bla bla
                </div>
                <div className="messageDate">
                    19:00
                </div>
            </div>
        </div>
    )
}

export default Message;