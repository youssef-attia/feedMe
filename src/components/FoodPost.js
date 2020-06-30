import React, { useState } from 'react';
import axios from 'axios'

import { AiOutlineHeart } from 'react-icons/ai';
import { AiFillHeart } from 'react-icons/ai';
import { TiDeleteOutline } from 'react-icons/ti';
import './FoodPost.css';

function FoodPost(props) {
  var [fav, setFav] = useState(false);
  function handleDelete() {
    const newPosts = props.posts.filter(e=>e._id!==props.id)
    axios.delete('http://localhost:5000/foods/'+props.id).then(()=>{
      axios.get('http://localhost:5000/foods/').then(res=>{
          props.setFeed(res.data)
        })
        props.setPosts(newPosts)
      }  
    )
    console.log('delete', props.id)
  }
  
  return (
    <div className='FoodPost'>
      <img src={props.image} alt='' />
      <div className='text'>
        <h1>{props.title}</h1>
        <p>{props.description}</p>
        <div className="extraInfo">
          <p className="poster">@{props.username}</p>
          <div className="postIconGroup">
            {fav?
            <AiFillHeart className='postIcons heart' onClick={()=>setFav(!fav)}/>:
            <AiOutlineHeart className='postIcons heart' onClick={()=>setFav(!fav)}/>
            }
            {props.feed?
            '':
            <TiDeleteOutline className='postIcons delete' onClick={handleDelete}/>
            }
          </div>
        </div>
      </div>
    </div>
  );
}

export default FoodPost;
