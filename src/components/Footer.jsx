import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <>
      <footer className='bg-gradient-to-b from-emerald-400 to-green-300 pt-24 pb-7'>
        <div className='w-7/12 lg:w-[95vw] m-auto mt-9'>
          <div className='h-[0.1vh] bg-black/30 my-7 md:my-5'></div>
          <div className='flex flex-col-reverse items-center justify-between px-7 md:px-0 md:gap-5 md:flex-row'>
            <p className='text-sm md:text-center'>
              Copyright &copy; All Reserved Rights 2023 
              <span className='font-semibold'> Test travels</span>
            </p>
            <div className='flex items-center space-x-4'>
              <a href='https://www.facebook.com/' target='_blank' rel='noopener noreferrer'>
                <FontAwesomeIcon icon={faFacebook} className='text-lg text-black/60 hover:text-blue-600 transition-colors duration-300' />
              </a>
              <a href='https://twitter.com/' target='_blank' rel='noopener noreferrer'>
                <FontAwesomeIcon icon={faTwitter} className='text-lg text-black/60 hover:text-blue-400 transition-colors duration-300' />
              </a>
              <a href='https://www.instagram.com/' target='_blank' rel='noopener noreferrer'>
                <FontAwesomeIcon icon={faInstagram} className='text-lg text-black/60 hover:text-pink-600 transition-colors duration-300' />
              </a>
              <a href='https://www.linkedin.com/' target='_blank' rel='noopener noreferrer'>
                <FontAwesomeIcon icon={faLinkedin} className='text-lg text-black/60 hover:text-blue-700 transition-colors duration-300' />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer