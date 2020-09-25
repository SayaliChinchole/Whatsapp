import React from 'react';
import "./Sidebar.css";
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ChatIcon from '@material-ui/icons/Chat';
import { Avatar, IconButton, Icon } from '@material-ui/core';
import MoreVertIcon from '@material-ui/icons/MoreVert';
//import { SearchOutLined } from "@material-ui/icons/";
import SidebarChat from "./SidebarChat";
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';

function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebar_header">
                <Avatar src="https://lh3.googleusercontent.com/ogw/ADGmqu97bsi3QJ_W-11WgsxwdsOWhq3zAKFJwNy7-X43=s32-c-mo" />    
                <div className="sidebar_headerRight">
                    <IconButton>
                        <DonutLargeIcon/>
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
                    <IconButton>
                        <SearchOutlinedIcon/>
                    </IconButton>    
                    <input type="text" placeholder="Search or Start new chat" />
                </div>
            </div>
            <div className="sidebar_chats">
                <SidebarChat />
                <SidebarChat />
                <SidebarChat />
                
            </div>
        </div>
    )
}

export default Sidebar
