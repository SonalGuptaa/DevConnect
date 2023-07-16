import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import "./css/header.css"
import Headeroptions from './Headeroptions';
import HomeIcon from '@mui/icons-material/Home';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import MessageIcon from '@mui/icons-material/Message';
import NotificationsIcon from '@mui/icons-material/Notifications';
import {Avatar} from '@material-ui/core'
const Header = () => {
  return (
   <>
     <div className='header'>
        <div className='header_left'>
             <div className='header_logo'>
                  <img src='https://cdn-icons-png.flaticon.com/128/6062/6062646.png'/>             
             </div>
             <div className='header_search'>
                  <SearchIcon/>
                  <input type="text" placeholder='search'></input>
             
             </div>
        </div>
        <div className='header_right'>
            <Headeroptions Icon={HomeIcon} title="Home"/>
            <Headeroptions Icon={PeopleAltIcon} title="My Network"/>
            <Headeroptions Icon={MessageIcon} title="Messaging"/>
            <Headeroptions Icon={NotificationsIcon} title="Notifications"/>
            <Headeroptions avatar={Avatar} title="Granger"/>
             
        </div>
     </div>
   </>
  )
}

export default Header