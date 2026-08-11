import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import WebImage from "../assets/Web Image.png";

function Forget() {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Recovery email:", email);

    // Later, this is where you can call your backend API
    // to send the password recovery email.

    navigate("/send");
  };

  return (
    <div className="w-full h-screen overflow-hidden">

      <div className="flex flex-col md:flex-row bg-white rounded-lg shadow-lg h-full overflow-hidden">

        {/* LEFT SECTION - IMAGE */}
        <div className="md:w-1/2 w-full h-full">

          <img
            src={WebImage}
            alt="EduFinance Illustration"
            className="w-full h-full object-cover"
          />

        </div>

        {/* RIGHT SECTION */}
        <div className="md:w-1/2 w-full h-full flex items-center justify-center p-10 bg-slate-100 relative">

          {/* Overlay */}
          <div className="absolute inset-0 opacity-50"></div>

          {/* FORM */}
          <div className="relative z-10 bg-white p-8 rounded-lg shadow-lg w-full max-w-sm text-center">

            <h2 className="text-2xl text-gray-800 mb-5">
              Forgot Password?
            </h2>

            <p className="text-sm text-gray-500 mb-6">
              Enter your email address and we'll send you a recovery link.
            </p>

            <form onSubmit={handleSubmit}>

              {/* EMAIL */}
              <div className="mb-5 text-left">

                <label
                  htmlFor="email"
                  className="block text-sm text-gray-600 mb-1"
                >
                  Email
                </label>

                <input
                  type="email"
                  id="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full p-2 border border-gray-300 rounded-md text-base focus:outline-none focus:ring-2 focus:ring-green-500"
                  required
                />

              </div>

              {/* SEND BUTTON */}
              <button
                type="submit"
                className="w-full p-2 bg-green-600 text-white rounded-md text-base hover:bg-green-700 transition-colors"
              >
                Send recovery mail
              </button>

            </form>

            {/* SIGN UP */}
            <div className="mt-5 text-sm">

              <p>
                Don't have an account?{" "}

                <Link
                  to="/signup"
                  className="text-black font-semibold hover:underline"
                >
                  Sign Up
                </Link>

              </p>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Forget;