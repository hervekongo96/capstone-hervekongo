import React from 'react'
import MyoeuvreTable from '../table/myoeuvreTable'

function Myoeuvres() {
    return (
        <div className='flex flex-col flex-auto w-full'>
           <div className="h-full">
                <div className="grid grid-cols-1 h-full">
                            <div className="col-span-2 flex justify-center items-center">
                                <div className="min-w-[500] px-8">
                                    <div className="mb-8 flex flex-col justify-center items-center">
                                        <h1 className="text-3xl font-medium">Your works in the site</h1>
                                    </div>
                                    <MyoeuvreTable />
                                </div>
                            </div>
                        </div>
                </div>
        </div>
    )
}

export default Myoeuvres