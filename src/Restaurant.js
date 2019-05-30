import React from "react";
import Order from "./Order";

class Restaurant extends React.Component {
  render() {
    return (
      <div>
        <div className="container">
          <h3>Restaurant Orders</h3>
          <ul>
            <Order orderType="Pizza" />
            <Order orderType="Salad" />
            <Order orderType="Cake" />
          </ul>
        </div>
      </div>
    );
  }
}
export default Restaurant;
