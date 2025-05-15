import { Link } from "react-router-dom";

const Complete3 = () => {
    return (
        <>
        <div className="p-20">
        <div className="flex justify-between text-[#15191E]text-[20px] font-inter font-bold">
        <h1 className="">Complete Profile</h1>
        <span>2/3</span>
    </div> 
    <div className="grid gap-3">
        <p className="flex justify-between text-[#15191E]text-[20px] font-inter font-semibold">Are you currently employed?</p>
      <input type="text" placeholder="Yes" className="w-[568px] mt-[10px] h-[56px] bg-[#FFFFFF] border-[#E1E5EA] border-[1px] " />
      <input type="text" placeholder="No" className="w-[568px] h-[56px] bg-[#FFFFFF] border-[#E1E5EA] border-[1px] " />
    </div>

    <div className="flex gap-4">
    <Link  to='/complete2'>
                   <button className="items-left translate-x-[800px] rounded-full mt-[10px] border-[1px] border-black text-black w-[170px] h-[56px]  ">
                    Back
                    </button>
                    </Link>
                   
                   <button className=" items-left translate-x-[800px] rounded-full mt-[10px]  border-[1px] border-[#8896AA] bg-[#03C987] w-[170px] h-[56px] ">
                   Submit
                    </button>
                   
                    </div>
        </div>
        </>
    )
}
export default Complete3;