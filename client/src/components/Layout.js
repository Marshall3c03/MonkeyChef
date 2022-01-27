import React from 'react'

import SideNav from './SideNav';

import '../static/CSS/layout.css'


const Layout = ({ children }) => {
    return (
      <div className='layout'>
        <SideNav/>
        <div className='layout-container'>
          {children}
        </div>
      </div>
    )
  }

  export default Layout;