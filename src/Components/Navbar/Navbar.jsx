import React from 'react'

const Navbar = () => {
    return (
        <div className='navBar flex justify-between items-center p-[3rem]'>
            <div className='logoDiv'>
                <h1 className='logo text-[25px] text-blueColor'>
                    <strong>Fasal </strong>Travels
                </h1>
            </div>
            <div className='menu flex gap-8'>
                <li className="menuList text-[#6f6f6f] hover:text-blueColor">
                    Airline tickets
                </li>
                <li className="menuList text-[#6f6f6f] hover:text-blueColor">
                    IRCTC
                </li>
                <li className="menuList text-[#6f6f6f] hover:text-blueColor">
                    Hajj/Umra
                </li>
                <li className="menuList text-[#6f6f6f] hover:text-blueColor">
                    Holidays
                </li>
                <li className="menuList text-[#6f6f6f] hover:text-blueColor">
                    Login/Register
                </li>
            </div>
        </div>
    )
}

export default Navbar