import styles from "./Post.module.css";
import { IoIosHeartEmpty,IoIosHeart } from "react-icons/io";

import { AiFillDelete } from "react-icons/ai";
import { FaComment, FaPlus } from "react-icons/fa";
import React, { useContext } from "react";
import { MyContext } from "../../../context";
import { LikeJoke, RemoveJoke, SaveJoke, UnlikeJoke } from "../../../request/Jokes";

import { NavLink } from "react-router-dom";

export const Post = (props) => {
  const { state, UpdateSavedJokes, UpdateLikedJokes } = useContext(MyContext);
  const savedPostsIds = state.user.savedPosts.map((el) => el._id);
  const isSaved = savedPostsIds.includes(props._id.toString());

  const likedPostsIds = state.user.likedPosts.map((el) => el._id);
  const isLiked = likedPostsIds.includes(props._id.toString());

  const LikePost = () => {
    LikeJoke(
      state.user.token,
      JSON.stringify({ _id: props._id, login: state.user.login })
    )
      .then((res) => res.json())
      .then((res) => {
        console.log(res.likedPosts);
        UpdateLikedJokes(res.likedPosts);
      })
      .catch((e) => console.log(e));
  };

  const UnlikePost = () => {
    UnlikeJoke(
      state.user.token,
      JSON.stringify({ _id: props._id, login: state.user.login })
    )
      .then((res) => res.json())
      .then((res) => {
        console.log(res.likedPosts);
        UpdateLikedJokes(res.likedPosts);
      })
      .catch((e) => console.log(e));
  };
  
  const savePost = () => {
    SaveJoke(
      state.user.token,
      JSON.stringify({ _id: props._id, login: state.user.login })
    )
      .then((res) => res.json())
      .then((res) => {
        console.log(res.savedPosts);
        UpdateSavedJokes(res.savedPosts);
      })
      .catch((e) => console.log(e));
  };

  const deletePost = () => {
    RemoveJoke(
      state.user.token,
      JSON.stringify({ _id: props._id, login: state.user.login })
    )
      .then((res) => res.json())
      .then((res) => {
        console.log(res.savedPosts);
        UpdateSavedJokes(res.savedPosts);
      })
      .catch((e) => console.log(e));
  };

  return (
    <div className={styles.post}>
      <div className={styles.post_container}>
        <div className={styles.post_header}>
          <div className={styles.post_title}>{props.title}</div>
          <div className={styles.post_author}>{props.type}</div>
        </div>
        <div className={styles.post_body}>{props.text}</div>
        <div className={styles.post_footer}>
          {!state.user.login ? <div  >
            <IoIosHeartEmpty />
            
          </div> :!isLiked ? 
          <div className={styles.post_footer_element} onClick={LikePost}>
              <IoIosHeartEmpty />  
            </div>
           : 
            <div className={styles.post_footer_element} onClick={UnlikePost}>
              <IoIosHeart />  
            </div>}

          <div className={styles.post_footer_element}>
            <NavLink
              className={styles.comments}
              to={`/post/${props._id}/comments`}
            >
              <FaComment />
            </NavLink>
          </div>
          {!state.user.login ? (
            <div></div>
          ) : !isSaved ? (
            <div className={styles.post_footer_element} onClick={savePost}>
              <FaPlus />
            </div>
          ) : (
            <div className={styles.post_footer_element} onClick={deletePost}>
              <AiFillDelete />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
