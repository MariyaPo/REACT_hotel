import React from "react";
import Button from "./Button";

class Search extends React.Component {
  setInputRef = input => {
    this.input = input;
  };
  handleSubmit = event => {
    event.preventDefault();
    this.props.search(this.input.value);
  };
  render() {
    return (
      <div className="search">
        <div className="page-header">
          <h4 className="text-left">Search Bookings</h4>
        </div>
        <div className="row search-wrapper">
          <div className="col">
            <form
              className="form-group search-box"
              onSubmit={this.handleSubmit}
            >
              <label htmlFor="customerName">Customer name</label>
              <input
                ref={this.setInputRef}
                type="text"
                id="customerName"
                className="form-control"
                placeholder="Customer Id"
              />
              <Button />
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Search;
