
import React from 'react'

import { SearchOutline } from 'react-ionicons'

const SearchBar = () => {
    return (
        <div className='bg-[#17171A] flex flex-col w-full justify-center items-center h-52 shadow-inner cursor-text '>
            <div className="flex flex-row justify-center items-center">
                <p className='text-white text-2xl font-medium'>Code</p>
                <p className='text-[#E07B67] text-2xl font-medium'>lândia</p>
            </div>
            <div className="flex items-center mt-4 bg-[#202024] rounded-xl h-12 w-11/12 border-[#252529] xl:w-10/12">
                <div className="ml-5 cursor-pointer">
                    <SearchOutline color={'#E07B67'} />
                </div>
                <input className='text-[#AFABB6] text-sm ml-3 bg-transparent w-full h-full appearance-none focus:outline-none' placeholder='Search in blog'/>
            </div>
        </div>
    )
}

export default SearchBar