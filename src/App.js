import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import Feed from './Feed';
import Login from './Login'
//Later use Redux
const user = null;
function App() {
  return (
   <>
   {
        !user ? (<Login/>) : (
        <div className='app_wrapper'> 
          <Header/>
         <div className='app_body'>
              <Sidebar/>
             <Feed/>
         </div>
      </div> )
  
  }
  </>
  )
}
export default App

