import React from "react";

const Freelancer_siderBar = () => {
  return (
    <div className="w-full bg-white rounded-xl shadow-md p-4 space-y-4">
      {/* Profile Card */}
      <div className="bg-white border rounded-xl p-4">
        <div className="flex items-center gap-3">
          <img
            src="/profile.jpg" // replace with dynamic user profile
            alt="profile"
            className="w-12 h-12 rounded-full"
          />
          <div>
            <h3 className="font-semibold">Hasan A.</h3>
            <p className="text-sm text-gray-500">junior</p>
          </div>
        </div>
        <p className="mt-2 text-green-600 text-sm cursor-pointer">
          Complete your profile
        </p>
        <div className="w-full bg-gray-200 h-2 rounded-full mt-2">
          <div className="bg-green-600 h-2 rounded-full w-[40%]" />
        </div>
        <p className="text-sm mt-1 text-gray-500">40%</p>
      </div>

      {/* Promote with ads */}
      <div className="bg-white border rounded-xl p-4">
        <h4 className="font-semibold mb-2">Promote with ads</h4>
        <p className="text-sm flex justify-between">
          Availability badge <span className="text-gray-500">Off</span>
        </p>
        <p className="text-sm flex justify-between">
          Boost your profile <span className="text-gray-500">Off</span>
        </p>
      </div>

      {/* Connects */}
      <div className="bg-white border rounded-xl p-4">
        <h4 className="font-semibold">Connects: 0</h4>
        <button className="mt-2 w-full border border-green-600 text-green-600 px-3 py-1 rounded-lg hover:bg-green-50">
          Buy Connects
        </button>
        <div className="flex justify-between text-xs mt-2 text-green-600">
          <a href="#">View details</a>
          <a href="#">Free Connects</a>
        </div>
      </div>

      {/* Preferences */}
      <div className="bg-white border rounded-xl p-4">
        <h4 className="font-semibold">Preferences</h4>
      </div>

      {/* Proposals */}
      <div className="bg-white border rounded-xl p-4">
        <h4 className="font-semibold">Proposals</h4>
      </div>

      {/* Project Catalog */}
      <div className="bg-white border rounded-xl p-4">
        <h4 className="font-semibold">Project Catalog</h4>
      </div>

      {/* Links */}
      <div className="bg-white border rounded-xl p-4 space-y-2 text-green-600 text-sm">
        <a href="#">Direct Contracts</a>
        <a href="#">Get Paid</a>
        <a href="#">Help Center</a>
      </div>
    </div>
  );
};

export default Freelancer_siderBar;
