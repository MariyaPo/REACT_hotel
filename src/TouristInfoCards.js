import React from "react";

const TouristInfoCards = props => {
  return (
    <div className="App-content">
      <div className="container">
        <div className="card">
          <img src={props.source} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{props.cityName}</h5>
            <a href={props.link} className="btn btn-primary">
              For more information click here
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TouristInfoCards;
