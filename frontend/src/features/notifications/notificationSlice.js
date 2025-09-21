import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { checkProposal, notifyProposal } from './notificationService'


const initialState = {
    notifications: [],
    notifLoading: false,
    notifSuccess: false,
    notifError: false,
    notifMessage: '',
    status: ''
}



export const notifyMyUser = createAsyncThunk('submit-proposal', async (proposalData, thunkAPI) => {
    try {
        return await notifyProposal(proposalData)
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data.message)
    }
})
export const checkMyProposal = createAsyncThunk('check-proposal', async (jobID, thunkAPI) => {
    try {
        return await checkProposal(jobID)
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data.message)
    }
})



export const notifSlice = createSlice({
    name: 'notification',
    initialState,
    reducers: {
        notifReset: (state) => {
            state.notifError = false
            state.notifLoading = false
            state.notifSuccess = false
            state.notifMessage = ''
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(notifyMyUser.pending, (state, action) => {
                state.notifLoading = true
            })
            .addCase(notifyMyUser.rejected, (state, action) => {
                state.notifLoading = false
                state.notifError = true
                state.notifMessage = action.payload
            })
            .addCase(notifyMyUser.fulfilled, (state, action) => {
                state.notifLoading = false
                state.notifSuccess = true
                // state.notifications = [...state.notifications,action.payload]
                state.notifications.unshift(action.payload)
            })
            .addCase(checkMyProposal.pending, (state, action) => {
                state.notifLoading = true
            })
            .addCase(checkMyProposal.rejected, (state, action) => {
                state.notifLoading = false
                state.notifError = true
                state.notifMessage = action.payload
            })
            .addCase(checkMyProposal.fulfilled, (state, action) => {
                state.notifLoading = false
                state.notifSuccess = true
                state.status = action.payload

            })
    }
})



export default notifSlice.reducer
export const { notifReset } = notifSlice.actions