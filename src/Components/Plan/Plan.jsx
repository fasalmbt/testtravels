import React from 'react'
import { BiLocationPlus } from 'react-icons/bi'
import { plan } from '../../Data/PlanData'

const Plan = () => {
  return (
    <div>
      <div className='flex justify-center flex-wrap items-center font-bold text-[20px] py-10'>
        <p className="text-[#000] items-center hover:text-blueColor">
          Popular plans
        </p>
      </div>
      <div className='plansContainer flex gap-10 justify-center flex-wrap items-center py-10'>
        {plan.map((item) => (
          <div className="group group/item singlePlan w-[250px] p-[20px] bg-white rounded-[10px] hover:bg-blueColor shadow-lg shadow-greyIsh-400/700 hover:shadow-lg">
            <span className="flex justify-between items-center gap-4">
              <h1 className="text-[16px] font-semibold text-textColor group-hover:text-white">
                {item.title}
              </h1>
              <span>
                <BiLocationPlus />
              </span>
            </span>
            <h6 className='text-[#ccc]'>
              {item.place}
            </h6>
            <p className='text-[13px] text-[#95959] pt-[20px] border-t-[2px] mt-[20px] group-hover:text-white'>
              {item.desc}
            </p>
            <div className="company flex items-center gap-2">
              <img className='w-[8%]' src={item.img} alt='Akbar travels logo' />
              <span className='text-[10px] py-[1rem] block group-hover:text-white'>
                {item.imgTxt}
              </span>
            </div>
            <button className="border-[2px] rounded-[10px] block p-[10px] w-full text-[14px] font-semibold text-textColor hover:bg-white group-hover/item:text-textColor group-hover:text-white">
              {item.btnTxt}
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Plan;