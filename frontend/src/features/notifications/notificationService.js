import axios from 'axios'
const base_url = 'http://localhost:5174/api/notifications'

axios.defaults.withCredentials = true

export const notifyProposal = async (proposalData) => {
    const response = await axios.post(`${base_url}/proposal-notification/${proposalData?.client_id}`, proposalData);

    return response.data
}

export const checkProposal = async (jobID) => {
    const response = await axios.post(`${base_url}/check-proposal`, jobID)
    return response.data
}