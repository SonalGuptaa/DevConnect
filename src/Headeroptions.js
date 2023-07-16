import { Avatar } from '@mui/material'
import React from 'react'
import "./css/header.css"
function Headeroptions({Icon,title,avatar}) {
  return (
    <>
        <div className='header_options'>
            {
              Icon &&  <Icon></Icon>
            }
            {
              avatar && <Avatar name={avatar}/>
            }
            <span>{title}</span>
        </div>
    </>
  )
}

export default Headeroptions
