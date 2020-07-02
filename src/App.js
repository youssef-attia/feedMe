import React, { useState, useEffect } from "react";
import { Router } from "@reach/router";

import Profile from "./routes/Profile.js";
import UserProfile from "./routes/UserProfile.js";
import "./routes/Profile.css";
import Feed from "./routes/Feed.js";
import NavbarTop from "./components/NavbarTop";
import ModalForm from "./components/ModalForm";
import "bootstrap/dist/css/bootstrap.min.css";

import axios from "axios";

function App() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [showAddPost, setAddPost] = useState(false);

  const addPostClose = () => setAddPost(false);
  const addPostShow = () => setAddPost(true);

  const [userPosts, setUserPosts] = useState([]);

  const [feedPosts, setFeedPosts] = useState([]);
//{username:"YAttia",name:"Youssef Attia"}
  const [user, setUser] = useState('');
  
  const [likes, setLikes] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/foods/").then((res) => {
      setFeedPosts(res.data);
      setUserPosts(res.data.filter((e) => e.username === user.username));
    });
  }, [user]);
  

  return (
    <>
      <NavbarTop popup={handleShow} user={user} setUser={setUser} />
      <ModalForm show={show} handleClose={handleClose} setUser={setUser} />
      <Router>
        <Profile
          exact
          path="/profile"
          user={user}
          show={show}
          handleClose={handleClose}
          setUser={setUser}
          posts={userPosts}
          setPosts={setUserPosts}
          setFeed={setFeedPosts}
          showAddPost={showAddPost}
          addPostShow={addPostShow}
          addPostClose={addPostClose}
          likes={likes}
          setLikes={setLikes}
        />
        <Feed
          exact
          path="/"
          posts={feedPosts}
          setPosts={setFeedPosts}
          user={user}
        />
        <UserProfile
          exact
          path="users/:username"
          user={user}
        />
      </Router>
    </>
  );
}

export default App;
