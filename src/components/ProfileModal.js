import React from "react";
import Modal from "react-bootstrap/Modal";

import "./ModalPost.css";

import axios from "axios";

function ProfileModal(props) {
  function handleSetPfp() {
    axios.post("http://localhost:5000/users/updateProfilePic/" + props.user._id, {
        profilePic: props.pfp,
      })
      .then((res2) => {
        props.setUser(res2.data);
      });
    props.handleClose();
  }

  return (
    <Modal show={props.show} onHide={props.handleClose}>
      <Modal.Body>
        <div className="form1">
          <input
            type="text"
            placeholder="Image Source"
            onChange={(e) => props.setPfp(e.target.value)}
          />
          <button onClick={handleSetPfp}>set profile pic</button>
        </div>
      </Modal.Body>
    </Modal>
  );
}

export default ProfileModal;
