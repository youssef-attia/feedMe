import React from "react";
import FoodPost from "../components/FoodPost";

function Home(props) {
  return (
    <>
      <div className="postsFeed">
        {props.posts.length > 0 ? 
          props.posts.map((post, i) => {
            return (
              <FoodPost
                key={post._id}
                title={post.title}
                description={post.description}
                image={post.image}
                id={post._id}
                posts={props.posts}
                setPosts={props.setPosts}
                username={post.username}
                feed={true}
              />
            );
          }):<div
            style={{ color: "grey", marginTop: "20px" }} className="addPostDiv">
            <h3>It seems no one has posted anything yet...</h3>
          </div>
        }
      </div>
    </>
  );
}

export default Home;
