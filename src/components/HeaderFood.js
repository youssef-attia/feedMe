import React,{ useState } from 'react';
import './HeaderFood.css';

import pfp from '../images/pfp.png';
import ProfileModal from './ProfileModal';

function HeaderFood(props) {
  const [show, setShow] = useState(false);
  const [newPfp, setPfp] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div id='HeaderFood'>
      {props.visit?'':
      <ProfileModal
        show={show}
        handleClose={handleClose}
        user={props.user}
        setUser={props.setUser}
        pfp={newPfp}
        setPfp={setPfp}
      />
      }
        {(props.user !== '') ? 
            <div className="profileHolder">
              <div className="handleHolder">
                <h1 id='name'>{props.user.name}</h1>
                <h2>@{props.user.username}</h2>
              </div>
              <img src={props.user.profilePic||pfp} alt='profile pic' onClick={handleShow}/>
          </div>: 
          <h1>Log in to see your feed...</h1>
        }
    </div>
  );
}

export default HeaderFood;
