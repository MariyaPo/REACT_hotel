import React, { Component } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";
import FakeBookings from "./data/fakeBookings.json";

export default class Bookings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fakeBookings: null
    };
  }

  componentDidMount() {
    fetch("https://cyf-react.glitch.me").then(resultOfFetching =>
      resultOfFetching.json().then(dataFetched =>
        this.setState({
          fakeBookings: dataFetched
        })
      )
    );
  }

  search = searchVal => {
    let filteredSearch = this.state.fakeBookings.filter(
      filtered =>
        filtered.firstName.toLowerCase() === searchVal.toLowerCase() ||
        filtered.surname.toLowerCase() === searchVal.toLowerCase()
    );
    if (filteredSearch.length === 0) {
      this.setState({
        fakeBookings: this.state.fakeBookings
      });
    } else {
      this.setState({
        fakeBookings: filteredSearch
      });
    }
  };

  render() {
    return (
      <div className="App-content">
        <div className="container">
          <Search search={this.search} />
          {this.state.fakeBookings ? (
            <SearchResults results={this.state.fakeBookings} />
          ) : (
            <h1>Waiting for data to be fetch...</h1>
          )}
        </div>
      </div>
    );
  }
}
