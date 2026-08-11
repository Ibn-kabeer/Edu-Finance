
import { Link } from "react-router-dom";
import { useState } from "react";

  const Homepage = () => {
    const [count, setCount] = useState(0);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    return (
        <>
        <div className="flex overflow:hidden bg-pink-100 "> 
            <div className="grid">
            <div className="flex">
                <div className="p-10">
           <h1 className="text-[#15191E] text-[25px] ">Hello, Linda</h1>
           <p className="text-[#556377] text-[16px]">
           Keep track of your financial plan
           </p>
           </div>
           <div className="flex translate-y-[50px] h-[40px] translate-x-[620px] gap-2">
                            <select name="" id=""  className="w-[80px] px-3">
                                <option value="1">€</option>
                                <option value="1">1</option>
                                <option value="1">1</option>
                                <option value="1">1</option>
                            </select>
                            <img src="src/assets/User.png" alt="" className="h-[35px] w-auto" />
                        </div>
            </div>
            <div className="h-[75px] ml-[38px] items-center w-[1010px] rounded-md -translate-y-[25px] bg-emerald-50">
                <div className="flex">
                    <button>
               <div className="flex gap-2">
               
                <img src="src/assets/Round-icon.png" alt="" className="h-[50px] ml-[8px] mt-[10px] " />
                
                <div className="grid mt-[10px]">
                <h1 className="font-Inter text-[#2E2C34] text-[18px] -translate-x-[230px]   ">Complete Profile</h1>
                <p className="text-[14px] text-[#84818A] ">Fill in your personal, educational, and work information to complete your profile and get started.</p>
                </div>
                
               </div>
               </button>
               <Link  to='/complete'>
               <button className="h-[30px] shadow-md bg-white translate-x-[245px] text-xs text-center w-[85px] translate-y-5 font-semibold text-green-400">Get Started</button>
           </Link>
            </div>
            </div>
            
               
            <div className="bg-white -translate-y-[02px] rounded-md grid ml-[38px] w-[1010px] h-[210px]">
                <div className="flex justify-between p-3">
           <h1 className=" text-[#2B323B] font-semibold text-sm">Dashboard</h1>
           <button className="border rounded-md w-[100px] text-sm mr-[0px] h-[25px]">This week</button>
           </div>
            <div className="items-center flex p-3 gap-[10px]">
                <div className="bg-[#013222] w-[320px] h-[137px] rounded-md ">
                    <h1 className="font-inter text-[14px] leading-[125%] text-[#E1E5EA] p-6 ">Estimated Balance
                    </h1>
                    <p className="text-[26px] ml-[22px] -translate-y-[14px] leading-[125%] text-[#F0F2F4] h-[33px] w-[272px] ">€ 0.00</p>
                  <img src="src/assets/Quickview.png" alt="" className="ml-[22px]" />
                </div>
               
                    <div className="bg-[#E9FBF0] w-[320px] h-[137px] rounded-md ">
                        <div className="flex gap-2">
                       <img src="src/assets/money bag coin.png" alt="" className="translate-y-[20px] ml-4" />
                       <h1 className="text-[#556377] translate-y-[20px] font-inter text-[12px] leading-[125%]  ">INCOME</h1>
                       </div>
                       <p className="text-[26px] ml-[20px] translate-y-[25px] leading-[125%] text-[#2B323B] h-[33px] w-[272px] ">€ 0.00</p>
                       <button className="w-[140px] h-[32px] gap-[4px] text-[] font-weight:500 rounded-full translate-x-[170px] translate-y-[40px] pr-[24px] pl-[24px] bg-[#029765] text-white">Add Income</button>
                    </div>
                
                    <div className="bg-[#FDE8E8] w-[320px] h-[137px] rounded-md">
                    <div className="flex gap-2" >
                    <img src="src/assets/_3/Icons.png" alt="" className="translate-y-[20px] ml-4"/>
                    <h1 className="text-[#556377] translate-y-[20px] font-inter text-[12px] leading-[125%]  ">EXPENSES</h1>
                    </div>
                      <p className="text-[26px] ml-[18px] translate-y-[25px] leading-[125%] text-[#2B323B] h-[33px] w-[272px] ">€ 0.00</p>
                    <button className="w-[140px] h-[32px] gap-[4px] rounded-full translate-x-[170px] translate-y-[40px] bg-[#0B0C0F] text-white ">Add Expenses</button>
                    </div>
                    
            </div>
         </div>
          
          <div className="w-[1010px] flex ml-[20px] gap-[20px] p-4  w-[1048px] h-[372px] ">
           
           <div className="bg-[white] rounded-md w-[532px] h-[372px]  ">
             <div className="flex gap-8 items-center ">
                <h1 className="font-inter text-[16px] ml-[20px] mt-[20px] leading-[125%] text-[#2B323B] ">Top 3 Expenses</h1>
                <button className="w-[116px] ml-[200px] mt-[20px] border rounded-md  h-[30px] bg-[#FFFFFF] text-[#404A59] text-[12px] leding-[125%] ">This Week</button>
             </div>
             <img src="src/assets/Chart.png" alt="" className=" ml-[130px] mt-[30px] " />
             <div className="p-6">
                <div className="flex text-[#556377] justify-between text-[12px] font-[inter] leading-[125%] ">
                    <h1>Category</h1>
                    <h1>Percentage</h1>
                </div>
                <div className="text-[#15191E] text-[14px] mt-[15px] grid gap-3 ">
                    <div className="flex justify-between">
                        <div className="flex gap-3 items-center">
                            <img src="src/assets/_2/Shape.png" alt="" className="h-4" />
                        <p>Utility Bill</p>
                        </div>
                    <p>0%</p>
                    </div>
                    <div className="flex justify-between" >
                       <div className="flex gap-3 items-center">
                        <img src="src/assets/_3/Shape.png" alt="" className="h-4" />
                    <p>Food</p>
                    </div>
                    <p>0%</p>
                    </div>
                   <div className="flex justify-between">
                   <div className="flex gap-3 items-center">
                    <img src="src/assets/Shape.png" alt="" className="h-4" />
                    <p>Transport</p>
                    </div>
                    <p>0%</p>
                   </div>
                </div>
             </div>
           </div> 
           <div className="bg-[white]  rounded-md w-[512px] h-[372px]">
           <h1 className="font-inter text-[16px] ml-[20px] mt-[20px] leading-[125%] text-[#2B323B] ">Recent Records</h1>
            <img src="src/assets/Frame 3465958.png" alt="" className="ml-[160px] mt-[70px] " />
           </div>
         <div>

         </div>
         
          </div>
          
           <div className="w-[1000px] ml-[30px] h-[372px] bg-white mt-[40px] rounded-md ">
               <div className="bg-[#03C987] h-[64px] flex items-center p-5 gap-3  ">
               <img src="src/assets/robot 1.png" alt="" className="" />
                   <p className=" text-white text-[18px]">AI Assitant</p>
               </div>
               <div className="grid ml-[380px] mt-[70px]">
               <img src="src/assets/Frame 48096217.png" alt="" className=""/>
               <button className="text-[#8896AA] mr-[450px] mt-[10px]">Complete Profile to
                <br />
                <span>
                Get Started
                </span>
              </button>
               </div>
              
           </div>

        </div>
        

        </div>
       
        </>
    )
}

export default Homepage;