import React from 'react';
import "./Header.css";
import HeaderOption from './HeaderOption';
import { Search, Notifications, Chat,BusinessCenter, SupervisorAccount, Home } from '@mui/icons-material';


function Header() {
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
                <HeaderOption title="Me" avatar="https://scontent-syd2-1.xx.fbcdn.net/v/t1.6435-9/103414580_3294645780566613_3999404826124014751_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=MK4zLfPsNWYAX9G30sL&_nc_ht=scontent-syd2-1.xx&oh=00_AT_VbKoogq7yEdsxHYUaqlJqtPDX2eDbuZRGQsifdTKhKg&oe=62398878" />
            </div>
        </div>
    )
}

export default Header;