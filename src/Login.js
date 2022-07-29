import React, {useState} from 'react'
import './Login.css'
import {auth} from './firebase'
import { useDispatch } from 'react-redux';
import {login} from './features/userSlice'


function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [profilePic, setProfilePic] = useState('');
    const dispatch = useDispatch();

    const register = () => {
        // now empty. should work later on
        if(!name){
            return alert('Please enter your full name')
        }
        auth.createUserWithEmailAndPassword(email, password)
        .then((userAuth) => {
            userAuth.user.updateProfile({
                displayName: name,
                photoURL: profilePic,
            })
            .then(() => {
                dispatch(
                    login({
                        email: userAuth.user.email,
                        uid: userAuth.user.uid,
                        displayName: name,
                        photoURL: profilePic,
                    })
                );
            });
        }).catch(error => alert(error));
    };

    const loginToApp = (e) => {
        // firebase login function
        e.preventDefault();
        auth.signInWithEmailAndPassword(email, password)
        .then(userAuth => {
            dispatch(login({
                email: userAuth.user.email,
                uid: userAuth.user.uid,
                displayName: userAuth.user.displayName,
                profileUrl: userAuth.user.photoURL,
            }))
        })
        .catch(error => alert(error))
    }
    return (
        <div className='login'>
            <img src="https://news.hitb.org/sites/default/files/styles/large/public/field/image/500px-LinkedIn_Logo.svg__1.png?itok=q_lR0Vks" alt="" />
            <form>
                {/* name mapping */}
                <input 
                    value={name}
                    onChange={e => setName(e.target.value)}
                    placeholder='Full Name (required if registering)' 
                    type="text" 
                />
                {/* profile pic mapping */}
                <input 
                    value={profilePic}
                    onChange={e => setProfilePic(e.target.value)}
                    placeholder='Profile Pic URL (Optional)' 
                    type="text" 
                />
                {/* email mapping */}
                <input 
                    value={email} 
                    onChange={e => setEmail(e.target.value)} 
                    placeholder='email' 
                    type="email" 
                />
                {/* password mapping */}
                <input 
                    value={password} 
                    onChange={e => setPassword(e.target.value)} 
                    placeholder='password' 
                    type="password" 
                />

                <button type='submit' onClick={loginToApp}>
                    Sign In
                </button>
            </form>

            <p>
                Not a member? {" "}
                <span className='login__register' onClick={register}>
                    Register Now
                </span>
            </p>
        </div>
    )
}

export default Login