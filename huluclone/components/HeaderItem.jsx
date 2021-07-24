import Image from 'next/image'
import React from 'react'

function HeaderItem({ title, Icon }) {
    return (
        <div className='flex flex-col items-center cursor-pointer w-12 sm:w-20 hover:text-white group'>
            <Icon className="h-8 mb-1 group-hover:bounce-animation"/>
            <p className="tracking-widest opacity-0 group-hover:opacity-100">{title}</p>
        </div>
    )
}

export default HeaderItem
