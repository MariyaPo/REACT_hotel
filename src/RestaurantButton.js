import React from "react";

const RestaurantButton = props => {
  return (
    <div>
      <div className="container">
        <button onClick={props.handler} className="btn btn-primary">
          {props.buttonName}
        </button>
      </div>
    </div>
  );
};
export default RestaurantButton;
