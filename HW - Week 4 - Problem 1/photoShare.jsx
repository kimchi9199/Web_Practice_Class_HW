import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route, Switch } from 'react-router-dom';
import { Grid, Typography, Paper } from '@material-ui/core';
import './styles/main.css';

// import necessary components
import TopBar from './components/topBar/TopBar';
import UserDetail from './components/userDetail/userDetail';
import UserList from './components/userList/userList';
import UserPhotos from './components/userPhotos/userPhotos';

class PhotoShare extends React.Component {
  constructor(props) {
    super(props);

    //states
    this.state = {
      currentUserId: null,
      isPhoto: false
    };

    //currentUserId handler
    this.onUserChangeBound = userid => this.onUserChange.bind(this, userid);
  }

  onUserChange(userid) {
    this.setState({ currentUserId: userid });
  }

  render() {
    return (
      <HashRouter>
        <div>
          <Grid container spacing={8}>
            <Grid item xs={12}>
              <TopBar 
                userId={this.state.currentUserId}
                onUserChange={this.onUserChangeBound}
              />
            </Grid>
            <div className="cs142-main-topbar-buffer"/>
            <Grid item sm={3}>
              <Paper  className="cs142-main-grid-item">
                <UserList
                  onUserChange={this.onUserChangeBound}
                />
              </Paper>
            </Grid>
            <Grid item sm={9}>
              <Paper className="cs142-main-grid-item">
                <Switch>
                  <Route exact path="/"
                    render={() =>
                      <Typography variant="body1">
                      Welcome to your photosharing app! This <a href="https://material-ui.com/demos/paper/">Paper</a> component
                      displays the main content of the application. The {"sm={9}"} prop in
                      the <a href="https://material-ui.com/layout/grid/">Grid</a> item component makes it responsively
                      display 9/12 of the window. The Switch component enables us to conditionally render different
                      components to this part of the screen. You don&apos;t need to display anything here on the homepage,
                      so you should delete this Route component once you get started.
                      </Typography>}
                  />
                  <Route exact path="/users/:userId"
                    render={ props => <UserDetail {...props} /> }
                  />
                  <Route exact path="/users/:userId/photos"
                    render ={ props => <UserPhotos {...props} /> }
                  />
                  <Route path="/users" component={UserList}  />
                </Switch>
              </Paper>
            </Grid>
          </Grid>
        </div>
      </HashRouter>
    );
  }
}


ReactDOM.render(
  <PhotoShare />,
  document.getElementById('photoshareapp'),
);
