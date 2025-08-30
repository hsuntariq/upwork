import axios from 'axios'


export const postJob = async (jobData) => {
    let response = await axios.post('http://localhost:5174/api/jobs/post-job', jobData)
    return response.data
}