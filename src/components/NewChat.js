import React, {useState} from "react";
import './NewChat.css'

import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const NewChat = ({user, chatList, show , setShow}) => {

    const[list, setList] = useState([
        {id: 123, avatar: 'https://www.w3schools.com/howto/img_avatar2.png', name: 'Bonieky'},
        {id: 123, avatar: 'https://www.w3schools.com/howto/img_avatar2.png', name: 'Bonieky'},
        {id: 123, avatar: 'https://www.w3schools.com/howto/img_avatar2.png', name: 'Bonieky'},
        {id: 123, avatar: 'https://www.w3schools.com/howto/img_avatar2.png', name: 'Bonieky'},
    ]);

    const handleClose = () => {
        setShow(false)
    }

    return(
        <div className="newChat" style={{left: show ? 0 : -415}}>
            <div className="newChat--head">
                <div onClick={handleClose} className="newChat--backbutton">
                    <ArrowBackIcon style={{color: '#FFF'}} />
                </div>
                <div className="newChat--headtitle">
                    Nova conversa
                </div>
            </div>
            <div className="newChat--list">
                {list.map((item, key)=> (
                    <div className="newChat--item" key={key}>
                        <img className="newChaty--itemavatar" src={item.avatar} alt=""/>
                        <div className="newChat--itemname">{item.name}</div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default NewChat