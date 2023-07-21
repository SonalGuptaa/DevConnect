import React, {useState} from 'react'
import { Avatar } from '@mui/material'
import EditIcon from '@mui/icons-material/Edit';
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
import HelpIcon from '@mui/icons-material/Help';
import YouTubeIcon from '@mui/icons-material/YouTube';
import './css/feed.css'
import Post from './Post';
import db from "./firebasee";
import { doc, collection, setDoc } from "firebase/firestore";
function Feed () { 
  const [input,setInput] = useState();
  async function submitPost(e){
    e.preventDefault();
    const timestamp = new Date();
    const postRef = collection(db, "post");
    await setDoc(doc(postRef), {
      name: "Sonal Gupta",
      description: "This is demo",
      message: input,
      photoURL:
        "https://tse2.mm.bing.net/th?id=OIP.jryuUgIHWL-1FVD2ww8oWgHaHa&pid=Api&P=0&h=180",
    });
    setInput("");
  }
  return (
    <div className='feed'>
        <div className='feed_input'>
        <div className='feed_form'>
            <Avatar/>`
            <form onSubmit={submitPost}>
                <input type="text" placeholder='What do you want to ask or share?' value={input} onChange={e=>setInput(e.target.value)} />
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
    </div>
  
  )
}

export default Feed