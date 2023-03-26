import React from 'react'

const HeroBan = ({ hero: { title, subTitle, text, btn1, btn2, img } }) => {

    return (
        <div className='flex flex-col bg-gradient-to-b from-blue-300 to-white h-auto w-auto'>
            <div className='travels-contaier grid items-start justify-items-center'>
                <div className='grid items-center justify-items-center mt-36 mb-16 md:mt-28 md:mb-12'>
                    <h1 className='text-7xl font-bold lg:text-6xl md:text-5xl sm:text:4xl xsm:text-3xl text-black drop-shadow-lg mb-2'>
                        {title}
                    </h1>
                    <h1 className='text-4xl font-bold lg:text-6xl md:text-5xl sm:text:4xl xsm:text-3xl text-black drop-shadow-lg'>
                        {subTitle}
                    </h1>
                    <p className='text-base my-5 text-center sm:text-sm'>
                        {text}
                    </p>
                    <div className="flex flex-col items-center bg-emerald-100 rounded-md shadow-lg px-6 py-4 mb-6">
                        <div className="w-full mb-2">
                            <label htmlFor="destination" className="sr-only">Destination</label>
                            <input type="text" id="destination" name="destination" placeholder="Where do you want to go?" className="w-full px-4 py-2 border border-transparent rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent" required />
                        </div>
                        <div className="w-full mb-2">
                            <label htmlFor="date" className="sr-only">Date</label>
                            <input type="date" id="date" name="date" className="w-full px-4 py-2 border border-transparent rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent" required />
                        </div>
                        <div className="w-full mb-2">
                            <label htmlFor="travelers" className="sr-only">Travelers</label>
                            <input type="number" id="travelers" name="travelers" min="1" placeholder="1" className="w-full px-4 py-2 border border-transparent rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent" required />
                        </div>
                        <div className="w-full">
                            <button type="submit" className="bg-emerald-600 hover:bg-emerald-700 text-white py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:ring-opacity-50 shadow-md w-full">Search</button>
                        </div>
                    </div>
                    <div className='flex items-center justify-center gap-11 sm:gap-3 sm:flex-col sm:w-full'>
                        <button type='button' className='button-emrald'>
                            {btn1}
                        </button>
                        <button type='button' className='button-emrald'>
                            {btn2}
                        </button>
                    </div>
                </div>
                <div className='flex items-center justify-center mb-11'>
                    <img src={img} alt='place_image' className='h-[60vh] w-full object-fill lg:h-[70vh] md:h-[56vh] sm:h-[35vh] sm:object-contain drop-shadow-emrald' />
                </div>
            </div>
        </div>
    )
}

export default HeroBan