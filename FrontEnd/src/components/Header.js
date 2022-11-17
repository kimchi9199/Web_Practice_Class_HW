import React from 'react'
//import '../style/Header.css'
import PersonIcon from '@mui/icons-material/Person'
import IconButton from '@mui/material/IconButton';
import ForumIcon from '@mui/icons-material/Forum';

function Header() {
  return (
    <div className="header">
      <IconButton>
        <PersonIcon fontSize="large" className="header__icon"></PersonIcon>
      </IconButton>
      <img className="header__logo" src="../img/logo192.png" alt="header"/>
      <IconButton>
        <ForumIcon fontSize="large" className="header__icon"/>
      </IconButton>
    </div>
  )
}

export default Header