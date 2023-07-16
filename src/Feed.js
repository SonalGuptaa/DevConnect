import React from 'react'
import { Avatar } from '@mui/material'
import EditIcon from '@mui/icons-material/Edit';
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
import HelpIcon from '@mui/icons-material/Help';
import YouTubeIcon from '@mui/icons-material/YouTube';
import './css/feed.css'
import Post from './Post';
const Feed = () => {
  return (
    <div className='feed'>
        <div className='feed_input'>
        <div className='feed_form'>
            <Avatar/>
            <form>
                <input type="text" placeholder='What do you want to ask or share?'/>
                <input type='submit' />
            </form>
        </div>
        <div className='feed_options'>
            <div className='option'>
            <InsertPhotoIcon/>
                  <span>Photo</span>
            </div>
            <div className='option'>
                  <EditIcon />
                  <span>Post</span>
            </div>
            <div className='option'>
                  <YouTubeIcon />
                  <span>Video</span>
            </div>
            <div className='option'>
                  <HelpIcon/>
                  <span>Ask</span>
            </div>
        </div>
        </div>
        <Post name="Hermoine Granger" description="Learning ReactJS" message="React is a popular JavaScript library used for building user interfaces, providing a component-based approach for efficient and reusable UI development."/>
        <Post name="Harry Potter" description="Learning ReactJS" message="React is a popular JavaScript library used for building user interfaces, providing a component-based approach for efficient and reusable UI development."/>
    </div>
  
  )
}

export default Feed