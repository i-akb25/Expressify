import React, { useState, useRef } from "react";
import ProfileImage from "../../img/profileImg.jpg";
import "./PostShare.css";
import { UilScenery } from "@iconscout/react-unicons";
import { UilPlayCircle } from "@iconscout/react-unicons";
import { UilLocationPoint } from "@iconscout/react-unicons";
import { UilSchedule } from "@iconscout/react-unicons";
import { UilTimes } from "@iconscout/react-unicons";
import { useDispatch } from 'react-redux';
import { addPost } from '../../redux/postsSlice';

const PostShare = () => {
  const dispatch = useDispatch();
  const [image, setImage] = useState(null);
  const [text, setText] = useState('');
  const imageRef = useRef();

  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      let img = event.target.files[0];
      setImage({
        image: URL.createObjectURL(img),
      });
    }
  };

  const handleShare = () => {
    const newPost = {
      id: Date.now(), 
      desc: text,
      img: image ? image.image : null,
      liked: false,
      likes: 0,
      name: "AKB User", // Updated user name for clarity
    };
    dispatch(addPost(newPost));
    setText('');
    setImage(null);
  };

  return (
    <div className="PostShare">
      <img src={ProfileImage} alt="" />
      <div>
        <span className="user-name"><b>AKB</b></span> {/* Updated styling for user name */}
        <input
          type="text"
          placeholder="What's happening?"
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="share-input" 
        />
        <div className="postOptions">
          <div className="option" style={{ color: "var(--photo)" }} onClick={() => imageRef.current.click()}>
            <UilScenery />
            Photo
          </div>
          <div className="option" style={{ color: "var(--video)" }}>
            <UilPlayCircle />
            Video
          </div>
          <div className="option" style={{ color: "var(--location)" }}>
            <UilLocationPoint />
            Location
          </div>
          <div className="option" style={{ color: "var(--shedule)" }}>
            <UilSchedule />
            Schedule
          </div>
          <button className="button ps-button" onClick={handleShare}>Share</button>
          <div style={{ display: "none" }}>
            <input
              type="file"
              name="myImage"
              ref={imageRef}
              onChange={onImageChange}
            />
          </div>
          <div className="remove-icon" onClick={() => setImage(null)}>
            <UilTimes />
          </div>
        </div>
        {image && (
          <div className="previewImage">
            <img src={image.image} alt="" />
          </div>
        )}
      </div>
    </div>
  );
};

export default PostShare;
