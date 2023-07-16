import React from 'react'
import '../src/css/sidebar.css'
import { Avatar } from '@material-ui/core'
const Sidebar = () => {
  return (
    <div className='sidebar'>
        <div className='sidebar_profile'>
            <img src='https://tse2.mm.bing.net/th?id=OIP.ensiLtlsMoQxpqIoO-IyYgHaEo&pid=Api&P=0&h=180'/>
            <div className='profile_details'>
                <Avatar></Avatar>
                <h5>Sonal Gupta</h5>
                <p>Web Developer</p>
            </div>
            <div className='profile_status'>
                <span>Who viewed your profile</span>
                <span className='state_number'>20</span>

            </div>
            <div className='profile_status'>
                <span>Connection<br/><b>Grow your connection</b></span>
                <span className='state_number'>150</span>
            </div>
        </div>
        <div className='sidebar_recent'>
             <p>Recent</p>
             <p className='hash'><span>#</span>Web Development</p>
             <p className='hash'><span>#</span>Starter Bootcamp</p>
             <p className='hash'><span>#</span>Metaverse Submit 2022</p>
             <p className='hash'><span>#</span>Programming</p>
             <p className='hash'><span>#</span>ReactJs</p>
             <p className='hash'><span>#</span>Branding</p>
            </div>
    </div>
  )
}

export default Sidebar