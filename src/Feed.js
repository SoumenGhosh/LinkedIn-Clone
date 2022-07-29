import React, { useState, useEffect } from 'react'
import './Feed.css'

import CreateIcon from '@material-ui/icons/Create'
import ImageIcon from '@material-ui/icons/Image'
import SubscriptionsIcon from '@material-ui/icons/Subscriptions'
import EventNoteIcon from '@material-ui/icons/EventNote'
import CalendarViewDayIcon from '@material-ui/icons/CalendarViewDay'

import InputOption from './InputOption'
import Post from './Post'
import { db, auth } from './firebase'
import firebase from 'firebase/compat/app'
import { useSelector } from 'react-redux'
import { selectUser } from './features/userSlice'
import FlipMove from 'react-flip-move'
// import serverTimestamp from 'firebase/firestore'

function Feed() {
    const user = useSelector(selectUser);
    const [input, setInput] = useState('');
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        db.collection("posts")
        .orderBy('timestamp', 'desc')
        .onSnapshot((snapshot) =>
        setPosts(
            snapshot.docs.map((doc) => ({
                id: doc.id,
                data: doc.data(),
            }))
        )); 
    }, []);

    const sendPost = e => {
        e.preventDefault();
        db.collection('posts').add ({
            name: user.displayName,
            description: user.email,
            message: input,
            photoUrl: user.photoUrl || '',
            timestamp: firebase.firestore.FieldValue.serverTimestamp(), 
            // time changes between different timezone. Server Time Stamp makes it correct. USEFUL staff.            
        });        
        setInput('');
    };

    return (
        <div className='feed'>
            <div className="feed__inputContainer">
                <div className="feed__input">
                    <CreateIcon />
                    <form>
                        <input value={input} onChange={e => setInput(e.target.value)} type="text" />
                        <button onClick={sendPost} type='submit'>Send</button>
                    </form>
                </div>

                <div className="feed__inputOptions">
                    {/* Input Option */}
                    <InputOption Icon={ImageIcon} title='Photo' color='#70B5F9'/>
                    <InputOption Icon={SubscriptionsIcon} title='Video' color='#E7A33E'/>
                    <InputOption Icon={EventNoteIcon} title='Event' color='#C0CBCD'/>
                    <InputOption Icon={CalendarViewDayIcon} title='Write Article' color='#7FC15E'/>
                </div>
            </div>

            <FlipMove>
                {/* Posts */}
                {posts.map(({id ,data: {name, description, message, photoUrl} }) => (
                    <Post 
                        key={id} // id is important when rendaring a list
                        name={name}
                        description={description}
                        message={message}
                        photoUrl={photoUrl}
                    />
                ))}
            </FlipMove>
            {/* <Post 
                name='Soumen Ghosh' 
                description='this is a demo description' 
                message='now its 1:15 AM 29/07/2022' 
            />

            <Post /> */}

        </div>
    )
}

export default Feed