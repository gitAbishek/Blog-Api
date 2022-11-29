import React from 'react'
import { NavLink } from 'react-router-dom'
import { Heading } from '@chakra-ui/react'

const Navbar = () => {
    return (

        <div className="navbar">
            <NavLink to="/" className='a'>Home</NavLink>
            <Heading margin='2rem' className='b'>Blogs Details </Heading>
        </div>

    )
}

export default Navbar