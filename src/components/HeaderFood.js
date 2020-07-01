import React from 'react';
import './HeaderFood.css';

import pfp from '../images/pfp.png';

function HeaderFood(props) {
  return (
    <div id='HeaderFood'>
        {(props.user !== '') ? 
            <div className="profileHolder">
              <div className="handleHolder">
                <h1 id='name'>{props.user.name}</h1>
                <h2>@{props.user.username}</h2>
              </div>
              <img src={pfp} alt='profile pic' />
          </div>: 
          <h1>Log in to see your feed...</h1>
        }
    </div>
  );
}

export default HeaderFood;
