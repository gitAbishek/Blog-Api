import React, { useState } from 'react'
import './index.css'
import { Routes, Route, useParams } from "react-router-dom"

import { ChakraProvider } from '@chakra-ui/react'

import Blog from './components/Blog'
import Navbar from './components/Navbar'



import { Heading } from '@chakra-ui/react'
import { Container } from '@chakra-ui/react'
import BlogApi from './BlogApi/BlogApi'

const BlogDetails = () => {
  const param = useParams()
  const checkid = param.userId
  const [data] = useState(BlogApi[checkid - 1])

  return (
    <div className="blog">
      <Navbar />
      <div className="blog_elements new_blog_elements">
        <Heading as='h5' margin='1rem 0rem' color="green">{data.title}</Heading>
        <p className="content">{data.content}</p>
        <Container bg='purple.900' color='white' height='fit-content' padding='1rem' margin='1rem 0rem'>
        Hooks are the new feature introduced in the React 16.8 version.
        It allows you to use state and other React features without writing a class.
        Hooks are the functions which "hook into" React state and lifecycle features
        from function components. It does not work inside classes. Hooks are backward
        compatible, which means it does not contain any breaking changes. Also, it does
         not replace your knowledge of React concepts.
        </Container>

        <p className="content">{data.footer}</p>
      </div>
    </div>
  )
}

const App = () => {

  return (
    <ChakraProvider>

      <Routes>
        <Route path="/" element={<Blog />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blogdetails/:userId" element={<BlogDetails />} />
      </Routes>

    </ChakraProvider>
  )
}



export default App