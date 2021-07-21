import React from 'react'
import {NavLink} from 'react-router-dom'

export default function Sidebar() {
        return (
            <div className="side-container">
                <ul className="listside-container">
                    <li style={{marginTop:20}}>
                        <NavLink activeClassName="active" to="/admin" >
                        MProTrade
                        </NavLink>
                    </li>
                    <li style={{marginTop:40}}>
                        <NavLink activeClassName="active" to="/softproduct" >
                        Software
                        </NavLink>
                    </li>
                    <li style={{marginTop:40}}>
                        <NavLink activeClassName="active" to="/hardproduct" >
                        Hardware
                        </NavLink>
                    </li>
                    <li style={{marginTop:40}}>
                        <NavLink activeClassName="active" to="/customers" >
                        Users
                        </NavLink>
                    </li>
                </ul>
            </div>
        );
}