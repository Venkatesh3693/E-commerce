import React from 'react'
import { FaShippingFast, FaHeadset, FaMoneyBillWave, FaLock, FaTag } from 'react-icons/fa'

const InfoSection = () => {
    const infoItems=[
        {
            icon: <FaShippingFast className="text-3x1 text-red-600"/>,
            title:'Free Shipping',
            description:'get your oders delivered with no extra cost',
        },
        {
            icon: <FaHeadset className="text-3x1 text-red-600"/>,
            title:'24/7 Support',
            description:'we ensure secure payment with our payment gateway',
        },
        {
            icon:<FaMoneyBillWave className="text-3x1 text-red-600"/>,
            title: '100% Money Back',
            description: 'Full refund if you are not satisfied',
        },
        {
            icon:<FaLock className="text-3x1 text-red-600"/>,
            title: 'Secure Payment',
            description: 'we ensure secure payment with our payment gateway',
        },
        {
            icon:<FaTag className="text-3x1 text-red-600"/>,
            title:'Discount',
            description:'Enjoy the best prices on the market',
        }
    ]
  return (
    <div className='bg-white pb-8 pt-12'>
      <div className='container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4'>
         {infoItems.map((item,index)=>(
            <div key={index} className='flex flex-col items-center p-4 border rounded-lg shadow-md transform transition-transform duration-300 hover:scale-105 cursor-pointer'>
                {item.icon}
                <h3 className='mt-4 text-xl font-semibold'>{item.title}</h3>
                <p className='mt-2 text-grey-600'>{item.description}</p>
            </div>
         ))}
      </div>
    </div>
  )
}

export default InfoSection
