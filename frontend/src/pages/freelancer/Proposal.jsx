import React, { useContext, useEffect, useState } from 'react'
import FreelancerNav from '../../components/freelancer/FreelancerNav'
import { JobContext } from '../../context/JobContext'
import { useDispatch, useSelector } from 'react-redux'
import { notifReset, notifyMyUser } from '../../features/notifications/notificationSlice'
import { toast } from 'react-hot-toast'
const Proposal = () => {
    const [time, setTime] = useState('3 to 6 months')
    const [cover_letter, setCoverLetter] = useState('')
    const { myJob } = useContext(JobContext)
    console.log(myJob)

    const dispatch = useDispatch()

    const { notifLoading, notifError, notifSuccess, notifMessage, notifications } = useSelector((state) => state.notify)


    useEffect(() => {
        if (notifError) {
            toast.error(notifMessage)
        }

        if (notifSuccess) {
            toast.success('Proposal submitted')
        }


        dispatch(notifReset())


    }, [notifError, notifSuccess])




    const handleProposal = () => {
        let proposalData = {
            jobID: myJob?._id, cover_letter, notificationType: 'proposal', duration: time, client_id: myJob?.user_id
        }

        dispatch(notifyMyUser(proposalData))

    }



    return (
        <>

            {/* job details */}
            <FreelancerNav />
            <div className="container mx-auto p-5">

                <div className="border mb-5 border-gray-300 rounded-md w-full p-5">
                    <h2 className="text-xl">
                        How long will this project take?
                    </h2>
                    <select name="" onChange={(e) => setTime(e.target.value)} value={time} id="" className="border mt-3 border-gray-400 rounded-md p-4">
                        {['More than 6 months', '3 to 6 months', '1 to 3 months', 'Less than 1 month'].map((item, index) => {
                            return <option key={index} >
                                {item}
                            </option>
                        })}
                    </select>
                </div>

                <div className="border border-gray-300 rounded-md w-full p-5">
                    <h2 className="text-2xl">Additional details</h2>
                    <p className="text-xl">
                        Cover letter
                    </p>
                    <textarea value={cover_letter} onChange={(e) => setCoverLetter(e.target.value)} name="" id="" rows={5} className="border-gray-300 w-full border rounded-md resize-y"></textarea>
                </div>


                <button onClick={handleProposal} className="px-5 my-3 text-white font-semibold py-2 bg-green-500 rounded-md">
                    Submit Proposal
                </button>

            </div>


        </>
    )
}

export default Proposal