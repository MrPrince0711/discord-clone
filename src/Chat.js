import React, { useEffect, useState } from 'react'
import './Chat.css'
import ChatHeader from './ChatHeader'
import AddIcon from '@mui/icons-material/Add';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import GifIcon from '@mui/icons-material/Gif';
import EmojiEmotionsOutlinedIcon from '@mui/icons-material/EmojiEmotionsOutlined';
import Message from './Message';
import {useSelector} from 'react-redux'
import { selectChannelId, selectChannelName } from './app/features/appSlice';
import { selectUser } from './app/features/userSlice';
import db from './firebase';
import firebase from 'firebase/compat/app'; 
import 'firebase/compat/auth'; 
import 'firebase/compat/firestore';


function Chat() {
    const user = useSelector(selectUser);
    const channelId = useSelector(selectChannelId);
    const channelName = useSelector(selectChannelName);
    const [input, setInput] = useState('')
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        if (channelId) {
            db.collection('channels').doc(channelId).collection('messages').orderBy('timestamp', 'asc').
            onSnapshot((snapshot) => 
            setMessages(snapshot.docs.map((doc) => doc.data())))
        }

    }, [channelId]
    );

    const sendMessages = e => {
        e.preventDefault();
        db.collection('channels').doc(channelId).collection('messages').
        add({
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            message: input,
            user: user, 
        })

        setInput('');
    }
  return (
    <div className='chat'>
        <ChatHeader channelName={channelName}/>
        <div className="chat_messages">
            {messages.map((message) => (
                <Message 
                timestamp = {message.timestamp}
                message = {message.message}
                user = {message.user}
                />
            ))}
        </div>

        <div className="chat_input">
            <AddIcon fontSize='large'/>
            <form>
                <input value={input} disabled= {!channelId} onChange={ e => setInput(e.target.value) /* stores value in state as you type  */ } placeholder= {`Messahe #${channelName}`} />
                <button type='submit' onClick={sendMessages} className='chatInput_button' disabled= {!channelId}>Send Message</button>
            </form>

            <div className="chat_inputIcons">
                <CardGiftcardIcon/>
                <GifIcon/>
                <EmojiEmotionsOutlinedIcon/>
            </div>
        </div>
    </div>
  )
}

export default Chat