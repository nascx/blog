import React, { useState } from 'react'

import { HeartOutline } from 'react-ionicons'

import { Heart } from 'react-ionicons'

type CommentCardProps = {
    date: string
    title : string,
    content : string
}

const CommentCard = ({ date, title, content } : CommentCardProps ) => {

    const [liked, setLiked] = useState<boolean>(false)

    const handleLike = () => {
        setLiked((state => !state ))
    }

    return (
        <div className={`flex flex-col px-6 py-5 rounded-lg border sm:w-80 shadow-inner ${liked ? 'border-[#E07B67]' : 'border-[#252529]'} md:w-11/12 `}>
            <div className="flex justify-between items-start w-full text-[#E07B67] sm:text-sm ">
                <p>{date}</p>
                {
                    liked ? <Heart color={'#E07B67'} onClick={handleLike} cssClasses={'cursor-pointer'}/> : <HeartOutline color={'#E07B67'} onClick={handleLike} cssClasses={'cursor-pointer'}/> 
                }
            </div>
            <h1 className="text-white text-xl font-bold mt-6">{title}</h1>
            <p className='text-[#AFABB6] mt-6 text-sm'>{content}</p>
        </div>
    )
}

export default CommentCard