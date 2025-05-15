import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Forget() {
  // State for form inputs
  const [email, setEmail] = useState('');
  

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Log the form data (replace with actual API call in a real app)
    console.log('Form submitted:', { email });
    // Example API call (uncomment to use with a backend):
    // fetch('/api/login', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify({ email, password }),
    // })
    // .then(response => response.json())
    // .then(data => console.log(data))
    // .catch(error => console.error('Error:', error));
  };

  return (
    <div className="w-[100%]">
      {/* Centered Container for Image and Login Form */}
      <div className="flex flex-col md:flex-row bg-white rounded-lg shadow-lg overflow-hidden">
        {/* Left Section: Image */}
        <div className="md:w-1/2  w-full">
          <img
            src="src/assets/Web Image.png" 
            alt="EduFinance Illustration"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right Section*/}
        <div
          className="md:w-1/2 w-full flex items-center justify-center p-10 bg-cover bg-center bg-slate-100 relative"
         
        >
          {/* Overlay to ensure form readability */}
          <div className="absolute inset-0  opacity-50"></div>
          {/* Login Form */}
          <div className="relative z-10 bg-white p-8 rounded-lg shadow-lg w-full max-w-sm text-center">
            <h2 className="text-2xl text-gray-800 mb-5">Sign in</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-5 text-left">
                <label htmlFor="email" className="block text-sm text-gray-600 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-md text-base focus:outline-none focus:ring-2 focus:ring-green-500"
                  required
                />
              </div>
             
              <Link  to='/send'>
              <button
                type="submit"
                className="w-full p-2 bg-green-600 text-white rounded-md text-base hover:bg-green-700 transition-colors"
              >
                Send recover mail
              </button>
              </Link>
              <div className="mt-5 text-sm">
                <p>
                  Don't have an account?{' '}
                  <a href="#" className="text-black font-semibold hover:underline">
                    Sign Up
                  </a>
                </p>
              </div>
            </form>
           
          </div>
        </div>
      </div>
    </div>
  );
}

export default Forget;