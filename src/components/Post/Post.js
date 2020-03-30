import React from 'react';
import { FiMessageSquare, FiShare2, FiCheckSquare, FiDownload } from 'react-icons/fi';
import {IoIosArrowDown } from 'react-icons/io';
import {AiFillLike } from 'react-icons/ai';
import './Post.sass';

const Post = ( {authorData, content, image, date} ) => {
    return (
        <div className="post-data col-md-6">
          <div className="row">
            <div className="col-2">
                <div className="avatar">
                  <img src={authorData.photo} alt="user photo"/>  
                </div>
            </div>
            <div className="col-10">
              <div className="post-info">
                    <p className="header-post-info">
                      <b className="name">{authorData.name}</b>
                      <span className="icon"><FiCheckSquare /></span>
                      <span className="nickname">{authorData.nickname}</span>
                      <span className="date">{date}</span>
                    </p>
                    <p className="text-content">{content}</p>
                  <span className="check-down"><IoIosArrowDown /></span>
              </div>
            </div>
            <div className="col-10 offset-2">
              <div className="post-content">
                  <img src={image} alt="content photo"/>
              </div>
              <div className="post-footer">
                      <p><span className="icon"><FiMessageSquare /></span>482</p>
                      <p><span className="icon"><FiShare2 /></span>146</p>
                      <p><span className="icon"><AiFillLike /></span>887</p>
                      <p><span className="icon"><FiDownload /></span></p>
              </div> 
            </div>
          </div>
        </div>
    );
}

export default Post;