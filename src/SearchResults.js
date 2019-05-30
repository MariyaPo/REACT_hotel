import React from "react";
import moment from "moment";

const SearchResults = props => {
  const tableData = props.results;
  const tableInfoData = tableData.map(data => (
    <tr>
      <th scope="row">{data.id}</th>
      <td>{data.title}</td>
      <td>{data.firstName}</td>
      <td>{data.surname}</td>
      <td>{data.email}</td>
      <td>{data.roomID}</td>
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
};

export default SearchResults;
