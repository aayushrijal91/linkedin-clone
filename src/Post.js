import { ThumbUpAltOutlined, ChatOutlined, ShareOutlined, SendOutlined } from '@mui/icons-material';
import { Avatar } from '@mui/material';
import React from 'react'
import InputOption from './InputOption';
import './Post.css';

function Post({ name, description, message, photoUrl }) {
  return (
    <div className='post'>
        <div className='post__header'>
            <Avatar src={ photoUrl } />
            <div className='post__info'>
                <h2>{ name }</h2>
                <p>{ description }</p>
            </div>
        </div>

        <div className="post__body">
            <p>{ message }</p>
        </div>

        <div className='post__buttons'>
            <InputOption Icon={ThumbUpAltOutlined} title="Like" color="grey" />
            <InputOption Icon={ChatOutlined} title="Like" color="grey" />
            <InputOption Icon={ShareOutlined} title="Like" color="grey" />
            <InputOption Icon={SendOutlined} title="Like" color="grey" />
        </div>
    </div>
  )
}

export default Post