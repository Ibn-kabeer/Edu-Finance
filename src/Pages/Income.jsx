import { Link } from "react-router-dom";
import { useState } from "react";

const   Income = () => {
     const [count, setCount] = useState(0);
        const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    
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
           
            
               
            <div className="bg-white -translate-y-[02px] rounded-md grid ml-[38px] w-[1010px] h-[210px]">
                <div className="flex justify-between p-3">
           <h1 className=" text-[#2B323B] font-semibold text-sm">Income</h1>
           <div className="flex"></div>
           <button className="border rounded-md w-[100px] text-sm mr-[0px] h-[25px]">This week</button>
           </div>
            <div className="items-center flex p-3 gap-[10px]">
                
                    <div className="bg-[#E9FBF0] w-[985px] h-[137px] rounded-md">
                    <div className="flex gap-2" >
                    <img src="src/assets/money bag coin.png" alt="" className="translate-y-[20px] ml-4"/>
                    <h1 className="text-[#556377] translate-y-[20px] font-inter text-[12px] leading-[125%]  ">INCOME</h1>
                    </div>
                      <p className="text-[26px] ml-[18px] translate-y-[25px] leading-[125%] font-bold text-[#2B323B] h-[33px] w-[272px] ">€ 3,080.50</p>
                    <button className="w-[140px] h-[32px] gap-[4px] rounded-full translate-x-[830px] translate-y-[40px] bg-[#029765] text-white ">Add Income</button>
                    </div>
                    
            </div>
         </div>
          
          <div className="w-[1010px] flex ml-[20px] gap-[20px] p-4  w-[1045px] h-[372px] ">
           
           <div className="bg-[white] rounded-md w-[532px] h-[372px]  ">
             <div className="flex gap-8 items-center justify-between">
                <h1 className="font-inter text-[16px] ml-[20px] mt-[20px] leading-[125%] text-[#2B323B] ">Recent Expense</h1>
                <span className="w-[116px] translate-x-[60px] translate-y-[20px]  h-[30px] text-[#2B323B] text-[14px] leding-[125%] ">See All</span>
             </div>
             
             <div className="grid ml-[15px] p-[10px] items-center">

                <div className="flex mt-[19px] mb-[5px] justify-between">
                    <div className="flex gap-[10px] ">
                    <img src="src/assets/_4/Icons.png" alt="" className="h-[30px]"/>
                    <div className="grid items-center]">
                        <h1 className="text-[#333333] text-[14px]">Job</h1>
                        <span className=" text-[#8896AA] text-[10px]">Expense• 14 Jul 2024</span>
                    </div>
                    </div>
                  <p className="font-inter text-[14px] mt-[5px] text-[#15191E]">€ 600.00</p>
                  <div className="flex gap-[4px] mr-[10px] mt-[5px]">
                    <img src="src/assets/delete.png" alt="" className="h-[20px]" />
                    <img src="src/assets/pen.png" alt="" className="h-[20px]"/>
                  </div>
                    </div>
                    <hr className="mr-[15px] ml-[5px]"/>

                    <div className="flex mt-[10px] mb-[5px] justify-between">
                    <div className="flex gap-[10px] ">
                    <img src="src/assets/_4/Icons.png" alt="" className="h-[30px]"/>
                    <div className="grid items-center]">
                        <h1 className="text-[#333333] text-[14px]">Allowance</h1>
                        <span className=" text-[#8896AA] text-[10px]">Expense• 14 Jul 2024</span>
                    </div>
                    </div>
                  <p className="font-inter text-[14px] mt-[5px] text-[#15191E]">€ 600.00</p>
                  <div className="flex gap-[4px] mr-[10px] mt-[5px]">
                    <img src="src/assets/delete.png" alt="" className="h-[20px]" />
                    <img src="src/assets/pen.png" alt="" className="h-[20px]"/>
                  </div>
                    </div>
                    <hr className="mr-[15px] ml-[5px]"/>

                   <div className="flex mt-[10px] mb-[5px] justify-between">
                    <div className="flex gap-[10px] ">
                    <img src="src/assets/_4/Icons.png" alt="" className="h-[30px]"/>
                    <div className="grid items-center]">
                        <h1 className="text-[#333333] text-[14px]">Gift</h1>
                        <span className=" text-[#8896AA] text-[10px]">Expense• 14 Jul 2024</span>
                    </div>
                    </div>
                  <p className="font-inter text-[14px] mt-[5px] text-[#15191E]">€ 600.00</p>
                  <div className="flex gap-[4px] mr-[10px] mt-[5px]">
                    <img src="src/assets/delete.png" alt="" className="h-[20px]" />
                    <img src="src/assets/pen.png" alt="" className="h-[20px]"/>
                  </div>
                    </div>
                    <hr className="mr-[15px] ml-[5px]"/>

                    <div className="flex mt-[10px] mb-[5px] justify-between">
                    <div className="flex gap-[10px] ">
                    <img src="src/assets/_4/Icons.png" alt="" className="h-[30px]"/>
                    <div className="grid items-center]">
                        <h1 className="text-[#333333] text-[14px]">Refund</h1>
                        <span className=" text-[#8896AA] text-[10px]">Expense• 14 Jul 2024</span>
                    </div>
                    </div>
                  <p className="font-inter text-[14px] mt-[5px] text-[#15191E]">€ 600.00</p>
                  <div className="flex gap-[4px] mr-[10px] mt-[5px]">
                    <img src="src/assets/delete.png" alt="" className="h-[20px]" />
                    <img src="src/assets/pen.png" alt="" className="h-[20px]"/>
                  </div>
                    </div>
                    <hr className="mr-[15px] ml-[5px]"/>

                  <div className="flex mt-[10px] mb-[5px] justify-between">
                    <div className="flex gap-[10px] ">
                    <img src="src/assets/_4/Icons.png" alt="" className="h-[30px]"/>
                    <div className="grid items-center]">
                        <h1 className="text-[#333333] text-[14px]">Job</h1>
                        <span className=" text-[#8896AA] text-[10px]">Expense• 14 Jul 2024</span>
                    </div>
                    </div>
                  <p className="font-inter text-[14px] mt-[5px] text-[#15191E]">€ 600.00</p>
                  <div className="flex gap-[4px] mr-[10px] mt-[5px]">
                    <img src="src/assets/delete.png" alt="" className="h-[20px]" />
                    <img src="src/assets/pen.png" alt="" className="h-[20px]"/>
                  </div>
                    </div>
                    <hr className="mr-[15px] ml-[5px]"/>

                    <div className="flex mt-[10px] mb-[5px] justify-between">
                    <div className="flex gap-[10px] ">
                    <img src="src/assets/_4/Icons.png" alt="" className="h-[30px]"/>
                    <div className="grid items-center]">
                        <h1 className="text-[#333333] text-[14px]">Gifts</h1>
                        <span className=" text-[#8896AA] text-[10px]">Expense• 14 Jul 2024</span>
                    </div>
                    </div>
                  <p className="font-inter text-[14px] mt-[5px] text-[#15191E]">€ 600.00</p>
                  <div className="flex gap-[4px] mr-[10px] mt-[5px]">
                    <img src="src/assets/delete.png" alt="" className="h-[20px]" />
                    <img src="src/assets/pen.png" alt="" className="h-[20px]"/>
                  </div>
                    </div>

             </div>
           </div> 
           <div className="bg-[white]  rounded-md w-[512px] h-[372px]">
            <div className="flex justify-between">
           <h1 className="font-inter text-[16px] ml-[10px] mt-[20px] leading-[125%] text-[#2B323B] ">Categories</h1>
           <button className="w-[136px] h-[36px] mr-[10px] mt-[12px] border-[1px] border-[#03C987] rounded-md text-[#15191E] font-inter text-[12px] bg-[#E6FFF6] ">Add Category +</button>
           </div>
           <div className="grid p-[20px]">
            <div className="flex justify-between mt-[18px] ">
               <h1 className="text-[#15191E] font-inter text-[15px] ">Shoppings</h1>
               <button className="bg-[#FFFFFF] border-[#C4CBD4] border-[1px] h-[27px] w-[27px] rounded-md ">08</button>
            </div>
            <div className="flex justify-between mt-[18px] ">
               <h1 className="text-[#15191E] font-inter text-[15px] ">Rent</h1>
               <button className="bg-[#FFFFFF] border-[#C4CBD4] border-[1px] h-[27px] w-[27px] rounded-md ">0</button>
            </div>
            <div className="flex justify-between mt-[18px] ">
               <h1 className="text-[#15191E] font-inter text-[15px] ">Loan</h1>
               <button className="bg-[#FFFFFF] border-[#C4CBD4] border-[1px] h-[27px] w-[27px] rounded-md ">0</button>
            </div>
            <div className="flex justify-between mt-[18px] ">
               <h1 className="text-[#15191E] font-inter text-[15px] ">Loan</h1>
               <button className="bg-[#FFFFFF] border-[#C4CBD4] border-[1px] h-[27px] w-[27px] rounded-md ">0</button>
            </div>
            <div className="flex justify-between mt-[18px] ">
               <h1 className="text-[#15191E] font-inter text-[15px] ">Loan</h1>
               <button className="bg-[#FFFFFF] border-[#C4CBD4] border-[1px] h-[27px] w-[27px] rounded-md ">0</button>
            </div>
            <div className="flex justify-between mt-[18px] ">
               <h1 className="text-[#15191E] font-inter text-[15px] ">Loan</h1>
               <button className="bg-[#FFFFFF] border-[#C4CBD4] border-[1px] h-[27px] w-[27px] rounded-md ">0</button>
            </div>
           </div>
           </div>
        
          </div>
         
          <div className="w-[1010px] flex ml-[20px] gap-[20px] mt-[20px] p-4  w-[1046px] h-[372px] ">
           
           <div className="bg-[white] rounded-md w-[532px] h-[372px]  ">
             <div className="grid gap-8 items-center">
                <h1 className="font-Manrope text-[16px] ml-[20px] mt-[20px] leading-[125%] text-[#0B0C0F] ">Real-Time Sale</h1>
                <div className="flex ml-[20px]">
                <div className="flex items-center">
                    <img src="src/assets/Shape.png" alt="" className="h-[10px] -translate-y-[10px] "/>
                <span className="w-[116px] translate-x-[10px] -translate-y-[8px]  h-[30px] text-[#2B323B] text-[14px] leding-[125%] ">Today</span>
                </div>
                <div className="flex items-center">
                    <img src="src/assets/_3/Shape.png" alt="" className="h-[10px] -translate-y-[10px]"/>
                <span className="w-[116px] translate-x-[10px] -translate-y-[8px]  h-[30px] text-[#2B323B] text-[14px] leding-[125%] ">Yesterday</span>
                </div>
                </div>
             </div>
             
                 <div>
                    <img src="src/assets/Graph.png" alt="" className="mt-[70px] ml-[30px] " />
                 </div>
           </div> 
           <div className="bg-[white] rounded-md w-[532px] h-[372px]  ">
             <div className="flex gap-8 items-center justify-between">
                <h1 className="font-inter text-[16px] ml-[20px] mt-[20px] leading-[125%] text-[#2B323B] ">Top 3 Income</h1>
                
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
                        <p>Job</p>
                        </div>
                    <p>40%</p>
                    </div>
                    <div className="flex justify-between" >
                       <div className="flex gap-3 items-center">
                        <img src="src/assets/_3/Shape.png" alt="" className="h-4" />
                    <p>Allowance</p>
                    </div>
                    <p>30%</p>
                    </div>
                   <div className="flex justify-between">
                   <div className="flex gap-3 items-center">
                    <img src="src/assets/Shape.png" alt="" className="h-4" />
                    <p>Gift</p>
                    </div>
                    <p>20%</p>
                   </div>
                </div>
             </div>
        
          </div>
       </div>
        </div>
        

        </div>
     
        </>
    )
}
export default Income;