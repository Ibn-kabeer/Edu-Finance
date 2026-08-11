import React, { useState } from 'react';
const Notifications = () => {
    const [emailNotification, setEmailNotification] = useState('yes');
  const [newsUpdates, setNewsUpdates] = useState({
    offers: true,
    tips: true,
    newsletter: false,
  });

    return (
     
        <>
  <div className='p-[50px]'>
    <h2 className="text-[16px] font-Inter font-semibold mb-[4px] text-[#8896AA]">Notification</h2>
                 <hr />
      <div className='mt-[20px] h-[220px] justify-between border p-[14px]  items-center'>
        <h2 className="text-xl font-semibold text-gray-800 mt-[10px]">Email Notifications</h2>
        <p className="text-gray-500 mt-1">
          Lorem ipsum dolor sit amet consectetur. Nec mus arcu enim egestas vulputate lacinia elit dolor facilisi. Purus viverra aliquet duis velit cursus sit et fermentum vitae.
        </p>
        <div className="mt-4 space-y-2">
          <label className="flex items-center space-x-3">
            <input
              type="radio"
              name="emailNotification"
              value="yes"
              checked={emailNotification === 'yes'}
              onChange={() => setEmailNotification('yes')}
              className="form-radio text-green-600"
            />
            <span>Send me email notifications</span>
          </label>
          <label className="flex items-center space-x-3">
            <input
              type="radio"
              name="emailNotification"
              value="never"
              checked={emailNotification === 'never'}
              onChange={() => setEmailNotification('never')}
              className="form-radio text-green-600"
            />
            <span>Never</span>
          </label>
        </div>
      </div>

      <div className='mt-[20px] h-[230px] justify-between border  p-[14px]  items-center'>
        <h2 className="text-xl font-semibold text-gray-800">News & Updates</h2>
        <p className="text-gray-500 mt-1">
          Lorem ipsum dolor sit amet consectetur. Nec mus arcu enim egestas vulputate lacinia elit dolor facilisi. Purus viverra aliquet duis velit cursus sit et fermentum vitae.
        </p>
        <div className="mt-4 space-y-2">
          <label className="flex items-center space-x-3">
            <input
              type="checkbox"
              checked={newsUpdates.offers}
              onChange={() =>
                setNewsUpdates((prev) => ({ ...prev, offers: !prev.offers }))
              }
              className="form-checkbox text-green-600"
            />
            <span>Offers and Promotions</span>
          </label>
          <label className="flex items-center space-x-3">
            <input
              type="checkbox"
              checked={newsUpdates.tips}
              onChange={() =>
                setNewsUpdates((prev) => ({ ...prev, tips: !prev.tips }))
              }
              className="form-checkbox text-green-600"
            />
            <span>Tips and Tricks</span>
          </label>
          <label className="flex items-center space-x-3">
            <input
              type="checkbox"
              checked={newsUpdates.newsletter}
              onChange={() =>
                setNewsUpdates((prev) => ({ ...prev, newsletter: !prev.newsletter }))
              } 
              className="form-checkbox text-green-600"
            />
            <span>Newsletter</span>
          </label>
        </div>
      </div>
    
     </div>
        </>

    )


   }

export default Notifications;