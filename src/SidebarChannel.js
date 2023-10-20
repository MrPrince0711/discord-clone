import React from 'react'
import './SidebarChannel.css'
import { useDispatch } from 'react-redux'
import { setChannelInfo } from './app/features/appSlice';

function SidebarChannel({ id, channelName}) {

  const dispatch = useDispatch();
  return (
    <div onClick={ () => 
      dispatch(
        setChannelInfo({
          channelId: id,
          channelName: channelName,
    }
    )
    )
    } 
    className='sidebarChannel'>
        <h4>
            <span className='channel_hash'>#</span>
            {channelName}
        </h4>
    </div>
  )
}

export default SidebarChannel