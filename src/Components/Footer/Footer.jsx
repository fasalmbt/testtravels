import React from 'react'
import { AiFillPhone, AiFillMail, AiFillFacebook, AiFillInstagram, AiFillTwitterSquare, AiFillYoutube } from 'react-icons/ai'
import { CiLocationOn } from 'react-icons/ci'

const Footer = () => {
  return (
    <>
      <div className='footer p-[5rem] mb-4 ml-7 mr-7 bg-blueColor rounded-[10px] gap-[10] grid grid-cols-5 m-auto items-center justify-center'>
        <div>
          <div className='logoDiv'>
            <h1 className='logo text-[25px] text-white'>
              <strong>Fasal </strong>Travels
            </h1>
          </div>
          <p className='text-white pb-[13px] opacity-70 leading-7'>
            When you choose us, all you need to do is turn up at the airport with your bags and go!
          </p>
        </div>
        <div className="grid ml-3">
          <span className="divTitle text-[18px] font-semibold pb-[1.5rem] text-white">
            Company
          </span>
          <div className="grid-gap-3">
            <li className='text-white opacity-[.7] hover:opacity-[1]'>
              About us
            </li>
            <li className='text-white opacity-[.7] hover:opacity-[1]'>
              Careers
            </li>
            <li className='text-white opacity-[.7] hover:opacity-[1]'>
              Download mobile app
            </li>
          </div>
        </div>
        <div className="grid ml-3">
          <span className="divTitle text-[18px] font-semibold pb-[1.5rem] text-white">
            Quick links
          </span>
          <div className="grid-gap-3">
            <li className='text-white opacity-[.7] hover:opacity-[1]'>
              Air tickets
            </li>
            <li className='text-white opacity-[.7] hover:opacity-[1]'>
              Bus tickets
            </li>
            <li className='text-white opacity-[.7] hover:opacity-[1]'>
              Flight schedule
            </li>
            <li className='text-white opacity-[.7] hover:opacity-[1]'>
              Partner login
            </li>
            <li className='text-white opacity-[.7] hover:opacity-[1]'>
              IRCTC agent
            </li>
          </div>
        </div>
        <div className="grid ml-3">
          <span className="divTitle text-[18px] font-semibold pb-[1.5rem] text-white">
            Contact info
          </span>
          <div className="grid-gap-3">
            <li className='text-white opacity-[.7] hover:opacity-[1]'>
              <AiFillPhone />123-456-7890
            </li>
            <li className='text-white opacity-[.7] hover:opacity-[1]'>
              <AiFillMail />ft@fasaltravel
            </li>
            <li className='text-white opacity-[.7] hover:opacity-[1]'>
              <CiLocationOn />Parellel city,parellel state, parellel country
            </li>
          </div>
        </div>
        <div className="grid ml-3">
          <span className="divTitle text-[18px] font-semibold pb-[1.5rem] text-white">
            Our socials
          </span>
          <div className="grid-gap-3">
            <li className='text-white opacity-[.7] hover:opacity-[1]'>
              <AiFillFacebook /> fttravels
            </li>
            <li className='text-white opacity-[.7] hover:opacity-[1]'>
              <AiFillInstagram /> fasal_travels
            </li>
            <li className='text-white opacity-[.7] hover:opacity-[1]'>
              <AiFillTwitterSquare /> ftravels
            </li>
            <li className='text-white opacity-[.7] hover:opacity-[1]'>
              <AiFillYoutube /> ftravelss_
            </li>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer