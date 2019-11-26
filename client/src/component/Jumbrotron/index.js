import React from 'react';

function Jumbotron({children}){
    return(
<div className="jumbotron">
  <h1 className="display-4">{children}</h1>
  <p className="lead">Search the awesome google library for fantastic books!</p>
  <hr className="my-4"/>
  <p>The best books right at your fingertips!</p>
  
</div>)

}

export default Jumbotron
