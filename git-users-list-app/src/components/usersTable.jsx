import React, { Component } from "react";
import Table from "./common/table";
class UsersTable extends Component {
  state = {};
  columns = [
    {
      path: "avatar_url",
      label: "Avtar",
      content: user => (
        <img
          src={`${user.avatar_url}`}
          alt=""
          style={{ width: "40px", height: "40px" }}
        />
      )
    },
    { path: "login", label: "User" }
  ];
  render() {
    const { users } = this.props;
    return <Table data={users} columns={this.columns} />;
  }
}
export default UsersTable;
