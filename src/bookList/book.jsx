import React from 'react'

export default function book ({ title, author, year }) {
    
        return (
            <>
                <tr className='backdrop-blur-md hover:bg-white/30 transition-colors flex gap-20 capitalize justify-around items-center'>
                    <td className='py-4 px-6'>{title}</td>
                    <td className='py-4 px-6'>{author}</td>
                    <td className='py-4 px-6'>{year}</td>
                </tr>
            </>
        )
    }

