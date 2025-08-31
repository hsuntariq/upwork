import axios from 'axios'
let base_url = 'http://localhost:5174/api/jobs'

export const postJob = async (jobData) => {
    let response = await axios.post(`${base_url}/post-job`, jobData)
    return response.data
}


export const getJobs = async () => {
    let response = await axios.get(`${base_url}/get-jobs`);
    return response.data
}