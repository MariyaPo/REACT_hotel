import React, { Component } from "react";
import RestaurantButton from "./RestaurantButton";

export default class Order extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Orders: 0
    };
  }
  addOrder = () => {
    this.setState({
      Orders: this.state.Orders + 1
    });
  };

  removeOrder = () => {
    this.setState({
      Orders: this.state.Orders - 1
    });
  };

  resetOrder = () => {
    this.setState({
      Orders: (this.state.Orders = 0)
    });
  };
  render() {
    return (
      <li className="orderButton">
        {this.props.orderType}:{this.state.Orders}
        <RestaurantButton handler={this.addOrder} buttonName="Add" />
        <RestaurantButton handler={this.removeOrder} buttonName="Remove" />
        <RestaurantButton handler={this.resetOrder} buttonName="Reset" />
      </li>
    );
  }
}
