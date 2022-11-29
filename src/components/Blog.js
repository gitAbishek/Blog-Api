import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";

import BlogApi from '../BlogApi/BlogApi'


import { Heading } from '@chakra-ui/react'

const Blog = () => {

  const navigate = useNavigate()

  const [blog] = useState(BlogApi)

  const mainpage = (id) => {

    navigate(`/blogdetails/${id}`);
    console.log(id);
  }

  return (
    <div className="blog">
      <Heading margin='2rem' color='red.300' className='heading'>React Hook's Blog </Heading>
      {
        blog.map((curElem) => {
          const { id, title ,content} = curElem;
          return (
            <div className="blog_element" onClick={() => mainpage(id)} key={id}>

              <Heading as='h5' margin='1rem 0rem' color='purple.300'>{title}</Heading>
              <p className="content">{content}</p>
            </div>
          )
        })
      }


    </div>
  )
}

export default Blog