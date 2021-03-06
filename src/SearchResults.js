import React from "react";
import moment from "moment";

class SearchResults extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isClicked: false
    };
  }
  handleColorChange = () => {
    this.setState({
      isClicked: !this.state.isClicked
    });
  };
  render() {
    const tableData = this.props.results;
    const tableInfoData = tableData.map(data => (
      <tr
        scope="row"
        className={this.state.isClicked ? this.state.isClicked : "rowColor"}
        onClick={this.handleColorChange}
      >
        <th>{data.id}</th>
        <td>{data.title}</td>
        <td>{data.firstName}</td>
        <td>{data.surname}</td>
        <td>{data.email}</td>
        <td>{data.roomId}</td>
        <td>{data.checkInDate}</td>
        <td>{data.checkOutDate}</td>
        <td>{moment(data.checkOutDate).diff(data.checkInDate, "days")}</td>
      </tr>
    ));
    return (
      <table class="table">
        <thead>
          <tr>
            <th scope="col">id</th>
            <th scope="col">title</th>
            <th scope="col">first name</th>
            <th scope="col">surname</th>
            <th scope="col">email</th>
            <th scope="col">room id</th>
            <th scope="col">check in date</th>
            <th scope="col">check out date</th>
            <th scope="col">number of nights</th>
          </tr>
        </thead>
        <tbody>{tableInfoData}</tbody>
      </table>
    );
  }
}

export default SearchResults;
