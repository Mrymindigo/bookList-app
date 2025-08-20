import React, { Component } from 'react'
import { BookOpen } from 'lucide-react';

export default class BookList extends Component {
  render() {
    return (
      <>
        <section className="bookListSection w-full flex flex-col bg-[#e1c3e1a3]">
          <h1 className="header flex justify-center items-center text-3xl py-4 uppercase text-[#370537] gap-1">
            <BookOpen />
            <span className='text-pink-700'>book</span>
            list
          </h1>

          <div className="bookListContainer flex w-[95%] h-screen">
            <div className='w-[40%] flex flex-col gap-24 items-center'>
              <form action="#" className='flex flex-col w-[90%]  bg-[#ffffffe2] p-4 gap-4 shadow-lg rounded-xl'>
                <input type="text"
                  placeholder='Title'
                  name='title'
                  className='flex bg-[#eebfe85c] rounded-sm py-2 px-4'
                />
                <div className='flex gap-4 w-full sm:flex-wrap'>
                  <input type="text"
                    placeholder='Author'
                    name='author'
                    className='flex bg-[#eebfe85c] rounded-sm p-4 py-2 px-4 flex-1'
                  />
                  <input type="text"
                    placeholder='Year'
                    name='year'
                    className='flex bg-[#eebfe85c] rounded-sm p-4 py-2 px-4 flex-1'
                  />
                </div>
                <input type="submit"
                  value={'add to lists'}
                  className='flex bg-[#cb3bf35c] rounded-sm p-4 py-2 px-4 hover:bg-[#8b5999b3] hover:text-amber-50 delay-[.3s] cursor-pointer uppercase text-pink-900' />
              </form>
              <img src="public/media/books-img-removebg-preview.png"
                alt="book image"
                className='w-[250px] h-[250px]' />
            </div>
            <table className='bg-[#faf6f3b3] w-[60%] h-[80%] flex flex-col shadow-lg rounded-xl table-auto overflow-hidden'>
              <thead>
                <tr className='bg-[#c9b0d4bf] flex gap-20 justify-around items-center'>
                  <th className='py-4 text-left px-6 text-purple-950 capitalize'>title</th>
                  <th className='py-4 text-left px-6 text-purple-950 capitalize'>author</th>
                  <th className='py-4 text-left px-6 text-purple-950 capitalize'>year</th>
                </tr>
              </thead>
              <tbody>
                <tr className='backdrop-blur-md hover:bg-white/30 transition-colors flex gap-20 capitalize justify-around items-center'>
                  <td className='py-4 px-6'>Witchy Woman</td>
                  <td className='py-4 px-6'>The Eagles</td>
                  <td className='py-4 px-6'>1972</td>
                </tr>
                <tr className='backdrop-blur-md hover:bg-white/30 transition-colors flex gap-20 justify-around items-center'>
                  <td className='py-4 px-6'>Witchy Woman</td>
                  <td className='py-4 px-6'>The Eagles</td>
                  <td className='py-4 px-6'>1972</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </>
    )
  }
}
