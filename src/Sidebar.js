import { Avatar } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'
import { selectUser } from './features/userSlice'
import "./Sidebar.css"

function Sidebar() {
    const user = useSelector(selectUser);
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

            <Avatar className="sidebar__avatar" src={user.photoURL} />
            <h2>{user.displayName}</h2>
            <h4>{user.email}</h4>
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