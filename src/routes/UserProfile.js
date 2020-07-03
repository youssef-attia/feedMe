import React, { useState, useEffect } from "react";
import axios from "axios";
import FoodPost from "../components/FoodPost";
import HeaderFood from "../components/HeaderFood";
import "./Profile.css";

function UserProfile(props) {
  const [visitUser, setVisitUser] = useState([])
  const [posts, setPosts] = useState([]);

  /*eslint-disable */
  useEffect(() => {
    if (props.username) {
      axios.get("http://localhost:5000/foods/").then((res) => {
        setPosts(res.data.filter((e) => e.username === props.username));
      });
      axios.get("http://localhost:5000/users/").then((res) => {
        setVisitUser(res.data.filter((e) => e.username === props.username)[0]);
      });
    }
  }, [props.username]);
  /*eslint-enable */

  return (
    <>
      <HeaderFood user={visitUser} visit/>
      <br />
      <div className="posts">
        {posts.length > 0 ? (
          posts.map((post) => {
            return (
              <FoodPost
                key={post._id}
                title={post.title}
                description={post.description}
                image={post.image}
                id={post._id}
                posts={props.posts}
                setPosts={props.setPosts}
                setFeed={props.setFeed}
                username={post.username}
                user={props.user}
                feed={true}
                likes={props.likes}
                setLikes={props.setLikes}
              />
            );
          })
        ) : (
          <div
            style={{ color: "grey", marginTop: "20px" }}
            className="addPostDiv"
          >
            <h3>It seems this user has no posts</h3>
          </div>
        )}
      </div>
    </>
  );
}

export default UserProfile;
