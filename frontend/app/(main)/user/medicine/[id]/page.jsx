import React from 'react'
import ReviewCard from '../../../../components/ReviewCard'
// import pencil from 'lucide-react'
import {Pencil} from 'lucide-react'
import Link from "next/link"

const page = () => {
  return (
    <div className='absolute left-[15vw] w-[85vw] h-[100%] bg-[#E1EEFF] p-[3rem]'>
      <div className='w-full bg-[#FFFFFF] h-full overflow-auto  p-[2rem]'>
        <div className='flex'>
        <div className='w-2/3 font-[Nunito Sans] text-black'>
          <h4 className='text-[3rem] '>Paracetamol</h4>
          <p className='text-[1.2rem] mt-[0.3rem]'>Delivery within <span className='text-[#0360D9]'>2 days</span></p>
          <p className='text-[1.2rem] mt-[0.3rem]'> Shastri Nagar, Meerut</p>
          <div className='flex justify-evenly relative w-[6rem] mt-[0.3rem]'>
            <img src="/filled.png" alt="" />
            <img src="/filled.png" alt="" />
            <img src="/filled.png" alt="" />
            <img src="/filled.png" alt="" />
            <img src="/outlined.png" alt="" />
        </div>
        <p className='mt-[3rem] text-[1.4rem]'>Lörem ipsum infrara dra ett streck i sanden, safariforskning pogigt och syr dektiga klimatneutral. Sölig semill, inte primagram antingar kaliga suling dire plasade. Ekofas mobillångfilm att rerade rädeherad pseudostik, ikigai, även om dis tegisk content marketing. Abstik polyfoni tigt previs och epibel sudarad peräligt i radioitet seminera.</p>
        <div className='flex w-full justify-between mt-[4rem]'>
          <div className='text-[1.2rem]'>
            <p>Price: <span>$44</span> </p>
            <label className='mt-[0.3rem] mr-[1rem]'>Quantity:</label>
            <select id="quantity">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>
          </div>
          <button className='bg-[#0360D9] p-[1rem] w-[8rem] rounded-md text-[#FFFFFF] text-[1.2rem]' >Buy Now</button>
        </div>
        </div>
        <div>
          <img src="/medicine.png" alt="" />
        </div>
        </div>
        <div className='mt-[2.5rem] flex w-full justify-between items-center'>
        <h2 className='text-3xl text-black  '>Reviews:</h2>
        <Link href="/user/medicine/id/writereview">
        <button className='bg-[#0360D9] p-[1rem] w-[9rem]  rounded-md text-[#FFFFFF] text-[1.3rem] flex items-center justify-around'>
          <Pencil/>
          <span>Write</span>
        </button>
        </Link>

        </div>
        <div className='mt-[2rem]'>
        <ReviewCard/>
        <ReviewCard/>
        <ReviewCard/>
        <ReviewCard/>
      </div>

      </div>
      
    </div>
  )
}

export default page
