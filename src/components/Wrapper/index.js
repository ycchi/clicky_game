import React from "react";
// import "./style.css";

function Wrapper(props) {
  return (
    <div className="wrapper">
      <div className="container">
      <div className="row">
       {props.children}
       </div>
      </div>
    </div>

  ) 
}

export default Wrapper;