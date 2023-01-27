import React from 'react'
import "./sidebar.css"
import DashboardIcon from '@mui/icons-material/Dashboard';
import TableRowsIcon from '@mui/icons-material/TableRows';
import TagIcon from '@mui/icons-material/Tag';
import {Link} from "react-router-dom"
import logo from './ROCKWOOL.jpg'


const Sidebar = () => {

    return(
        <div className='Sidebar'>
            <div className='top'></div>
                <span className='logo'>
                    <img className="resize" src={logo} />
                </span> <hr/>
            <div className='center'>Sidebar</div>
                <ul>
                    <li>
                        <DashboardIcon/>
                        <span>Main dashboard</span>
                    </li>
                    <li>
                        <TableRowsIcon/>
                        <span>Predictions table</span>
                        <li><a href="/config">config</a></li>
                        <li><a href="/prueba">prueba</a></li>
                    </li>
                    <li>
                        <TagIcon/>
                        <span>Tag information</span>
                    </li>
                </ul>
            <div className='bottom'>Sidebar</div>
        </div>
    )
}

export default Sidebar;