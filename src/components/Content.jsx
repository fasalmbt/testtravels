import React from 'react'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const handleClick = (coupon) => {
    navigator.clipboard.writeText(coupon);
    toast.success(`Coupon ${coupon} copied!`, {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 3000,
        hideProgressBar: true,
    });
};

const Content = ({ contentlinks }) => {

    return (
        <div className="flex flex-col items-center justify-center py-12">
            <h2 className="text-3xl font-extrabold text-gray-900">Exclusive Deals</h2>
            <p className="mt-4 text-gray-600 max-w-2xl text-center">Get these amazing deals while they last!</p>
            <div className="mt-10 max-w-6xl w-full grid gap-5 lg:grid-cols-3 lg:max-w-none">
                {contentlinks.map((contentlink) => (
                    <div key={contentlink.couponcode} className="flex flex-row rounded-lg shadow-lg overflow-hidden">
                        <div className="flex-shrink-0">
                            <img className="h-48 w-full object-cover" src={contentlink.imgLink} alt="Coupon 1" />
                        </div>
                        <div className="bg-white p-6 flex flex-col justify-between flex-1">
                            <div>
                                <p className="text-sm font-medium text-indigo-600">
                                    <a href="#" className="hover:underline">
                                        {contentlink.category}
                                    </a>
                                </p>
                                <a href="#" className="block mt-2">
                                    <p className="text-xl font-semibold text-gray-900">
                                        {contentlink.couponcode}
                                    </p>
                                    <p className="mt-3 text-base text-gray-500">
                                        {contentlink.desc}
                                    </p>
                                </a>
                            </div>
                            <div className="mt-6 flex items-center justify-between">
                                <div className="flex items-center">
                                    <div className="flex-shrink-0">
                                        <button onClick={() => handleClick(contentlink.couponcode)}>
                                            <span className="sr-only">Copy</span>
                                            <svg className="h-6 w-6 text-gray-400 hover:text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6H3a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2v-1M16 2H6a2 2 0 00-2 2v10M16 2v6h6M10 14L21 3" />
                                            </svg>
                                        </button>
                                    </div>
                                    <div className="ml-3">
                                        <a href="" className="text-sm font-medium text-indigo-600 hover:underline">
                                            Book now
                                            <span aria-hidden="true"> &rarr;</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Content
