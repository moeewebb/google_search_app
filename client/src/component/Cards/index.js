import React from 'react';

function Card (props){
    return(
  <div className="card mb-3" style={{width:'540px'}}>
  <div className="row no-gutters">
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">{props.author}</p>
      </div>
    </div>
  </div>
</div>


    )
}

export default Card