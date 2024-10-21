
import PropTypes from 'prop-types';

import { FaBookmark } from 'react-icons/fa';
const Blog = ({blog, handleAddToBookmarks, handleMarkAsRead}) => {
    // console.log(blog);
    const {title, cover, reading_time, author, author_img, posted_date, hashtags} = blog;
    return (
        <div className='mb-20'>
            <img className='w-full mb-8' src={cover} alt={`cover of the ${title}`} />
            <div className="flex justify-between">

                <div className='flex mb-4 space-y-4'>
              <img className='w-14' src={author_img} alt="" />
              <div className='ml-6'>
                <h3 className='text-2xl'>{author}</h3>
                <p>{posted_date}</p>
              </div>
                </div>
                <div>
               <span>{reading_time} min read</span>
            
               <button className='ml-2 text-red-600 text-2xl' onClick={() =>handleAddToBookmarks(blog)}><FaBookmark></FaBookmark></button>
                </div>
            </div>
         <h2 className="text-4xl mb-4">{title}</h2>
         <p>
           {
             hashtags.map((hash, idx) => <span  key={idx}><a href=''>#{hash}</a></span> )
           }
         </p>
         <button className='text-purple-800 font-bold underline' onClick={() => handleMarkAsRead(reading_time)}>Mark As Read</button>
            
        </div>
    );
};
Blog.propTypes = {
    blog:PropTypes.object.isRequired,
    handleAddToBookmarks: PropTypes.func.isRequired,
    handleMarkAsRead: PropTypes.func.isRequired
}

export default Blog;