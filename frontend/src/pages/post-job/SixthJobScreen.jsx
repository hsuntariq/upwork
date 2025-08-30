import React, { useContext, useState } from "react";
import ClientNav from "../../components/client/ClientNav";
import JobFooter from "../../components/client/JobFooter";
import { IoAttach } from "react-icons/io5";
import axios from "axios";
import { ClipLoader } from 'react-spinners'
import { JobContext } from "../../context/JobContext";
const SixthJobScreen = () => {
  const [file, setFile] = useState(null);
  const [sizeError, setSizeError] = useState(false)
  const [imageLoading, setImageLoading] = useState(false)
  // upload_preset : ls8frk5v
  // username : dwtsjgcyf

  const { imageUrl, setImageUrl, description, setDescription } = useContext(JobContext)

  const handleFileChange = async (e) => {
    let size = e.target.files[0].size / (1024 * 1024) // convert to mb
    let mySelectedFile = e.target.files[0]
    if (size > 10) {
      setSizeError(true)
    } else {
      setSizeError(false)
      console.log()
      setFile(file);
      // call cloudinary
      // call FormData class
      try {
        setImageLoading(true)
        let data = new FormData();
        data.append('file', mySelectedFile)
        data.append('upload_preset', 'ls8frk5v')

        let response = await axios.post('https://api.cloudinary.com/v1_1/dwtsjgcyf/image/upload', data)
        setImageUrl(response.data.url)
      } catch (error) {
        console.log(error)
      }

      setImageLoading(false)




    }

  };


  console.log(imageUrl , description);
  
  return (
    <>
      <ClientNav />
      <div className="w-[90%] py-10 side_padding xl:w-[60%] lg:w-[75%] mx-auto grid grid-cols-12 gap-5">
        {/* Left section */}
        <div className="lg:col-span-6 col-span-12">
          <p className="text-gray-500 text-sm">5/5 Job post</p>
          <h2 className="text-3xl font-semibold mt-2">
            Start the conversation.
          </h2>
          <p className="text-gray-500 mt-4">Talent are looking for:</p>
          <ul className="text-gray-600 mt-2 list-disc pl-5 space-y-2">
            <li>Clear expectations about your task or deliverables</li>
            <li>The skills required for your work</li>
            <li>Good communication</li>
            <li>Details about how you or your team like to work</li>
          </ul>
        </div>

        {/* Right section */}
        <div className="lg:col-span-6 col-span-12 flex flex-col gap-5">
          <label htmlFor="description" className="font-medium text-gray-700">
            Describe what you need
          </label>
          <textarea
            id="description"
            className="border border-gray-300 rounded-md px-3 py-2 w-full min-h-[200px] outline-none focus:ring-2 focus:ring-green-500"
            placeholder="Already have a description? Paste it here!"
            maxLength={50000}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <p className="text-sm text-gray-400">
            {50000 - description.length} characters left
          </p>

          <div>
            <p className="text-gray-600 mb-2">Need help?</p>
            <a href="#" className="text-green-600 hover:underline text-sm">
              See examples of effective descriptions
            </a>
          </div>

          {/* File Upload */}
          <div className="flex flex-col gap-2">
            <label className="flex items-center gap-2 border border-gray-300 rounded-md px-4 py-3 cursor-pointer hover:bg-gray-50 transition w-fit">
              {imageLoading ? <ClipLoader size={15} color="gray" /> :
                <div className="flex gap-1 items-center">
                  <IoAttach className="text-xl text-gray-600" />
                  <span className="text-gray-700">Attach file</span>
                  <input
                    type="file"
                    className="hidden"
                    onChange={handleFileChange}
                  />
                </div>}

            </label>
            {file && <p className="text-sm text-gray-500">{file.name}</p>}
            <p className={`text-xs ${sizeError ? 'text-red-600 font-semibold' : 'text-gray-400'}`}>Max file size: 10MB</p>
          </div>
        </div>
      </div>

      <JobFooter
        width="w-5/5"
        content="Post job"
        link="/review-job-section"
      />
    </>
  );
};

export default SixthJobScreen;
