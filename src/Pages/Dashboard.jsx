
import { useState } from "react";
import DatePicker from "react-datepicker"
import 'react-datepicker/dist/react-datepicker.css'
import PhoneInput from "react-phone-input-2"
import 'react-phone-input-2/lib/style.css'


const Dashboard = () => {
    const [openmodal, setopenmodal] = useState(false)
    const [openmodal2, setopenmodal2] = useState(false)
    const [openmodal3, setopenmodal3] = useState(false)
    const [openmodal4, setopenmodal4] = useState(false)

    const [selectedate, setselecteddate] = useState(null)
            const [phone, setphone] = useState('')
        
    return (
        <>
            <div className="flex bg-pink-100 overflow-hidden relative">
                <div className="grid relative">
                    <div className="flex">
                        <div className="p-10">
                            <h1 className="text-[#2E2C34] font-semibold font-inter text-[24px] ">Hello, Linda</h1>
                            <p className="text-[#556377] text-[16px]">
                                Keep track of your financial plan
                            </p>
                        </div>
                        <div className="flex translate-y-[50px] h-[40px] translate-x-[620px] gap-2">
                            <select name="" id="" className="w-[80px] px-3">
                                <option value="1">€</option>
                                <option value="1">$</option>
                                <option value="1">1</option>
                                <option value="1">1</option>
                            </select>
                            <img src="src/assets/User.png" alt="" className="h-[35px] w-auto" />
                        </div>
                    </div>
                    <div className="h-[75px] mr-[40px] ml-[38px] items-center rounded-md bg-emerald-50">
                        <div className="flex ">
                            <button>
                                <div className="flex gap-2 ">
                                    <img src="src/assets/Round-icon.png" alt="" className="h-[50px] ml-[8px] mt-[10px] " />
                                    <div className="grid mt-[10px]">
                                        <h1 className="font-Inter text-[#2E2C34] text-[18px] -translate-x-[230px] ">Complete Profile</h1>
                                        <p className="text-[14px] text-[#84818A] ">Fill in your personal, educational, and work information to complete your profile and get started.</p>
                                    </div>

                                </div>
                            </button>
                            <button onClick={() => { setopenmodal(true) }} className="h-[30px] shadow-md bg-white translate-x-[245px] text-xs text-center w-[85px] translate-y-[25px] font-semibold text-green-400" >Get Started</button>

                            <div>
                                {openmodal &&
                                    <div className="absolute top-0 right-0 w-screen h-screen bg-black opacity-[93%]" >
                                        <div className="flex justify-end">
                                            <button onClick={() => { setopenmodal(false) }} className="cursor-pointer text-xlg h-[45px] bg-white text-black mr-[20px] mt-[250px] font-bold m w-[35px] rounded-3xl">X</button>

                                            <div className="bg-white h-screen ">
                                                <div className="font-Inter p-[20px]">
                                                    <div className="flex justify-between text-[#15191E] text-[20px] font-inter font-bold">
                                                        <h1 className="">Complete Profile</h1>
                                                        <span>1/3</span>
                                                    </div>

                                                    <div className="grid mt-[20px] gap-[10px] text-[#404A59] text-[16px] ">
                                                        <h1>Personal Information</h1>
                                                        <div className="grid gap-4 w-[600px]">
                <div className="grid gap-[7px]">
                        <h1 className="text-[#556377] text-[14px] font-Inter">First Name</h1>
                          <input type="text" placeholder="Linda" className="w-[452px] h-[48px] border-[1px] text-[#0B0C0F] p-3 rounded-md border-[#E1E5EA]" />
                </div>
                <div className="grid gap-[7px]">
                        <h1 className="text-[#556377] text-[14px] font-Inter">Last Name</h1>
                          <input type="text" placeholder="Rose" className="w-[452px] h-[48px] border-[1px] text-[#0B0C0F] p-3 rounded-md border-[#E1E5EA]" />
                </div>
                <div className="grid gap-[7px]">
                        <h1 className="text-[#556377] text-[14px] font-Inter">Email</h1>
                          <input type="text" placeholder="lindarose@gmail.com" className="w-[452px] h-[48px] border-[1px] text-[#0B0C0F] p-3 rounded-md border-[#E1E5EA]" />
                </div>
                <div className="grid gap-[7px]">
                        <h1 className="text-[#556377] text-[14px] font-Inter">Phone Number</h1>
                          <PhoneInput country={'ng'}  value={phone} onChange={setphone} placeholder="+44 776527 77726"
           inputClass="w-[452px] !px-4 !py-2 !border !border-gray-300 !rounded-md"
        buttonClass="!border !border-gray-300"
        containerClass="w-[652px]"
        
          />
                </div>
                <div className="flex gap-[25px]">
                <div className="grid gap-[7px]">
                        <h1 className="text-[#556377] text-[14px] font-Inter">Gender</h1>
                         <select name="" id=""  className="w-[221px] h-[48px] border-[1px] text-[#0B0C0F] p-3 rounded-md border-[#E1E5EA]">
                         <option value="1">Select</option>
                         <option value="2">Male</option>
                         <option value="2">Female</option>
                         <option value="2">Prefer Not To Say</option>
                         </select>
                </div>
                <div className="grid gap-[7px]">
                <label className="text-[#556377] text-[14px] font-Inter">Select Date</label>
      <DatePicker selected={selectedate} onChange={(date) => setselecteddate(date)}  className="w-[221px] h-[48px] border-[1px] text-[#0B0C0F] p-3 rounded-md border-[#E1E5EA]" placeholderText="Choose a date" />
                </div>
                </div>
              </div>
                                                        <button onClick={() => { setopenmodal2(true), setopenmodal(false) }} className=" items-left translate-y-[70px] translate-x-[400px] rounded-full border-[1px] border-[#8896AA] bg-[#03C987] w-[170px] h-[56px]  ">
                                                            Proceed
                                                        </button>

                                                    </div>

                                                    <div>

                                                    </div>
                                                </div>

                                            </div>
                                        </div>

                                    </div>

                                }
                            </div>

                            <div>
                                {openmodal2 &&
                                    <div className="absolute top-0 right-0 w-screen h-screen bg-black opacity-[93%]" >
                                        <div className="flex justify-end">
                                            <button onClick={() => { setopenmodal2(false) }} className="cursor-pointer text-xlg h-[45px] bg-white text-black mr-[20px] mt-[250px] font-bold m w-[35px] rounded-3xl">X</button>

                                            <div className="bg-white h-screen ">
                                                <div className="font-Inter p-[20px]">
                                                    <div className="flex justify-between text-[#15191E] text-[20px] font-inter font-bold">
                                                        <h1 className="">Complete Profile</h1>
                                                        <span>2/3</span>
                                                    </div>

                                                    <div className="grid mt-[20px] gap-[10px] text-[#404A59] text-[16px] ">
                                                        <h1>Educational Information</h1>
                                                        <span className="text-[#556377] text-[14px] text-sm ">Country *</span>
                                                        <input type="text" placeholder="Select" className="text-[#0B0C0F] w-[580px] h-[48px] text-left border-[1px] rounded-[8px] bg-[#E1E5EA] text-[16px] text-md " />
                                                        <span className="text-[#556377] text-[14px] text-sm ">Institution *</span>
                                                        <input type="text" placeholder="" className="text-[#0B0C0F] w-[580px] h-[48px] text-left border-[1px] rounded-[8px] bg-[#E1E5EA] text-[16px] text-md " />
                                                        <span className="text-[#556377] text-[14px] text-sm ">Major/Program *</span>
                                                        <input type="text" placeholder="" className="text-[#0B0C0F] w-[586px] h-[48px] text-left border-[1px] rounded-[8px] bg-[#E1E5EA] text-[16px] text-md " />
                                                        <div className="flex gap-5">
                                                            <div className="grid">
                                                                <span className="text-[#556377] text-[14px] text-sm ">School Fee *</span>
                                                                <input type="text" placeholder="$ 0.00" className="text-[#0B0C0F] w-[289px] h-[48px] text-left border-[1px] rounded-[8px] bg-[#E1E5EA] text-[16px] text-md " />
                                                            </div>
                                                            <div className="grid">
                                                                <span className="text-[#556377] text-[14px] text-sm ">Duration *</span>
                                                                <input type="text" placeholder="Select" className="text-[#0B0C0F] w-[289px] h-[48px] text-left border-[1px] rounded-[8px] bg-[#E1E5EA] text-[16px] text-md " />
                                                            </div>

                                                        </div>
                                                    </div>
                                                    <div className="flex gap-4">
                                                        <button onClick={() => { setopenmodal3(false), setopenmodal(true), setopenmodal2(false) }} className="items-left translate-y-[70px] translate-x-[200px] rounded-full border-[1px] border-[#8896AA] bg-black text-white w-[170px] h-[56px]   ">
                                                            Back
                                                        </button>

                                                        <button onClick={() => { setopenmodal3(true), setopenmodal(false), setopenmodal2(false) }} className="items-left translate-y-[70px] translate-x-[200px] rounded-full border-[1px] border-[#8896AA] bg-[#03C987] w-[170px] h-[56px] ">
                                                            Proceed
                                                        </button>

                                                    </div>

                                                </div>

                                                <div>

                                                </div>
                                            </div>

                                        </div>

                                    </div>

                                }
                            </div>


                            <div>
                                {openmodal3 &&
                                    <div className="absolute top-0 right-0 w-screen h-screen bg-black opacity-[93%]" >
                                        <div className="flex justify-end">
                                            <button onClick={() => { setopenmodal3(false) }} className="cursor-pointer text-xlg h-[45px] bg-white text-black mr-[20px] mt-[250px] font-bold m w-[35px] rounded-3xl">X</button>

                                            <div className="bg-white h-screen ">
                                                <div className="font-Inter p-[20px]">
                                                    <div className="flex justify-between text-[#15191E] text-[20px] font-inter font-bold">
                                                        <h1 className="">Complete Profile</h1>
                                                        <span>3/3</span>
                                                    </div>

                                                    <div className="grid gap-3">
                                                        <p className="flex justify-between text-[#15191E]text-[20px] font-inter font-semibold">Are you currently employed?</p>
                                                        <input type="text" placeholder="Yes" className="w-[568px] mt-[10px] h-[56px] bg-[#FFFFFF] border-[#E1E5EA] border-[1px] " />
                                                        <input type="text" placeholder="No" className="w-[568px] h-[56px] bg-[#FFFFFF] border-[#E1E5EA] border-[1px] " />
                                                    </div>

                                                    <div className="flex gap-4">
                                                        <button onClick={() => { setopenmodal3(false), setopenmodal2(true), setopenmodal(false) }} className="items-left translate-y-[70px] translate-x-[200px] rounded-full border-[1px] border-[#8896AA] bg-black text-white w-[170px] h-[56px]   ">
                                                            Back
                                                        </button>

                                                        <button onClick={() => { setopenmodal4(true), setopenmodal(false), setopenmodal2(false), setopenmodal3(false) }} className="items-left translate-y-[70px] translate-x-[200px] rounded-full border-[1px] border-[#8896AA] bg-[#03C987] w-[170px] h-[56px] ">
                                                            Proceed
                                                        </button>

                                                    </div>

                                                </div>

                                                <div>

                                                </div>
                                            </div>

                                        </div>

                                    </div>

                                }
                            </div>

                            <div>
                                {openmodal4 &&
                                    <div className="absolute top-0 right-0 w-screen h-screen bg-black opacity-[93%]" >
                                        <div className="flex justify-end">
                                            <button onClick={() => { setopenmodal4(false) }} className="cursor-pointer text-xlg h-[45px] bg-white text-black mr-[20px] mt-[250px] font-bold m w-[35px] rounded-3xl">X</button>

                                            <div
                                                onClick={(e) => e.stopPropagation()}
                                                className="bg-white h-full bg-opacity-70 p-20 shadow-lg"
                                            >
                                                <div>

                                                </div>
                                                <img src="src/assets/Done.png" alt="" />
                                            </div>

                                        </div>

                                    </div>

                                }
                            </div>




                        </div>
                    </div>



                    <div className="bg-white rounded-md grid mt-[20px] ml-[38px] w-[1010px] h-[210px]">
                        <div className="flex  justify-between p-3">
                            <h1 className=" text-[#2B323B] font-semibold text-sm">Dashboard</h1>
                            <div className="flex"></div>
                            <button className="border rounded-md w-[100px] text-sm mr-[0px] h-[25px]">This week</button>
                        </div>
                        <div className="items-center flex p-3 gap-[10px]">
                            <div className="bg-[#013222] w-[320px] h-[137px] rounded-md ">
                                <h1 className="font-inter text-[14px] leading-[125%] text-[#E1E5EA] p-6 ">Estimated Balance
                                </h1>
                                <p className="text-[26px] ml-[22px]  leading-[125%] text-[#F0F2F4] h-[33px] w-[272px] ">€ 1,280.50</p>
                                <img src="src/assets/Quickview.png" alt="" className="ml-[22px]" />
                            </div>

                            <div className="bg-[#E9FBF0] w-[320px] grid h-[137px] rounded-md ">
                                <div className="flex gap-2 mt-[21px] ">
                                    <img src="src/assets/money bag coin.png" alt="" className="ml-4 h-[20px]" />
                                    <h1 className="text-[#556377]  font-inter text-[12px] leading-[125%]  ">INCOME</h1>
                                </div>
                                <p className=" text-[#2B323B] text-[26px] ml-[20px] leading-[125%]  h-[33px] w-[272px] mt-[15px] ">€ 3,080.50</p>
                                <button className="w-[140px] h-[32px] mb-[5px] font-weight:500 rounded-full ml-[160px]  bg-[#029765] text-white">Add Income </button>
                            </div>

                            <div className="bg-[#FDE8E8] w-[320px] h-[137px] rounded-md">
                                <div className="flex gap-2 mt-[21px] " >
                                    <img src="src/assets/_3/Icons.png" alt="" className="ml-4 h-[20px]" />
                                    <h1 className="text-[#556377]  font-inter text-[12px] leading-[125%]  ">EXPENSES</h1>
                                </div>
                                <p className="text-[26px] ml-[20px] leading-[125%]  h-[33px] w-[272px] mt-[15px] text-[#2B323B]  ">€ 1,800.00</p>
                                <button className="w-[140px] h-[32px] font-weight:500 rounded-full ml-[160px]  bg-[#0B0C0F] text-white ">Add Expenses</button>
                            </div>

                        </div>
                    </div>

                    <div className="w-[1010px] flex ml-[20px] gap-[20px] p-4  w-[1065px] h-[372px] ">

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
                                        <p>40%</p>
                                    </div>
                                    <div className="flex justify-between" >
                                        <div className="flex gap-3 items-center">
                                            <img src="src/assets/_3/Shape.png" alt="" className="h-4" />
                                            <p>Food</p>
                                        </div>
                                        <p>30%</p>
                                    </div>
                                    <div className="flex justify-between">
                                        <div className="flex gap-3 items-center">
                                            <img src="src/assets/Shape.png" alt="" className="h-4" />
                                            <p>Transport</p>
                                        </div>
                                        <p>20%</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="bg-[white]  rounded-md w-[512px] h-[372px]">
                            <h1 className="font-inter text-[16px] ml-[20px] mt-[20px] leading-[125%] text-[#2B323B] ">Recent Records</h1>
                            <div className="grid w-[472px] h-[320px] p-2">

                                <div className="flex justify-between p-[16px] bottom-[1px] mt-[5px] ">
                                    <div className="flex gap-2">
                                        <img src="src/assets/_3/Paid.png" alt="" className="h-[30px]" />
                                        <div className="grid ">
                                            <span className="text-[#333333] text-[14px] " >Job</span>
                                            <span className="text-[#8896AA] text-[10px] font-inter ">Income• 14 Jul 2024</span>
                                        </div>
                                    </div>
                                    <div>
                                        <span className="text-[14px] text-[#1EAE53]  ">+ € 1,280.00</span>
                                    </div>
                                </div>
                                <hr className="ml-[15px]" />

                                <div className="flex justify-between p-[16px]  bottom-[1px]  ">
                                    <div className="flex gap-2 ">
                                        <img src="src/assets/_4/Icons.png" alt="" className="h-[30px]" />
                                        <div className="grid">
                                            <span className="text-[#333333] text-[14px] " >Food</span>
                                            <span className="text-[#8896AA] text-[10px] font-inter ">Income• 14 Jul 2024</span>
                                        </div>
                                    </div>
                                    <div>
                                        <span className="text-[14px] text-[#EF4444]  ">+ € 600.00</span>
                                    </div>
                                </div>
                                <hr className="ml-[15px]" />

                                <div className="flex justify-between p-[16px] bottom-[1px]  ">
                                    <div className="flex gap-2">
                                        <img src="src/assets/_3/Paid.png" alt="" className="h-[30px]" />
                                        <div className="grid">
                                            <span className="text-[#333333] text-[14px] " >Gift</span>
                                            <span className="text-[#8896AA] text-[10px] font-inter ">Income• 14 Jul 2024</span>
                                        </div>
                                    </div>
                                    <div>
                                        <span className="text-[14px] text-[#1EAE53]  ">+ € 400.00</span>
                                    </div>
                                </div>
                                <hr className="ml-[15px]" />

                                <div className="flex justify-between p-[16px] bottom-[1px]  ">
                                    <div className="flex gap-2">
                                        <img src="src/assets/_4/Icons.png" alt="" className="h-[30px]" />
                                        <div className="grid">
                                            <span className="text-[#333333] text-[14px] " >Transport</span>
                                            <span className="text-[#8896AA] text-[10px] font-inter ">Income• 14 Jul 2024</span>
                                        </div>
                                    </div>
                                    <div>
                                        <span className="text-[14px] text-[#EF4444]  ">+ € 60.00</span>
                                    </div>
                                </div>
                                <hr className="ml-[15px]" />

                            </div>
                        </div>
                        <div>

                        </div>

                    </div>

                    <div className="w-[1020px] ml-[30px] h-[450px] bg-white mt-[40px] rounded-md ">
                        <div className="bg-[#03C987] h-[64px] rounded-md justify-between flex items-center p-5 gap-3  ">
                            <div className="flex gap-2">
                                <img src="src/assets/robot 1.png" alt="" className="" />
                                <p className=" text-white text-[18px]">AI Assitant</p>
                            </div>
                            <div>
                                <img src="src/assets/share-rectangle.png" alt="" />
                            </div>
                        </div>
                        <div className="grid ml-[380px] mt-[70px]">
                            <h1 className="text-[#15191E] text-[24px]">Initiate a New Chat</h1>
                        </div>
                        <p className="text-[#556377] text-[16px] mt-[10px] text-center ">Unlock AI's Potential for Smarter Financial Management</p>

                        <div className="flex gap-3  mt-[20px] p-[20px]">
                            <div className=" flex gap-2 items-center h-[60px] bg-[#FFFFFF] border-[#CDFEEE] rounded-md border-[1px] ">
                                <img src="src/assets/Icon.png" alt="" className="ml-[5px]" />
                                <p className="text-[#404A59] text-[14px] ">Optimize your spending with personalized insights</p>
                            </div>


                            <div className=" flex gap-2 items-center h-[60px] bg-[#FFFFFF] border-[#CDFEEE] rounded-md border-[1px]">
                                <img src="src/assets/create.png" alt="" className="ml-[5px]" />
                                <p className="text-[#404A59] text-[14px] ">create a customized budget today!</p>
                            </div>


                            <div className=" flex gap-2 items-center h-[60px] bg-[#FFFFFF] border-[#CDFEEE] rounded-md border-[1px] ">
                                <img src="src/assets/financial.png" alt="" className="ml-[5px]" />
                                <p className="text-[#404A59] text-[14px] ">Get personalized financial insights and recommendations.</p>
                            </div>

                        </div>

                        <div className="flex justify-between mt-[80px] items-center ">
                            <input type="text" placeholder="Send your messege..." className="rounded-md  border-[1px] w-[1150px] h-[40px] ml-[20px]" />
                            <img src="src/assets/button.png" alt="" className="-translate-x-[45px]" />
                        </div>


                    </div>

                </div>


            </div>


        </>
    )
}

export default Dashboard;