
   const Account = () => {
    
    return (
     
        <>
             <div className="bg-white w-full max-w-2xl p-6">
                 <h2 className="text-[16px] font-Inter font-semibold mb-6 text-[#8896AA]">Account Information</h2>
                 <hr />

{/* Password */}
    <div className="mt-[15px] flex justify-between border h-[55px] p-[14px]  items-center">
      <label className="block font-semibold text-gray-700 mb-1">Password</label>
      <button className="text-[#2B323B] text-[12px] font-semibold border-[1px] h-[28px] border-[#E1E5EA] rounded-md bg-[#F0F2F4] w-[52px] hover:underline">Show</button>
    </div>

    {/* Email Address */}
    <div  className="mt-[15px] flex justify-between border h-[77px] p-[14px]  items-center">
        <div className="grid">
      <label className="block font-semibold text-gray-700 mb-1">Email Address</label>
      <p className="text-[#8896AA] text-[14px] ">Your email address is max@gmail.com</p>
      </div>
      <button  className="text-[#2B323B] text-[12px] font-semibold border-[1px] h-[28px] border-[#E1E5EA] rounded-md bg-[#F0F2F4] w-[52px] hover:underline">Show</button>
    </div>

    {/* Language */}
    <div className="mt-[15px] flex justify-between border h-[95px] p-[14px]  items-center">
        <div className="grid">
      <label className="block font-semibold text-gray-700 mb-1">Language</label>
      <p className="text-[#8896AA] ">
        Choose the language you’d like to use with Substance. Your language is currently set to: <strong>English (US)</strong>
      </p>
      </div>
      <div className="mb-[40px]">
              <button className="text-[#2B323B] text-[12px]  font-semibold border-[1px] h-[28px] border-[#E1E5EA] rounded-md bg-[#F0F2F4] w-[52px] hover:underline">
        Show
      </button>
      </div>
    </div>

    {/* Delete Account */}
    <div className="mt-[15px]  justify-between border h-[206px] border-[#F0F2F4] p-[14px]  items-center">
      <label className="block font-semibold text-red-700 mb-2">Delete your account</label>
      <p className="text-[#8896AA] mb-3">
        When you delete your account, you lose access to account services, and we permanently delete your personal data. You can cancel the deletion for 14 days.
      </p>
      <div className="flex justify-between mt-[9px]">
      <div className="flex items-center mb-4">
        <input type="checkbox" id="confirm" className="mr-2 h-[20px]" />
        <label htmlFor="confirm" className="text-sm text-gray-700">Confirm that I want to delete my account.</label>
      </div>
      <button className="bg-red-600 text-white  rounded-full w-[250px] hover:bg-red-700 transition">
        Delete Account
      </button>
      </div>
    </div>
  </div>


        </>

    )


   }

export default Account;