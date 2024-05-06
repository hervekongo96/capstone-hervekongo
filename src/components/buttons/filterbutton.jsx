import React from 'react'

function Filterbutton() {
  return (
    <button className="px-4 py-2 rounded border bg-white text-black mt-4 sm:mt-0 sm:order-3 flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-5 w-5 mr-1">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 6h10M5 14h14m-2 4h-10" />
            </svg>
        Filter
    </button>
  )
}

export default Filterbutton