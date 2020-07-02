import React, {useState, useEffect} from "react";
import axios from 'axios'
import FoodPost from "../components/FoodPost";
import './Feed.css'

function Feed(props) {
  const [checked, setChecked] = useState(false)
  const [liked, setLiked] = useState([])
  function handleSwitch(e) {
    if (props.user) {
      axios.get("http://localhost:5000/users/" + props.user._id).then((res) => {
        setLiked(res.data.likes);
      });
    }
    setChecked(e.target.checked)
  }

  /*eslint-disable */
  useEffect(() => {
    if (props.user) {
      axios.get("http://localhost:5000/users/" + props.user._id).then((res) => {
        setLiked(res.data.likes);
      });
    }
  }, [props.user]);
  /*eslint-enable */
  return (
    <>
      {props.user?
      <div className = "switchGroup">
        <h1>Liked</h1>
        <label className="switch">
          <input type="checkbox" onChange={handleSwitch}/>
          <span className="slider round"></span>
        </label>
      </div>:''
      }
      <div className="postsFeed">
        {props.posts.length > 0 ? 
          /*eslint-disable */
          props.posts.map(post=>{
            if(checked){
              if(liked.includes(post._id)){
                return (
                  <FoodPost
                    key={post._id}
                    title={post.title}
                    description={post.description}
                    image={post.image}
                    id={post._id}
                    posts={props.posts}
                    setPosts={props.setPosts}
                    user={props.user}
                    username={post.username}
                    feed={true}
                  />
                );
              }
            } else {
              return (
                <FoodPost
                  key={post._id}
                  title={post.title}
                  description={post.description}
                  image={post.image}
                  id={post._id}
                  posts={props.posts}
                  setPosts={props.setPosts}
                  user={props.user}
                  username={post.username}
                  feed={true}
                />
              );
            }
          }):<div
            style={{ color: "grey", marginTop: "20px" }} className="addPostDiv">
            <h3>It seems no one has posted anything yet...</h3>
          </div>  
          /*eslint-enable */
        }
      </div>
    </>
  );
}

export default Feed;
