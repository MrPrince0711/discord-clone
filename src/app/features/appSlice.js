import { createSlice } from '@reduxjs/toolkit'


export const appSlice = createSlice({
  name: 'app',
  initialState: {
    channelId: null,
    channelName: null,
  },
  reducers: {
    setChannelInfo: (state,action) => {
      state.channelId = action.payload.channelId;
      state.channelName = action.payload.channelName;

      //made small error that resulted in cod breaking becuase you forgot to add .channelId/Name
    },
  },
})

export const { setChannelInfo } = appSlice.actions
export const selectChannelId = (state) => state.app.channelId;
export const selectChannelName = (state) => state.app.channelName;
export default appSlice.reducer