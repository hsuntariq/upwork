import React, { useState } from "react";
import { FaRegHeart } from "react-icons/fa";
import { BiDislike } from "react-icons/bi";
import { MdOutlineAccessTime } from "react-icons/md";
import { FaRegStar } from "react-icons/fa";
import moment from 'moment'
const JobCard = ({ title, tags, scope, rate, desc, createdAt }) => {
  const [showMore, setShowMore] = useState(false)
  return (
    <div className="w-full bg-white border rounded-lg shadow p-5 mb-6">
      {/* Top Section */}
      <div className="flex justify-between items-start">
        <div>
          <p className="text-gray-500 text-sm">
            Posted {moment(createdAt).fromNow()}
          </p>
          <h2 className="text-xl font-semibold text-green-700 mt-1">
            {title[0].toUpperCase()}{title.slice(1)}
          </h2>
          <p className="text-sm text-gray-600 mt-1">
            {rate?.rateType == 'fixed' ? (
              <>
                Fixed-price - {scope?.experience} - Est. Budget:{" "}
                <span className="font-medium">Rs.{rate?.amount}</span>
              </>
            ) : (
              <>
                Hourly-budget - {scope?.experience} - Est. Budget:{" "}
                <span className="font-medium">Rs.{rate?.from} - Rs.{rate?.to}</span>
              </>
            )}

          </p>
        </div>

        <div className="flex gap-3 text-gray-500 text-lg">
          <BiDislike className="cursor-pointer hover:text-red-500" />
          <FaRegHeart className="cursor-pointer hover:text-pink-500" />
        </div>
      </div>

      {/* Description */}
      <p className="text-gray-700 select-none text-justify text-sm mt-4 leading-relaxed">
        {desc?.length > 500 ? (
          <>
            {showMore ? desc : `${desc.slice(0, 500)}...`}
            <span onClick={() => setShowMore(!showMore)} className="text-green-600 font-semibold cursor-pointer">
              {showMore ? 'less' : 'more'}
            </span>
          </>
        ) : (
          <>
            {desc}
          </>
        )}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mt-4">
        {tags?.map((item, index) => {
          return <span
            key={index}
            className="px-3 py-1 text-sm bg-gray-100 rounded-md text-gray-700"
          >
            {item?.name}
          </span>
        })}
      </div>

      {/* Footer Section */}
      <div className="flex flex-wrap items-center justify-between text-sm text-gray-500 mt-5 border-t pt-4">
        <div className="flex items-center gap-2">
          <MdOutlineAccessTime className="text-lg" />
          <span>Payment unverified</span>
        </div>
        <div className="flex items-center gap-1">
          {Array(5)
            .fill(0)
            .map((_, i) => (
              <FaRegStar key={i} />
            ))}
        </div>
        <p>$0 spent</p>
        <p>Italy</p>
        <p>
          Proposals: <span className="font-medium">5 to 10</span>
        </p>
      </div>
    </div>
  );
};

export default JobCard;
