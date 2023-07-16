import React from 'react'
import { Avatar } from '@mui/material'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import CommentIcon from '@mui/icons-material/Comment';
import ShareIcon from '@mui/icons-material/Share';
import LoopIcon from '@mui/icons-material/Loop';
import './css/post.css'
function Post({name,description,message}) {
  return (
    <div className='posts'>
        <div className='post_header'>
            <div className='post_headerleft'>
                <Avatar/>
                <div className='post_profile_details'>
                    <h3>{name}</h3>
                    <p>{description}</p>
                </div>
            </div>
            <div className='post_headerright'>
                <MoreVertIcon/>    
            </div>
        </div>

        <div className='post_body'>
            <p>{message}</p>
        </div>
        <div className='post_footer'>
           <div className='options'>
               <ThumbUpIcon/>
               <span>Like</span>
           </div>
           <div className='options'>
               <CommentIcon/>
               <span>Comment</span>
           </div>
           <div className='options'>
               <LoopIcon/>
               <span>Repost</span>
           </div>
           <div className='options'>
               <ShareIcon/>
               <span>Share</span>
           </div>
        </div>
      
    </div>
  )
}

export default Post
