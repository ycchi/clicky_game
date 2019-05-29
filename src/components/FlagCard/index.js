import React from 'react';

function Card(props) {
   return (
   <div className="col-12 col-sm-6 col-md-4 mb-2">
      <div className="card">
      <img 
         class="card-img-top" 
         src={props.image}
         alt={props.name}
         value={props.id}
         onClick={() => props.handleClick(props.id)}
         style={{height: `20vh`}}
      />
      </div>
   </div>
   )
}

export default Card;