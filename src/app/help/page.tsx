import React from 'react'
import { FaSearch } from "react-icons/fa";



const page = () => {
  return (
    <div className=''>
        <div className='flex flex-col justify-center items-center gap-3'>
      <h1 className='font-bold  text-xl'>GET HELP</h1>
      <div className=' '>
      <input
                type="email"
                placeholder="What can we help you with?"
                className="w-64 px-4 py-3 border border-gray-300 rounded-md focus:ring-black focus:border-black"
                required

              />
             <FaSearch className=" absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500" />
              </div>
      </div>
      <div className='flex justify-center mt-14'>
        <div className='w-[1100px] flex flex-col gap-4'>
            <h1 className='text-xl font-semibold'>WHAT PAYMENT OPTIONS CAN I USE ON NIKE ORDERS?</h1>
            <p>We want to make buying your favourite Nike shoes and gear online fast and easy, and we accept the following payment options:</p>
            <p className='pl-8'>Visa, Mastercard, Diners Club, Discover, American Express, Visa Electron, Maestro</p>
            <p className='pl-8'>If you enter your PAN information at checkout, you'll be able to pay for your order with PayTM or a local credit or debit card.</p>
            <p className='pl-8'>Apple Pay</p>
            <p>Nike Members can store multiple debit or credit cards in their profile for faster checkout. If you're not already a Member, join us today.</p>
            <div className='flex gap-3'>
    <button className='rounded-full  w-28 h-9 bg-black text-white '>JOIN US</button>
    <button className='rounded-full  w-32 h-9 bg-black text-white  '>SHOP NIKE</button>
    </div>
    <div className='flex flex-col gap-4'>
        <h1 className='font-bold'>FAQs</h1>
        <p className='font-semibold'>Dose my card need international purchases enabled?</p>
        <p>Yes, we recommend asking your bank to enable international purchases on your card. You will be notified at checkout if international purchases need to be enabled.</p>
        <p>Please note, some banks may charge a small transaction fee for international orders.</p>
    </div>
<div className='flex flex-col gap-3'>
<h1 className='font-semibold'>Can I pay for my order with multiple methods?</h1>
<p>No, payment for Nike orders can't be split between multiple payment methods.</p>
</div>
<div className='flex flex-col gap-3'>
<h1 className='font-semibold'>What payment method is accepted for SNKRS orders?</h1>
<p>You can use any accepted credit card to pay for your SNKRS order.</p>
</div>

<div className='flex flex-col gap-3'>
<h1 className='font-semibold'>Why don't I see Apple Pay as an option?</h1>
<p>To see Apple Pay as an option in the Nike App or on Nike.com, you'll need to use a compatible Apple device running the latest OS, be signed in to your iCloud account and have a supported card in your Wallet. Additionally, you'll need to use Safari to use Apple Pay on Nike.com.</p>
</div>
<div>
    <h1>Was this answer helpful?</h1>
    <button>
    <img src="/upthumb.png" alt=""  className='h-[30px] w-[30px] ml-2'/>
    </button>
    <button>
    <img src="/downthumb.png" alt=""  className='h-[30px] w-[30px]'/>
    </button>
</div>
<div className='flex flex-col gap-4 mb-10'>
    <h1 className='text-gray-400'>RELATED</h1>
    <a href="#" className='underline pl-10'>WHAT ARE NIKE'S DELIVERY OPTIONS?</a>
    <a href="#" className='underline pl-10'>HOW DO I GET FREE DELIVERY ON NIKE ORDERS?</a>
</div>

        </div>
        <div className=' w-[314px] flex flex-col gap-3 border-l border-gray-300'>
            <h1 className='font-bold  text-xl text-center'>CONTACT US</h1>
            <div className='flex flex-col gap-4 justify-center items-center'>
                <div className=' w-44 h-60 flex flex-col justify-center items-center gap-2'>
                    <img src="/phone.png" alt="" className='w-[64px] h-[64px]' />
                    <p className='text-center'>000 800 919 0566</p>
                    <p className='text-center'>Products & Orders: 24 hours a day, 7 days a week
                    Company Info & Enquiries: 07:30 - 16:30, Monday - Friday</p>
                </div>
                <div className=' w-44 h-40 flex flex-col justify-center items-center gap-2'>
                <img src="/msg.png" alt="" className='w-[64px] h-[64px]' />
                <p>24 hours a day</p>
                <p>7 days a week</p>
                </div>
                <div className='w-44 h-40 flex flex-col justify-center items-center gap-2'>
                <img src="/mail.png" alt="" className='w-[64px] h-[64px]' />
                <p>We'll reply within</p>
                <p>five business days</p>
                </div>
                <div className=' w-44 h-40 flex flex-col justify-center items-center gap-2'>
                <img src="/location.png" alt="" className='w-[64px] h-[64px]' />
                <p>STORE LOCATOR</p>
                <p className='text-center'>Find Nike retail stores near you</p>
                </div>
               
            </div>
        </div>
      </div>
    </div>
  )
}

export default page
