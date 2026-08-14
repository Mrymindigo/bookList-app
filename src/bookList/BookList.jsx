import React, { useState } from 'react'
import Header from './Header'
import Book from './book'

export default function BookList() {

  const [books , setBooks]= useState([])
  const [title , setTitle]=useState("")
  const[author , setAuthor]=useState("")
  const[year , setYear]=useState("")

  

  const submitHandler =(event) => {
    event.preventDefault()

    if(title && author && year){
      let newBook ={
        id: books.length +1 ,
        title,
        author,
        year
      }
      
      //add new books to list and show previous books
      setBooks(prevState =>{
        return [...prevState , newBook]
      })

      //class version
      // this.setState({
      //   book : [...this.state.book , newBook]
      // })


      //emety inputs
      setTitle('')
      setAuthor('')
      setYear('')

      // this.setState({
      //   title:'',
      //   author :'',
      //   year : ''
      // })
    }
  }

  const titleHandler=(event)=>{
    setTitle(event.target.value)

    // this.setState({
    //   title:event.target.value
    // })
  }

  const authorHandler=(event)=>{
    setAuthor(event.target.value)

    // this.setState({
    //   author:event.target.value
    // })
  }

  const yearHandler=(event)=>{
    setYear(event.target.value)

    // this.setState({
    //   year:event.target.value
    // })
  }

    return (
      <>
        <section className="bookListSection w-full flex flex-col bg-[#e1c3e1a3]">
         <Header />
          <div className="bookListContainer flex flex-col md:flex-row w-[95%] h-screen">
            <div className='w-full md:w-[40%] flex flex-col gap-12 md:gap-24 items-center'>
              <form action="#"
               className='flex flex-col w-[90%]  bg-[#ffffffe2] p-4 gap-4 shadow-lg rounded-xl'
               onSubmit={submitHandler}>
                <input type="text"
                  placeholder='Title'
                  name='title'
                  value={title}
                  onChange={titleHandler}
                  className='flex bg-[#eebfe85c] rounded-sm py-2 px-4 focus:outline-none focus:ring-0 focus:border-transparent'
                />
                <div className='flex gap-4 w-full sm:flex-wrap'>
                  <input type="text"
                    placeholder='Author'
                    name='author'
                    value={author}
                    onChange={authorHandler}
                    className='flex bg-[#eebfe85c] rounded-sm p-4 py-2 px-4 flex-1 focus:outline-none focus:ring-0 focus:border-transparent'
                  />
                  <input type="text"
                    placeholder='Year'
                    name='year'
                    value={year}
                    onChange={yearHandler}
                    className='flex bg-[#eebfe85c] rounded-sm p-4 py-2 px-4 flex-1 focus:outline-none focus:ring-0 focus:border-transparent'
                  />
                </div>
                <input type="submit"
                  value={'add to list'}
                  className='flex bg-[#cb3bf35c] rounded-sm p-4 py-2 px-4 hover:bg-[#8b5999b3] hover:text-amber-50 delay-[.3s] cursor-pointer uppercase text-pink-900' />
              </form>
              <img src="public/media/books-img-removebg-preview.png"
                alt="book image"
                className='w-[250px] h-[250px]' />
            </div>
            <table className='bg-[#faf6f3b3] w-full md:w-[60%] md:h-[80%] flex flex-col shadow-lg rounded-xl table-auto overflow-hidden'>
              <thead>
                <tr className='bg-[#c9b0d4bf] flex gap-20 justify-around items-center'>
                  <th className='py-4 text-left px-6 text-purple-950 capitalize'>title</th>
                  <th className='py-4 text-left px-6 text-purple-950 capitalize'>author</th>
                  <th className='py-4 text-left px-6 text-purple-950 capitalize'>year</th>
                </tr>
              </thead>
              <tbody>
                {books.map(book =>(
                  <Book {...book} key={book.id}/>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </>
    )
  }

