import React from 'react';
import "./Header.css";
import { logout } from './features/userSlice';
import HeaderOption from './HeaderOption';
import { Search, Notifications, Chat,BusinessCenter, SupervisorAccount, Home } from '@mui/icons-material';
import { useDispatch } from 'react-redux';
import { auth } from './firebase';


function Header() {
    const dispatch = useDispatch();

    const logoutOfApp = () => {
        dispatch(logout());
        auth.signOut();
    };

    return (
        <div className="header">
            <div className="header__left">
                <img src="https://cdn1.iconfinder.com/data/icons/logotypes/32/square-linkedin-512.png" alt="" />

                <div className="header__search">
                    <Search />
                    <input type="text" placeholder='Search for jobs, companies...'/>
                </div>
            </div>
            <div className="header__right">
                <HeaderOption title="Home" Icon={Home} />
                <HeaderOption title="My Network" Icon={SupervisorAccount} />
                <HeaderOption title="Jobs" Icon={BusinessCenter} />
                <HeaderOption title="Messaging" Icon={Chat} />
                <HeaderOption title="Notifications" Icon={Notifications} />
                <HeaderOption onClick={logoutOfApp} title="Me" avatar={true} />
            </div>
        </div>
    )
}

export default Header;