import { Link } from "react-router-dom"



const Hero = () => {
 
    return (
        <>
        <div className="p-[30px]  overflow-hidden  ">
            <div className="flex ">
           <div className=" grid">
            <h1 className="font-Inter font-bold text-[54px] leading-[1.1] ">AI-Powered Financial Management for Foreign student.</h1>
            <p className="font-inter tracking-[-0.01em] w-[582.8125px] h-[120px] leading-[1.25] text-[#404A59] text-[24px]">EduFinance AI uses AI to provide students with personalized budgeting advice, real-time expense tracking, and financial tips. Take control of your finances and secure a prosperous future today.</p>
           <div className="flex translate-y-[15px] "> 
            <Link  to='/register'>
            <button className="flex justify-center font-Inter bg-[#03C987] w-[244px] text-[#FFFFFF] items-center  h-[56px] rounded-[40px] mt-[50px] rounded-full mr-[64px] mb-[50px] leading-[1.25] gap-[8px] text-Inter text-[16px] border ">
            Get Started
           <img src="src/assets/Icons.png" alt="" className=""/>
           </button>
            </Link>
            <Link  to='/login'>
           <button className="text-[#0B0C0F] rounded-full mt-[50px] -translate-x-12 mr-[64px] mb-[21px]  border-[1px] border-[#8896AA] bg-[#8896AA] w-[170px] h-[56px]  ">
            Login
            </button>
            </Link>
           </div>
           </div>
           <img src="src/assets/Image.png" alt="" className="-translate-y-[100px] h-[580px] -translate-x-[10px] "/>
        </div>
        
        </div>
        </>
    )

}
export default Hero