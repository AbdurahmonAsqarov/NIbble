import React from 'react'
import { Outlet } from 'react-router-dom'

//Import ComponentsLayout
import Left_nav from '../components/layout_left_nav/Left_nav'
import Top_nav from '../components/layout_top_nav/Top_nav'
const RouterComponent = () => {

  return (
    <div>
        
            <Top_nav/>
            <div className="flex">
            <Left_nav/>
            <Outlet/>
            </div>
    </div>
  )
}

export default RouterComponent