import React, {useState} from 'react';
import Modal from 'react-bootstrap/Modal'

import './ModalPost.css';

import axios from 'axios';

function ModalPost(props) {
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [src, setSrc] = useState('');

  function handleSetPosts(){
    var newPost = {
      username: props.user.username,
      title: title,
      description: desc,
      image:src,
    }
    axios.post('http://localhost:5000/foods/add', newPost)
      .then(() => {
        axios.get('http://localhost:5000/foods/').then(res=>{
          props.setPosts(res.data.filter((e) => e.username === props.user.username));
          props.setFeed(res.data)
        })
      })
    props.handleClose();
  }

  return (
    <Modal show={props.show} onHide={props.handleClose}>
        <Modal.Body>
          <div className="form1">
              <input type="text" placeholder="Title" onChange={e => setTitle(e.target.value)} />
              <br/>
              <input type="text" placeholder="Description" onChange={e => setDesc(e.target.value)} />
              <br/>
              <input type="text" placeholder="Image Source" onChange={e => setSrc(e.target.value)} />
              <button onClick={handleSetPosts}>create</button>
          </div>
        </Modal.Body>
      </Modal>
  )
}

export default ModalPost;