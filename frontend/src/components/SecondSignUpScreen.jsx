import React from "react";

const SecondSignUpScreen = () => {
  return (
    <>
      <div className="min-h-screen  bg-white px-4">
        <div className="flex items-center justify-between p-5">
          <img src="/svgs/logo.svg" width={100} alt="" />

          <div className="flex items-center gap-3">
            <h4 className=" text-lg">here to hire talet?</h4>

            <button
              type="button"
              className="text-green-500 font-semibold hover:underline hover:text-black text-lg cursor-pointer"
            >
              Join as a Client
            </button>
          </div>
        </div>
        <div className="w-full h-full mt-10 mx-auto max-w-xl text-center">
          <div className="space-y-4">
            <h3 className="py-2.5  text-4xl">Sign up to find work you love</h3>

            <div className="flex  items-center gap-3.5">
              <button className="w-full flex items-center justify-center border border-gray-300 rounded-full py-2 text-sm hover:bg-gray-50">
                <img src="/svgs/apple.svg" alt="Apple" className="h-5 mr-2" />
                Continue with Apple
              </button>
              <button className="w-full flex items-center justify-center border border-gray-300 rounded-full py-2 text-sm hover:bg-gray-50">
                <img src="/svgs/google.svg" alt="Apple" className="h-5 mr-2" />
                Continue as Hussnain
              </button>
            </div>

            <div className="flex items-center my-4">
              <div className="flex-grow h-px bg-gray-300" />
              <span className="mx-2 text-gray-500 text-sm">or</span>
              <div className="flex-grow h-px bg-gray-300" />
            </div>

            <div className="flex gap-2">
              <div className="w-full flex flex-col">
                <label
                  htmlFor="f_name"
                  className="text-lg font-semibold text-start"
                >
                  First name
                </label>
                <input
                  type="text"
                  placeholder="First name"
                  className="w-full border rounded-lg px-3 py-2 text-sm"
                />
              </div>
              <div className="w-full flex flex-col">
                <label
                  htmlFor="f_name"
                  className="text-lg font-semibold text-start"
                >
                  First name
                </label>
                <input
                  type="text"
                  placeholder="First name"
                  className="w-full border rounded-lg px-3 py-2 text-sm"
                />
              </div>
            </div>

            <input
              type="email"
              placeholder="Email"
              className="w-full border rounded px-3 py-2 text-sm"
            />

            <div className="relative">
              <input
                type="password"
                placeholder="Password (8 or more characters)"
                className="w-full border rounded px-3 py-2 text-sm pr-10"
              />
              <span className="absolute right-3 top-2.5 text-gray-500 cursor-pointer"></span>
            </div>

            <select className="w-full border rounded px-3 py-2 text-sm">
              <option>Pakistan</option>
              {/* Add more countries if needed */}
            </select>

            <label className="flex items-start text-sm mt-1 gap-2">
              <input type="checkbox" className="mt-1" />
              <span>
                Send me helpful emails to find rewarding work and job leads.
              </span>
            </label>

            <label className="flex items-start text-sm gap-2">
              <input type="checkbox" className="mt-1" />
              <span>
                Yes, I understand and agree to the{" "}
                <a href="#" className="text-blue-600 underline">
                  Upwork Terms of Service
                </a>
                , including the{" "}
                <a href="#" className="text-blue-600 underline">
                  User Agreement
                </a>{" "}
                and{" "}
                <a href="#" className="text-blue-600 underline">
                  Privacy Policy
                </a>
                .
              </span>
            </label>

            <button className="w-full bg-green-600 hover:bg-green-700 text-white font-medium py-2 rounded mt-1">
              Create my account
            </button>

            <p className="text-sm mt-4">
              Already have an account?{" "}
              <a href="#" className="text-green-600 underline">
                Log In
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SecondSignUpScreen;
