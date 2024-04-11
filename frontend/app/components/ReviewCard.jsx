import React from 'react'

const ReviewCard = () => {
  return (
    <div className='text-black mb-[2rem]'>
      <div className='flex w-[10rem] justify-between'>
        <div className='h-[3rem] w-[3rem] rounded-[50%] bg-red-600 text-xl text-white flex items-center justify-center'>J</div>
        <div>
            <h4 className='mb-[0.5rem] font-bold text-md'>James albert</h4>
            <div className='flex relative bottom-[0.5rem]'>
                <img src="/filled.png" alt="" />
                <img src="/filled.png" alt="" />
                <img src="/filled.png" alt="" />
                <img src="/filled.png" alt="" />
                <img src="/outlined.png" alt="" />
            </div>
        </div>
      </div>
      <p className='pl-[3.5rem] pr-[3.5rem] mt-[0.5rem]'>
      The staff was great. The receptionists were very helpful and answered all our questions. The room was clean and bright, and the room service was always on time. Will be coming back! Thank you so much

      </p>
    </div>
  )
}

export default ReviewCard
