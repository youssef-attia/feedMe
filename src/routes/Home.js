import React from "react";
import HeaderFood from '../components/HeaderFood';
import ModalPost from '../components/ModalPost';
import FoodPost from '../components/FoodPost';

function Home(props) {
  return (
    <>
      <HeaderFood user={props.user} />
      <br />
      {props.user !== '' ? 
        <>
          <div className='addPostDiv'>
            <button id='addPost' onClick={props.addPostShow}>
              Add Post
            </button>
          </div>
          <div className='posts'>
            {(props.posts.length>0)?props.posts.map((post,i) => {
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
                  feed={false}
                />
              );
            }):
            <div style={{color: 'grey', marginTop: '20px'}} className='addPostDiv'><h3>Feeling hungry? Post the first item to your feed</h3></div>
            }
          </div>
        </>:''
      }
      <ModalPost
        show={props.showAddPost}
        handleClose={props.addPostClose}
        posts={props.posts}
        setPosts={props.setPosts}
        setFeed={props.setFeed}
        user={props.user}
      />
    </>
  );
}

export default Home;
