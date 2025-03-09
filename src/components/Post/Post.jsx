import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { editPost } from '../../redux/postsSlice';
import './Post.css';
import Comment from '../../img/comment.png';
import Share from '../../img/share.png';
import Heart from '../../img/like.png';
import NotLike from '../../img/notlike.png';

const Post = ({ data }) => {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [editedDesc, setEditedDesc] = useState(data.desc);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    const updatedPost = {
      id: data.id, 
      updatedPost: { desc: editedDesc },
    };
    dispatch(editPost(updatedPost));
    setIsEditing(false);
  };

  return (
    <div className="Post">
      <img src={data.img} alt="" />
      <div className="postReact">
        <img src={data.liked ? Heart : NotLike} alt="" />
        <img src={Comment} alt="" />
        <img src={Share} alt="" />
      </div>
      <span style={{ color: "var(--gray)", fontSize: '12px' }}>{data.likes} likes</span>
        <div className="detail">
          <span><b>{data.name}</b></span>
          {isEditing ? (
            <input
              type="text"
              value={editedDesc}
              onChange={(e) => setEditedDesc(e.target.value)}
              className="postEditInput" 
              placeholder="What's happening?"
            />
          ) : (
            <span> {data.desc}</span>
          )}

        {isEditing ? (
          <button className="button ps-button" onClick={handleSave}>Save</button>
        ) : (
          <button className="button ps-button" onClick={handleEdit}>Edit</button>
        )}
      </div>
    </div>
  );
}

export default Post;
