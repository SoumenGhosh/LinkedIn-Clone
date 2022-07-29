import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search'
import HeaderOption from './HeaderOption'
import HomeIcon from '@material-ui/icons/Home'
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount'
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter'
import ChatIcon from '@material-ui/icons/Chat'
import NotificationsIcon from '@material-ui/icons/Notifications'
import { useDispatch, useSelector } from 'react-redux'
import { auth } from './firebase'
import {logout, selectUser} from './features/userSlice'

function Header() {
  // const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const logoutOfApp = () => {
    dispatch(logout());
    auth.signOut();
  };

  return (
    <div className='header'>
        {/* left container */}
        <div className="header__left">
            {/* <img src="https://www.flaticon.com/svg/static/icons/svg/174/174857.svg" alt="" /> */}
            <img src="https://cdn-icons.flaticon.com/png/512/3536/premium/3536505.png?token=exp=1659026823~hmac=a08d708aec8bc7daceac933140894ddf" alt="" />
            
            <div className="header__search">
                
                {/* Search Icon */}
                <SearchIcon />
                <input placeholder='search' type="text" />
            </div>
        </div>

        {/* right container */}
        <div className="header__right">
            <HeaderOption Icon={HomeIcon} title='Home'/>
            <HeaderOption Icon={SupervisorAccountIcon} title='My Network'/>
            <HeaderOption Icon={BusinessCenterIcon} title='Jobs'/>
            <HeaderOption Icon={ChatIcon} title='Messaging'/>
            <HeaderOption Icon={NotificationsIcon} title='Notifications'/>
            <HeaderOption 
              // avatar={user.photoUrl}
                          avatar={true}
                          title='me' 
                          onClick={logoutOfApp}/>
        </div>
    </div>
  )
}

export default Header