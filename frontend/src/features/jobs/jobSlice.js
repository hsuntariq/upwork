import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { postJob } from './jobService'


// define initialState

const initialState = {
    myJobs: [],
    jobLoading: false,
    jobSuccess: false,
    jobError: false,
    jobMessage: ''
}




export const postMyJob = createAsyncThunk('post-job', async (jobData, thunkAPI) => {
    try {
        return await postJob(jobData)
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data.message)
    }
})




// create slice / global state

export const jobSlice = createSlice({
    name: 'jobs',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(postMyJob.pending, (state, action) => {
                state.jobLoading = true
            })
            .addCase(postMyJob.rejected, (state, action) => {
                state.jobLoading = false
                state.jobError = true
                state.jobMessage = action.payload
            })
            .addCase(postMyJob.fulfilled, (state, action) => {
                state.jobLoading = false
                state.jobError = false
                state.jobSuccess = true
                state.myJobs.push(action.payload)
            })
    }
})



// export to the store

export default jobSlice.reducer

