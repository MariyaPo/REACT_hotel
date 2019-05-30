import React from "react";

const Footer = props => {
  const arrayData = props.footer;
  const newArray = arrayData.map(item => <li>{item}</li>);
  return (
    <div className="App-content">
      <div className="container">
        <ul className="footer">{newArray}</ul>
      </div>
    </div>
  );
};

export default Footer;
