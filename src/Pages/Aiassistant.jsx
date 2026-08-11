
const Aiassistant = () => {
    return (
        <>
        <div>
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
                   <img src="src/assets/create.png" alt="" className="ml-[5px]"/>
                   <p className="text-[#404A59] text-[14px] ">create a customized budget today!</p>
                  </div>
                
                  
                  <div className=" flex gap-2 items-center h-[60px] bg-[#FFFFFF] border-[#CDFEEE] rounded-md border-[1px] ">
                   <img src="src/assets/financial.png" alt="" className="ml-[5px]"/>
                   <p className="text-[#404A59] text-[14px] ">Get personalized financial insights and recommendations.</p>
                  </div>
                
                </div>

                <div className="flex justify-between mt-[80px] items-center ">
                  <input type="text" placeholder="Send your messege..." className="rounded-md  border-[1px] w-[1150px] h-[40px] ml-[20px]" />
                  <img src="src/assets/button.png" alt="" className="-translate-x-[45px]" />
                </div>


           </div>

        </div>
        </>
    )
}
export default Aiassistant;