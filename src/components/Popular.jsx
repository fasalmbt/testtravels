import React from 'react'

const Popular = ({ popularlinks }) => {
    return (
        <>
            <div className="flex flex-col items-center justify-center py-12">
                <h2 className="text-3xl font-extrabold text-gray-900">Our popular plans</h2>
                <p className="mt-4 text-gray-600 max-w-2xl text-center">Cherish the moments</p>
                {popularlinks.map((popularlink) => (
                    <div key={popularlink.name} className="mt-10 max-w-6xl w-full grid gap-5 lg:grid-cols-3 lg:max-w-none">
                        <div className="flex flex-row rounded-lg shadow-lg overflow-hidden">
                            <div className="flex-shrink-0">
                                <img className="h-48 w-full object-cover" src={popularlink.imgLink} alt="Plan 1" />
                            </div>
                            <div className="bg-white p-6 flex flex-col justify-between flex-1">
                                <div>
                                    <p className="text-sm font-medium text-indigo-600">
                                        <a href="#" className="hover:underline">
                                            {popularlink.name}
                                        </a>
                                    </p>
                                    <a href="#" className="block mt-2">
                                        <p className="text-xl font-semibold text-gray-900">
                                            {popularlink.desc}
                                        </p>
                                        <p className="mt-3 text-base text-gray-500">
                                            {popularlink.plan}
                                        </p>
                                    </a>
                                </div>
                                <div className="mt-6 flex items-center justify-between">
                                    <div className="flex items-center">
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
                    </div>
                ))}
            </div>
        </>
    )
}

export default Popular