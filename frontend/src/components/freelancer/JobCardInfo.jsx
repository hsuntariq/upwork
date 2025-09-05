import { Clock, Globe, Briefcase, Star, File, Tag } from "lucide-react";
import { useContext } from "react";
import { JobContext } from "../../context/JobContext";
import { FaArrowLeft } from "react-icons/fa";
import moment from "moment";

export default function JobCardInfo() {
    const { show, setShow, myJob } = useContext(JobContext)



    return (
        <div onClick={() => setShow(false)} className={`underlay fixed transition-all duration-300 ${show ? 'visible' : 'invisible'} top-0 min-h-screen bg-black/50 w-full`}>
            <div onClick={(e) => e.stopPropagation()} className={`max-w-4xl  ${show ? 'translate-x-0' : 'translate-x-full'} transition-all duration-300 min-h-screen overflow-sc ms-auto p-6 bg-white  shadow-md`}>
                {/* Header */}
                <div className="flex justify-between items-start">
                    <div>
                        <FaArrowLeft className="mb-5 text-green-600 cursor-pointer" onClick={() => setShow(false)} />
                        <h2 className="text-xl font-semibold text-gray-900">
                            {myJob?.title}
                        </h2>
                        <p className="text-sm text-gray-500 mt-1 flex items-center gap-2">
                            Posted {moment(myJob?.createdAt).fromNow()} · <span className="inline-flex items-center gap-1"><Globe className="w-4 h-4" /> Worldwide</span>
                        </p>
                    </div>
                    <button className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg text-sm font-medium">
                        Apply now
                    </button>
                </div>

                {/* Summary */}
                <div className="mt-4 border-t pt-4">
                    <h3 className="text-gray-800 font-medium">Summary</h3>
                    <p className="text-gray-600 text-sm mt-2">
                        {myJob?.desc?.slice(0, 500)}...
                    </p>
                </div>

                {/* Job Info */}
                <div className="grid md:grid-cols-3 gap-4 mt-6 border-t pt-4">
                    <div className="flex self-center flex-col items-start">
                        {myJob?.rate?.rateType == 'hourly' ? (
                            <>
                                <Clock className="w-5 h-5 text-gray-600 mb-1" />
                                <p className="font-medium text-gray-800">Less than 30 hrs/week</p>
                                <p className="text-xs text-gray-500">Hourly</p>
                            </>
                        ) : (
                            <>
                                <Tag className="w-5 h-5 text-gray-600 mb-1" />
                                <p className="font-medium text-gray-800">{myJob?.rate?.amount}</p>
                                <p className="text-xs text-gray-500">Fixed</p>
                            </>
                        )}
                    </div>
                    <div className="flex flex-col self-center">
                        <p className="font-medium text-gray-800">{myJob?.scope?.projectDuration}</p>
                        <p className="text-xs text-gray-500">Duration</p>
                    </div>
                    <div>
                        <p className="font-medium text-gray-800">
                            {myJob?.scope?.experience}
                        </p>
                        <p className="text-xs text-gray-500">
                            I am willing to pay higher rates for the most experienced freelancers
                        </p>
                    </div>
                </div>

                {/* Attachments */}
                <div className="mt-6 border-t pt-4">
                    <h3 className="text-gray-800 font-medium mb-2">Attachments (3)</h3>
                    <ul className="space-y-2">

                        <a href={myJob?.file} target="_blank" className="flex items-center gap-2 text-green-700 text-sm cursor-pointer hover:underline">
                            <File className="w-4 h-4" />
                            Attatchment
                        </a>

                    </ul>
                </div>

                {/* Client Info */}
                <div className="mt-6 border-t pt-4">
                    <h3 className="text-gray-800 font-medium mb-2">About the client</h3>
                    <div className="space-y-1 text-sm text-gray-600">
                        <p className="flex items-center gap-1 text-yellow-600 font-medium">
                            <Star className="w-4 h-4 text-yellow-500" /> 5.0 (3 reviews)
                        </p>
                        <p>Latvia · Jurmala 10:20 AM</p>
                        <p>6 jobs posted · 67% hire rate, 1 open job</p>
                        <p>$487 total spent · 4 hires, 1 active</p>
                        <p>$11.99/hr avg hourly rate paid · 5 hours</p>
                        <p className="text-xs text-gray-500">Member since Jan 13, 2021</p>
                    </div>
                </div>
            </div>
        </div>

    );
}
