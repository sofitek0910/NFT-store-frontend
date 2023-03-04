import React, { useState } from 'react'

import Box from '@mui/material/Box';

import Navbar from 'components/Navbar'
import Sidebar from 'components/Sidebar'
import Footer from 'components/Footer'

const Layout = (props) => {

  const { children } = props

  const [open, setOpen] = useState(false)

  return (
    <Box>
      <Navbar openSidebar={() => setOpen(true)} />
      {children}
      <Footer />
      <Sidebar
        open={open}
        handleClose={() => setOpen(false)}
      />
    </Box>
  )
}

export default Layout
