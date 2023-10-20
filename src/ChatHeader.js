import React from 'react'
import './ChatHeader.css'
import NotificationsIcon from '@mui/icons-material/Notifications';
import EditLocationAltIcon from '@mui/icons-material/EditLocationAlt';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import SearchIcon from '@mui/icons-material/Search';
import SendIcon from '@mui/icons-material/Send';
import HelpIcon from '@mui/icons-material/Help';

function ChatHeader({channelName}) {
  return (
    <div className='chatHeader'>
        <div className="chatHeader_left">
            <h3>
                <span className='chatHeader_hash'>
                    #
                </span>

                {channelName}
            </h3>
        </div>

        <div className="chatHeader_right">
            <NotificationsIcon/>
            <EditLocationAltIcon/>
            <PeopleAltIcon/>

            <div className="chatHeader_search">
                <input placeholder='Search'/>
                <SearchIcon/>
            </div>

            <SendIcon/>
            <HelpIcon/>

        </div>

    </div>
  )
}

export default ChatHeader