import { Link, Outlet, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

const Settings = () => {
  const [count, setCount] = useState(0);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const navigate = useNavigate()
  
  useEffect(() =>{
    navigate('/Edit')
  },[])

  return (
    <>
      <div className="flex bg-blue-50 ">
        <div className="grid">
          <div className="flex">
            <div className="p-10">
              <h1 className="text-[#2E2C34] font-semibold font-inter text-[24px] ">Hello, Linda</h1>
              <p className="text-[#556377] text-[16px]">
                Keep track of your financial plan
              </p>
            </div>
            <div className="flex translate-y-[50px] h-[40px] translate-x-[620px] gap-6">
              <div className="relative">
                <button onClick={() => setIsDropdownOpen(!isDropdownOpen)} className="flex items-center gap-1 bg-white text-black px-5 py-1 transform translate-y-3.5 text-md hover:bg-gray-300 transition">
                  €
                  <span className="text-xs translate-x-3">▼</span>
                </button>
                {isDropdownOpen && (
                  <div className="relative mt-[30px] bg-blue h-[100px] w-[100px] bg-white ring-[4px]  ">
                    <div className="py-1 grid relative">
                      <a href="" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Option 1</a>
                      <a href="" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Option 2</a>
                      <a href="" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Option 3</a>
                    </div>
                  </div>
                )
                }
              </div>
              <div>
                <img src="src/assets/User.png" alt="" className="h-[35px] translate-y-[10px]" />
              </div>
            </div>
          </div>


          <Link  >
            <div>
              <div className="bg-white gap-[1px] border-[1px] rounded-md flex ml-[38px] w-[1010px] h-[712px]">
                <div className="ml-[15px] p-[15px] mt-[15px] bg-white rounded-md border-[1px] w-[265px] h-[301px] ">
                  <div className="top-[12px] left-[2px] ">
                    <h1 className="font-Inter text-[20px] text-[#15191E] ">Settings</h1>
                    <p className="text-[14px] text-[#8896AA] ">Update and manage your account</p>
                  </div>
                  <div className="left-[2px] gap-[12px] grid mt-[22px]  ">
                    <Link to='/Edit'>
                      <button className="flex hover:border-l-[#03C987]  hover:bg-[#E6FFF6] w-[190px] h-[40px]  gap-[12px] hover:border-l-[2px]  ">
                        <img src="src/assets/editp.png" alt="" className="h-[20px]" />
                        <p className="text-[12px] leading-[20px] text-[#2B323B] font-Inter font-semibold  ">Edit Profile</p>
                      </button>
                    </Link>
                    <Link to='/Account'>
                      <button className="flex hover:border-l-[#03C987]  hover:bg-[#E6FFF6] w-[190px] h-[40px]  gap-[12px] hover:border-l-[2px]  ">
                        <img src="src/assets/accounts.png" alt="" className="h-[20px]" />
                        <p className="text-[12px] leading-[20px] text-[#2B323B] font-Inter  font-semibold ">Account Settings</p>
                      </button>
                    </Link>
                    <Link to='/Notifi'>
                      <button className="flex hover:border-l-[#03C987]  hover:bg-[#E6FFF6] w-[190px] h-[40px]  gap-[12px] hover:border-l-[2px]  ">
                        <img src="src/assets/notifications.png" alt="" className="h-[20px]" />
                        <p className="text-[12px] leading-[20px] text-[#2B323B] font-Inter font-semibold">Notifications</p>
                      </button>
                    </Link>
                    <Link to='/Help'>
                      <button className="flex hover:border-l-[#03C987]  hover:bg-[#E6FFF6] w-[190px] h-[40px] gap-[12px] hover:border-l-[2px]  ">
                        <img src="src/assets/helpdes.png" alt="" className="h-[20px]" />
                        <p className="text-[12px] leading-[20px] text-[#2B323B] font-Inter font-semibold ">Helpdesk</p>
                      </button>
                    </Link>
                  </div>
                </div>

                <div className="ml-[35px] mt-[15px] bg-white rounded-md border-[1px] w-[675px] h-[624px] ">
                  <Outlet />
                </div>
              </div>
            </div>
          </Link>
        </div>


      </div>


    </>
  )
}
export default Settings;