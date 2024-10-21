import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Header from './components/Header/Header'
import Bookmarks from './components/Bookmarks/Bookmarks'

function App() {
  const [bookmarks, setBookmarks] = useState([])
  const [readingTime, setReadingTime] = useState(0)
  const handleAddToBookmarks = (blog) => {
    // console.log('bookmarks adding soon');
    // console.log(blog);
    const newBookmarks = [...bookmarks, blog]
    setBookmarks(newBookmarks)
  }
  const handleMarkAsRead = (time) => {
    console.log('marking as read', time);
    setReadingTime(readingTime + time)
  }

  return (
    <>
     <Header></Header>   
     <div className='md:flex max-w-7xl mx-auto'>
     <Blogs handleAddToBookmarks = {handleAddToBookmarks} handleMarkAsRead = {handleMarkAsRead}></Blogs>
     <Bookmarks bookmarks = {bookmarks} readingTime = {readingTime}></Bookmarks>
     </div>
      
    </>
  )
}

export default App
