import React, { useState, useEffect } from 'react';
import { Avatar } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
import HelpIcon from '@mui/icons-material/Help';
import YouTubeIcon from '@mui/icons-material/YouTube';
import './css/feed.css';
import Post from './Post';
import db from './firebasee';
import { doc, collection, setDoc, getDocs, query, orderBy } from 'firebase/firestore';
import { serverTimestamp } from 'firebase/firestore';

function Feed() {
  const [posts, setPost] = useState([]);
  const [input, setInput] = useState('');

  async function submitPost(e) {
    e.preventDefault();
    const timestamp = new Date();
    const postRef = collection(db, 'post');
    await setDoc(doc(postRef), {
      name: 'Hermoine Grangers',
      description: 'About ReactJs',
      message: input,
      photoURL:'https://i.pinimg.com/originals/f5/94/5a/f5945a2abc40cbc09bd991aa065daa8d.jpg',
      timestamp: serverTimestamp(),
    });
    setInput('');
  }

  useEffect(() => {
    // Function to fetch data from Firestore
    async function fetchData() {
      try {
        // Get a reference to the "post" collection in Firestore and order by timestamp in descending order
        const postRef = collection(db, 'post');
        const snapshot = await getDocs(query(postRef, orderBy('timestamp', 'desc')));

        // Create an array of post objects from the fetched data
        const postList = snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }));

        // Update the 'posts' state with the fetched data
        setPost(postList);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    // Call the fetchData function when the component mounts
    fetchData();

    // Return a cleanup function to unsubscribe from Firestore listeners (if needed)
    return () => {
      // Unsubscribe or perform other cleanup tasks if necessary.
    };
  }, []); // Empty dependency array, so the effect runs only once on mount

  console.log(posts);

  return (
    <div className='feed'>
      <div className='feed_input'>
        <div className='feed_form'>
          <Avatar src='https://i.pinimg.com/originals/f5/94/5a/f5945a2abc40cbc09bd991aa065daa8d.jpg'/>
          <form onSubmit={submitPost}>
            <input
              type='text'
              placeholder='What do you want to ask or share?'
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <input type='submit' />
          </form>
        </div>
        <div className='feed_options'>
          <div className='option'>
            <InsertPhotoIcon />
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
            <HelpIcon />
            <span>Ask</span>
          </div>
        </div>
      </div>
      {
      posts.map(({id,data: {name,description,message,photoURL}})=>{
        return <Post name={name} description={description} message={message} photoURL={photoURL} />
      })
      }
    </div>
  );
}

export default Feed;

