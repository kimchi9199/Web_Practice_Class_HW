import React from 'react';
import {
  Divider,
  List,
  ListItem,
  ListItemText,
  Typography,
}
from '@material-ui/core';

import { useState, useEffect } from 'react';
import {HashRouter as Router, Route, Link} from 'react-router-dom';
import './userList.css';
import fetchModel from '../../lib/fetchModelData.js';

/**
 * Define UserList, a React componment of CS142 project #5
 */
class UserList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        users : [],
    };
  }

  componentDidMount() {
    // Async call to server
    fetchModel('/user/list')
        .then((response) => {
          let users = response['data'];
          console.log(response);
          this.setState({ users : users });
        })
        .catch((e) => {
          console.log(e);
        });
  }

  userFullName(user) {
    if (!user) return "";
    return user.first_name + " " + user.last_name;
  }

  userListItems() {
    //for (let user of users) console.log(this.userFullName(user));
    return (
        this.state.users.map((user) =>
            <ListItem divider={true} key={user._id}>
              <Link to={"/users/" + user._id} className="user-list-item">
                <ListItemText primary={this.userFullName(user)} />
              </Link>
            </ListItem>
        )
    );
  }

  render() {
    return (
        <Router>
          <List component="nav">
            {this.userListItems()}
          </List>
        </Router>
    );
  }
}



export default UserList;
