import React, { useState } from 'react'

// User Context
import {UserContext} from './context/Context';

//import components
import Header from './components/Home.components/Header/Header'
import Explore from './pages/Explore'
import RouterComponent from './layout/RouterComponent'
// Css
import "./index.css"
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Favourites from './pages/Favourites'
import { data1, data2 } from '../data/Data';
const router = createBrowserRouter([
  {
      path:"/",
      element:<RouterComponent/>,
      children:[
          {
              index:true,
              element:<Header/>
          },
          {
              path:"/explore",
              element:<Explore/>
          },
          {
            path:"/favourites",
            element:<Favourites/>
          }
      ]
  },
]); 
const App = () => {
 const [data,setData] = useState([])
  return (
    <>
        <UserContext.Provider value={{data1,data2}} >
           <RouterProvider router={router}/>
        </UserContext.Provider>
    </>
  );
}

export default App