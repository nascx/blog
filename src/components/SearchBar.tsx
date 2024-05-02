
import React from 'react'

import { SearchOutline } from 'react-ionicons'

const SearchBar = () => {
    return (
        <div className='bg-[#17171A] flex flex-col w-full justify-center items-center sm:h-44'>
            <div className="flex flex-row justify-center items-center">
                <p className='text-white text-2xl font-medium'>Code</p>
                <p className='text-[#E07B67] text-2xl font-medium'>lândia</p>
            </div>
            <div className="flex items-center mt-4 bg-[#202024] rounded-xl sm:h-10 sm:w-80 border-[#252529] ">
                <div className="ml-5">
                    <SearchOutline color={'#E07B67'} />
                </div>
                <p className='text-[#AFABB6] text-sm ml-3'>Search in blog</p>
            </div>
        </div>
    )
}

export default SearchBar