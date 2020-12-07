import React, { useEffect } from "react";
import {connect} from "react-redux";
import { fetchUsers } from "../actions";
export const UsersListPage = (props) => {
  const { fetchUsers, users = [] } = props;
  useEffect(() => {
    fetchUsers();
  },[]);
  const renderUsers = (users) => {
    console.log(users);
    return users.map((user) => 
      <li key={user.id}>{user.name}</li>
    );
  };
  return (
    <div>
      <p>List of users</p>
      <ul>{renderUsers(users)}</ul>
    </div>
  );
};

const mapStateToProps = (reduxState) => {
  return { users: reduxState.users };
};

const loadData = (store) => {
  return store.dispatch(fetchUsers());
};

export default connect(mapStateToProps, { fetchUsers })(UsersListPage);
