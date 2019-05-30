import React, { Component } from "react";

import Bookings from "./Bookings";
import Heading from "./Heading";
import TouristInfoCards from "./TouristInfoCards";
import Footer from "./Footer";
import Restaurant from "./Restaurant";

import "./App.css";

class App extends Component {
  render() {
    const footerArray = [
      "123 Fake Street",
      "London",
      "E1 4UD",
      "hello@fakehotel.com",
      "0123 456789"
    ];
    return (
      <div className="App">
        <Heading />
        <div className="card-container">
          <TouristInfoCards
            source="https://www.lastminute.com/holidays/img/united-kingdom/glasgow.jpg"
            cityName="Glasgow"
            link="peoplemakeglasgow.com"
          />
          <TouristInfoCards
            source="https://www.visitmanchester.com/imageresizer/?image=%2Fdbimgs%2FOlympic%20Parade%20nav.jpg&action=FeaturedItems3x2"
            cityName="Manchester"
            link="visitmanchester.com"
          />
          <TouristInfoCards
            source="https://feweek.co.uk/wp-content/uploads/2018/09/p4-aeb-london-feat.jpg"
            cityName="London"
            link="visitlondon.com"
          />
        </div>
        <Bookings />
        <Restaurant />
        <Footer footer={footerArray} />
      </div>
    );
  }
}

export default App;
