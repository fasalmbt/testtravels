import React, { useState } from 'react'
import { AiOutlineCloseCircle, AiOutlineSearch } from 'react-icons/ai'

const Search = () => {
    const [searchValue, setsearchValue] = useState('');
    const [fromValue, setfromValue] = useState('');
    const [toValue, settoValue] = useState('')

    const handleSearchClose = () => {
        setsearchValue('');
    }
    const handleFromClose = () => {
        setfromValue('');
    }
    const handleToClose = () => {
        settoValue('');
    }

    return (
        <div className='searchDiv grid gap-10 bg-greyIsh rounded-[10px] p-[3rem]'>
            <form action="">
                <div className='firstDiv flex justify-between items-center rounded-[8px] gap-[10px] bg-white p-5 shadow-lg shadow-greyIsh-700'>
                    <div className="flex gap-2 items-center">
                        <AiOutlineSearch className='text-[25px] icon' />
                        <input
                            type="text"
                            value={searchValue}
                            onChange={(e) => setsearchValue(e.target.value)}
                            placeholder='Search Destination..'
                            className='bg-transparent text-blue-500 focus:outline-none w-[100%]'
                        />
                        {searchValue !== '' && (
                            <AiOutlineCloseCircle
                                onClick={handleSearchClose}
                                className='text-[30px] text-[#a5a6a6] hover:text-textColor icon'
                            />
                        )}
                    </div>
                    <div className="flex gap-2 items-center">
                        <input
                            type="date"
                            value={fromValue}
                            onChange={(e) => setfromValue(e.target.value)}
                            className='bg-transparent text-blue-500 focus:outline-none w-[100%]'
                        />
                        {fromValue !== '' && (
                            <AiOutlineCloseCircle
                                onClick={handleFromClose}
                                className='text-[30px] text-[#a5a6a6] hover:text-textColor icon'
                            />
                        )}
                    </div>
                    <div className="flex gap-2 items-center">
                        <input
                            type="date"
                            min={fromValue}
                            value={toValue}
                            onChange={(e) => settoValue(e.target.value)}
                            className='bg-transparent text-blue-500 focus:outline-none w-[100%]'
                        />
                        {toValue !== '' && (
                            <AiOutlineCloseCircle
                                onClick={handleToClose}
                                className='text-[30px] text-[#a5a6a6] hover:text-textColor icon'
                            />
                        )}
                    </div>
                    <button className='bg-blueColor h-full p-5 px-10 rounded-[10px] text-white cursor-pointer hover:bg-blue-300'>
                        Search
                    </button>
                </div>
            </form>
            <div className='secDiv flex items-center gap-10 justify-center'>
                <div className='singleSearch flex items-center gap-2'>
                    <label htmlFor='fare' className='text-[#808080] font-semibold'>
                        Sort by:
                    </label>
                    <select name="" id="fare" className='bg-white rounded-[3px] px-4 py-1'>
                        <option value="">Direct flight</option>
                        <option value="">Defence fare</option>
                        <option value="">Student fare</option>
                    </select>
                </div>
                <div className='singleSearch flex items-center gap-2'>
                    <label htmlFor='type' className='text-[#808080] font-semibold'>
                        Type:
                    </label>
                    <select name="" id="type" className='bg-white rounded-[3px] px-4 py-1'>
                        <option value="">Train tickets</option>
                        <option value="">Airline tickets</option>
                        <option value="">Cruise tickets</option>
                    </select>
                </div>
                <div className='singleSearch flex items-center gap-2'>
                    <label htmlFor='plan' className='text-[#808080] font-semibold'>
                        Plan:
                    </label>
                    <select name="" id="plan" className='bg-white rounded-[3px] px-4 py-1'>
                        <option value="">Student Plan</option>
                        <option value="">Honeymoon Plan</option>
                        <option value="">Family Plan</option>
                        <option value="">Holiday Plan</option>
                    </select>
                </div>
                <span className='text-[#a1a1a1] cursor-pointer'>
                    Clear All
                </span>
            </div>
        </div>
    )
}

export default Search
