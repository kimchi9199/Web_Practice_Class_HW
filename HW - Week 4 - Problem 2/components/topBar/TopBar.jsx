import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import AccountCircle from '@material-ui/icons/AccountCircle';
import './TopBar.css';

/**
 * Define TopBar, a React componment of UIT project #5
 */
class TopBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const user = window.UITmodels.userModel(this.props.userId);
    let fullname = user ? user.first_name + ' ' + user.last_name : null;

    return (
      <AppBar className="cs142-topbar-appBar" position="absolute">
        <Toolbar>
          <Link 
            style={{textDecoration: 'none', color:'inherit'}} 
            to='/'
            onClick={this.props.onUserChange(null)}
          > 
            <Typography variant="h4" color="inherit" style={{ flex: 1 }}>
              Le Thi Kim Chi
            </Typography>
          </Link>
          <div style={{marginLeft: 'auto',}}>
            <Typography variant="h5" color="inherit">
              {fullname}
            </Typography>
          </div>
        </Toolbar>
      </AppBar>
    );
  }
}

export default TopBar;
