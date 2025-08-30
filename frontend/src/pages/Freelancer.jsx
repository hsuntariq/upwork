import React from "react";
import FreelancerNav from "../components/freelancer/FreelancerNav";
import JobCard from "../components/freelancer/JobCard";
import Freelancer_siderBar from "../components/freelancer/Freelancer_siderBar";

const Freelancer = () => {
  return (
    <>
      <div className="w-full">
        <FreelancerNav />

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
              <JobCard />
              <JobCard />
              <JobCard />
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
