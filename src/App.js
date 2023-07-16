import React from 'react'
// import  ReactDOM  from 'react-dom'
import Header from './Header'
import Sidebar from './Sidebar'
import Feed from './Feed'
const App = () => {
  return (
    <>
      <div className='app_wrapper'>
         <Header/>
         <div className='app_body'>
              <Sidebar/>
              <Feed/>
         </div>
      </div>
    </>
  )
}

export default App