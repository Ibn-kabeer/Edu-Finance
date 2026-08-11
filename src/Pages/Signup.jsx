import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import * as yup from "yup";
import { useFormik } from "formik";

import WebImage from "../assets/Web Image.png";

const signinFormSchema = yup.object().shape({
  firstName: yup
    .string()
    .matches(/^[A-Za-z]+$/, "Invalid first name")
    .required("First name is required"),

  lastName: yup
    .string()
    .matches(/^[A-Za-z]+$/, "Invalid last name")
    .required("Last name is required"),

  email: yup
    .string()
    .email("Invalid email address")
    .required("Email is required"),

  password: yup
    .string()
    .required("Password is required"),
});

function App() {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [checked, setChecked] = useState(false);

  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  };

  const onSubmit = async (values) => {
    console.log(values);

    if (!checked) {
      alert("Please accept the Terms of Use and Privacy Policy.");
      return;
    }

    alert("Account created successfully");
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

  const toggleBox = () => {
    setChecked(!checked);
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
        <div className="md:w-1/2 w-full h-full flex items-center justify-center p-12 rounded-lg bg-slate-100 relative">

          {/* Overlay */}
          <div className="absolute inset-0 opacity-50"></div>

          {/* SIGN UP FORM */}
          <div className="relative z-10 bg-white p-4 rounded-lg shadow-lg w-full max-w-sm">

            <h2 className="text-2xl font-semibold mb-6">
              Sign up
            </h2>

            <form onSubmit={handleSubmit}>

              {/* FIRST NAME + LAST NAME */}
              <div className="flex flex-col md:flex-row gap-4 p-2 mb-4">

                {/* FIRST NAME */}
                <div className="grid w-full">

                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    placeholder="First Name"
                    value={values.firstName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                  />

                  {getError("firstName") && (
                    <p className="text-sm text-red-500 ml-1 mt-1">
                      {getError("firstName")}
                    </p>
                  )}

                </div>

                {/* LAST NAME */}
                <div className="grid w-full">

                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    placeholder="Last Name"
                    value={values.lastName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                  />

                  {getError("lastName") && (
                    <p className="text-sm text-red-500 ml-1 mt-1">
                      {getError("lastName")}
                    </p>
                  )}

                </div>

              </div>

              {/* EMAIL */}
              <div className="mb-4">

                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                />

                {getError("email") && (
                  <p className="text-sm text-red-500 mt-1 ml-1">
                    {getError("email")}
                  </p>
                )}

              </div>

              {/* PASSWORD */}
              <div className="mb-4 relative">

                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  name="password"
                  placeholder="Password"
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                />

                {getError("password") && (
                  <p className="text-sm text-red-500 mt-1 ml-1">
                    {getError("password")}
                  </p>
                )}

                {/* PASSWORD TOGGLE */}
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-[20px] text-gray-500"
                >
                  {showPassword ? (
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
                      />
                    </svg>
                  ) : (
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z M12 4c4.478 0 8.268 2.943 9.543 7a9.97 9.97 0 01-1.563 3.029M12 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 01-1.563-3.029"
                      />
                    </svg>
                  )}
                </button>

              </div>

              {/* TERMS */}
              <div className="mb-4 flex gap-2">

                <div
                  onClick={toggleBox}
                  className="w-[40px] h-[25px] border-[2px] flex justify-center items-center cursor-pointer text-[24px] select-none"
                >
                  {checked ? "✓" : ""}
                </div>

                <p className="text-sm text-gray-600">

                  By clicking Create Account, I agree that I have read and
                  accepted the{" "}

                  <a
                    href="#"
                    className="text-black font-semibold hover:underline"
                  >
                    Terms of Use
                  </a>{" "}

                  and{" "}

                  <a
                    href="#"
                    className="text-black font-semibold hover:underline"
                  >
                    Privacy Policy
                  </a>

                </p>

              </div>

              {/* CREATE ACCOUNT */}
              <button
                type="submit"
                className="w-full bg-green-500 text-white p-3 rounded-full hover:bg-green-600 transition duration-300"
              >
                Create Account
              </button>

            </form>

            {/* SIGN IN */}
            <p className="text-center mt-4 text-sm text-gray-600">

              I have an account?{" "}

              <Link
                to="/signin"
                className="text-black font-semibold hover:underline"
              >
                Sign in
              </Link>

            </p>

          </div>

        </div>

      </div>

    </div>
  );
}

export default App;