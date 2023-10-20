import React, { useEffect, useState } from 'react'
import './Sidebar.css'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AddIcon from '@mui/icons-material/Add';
import SidebarChannel from './SidebarChannel';
import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAlt';
import InfoIcon from '@mui/icons-material/Info';
import CallIcon from '@mui/icons-material/Call';
import { Avatar } from '@mui/material';
import MicIcon from '@mui/icons-material/Mic';
import HeadphonesIcon from '@mui/icons-material/Headphones';
import SettingsIcon from '@mui/icons-material/Settings';
import { useSelector } from 'react-redux';
import { selectUser } from './app/features/userSlice';
import db, { auth } from './firebase';

function Sidebar() {
    const user = useSelector(selectUser);
    const [channels, setChannels] = useState([]);
//whenever channel changes function below will update in real time
    useEffect(() =>{
        db.collection('channels').onSnapshot( snapshot => (
            setChannels(snapshot.docs.map( (doc) => ({
                id: doc.id,
                channel: doc.data()
            })))
        ));
    })

    const handleAddChannel = () => {
        const channelName = prompt("Enter a new channel name my guy");
        if (channelName) {
            db.collection('channels' ).add({
                channelName: channelName
            })
        }
    }
  return (
    <div className='sidebar'>
            <div className='sidebar_top'>
            <h3>Random</h3>
            <ExpandMoreIcon/>  
        </div>

        <div className="sidebar_channels">
            <div className="sidebar_channelsheader">
                <div className="sidebar_header">
                    <ExpandMoreIcon/>
                    <h4>Text channels</h4>
                </div>
                <AddIcon onClick = {handleAddChannel} className='sidebar_addchannel'/>
            </div>

            <div className="sidebar_channelList">
               {channels.map(({id, channel}) => ( 
                    <SidebarChannel
                        key={id}
                        id={id}
                        channelName = {channel.channelName}
                    /> 
                    ))}
            </div>

        </div>

        <div className="sidebar_voice">
            <SignalCellularAltIcon className='voiceIcon' fontSize='large'/>
            <div className="voice_info">
                <h3>Voice connected</h3>
                <p>steam</p>
            </div>

            <div className="voiceIcons2">
                <InfoIcon/>
                <CallIcon/>
            </div>
        </div>


            <div className="sidebar_profile">
                <Avatar onClick = {() => auth.signOut()} src= {user.photo}/>
                <div className="sidebarProfile_info">
                    <h3>{user.diplayName}</h3>
                    <p>#{user.uid.substring(0, 5)}</p>

                </div>


                <div className="sidebar_profileIcons">
                        <MicIcon/>
                        <HeadphonesIcon/>
                        <SettingsIcon/>
                </div>
                
            </div>
         </div>
    
  )
}

export default Sidebar