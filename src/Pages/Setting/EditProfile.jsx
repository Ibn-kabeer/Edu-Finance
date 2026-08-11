import { useState } from "react"
import DatePicker from "react-datepicker"
import 'react-datepicker/dist/react-datepicker.css'
import PhoneInput from "react-phone-input-2"
import 'react-phone-input-2/lib/style.css'
import countries from "world-countries"

const EditProfile = () => {

        const [openmodal01, setopenmodal01] = useState(true)
        const [openmodal02, setopenmodal02] = useState(false)
        const [openmodal03, setopenmodal03] = useState(false)
        const [selectedate, setselecteddate] = useState(null)
        const [phone, setphone] = useState('')
        const [selectedcountry, setselectedcountry] = useState(null)

        const handleChange = (e) => {
         const country = countries.find(c => c.cca3 === e.target.value);
         setselectedcountry(country);
        };

    return (
     
        <>
        <div className="p-[30px]">
          
            <div className=" gap-[80px] flex ">
                <h1 onClick={() => { setopenmodal01(true), setopenmodal02(false), setopenmodal03(false) }}
                  className={`text-[#8896AA] text-[16px] font-Inter 
                 ${ openmodal01 ? ' border-b-2 text-black border-green-500' : '' }
                 `}>
                  Personal Information
                  </h1>
                <h1 onClick={() => { setopenmodal02(true), setopenmodal01(false), setopenmodal03(false) }} className={`text-[#8896AA] text-[16px] font-Inter hover:text-black
                 ${
            openmodal02 ? 
            ' border-b-2 text-black border-green-500'
              : ''
          } ` 
          }
          >Educational Information</h1>
                <h1 onClick={() => { setopenmodal03(true), setopenmodal01(false), setopenmodal02(false) }} className={`text-[#8896AA] text-[16px] font-Inter hover:text-black 
                 ${
            openmodal03 ? 
            ' border-b-2 text-black border-green-500'
              : ''
          } `
          }
           >Work Information</h1>
            </div>
            <hr className=""/>
          
            {openmodal01 &&
            <div  className="flex mt-[20px] ">
            <div className="grid gap-4">
                <div className="grid gap-[7px]">
                        <h1 className="text-[#556377] text-[14px] font-Inter">First Name</h1>
                          <input type="text" placeholder="Linda" className="w-[352px] h-[48px] border-[1px] text-[#0B0C0F] p-3 rounded-md border-[#E1E5EA]" />
                </div>
                <div className="grid gap-[7px]">
                        <h1 className="text-[#556377] text-[14px] font-Inter">Last Name</h1>
                          <input type="text" placeholder="Rose" className="w-[352px] h-[48px] border-[1px] text-[#0B0C0F] p-3 rounded-md border-[#E1E5EA]" />
                </div>
                <div className="grid gap-[7px]">
                        <h1 className="text-[#556377] text-[14px] font-Inter">Email</h1>
                          <input type="text" placeholder="lindarose@gmail.com" className="w-[352px] h-[48px] border-[1px] text-[#0B0C0F] p-3 rounded-md border-[#E1E5EA]" />
                </div>
                <div className="grid gap-[7px]">
                        <h1 className="text-[#556377] text-[14px] font-Inter">Phone Number</h1>
                          <PhoneInput country={'ng'}  value={phone} onChange={setphone} placeholder="+44 776527 77726"
           inputClass="!w-full !h-[48px] !px-4 !py-2 !border !border-[#E1E5EA] !border-[1px] !rounded-md"
        buttonClass="!border !border-gray-300"
        containerClass="!w-[352px] h-[48px]"
        
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
                <div className="flex">
      <DatePicker
       selected={selectedate}
        onChange={(date) => setselecteddate(date)} 
         className="w-[221px] h-[48px] border-[1px] text-[#0B0C0F] p-3 rounded-md border-[#E1E5EA]"
          placeholderText="mm//dd//yy"
           />
           <img src="src/assets/Vector.png" alt=""  className="-translate-x-[27px] h-[25px] mt-[13px]"/>
           </div>
                </div>
                </div>
                <button className=" rounded-full mt-[10px]   border-[1px] border-[#8896AA] bg-[#03C987] w-[170px] h-[56px] ">
                   Save Changes
                    </button>
              </div>

              <div className="">
                 <img src="src/assets/user 1.png" alt="" />
                 <button className="border-[#15191E] mt-[20px] text-[#15191E] font-Manrope text-[14px] border-[1px] w-[173px] h-[36px] ">Upload new picture</button>
              </div>
               

            </div>
             }

             
            {openmodal02 &&
            <div  className="flex mt-[30px] ">
                 <div className="grid gap-6">
                     <div className="grid gap-[7px]">
                        <label className="text-[#556377] text-[14px] font-Inter">Country*</label>
                
                  <select name="" id=""
                  onChange={handleChange}
                  placeholder="Select"
                  className="w-[452px] h-[50px] border-[1px] text-[#0B0C0F] p-3 rounded-md border-[#E1E5EA]" >
                    <option value="">Select</option>
                    {countries.map((country) => 
                (
                 <option key={country.cca3}
                  value="country.cca3">
                    {country.name.common}
                  </option>
                )
                )
                }
                    </select>
                 </div>
                   <div className="grid gap-[7px]">
                        <h1 className="text-[#556377] text-[14px] font-Inter">Institution Name *</h1>
                          <input type="text" placeholder="" className="w-[452px] h-[50px] border-[1px] text-[#0B0C0F] p-3 rounded-md border-[#E1E5EA]" />
                </div>
                <div className="grid gap-[7px]">
                        <h1 className="text-[#556377] text-[14px] font-Inter">Major/Program * </h1>
                          <input type="text" placeholder="" className="w-[452px] h-[50px] border-[1px] text-[#0B0C0F] p-3 rounded-md border-[#E1E5EA]" />
                </div>
              <div className="flex gap-2">
              <div className="grid gap-[7px]">
                        <h1 className="text-[#556377] text-[14px] font-Inter">School Fee *</h1>
                          <input type="text" placeholder="$0.00" className="w-[221px] h-[50px] border-[1px] text-[#0B0C0F] p-3 rounded-md border-[#E1E5EA]" />
                </div>
                <div className="grid gap-[7px]">
                        <h1 className="text-[#556377] text-[14px] font-Inter">Duration * </h1>
                          <select type="text" placeholder="Select" className="w-[221px] h-[50px] border-[1px] text-[#0B0C0F] p-3 rounded-md border-[#E1E5EA]" >
                          <option value="">Select</option>
                          </select>
                </div>
              </div>

              <button className=" rounded-full mt-[10px]   border-[1px] border-[#8896AA] bg-[#03C987] w-[170px] h-[56px] ">
                   Save Changes
                    </button>
                 
              </div>

              <div>

              </div>
              <div className="ml-[15px]">
                 <img src="src/assets/user 1.png" alt="" />
                 <button className="border-[#15191E] mt-[20px] text-[#15191E] font-Manrope text-[14px] border-[1px] w-[173px] h-[36px] ">Upload new picture</button>
              </div>
            </div>
             }

             
            {openmodal03 &&
             <div  className="flex mt-[30px] ">
             <div className="grid gap-6">
              
               <div className="grid gap-[7px]">
                <h1 className="text-[16px] font-medium text-[#404A59] ">Work Information</h1>
                    <h1 className="text-[#556377] text-[14px] font-Inter">Employer Name *</h1>
                      <input type="text" placeholder="" className="w-[452px] h-[50px] border-[1px] text-[#0B0C0F] p-3 rounded-md border-[#E1E5EA]" />
            </div>
            <div className="grid gap-[7px]">
                    <h1 className="text-[#556377] text-[14px] font-Inter">Job Title/Position * </h1>
                      <input type="text" placeholder="" className="w-[452px] h-[50px] border-[1px] text-[#0B0C0F] p-3 rounded-md border-[#E1E5EA]" />
            </div>
          <div className="flex gap-2">
          <div className="grid gap-[7px]">
                    <h1 className="text-[#556377] text-[14px] font-Inter">Pay Date *</h1>
                    <select type="text" placeholder="Select" className="w-[221px] h-[50px] border-[1px] text-[#0B0C0F] p-3 rounded-md border-[#E1E5EA]" >
                      <option value="">Select</option>
                      </select>
            </div>
            <div className="grid gap-[7px]">
                    <h1 className="text-[#556377] text-[14px] font-Inter">Amount * </h1>
                    <input type="text" placeholder="$0.00" className="w-[221px] h-[50px] border-[1px] text-[#0B0C0F] p-3 rounded-md border-[#E1E5EA]" />
            </div>
          </div>

          <button className=" rounded-full mt-[10px]   border-[1px] border-[#8896AA] bg-[#03C987] w-[170px] h-[56px] ">
               Save Changes
                </button>
             
          </div>

          <div>

          </div>
          <div className="ml-[15px]">
             <img src="src/assets/user 1.png" alt="" />
             <button className="border-[#15191E] mt-[20px] text-[#15191E] font-Manrope text-[14px] border-[1px] w-[173px] h-[36px] ">Upload new picture</button>
          </div>
        </div>
             }

        </div>
        </>

    )


   }

export default EditProfile;