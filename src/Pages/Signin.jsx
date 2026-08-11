import React from "react";
import { Link, useNavigate } from "react-router-dom";
import * as yup from "yup";
import { useFormik } from "formik";

import WebImage from "../assets/Web Image.png";

const signinFormSchema = yup.object().shape({
  email: yup
    .string()
    .email("Invalid email address")
    .required("Email Field is required"),

  password: yup
    .string()
    .required("Password is required"),
});

function App() {
  const navigate = useNavigate();

  const initialValues = {
    email: "",
    password: "",
  };

  const onSubmit = async (values) => {
    alert("Login successful");
    navigate("/signinbtn");
  };

  const {
    values,
    touched,
    handleChange,
    handleBlur,
    errors,
    handleSubmit,
  } = useFormik({
    initialValues,
    validationSchema: signinFormSchema,
    onSubmit,
  });

  const getError = (key) => {
    return touched[key] && errors[key];
  };

  return (
    <div className="w-full h-screen overflow-hidden">
      <div className="flex flex-col md:flex-row bg-white rounded-lg shadow-lg h-full overflow-hidden">

        {/* LEFT SECTION - IMAGE */}
        <div className="md:w-1/2 h-full">
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

          {/* LOGIN FORM */}
          <div className="relative z-10 bg-white p-8 rounded-lg shadow-lg w-full max-w-sm text-center">

            <h2 className="text-2xl text-gray-800 mb-5">
              Sign in
            </h2>

            <form onSubmit={handleSubmit}>

              {/* EMAIL */}
              <div className="mb-2 text-left">

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
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className="w-full p-2 border border-gray-300 rounded-md text-base focus:outline-none focus:ring-2 focus:ring-green-500"
                />

                {getError("email") && (
                  <p className="text-red-500 text-xs mt-1">
                    {getError("email")}
                  </p>
                )}

              </div>

              {/* PASSWORD */}
              <div className="mb-2 text-left">

                <label
                  htmlFor="password"
                  className="block text-sm text-gray-600 mb-1"
                >
                  Password
                </label>

                <input
                  type="password"
                  id="password"
                  name="password"
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className="w-full p-2 border border-gray-300 rounded-md text-base focus:outline-none focus:ring-2 focus:ring-green-500"
                />

                {getError("password") && (
                  <p className="text-red-500 text-xs mt-1">
                    {getError("password")}
                  </p>
                )}

              </div>

              {/* FORGOT PASSWORD */}
              <div className="text-right mb-5">

                <Link
                  to="/forget"
                  className="text-sm text-black font-semibold hover:underline"
                >
                  Forgot password?
                </Link>

              </div>

              {/* SIGN IN BUTTON */}
              <button
                type="submit"
                className="w-full p-2 bg-green-600 text-white rounded-md text-base hover:bg-green-700 transition-colors"
              >
                Sign in
              </button>

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

            </form>

            {/* RECAPTCHA */}
            <p className="mt-5 text-xs text-gray-600">
              Protected by reCAPTCHA and subject to the EduFinance{" "}

              <a
                href="#"
                className="text-black font-semibold hover:underline"
              >
                Privacy Policy
              </a>{" "}

              and{" "}

              <a
                href="#"
                className="text-black font-semibold hover:underline"
              >
                Terms of Service
              </a>.
            </p>

          </div>
        </div>
      </div>
    </div>
  );
}

export default App;