import React, { useEffect, useState } from "react";
import FreelancerNav from "../components/freelancer/FreelancerNav";
import JobCard from "../components/freelancer/JobCard";
import Freelancer_siderBar from "../components/freelancer/Freelancer_siderBar";
import { useDispatch, useSelector } from "react-redux";
import { getJobsData } from "../features/jobs/jobSlice";
import JobCardInfo from "../components/freelancer/JobCardInfo";

const Freelancer = () => {

  const dispatch = useDispatch()
  const { myJobs, jobLoading, jobSuccess, jobError, jobMessage } = useSelector((state) => state.nokri)
  useEffect(() => {
    dispatch(getJobsData())
  }, [])


  return (
    <>
      <div className="w-full">
        <FreelancerNav />
        <JobCardInfo />
        <div className="lg:w-[80%] md:w-[90%] w-[98%] py-5  my-5 mx-auto">
          <div className="grid grid-cols-4 gap-4">
            <div className="col-span-3">
              <div className="mb-5">
                <input
                  type="search"
                  className="w-full outline-2 py-2 px-1.5 capitalize focus:outline-3 rounded-md"
                  placeholder="search "
                />
              </div>

              {myJobs?.map((item, index) => {
                return <JobCard key={index} {...item} />
              })}

            </div>

            <div className="col-span-1">
              <Freelancer_siderBar />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Freelancer;
