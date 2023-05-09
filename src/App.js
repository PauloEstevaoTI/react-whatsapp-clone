import React, {useState, useEffect} from "react";
import './App.css'

import ChatListItem from "./components/ChatListItem";
import ChatIntro from "./components/ChatIntro";
import ChatWindow from "./components/ChatWindow";
import  NewChat  from "./components/NewChat";

import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import ChatIcon from '@mui/icons-material/Chat';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SearchIcon from '@mui/icons-material/Search';

export default () => {

  const [chatList, setChatList] = useState([
    {chatId: 1, title: 'Fulano de Tal', image: 'https://www.w3schools.com/howto/img_avatar2.png'} ,
    {chatId: 2, title: 'Fulano de Tal', image: 'https://www.w3schools.com/howto/img_avatar2.png'} ,
    {chatId: 3, title: 'Fulano de Tal', image: 'https://www.w3schools.com/howto/img_avatar2.png'} ,
    {chatId: 4, title: 'Fulano de Tal', image: 'https://www.w3schools.com/howto/img_avatar2.png'}

  
  ]);

  const [activeChat, setActiveChat] = useState({});
  const [user, setuser] = useState({
    id: 123,
    avatar: 'https://www.w3schools.com/howto/img_avatar2.png',
    name: 'Bonieky'
  })

  const [showNewChat, setShowNewChat] = useState(false)
  const handleNewChat = () => {
    setShowNewChat(true)
  }

  return(
    <div className="app-window">
      <div className="sidebar">
        <NewChat
          chatList={chatList} 
          user={user}
          show={showNewChat}
          setShow={setShowNewChat}
        />
        <header>
            <img className="header--avatar" src={user.avatar} alt="" />
            <div className="header--buttons">
              <div className="header--btn">
                  <DonutLargeIcon style={{color: '#919191'}} />
              </div>
              <div onClick={handleNewChat} className="header--btn">
                  <ChatIcon style={{color: '#919191'}} />
              </div>
              <div className="header--btn">
                  <MoreVertIcon style={{color: '#919191'}} />
              </div>
            </div>
        </header>

        <div className="search">
            <div className="search--input">
                <SearchIcon fontSize="small" style={{color: '#919191'}} />
                <input type="search" placeholder="Procurar ou começar uma nova conversa."/>
            </div>
        </div>

        <div className="chatlist">
          

          {chatList.map((item,key)=> 
                        
            <ChatListItem 
              key={key}
              data={item}
              active={activeChat.chatId === chatList[key].chatId}
              onClick={()=>setActiveChat(chatList[key])}
              
            />
           
          )}
          
        </div>
      </div>
      <div className="contentarea">
        {activeChat.chatId !== undefined &&
           <ChatWindow
              user={user}
           />
        }
        {activeChat.chatId === undefined &&
          <ChatIntro />
        }
        
      </div>
    </div>
  )
}