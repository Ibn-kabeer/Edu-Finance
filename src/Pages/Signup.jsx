import { useState } from 'react';
import { Link } from 'react-router-dom';

function App() {
  // State to manage form data
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });

  // State to toggle password visibility
  const [showPassword, setShowPassword] = useState(false);

  // Handle form input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add your form submission logic here (e.g., API call)
  };

  
    const [checked, setChecked] = useState(false);
    
    const toogleBox = () => {
      setChecked(!checked)
    };
  

  return (
    <div className="w-[100%]">
      <div className="flex flex-col md:flex-row  bg-white rounded-lg shadow-lg overflow-hidden">
        {/* Left Section: Logo and Tagline */}
        <div className="md:w-1/2 w-full">
          <img
            src="src/assets/Web Image.png" 
            alt="EduFinance Illustration"
            className="w-full h-full object-cover"
          />
        </div>  
        {/* Right Section: Sign-Up Form */}
        <div
          className="md:w-1/2 w-full flex items-center justify-center p-12 rounded-lg bg-cover bg-center bg-slate-100 relative"
         
        >
          {/* Overlay to ensure form readability */}
          <div className="absolute inset-0  opacity-50"></div>
          {/* Login Form */}
          <div className="relative z-10 bg-white p-2 rounded-lg shadow-lg w-full max-w-sm ">
          <h2 className="text-2xl font-semibold mb-6 ">Sign up</h2>
          <form onSubmit={handleSubmit}>
            {/* First Name and Last Name */}
            <div className="flex flex-col  md:flex-row gap-4 p-2 mb-4">
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                required
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                required
              />
            </div>

            {/* Email */}
            <div className="mb-4">
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                required
              />
            </div>

            {/* Password with Toggle */}
            <div className="mb-4 relative">
              <input
                type={showPassword ? 'text' : 'password'}
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
              >
                {showPassword ? (
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
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
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z M12 4c4.478 0 8.268 2.943 9.543 7a9.97 9.97 0 01-1.563 3.029M12 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029"
                    />
                  </svg>
                )}
              </button>
            </div>

            {/* Terms and Conditions */}
            <div className="mb-4 flex gap-2">
               <div  onClick={toogleBox} className='w-[40px] h-[25px] border-[2px] flex justify-center items-center cursor-pointer text-[24px] userselect-none '>
               {checked ? '✓' : ''}
               </div>
              <p className="text-sm text-gray-600">
                By clicking Create Account, I agree that I have read and accepted the{' '}
                <a href="#" className="text-black font-semibold hover:underline">
                  Terms of Use
                </a>{' '}
                and{' '}
                <a href="#" className="text-black font-semibold hover:underline">
                  Privacy Policy
                </a>
              </p>
            </div>

            {/* Create Account Button */}
            <button
              type="submit"
              className="w-full bg-green-500 text-white p-3 rounded-full hover:bg-green-600 transition duration-300"
            >
              Create Account
            </button>
          </form>

          {/* Sign In Link */}
          <p className="text-center mt-4 text-sm text-gray-600">
            I have an account?{' '}
            <Link to='/signin'>
            <a href="#" className="text-black font-semibold hover:underline">
              Sign in
            </a>
            </Link>
          </p>
        </div>
        </div>
      </div>
    </div>
  );
}

export default App;