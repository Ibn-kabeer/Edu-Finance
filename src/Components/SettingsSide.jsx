import { Link } from "react-router-dom";

 const SettingsSide = () => {
    
    return (
        <>
        <div>
        <div className="bg-white gap-[1px] border-[1px] rounded-md flex -translate-y-[02px] ml-[38px] w-[1010px] h-[712px]">
               <div className="ml-[15px] p-[15px] mt-[15px] bg-white rounded-md border-[1px] w-[265px] h-[301px] ">
                <div className="top-[12px] left-[2px] ">
                <h1 className="font-Inter text-[20px] text-[#15191E] ">Settings</h1>
                <p className="text-[14px] text-[#8896AA] ">Update and manage your account</p>
                </div>
                <div className="left-[2px] gap-[12px] grid mt-[22px]  ">
                <Link  to='/Edit'>
                    <button className="flex hover:border-l-[#03C987]  hover:bg-[#E6FFF6] h-[40px] gap-[12px] hover:border-l-[2px]  ">
                      <img src="src/assets/editp.png" alt="" className="h-[20px]" />
                      <p className="text-[12px] leading-[20px] text-[#2B323B] font-Inter font-semibold  ">Edit Profile</p>
                    </button>
                    </Link>
                    <Link  to='/Account'>
                    <button className="flex hover:border-l-[#03C987]  hover:bg-[#E6FFF6] h-[40px]  gap-[12px] hover:border-l-[2px]  ">
                      <img src="src/assets/accounts.png" alt="" className="h-[20px]" />
                      <p className="text-[12px] leading-[20px] text-[#2B323B] font-Inter  font-semibold ">Account Settings</p>
                    </button>
                    </Link>
                    <Link  to='/Notifi'>
                    <button className="flex hover:border-l-[#03C987]  hover:bg-[#E6FFF6] h-[40px]  gap-[12px] hover:border-l-[2px]  ">
                      <img src="src/assets/notifications.png" alt="" className="h-[20px]" />
                      <p className="text-[12px] leading-[20px] text-[#2B323B] font-Inter font-semibold">Notifications</p>
                    </button>
                    </Link>
                    <Link  to='/Help'>
                    <button className="flex hover:border-l-[#03C987]  hover:bg-[#E6FFF6] h-[40px] gap-[12px] hover:border-l-[2px]  ">
                      <img src="src/assets/helpdes.png" alt="" className="h-[20px]" />
                      <p className="text-[12px] leading-[20px] text-[#2B323B] font-Inter font-semibold ">Helpdesk</p>
                    </button>
                    </Link>
                </div>
               </div>

               <div className="ml-[35px] mt-[15px] bg-white rounded-md border-[1px] w-[675px] h-[624px]">
                  
                  <div>

                  </div>

               </div>
            </div>
        </div>


        </>

    )

 }
 export default SettingsSide;