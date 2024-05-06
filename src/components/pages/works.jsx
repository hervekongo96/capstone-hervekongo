import React from 'react'
import WorksTable from '../table/worksTable'

function Works() {
  return (
    <div className='flex flex-col flex-auto w-full'>
       <div className="h-full">
            <div className="grid grid-cols-1 h-full">
                        <div className="col-span-2 flex justify-center items-center">
                            <div className="min-w-[500] px-8">
                                <div className="mb-8 flex flex-col justify-center items-center">
                                    <h1 className="text-3xl font-medium">All project in the site</h1>
                                </div>
                                <WorksTable />
                            </div>
                        </div>
                    </div>
            </div>
    </div>
  )
}

export default Works