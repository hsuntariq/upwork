import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { getJobs, postJob } from './jobService'


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


export const getJobsData = createAsyncThunk('get-jobs', async (_, thunkAPI) => {
    try {
        return await getJobs()
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
            .addCase(getJobsData.pending, (state, action) => {
                state.jobLoading = true
            })
            .addCase(getJobsData.rejected, (state, action) => {
                state.jobError = true
                state.jobLoading = false
                state.jobMessage = action.payload
            })
            .addCase(getJobsData.fulfilled, (state, action) => {
                state.jobLoading = false
                state.jobSuccess = true
                state.myJobs = action.payload
            })

    }
})



// export to the store

export default jobSlice.reducer

