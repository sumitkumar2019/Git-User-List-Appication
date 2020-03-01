import { getUsersByCity } from "../services/git-services";
import React, { Component } from "react";
import Pagination from "./common/pagination";
import UsersTable from "./usersTable";
import SearchBox from "./common/searchbox";
import _ from "lodash";
class GithubUsers extends Component {
  state = {
    data: [],
    pageSize: 30,
    currentPage: 1,
    totalCount: 0,
    searchQuery: "",
    defaultCity: "Bangalore",
    pageRange: _.range(1, 10 + 1)
  };

  async componentDidMount() {
    const { defaultCity, currentPage } = this.state;
    const response = await getUsersByCity(defaultCity, currentPage);
    const { items, total_count } = response.data.result;

    if (!_.isUndefined(items) && !_.isNull(items))
      this.setState({ data: items, totalCount: total_count });
  }
  handlePageChange = async page => {
    const { defaultCity } = this.state;
    const response = await getUsersByCity(defaultCity, page);
    const { items } = response.data.result;
    if (!_.isUndefined(items) && !_.isNull(items))
      this.setState({ data: items, currentPage: page });
  };
  handleSearch = searchQuery => {
    this.setState({
      searchQuery: searchQuery,
      currentPage: 1
    });
  };
  filterUsers(users, searchQuery) {
    let filteredUsers = users;
    if (searchQuery) {
      filteredUsers = users.filter(user =>
        user.login.toLowerCase().startsWith(searchQuery.toLowerCase())
      );
    }
    return filteredUsers;
  }

  handlePreviousPageChange = async currentPage => {
    const page = currentPage - 1;
    const { defaultCity } = this.state;
    if (page % 10 === 0) {
      this.setState({
        pageRange: _.range(currentPage - 10, page + 1)
      });
    }
    const response = await getUsersByCity(defaultCity, page);
    const { items } = response.data.result;
    if (!_.isUndefined(items) && !_.isNull(items))
      this.setState({ data: items, currentPage: page });
  };
  handleNextPageChange = async currentPage => {
    const page = currentPage + 1;
    const { defaultCity } = this.state;
    if (currentPage % 10 === 0) {
      this.setState({ pageRange: _.range(currentPage + 1, currentPage + 11) });
    }
    const response = await getUsersByCity(defaultCity, page);
    const { items } = response.data.result;
    if (!_.isUndefined(items) && !_.isNull(items))
      this.setState({ data: items, currentPage: page });
  };
  handleSearch = searchQuery => {
    this.setState({
      searchQuery: searchQuery,
      currentPage: 1
    });
  };

  render() {
    const {
      pageSize,
      currentPage,
      searchQuery,
      totalCount,
      data,
      pageRange
    } = this.state;
    const filterUsers = this.filterUsers(data, searchQuery);
    return (
      <div className="row">
        {totalCount < 1 && (
          <div className="col">
            <p>
              Either Server or Internet is down or There are {totalCount} users
              currently on GitHub From Bangalore
            </p>
          </div>
        )}
        {totalCount > 1 && (
          <div className="col">
            <p>
              There are {totalCount} users currently on GitHub From Bangalore
            </p>
            <SearchBox value={searchQuery} onChange={this.handleSearch} />
            <UsersTable users={filterUsers} />
            <Pagination
              itemCount={totalCount}
              pageSize={pageSize}
              onPageChange={this.handlePageChange}
              onPreviousPage={this.handlePreviousPageChange}
              onNextPage={this.handleNextPageChange}
              currentPage={currentPage}
              pageRange={pageRange}
            />
          </div>
        )}
      </div>
    );
  }
}

export default GithubUsers;
