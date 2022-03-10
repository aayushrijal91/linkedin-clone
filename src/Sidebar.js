import { Avatar } from '@mui/material'
import React from 'react'
import "./Sidebar.css"

function Sidebar() {
    const recentItem = (topic) => {
        return (
            <div className="sidebar__recentItem">
                <span className='sidebar__hash'>#</span>
                <p>{topic}</p>
            </div>
        )
    }

  return (
    <div className="sidebar">
        <div className="sidebar__top">
            <img src="https://images.unsplash.com/photo-1644945351718-f8a79ab675b3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80" alt="" />

            <Avatar className="sidebar__avatar" src="https://scontent-syd2-1.xx.fbcdn.net/v/t1.6435-9/103414580_3294645780566613_3999404826124014751_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=MK4zLfPsNWYAX9G30sL&_nc_ht=scontent-syd2-1.xx&oh=00_AT_VbKoogq7yEdsxHYUaqlJqtPDX2eDbuZRGQsifdTKhKg&oe=62398878" />
            <h2>Aayush Rijal</h2>
            <h4>Web Developer at Aiims Group | Software Engineer</h4>
        </div>

        <div className="sidebar__stats">
            <div className="sidebar__stat">
                <p>Who viewed your profile</p>
                <p className='sidebar__statNumber'>2,345</p>
            </div>
            <div className="sidebar__stat">
                <p>Views of your post</p>
                <p className='sidebar__statNumber'>3,345</p>
            </div>
        </div>

        <div className="sidebar__bottom">
            <p>Recent</p>
            {recentItem('reactjs')}
            {recentItem('softwareengineering')}
            {recentItem('programming')}
            {recentItem('php')}
            {recentItem('laravel')}
        </div>
    </div>
  )
}

export default Sidebar