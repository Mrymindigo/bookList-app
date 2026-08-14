import React, { Component } from 'react'
import { BookOpen } from 'lucide-react';

export default function Header(){
    return (
     <>
      <h1 className="header flex justify-center items-center text-3xl py-4 uppercase text-[#370537] gap-1 focus:outline-none focus:ring-0 focus:border-transparent">
            <BookOpen />
            <span className='text-pink-700'>book</span>
            list
          </h1>
     </>
    )
  }
