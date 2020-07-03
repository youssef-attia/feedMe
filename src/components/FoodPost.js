import React, { useState, useEffect } from "react";
import { Link } from "@reach/router";
import { AiOutlineHeart } from "react-icons/ai";
import { AiFillHeart } from "react-icons/ai";
import { TiDeleteOutline } from "react-icons/ti";
import { FaComments } from "react-icons/fa";

import "./FoodPost.css";

import axios from "axios";

function FoodPost(props) {
  var [fav, setFav] = useState(false);
  function handleDelete() {
    const newPosts = props.posts.filter((e) => e._id !== props.id);
    axios.delete("http://localhost:5000/foods/" + props.id).then(() => {
      axios.get("http://localhost:5000/foods/").then((res) => {
        props.setFeed(res.data);
      });
      props.setPosts(newPosts);
    });
  }
  function likePost() {
    setFav(true);
    axios.get("http://localhost:5000/users/" + props.user._id).then((res) => {
        axios.post("http://localhost:5000/users/updateLikes/" + props.user._id, {
          likes: [...res.data.likes, props.id],
        })
        .then((res2) => {
          setFav(res2.data.likes);
        });
    });
  }
  function unlikePost() {
    setFav(false);
    console.log(props.id, "unliked");
    axios.get("http://localhost:5000/users/" + props.user._id).then((res) => {
      const remLike = res.data.likes;
      remLike.splice(res.data.likes.indexOf(props.id), 1);
      axios
        .post("http://localhost:5000/users/updateLikes/" + props.user._id, {
          likes: remLike,
        })
        .then((res2) => {
          console.log(res2.data.likes);
        });
    });
  }
  /*eslint-disable */
  useEffect(() => {
    if (props.user) {
      axios.get("http://localhost:5000/users/" + props.user._id).then((res) => {
        setFav(res.data.likes.includes(props.id));
      });
    }
  }, [props.user]);
  /*eslint-enable */

  return (
    <div className="FoodPost">
      <img src={props.image} alt="" />
      <div className="text">
        <h1>{props.title}</h1>
        <p>{props.description}</p>
        <div className="extraInfo">
          <Link to={'/users/'+props.username}><p className="poster">@{props.username}</p></Link>
          <FaComments className="postIcons" id="comments"/>
          {props.user ?
            <div className="postIconGroup">
              {fav ? 
                <AiFillHeart className="postIcons heart" onClick={unlikePost} />
                :<AiOutlineHeart className="postIcons heart" onClick={likePost}/>}
              {props.feed ? "":<TiDeleteOutline className="postIcons delete" onClick={handleDelete}/>}
            </div>:""
          }
        </div>
      </div>
    </div>
  );
}

export default FoodPost;
