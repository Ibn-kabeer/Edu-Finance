import { Link } from "react-router-dom";

const Complete2 = () => {
    return (
    <>
    <div className="font-Inter  p-[50px] ">
    <div className="flex justify-between text-[#15191E]text-[20px] font-inter font-bold">
        <h1 className="">Complete Profile</h1>
        <span>2/3</span>
    </div>

    <div className="grid mt-[20px] gap-[15px] text-[#404A59] text-[16px] ">
       <h1>Educational Information</h1>
       <span className="text-[#556377] text-[14px] text-sm ">Country *</span>
       <input type="text" placeholder="Select" className="text-[#0B0C0F] w-[580px] h-[48px] text-left border-[1px] rounded-[8px] bg-[#E1E5EA] text-[16px] text-md "/>
        <span className="text-[#556377] text-[14px] text-sm ">Institution *</span>
        <input type="text" placeholder="" className="text-[#0B0C0F] w-[580px] h-[48px] text-left border-[1px] rounded-[8px] bg-[#E1E5EA] text-[16px] text-md "/>
       <span className="text-[#556377] text-[14px] text-sm ">Major/Program *</span>
       <input type="text" placeholder="" className="text-[#0B0C0F] w-[586px] h-[48px] text-left border-[1px] rounded-[8px] bg-[#E1E5EA] text-[16px] text-md "/>
       <div className="flex gap-5">
        <div className="grid">
        <span className="text-[#556377] text-[14px] text-sm ">School Fee *</span>
        <input type="text" placeholder="$ 0.00" className="text-[#0B0C0F] w-[289px] h-[48px] text-left border-[1px] rounded-[8px] bg-[#E1E5EA] text-[16px] text-md "/>
        </div>
       <div className="grid">
       <span className="text-[#556377] text-[14px] text-sm ">Duration *</span>
       <input type="text" placeholder="Select" className="text-[#0B0C0F] w-[289px] h-[48px] text-left border-[1px] rounded-[8px] bg-[#E1E5EA] text-[16px] text-md "/>
       </div>
      
       </div>
    </div>
    </div>
      <div className="flex gap-4">
     
               <button className="items-left translate-x-[800px] rounded-full mt-[10px] border-[1px] border-black text-black w-[170px] h-[56px]  ">
                Back
                </button>
                <Link  to='/complete3'>
               <button className=" items-left translate-x-[800px] rounded-full mt-[10px]  border-[1px] border-[#8896AA] bg-[#03C987] w-[170px] h-[56px]  ">
               Proceed
                </button>
                </Link>
                </div>
              
    </>
  
    )
}
export default Complete2;