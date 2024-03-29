import React from "react";
import './Message.css'

export const Message = ({data, user}) => {
    return(
        <div 
            className="messageLine"
            style={{
                justifyContent: user.id === data.author ? 'flex-end' : 'flex-start'
            }}
        >
            <div 
                className="messagetItem"
                style={{
                    backgroundColor: user.id === data.author ? '#DCF8C6' : '#FFF'
                }}
            >
                <div className="messageText">
                    {data.body}
                </div>
                <div className="messageDate">
                    19:00
                </div>
            </div>
        </div>
    )
}

export default Message;