import React from 'react';
import '../../App.css';

const Title = ({ toDoCount }) => {

  return (
    <div>
       <div className="title-div">
          <h1 className="title-text">to-do ({toDoCount})</h1>
       </div>
    </div>
  )
}

export default Title;
