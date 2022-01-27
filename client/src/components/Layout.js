import React from 'react'

import SideNav from './SideNav';


const Layout = ({ children }) => {
    return (
      <>
        <SideNav/>
        {children}
      </>
    )
  }

  export default Layout;