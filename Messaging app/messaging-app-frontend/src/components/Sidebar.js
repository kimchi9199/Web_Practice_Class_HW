import React from 'react';
// import './Sidebar.css'
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import ChatIcon from '@mui/icons-material/Chat';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import {Avatar, IconButton} from '@material-ui/core';
import {SearchOutlined} from '@material-ui/icons'
import SidebarChat from './SidebarChat.js'
import {useStateValue} from './StateProvider'

const Sidebar = ({messages}) => {
    const [{user}, dispatch] = useStateValue();

    return(
        <div className="sidebar">
            <div className="sidebar_header">
                <Avatar src={user?.photoURL}/>
                <div className="sidebar_headerRight">
                    <IconButton>
                        <DonutLargeIcon />
                    </IconButton>

                    <IconButton>
                        <ChatIcon/>
                    </IconButton>

                    <IconButton>
                        <MoreVertIcon/>
                    </IconButton>
                </div>
            </div>
            <div className="sidebar_search">
                <div className="sidebar_searchContainer">
                    <SearchOutlined/>
                    <input placeholder="Search or start new chat" type="text"/>
                </div>
            </div>
            <div className="sidebar_chats">
                <SidebarChat messages={messages}/>
            </div>
        </div>
    )
}

export default Sidebar