import React from 'react'
import {NavLink} from 'react-router-dom'

export default function Nav({user,setUser}) {
        const linkStyle = {
            marginRight : 30
        };
        const onLogout = () => {
            setUser(null);
            localStorage.removeItem("id")
            window.location.reload();
        }

        const id = localStorage.getItem("id")
        
        return (
            <div className="nav-container">
                <h1>MProTrade</h1>
                <ul className="list-container">
                    <li>
                        <NavLink activeClassName="active" style={linkStyle} to="/home" >
                        Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink activeClassName="active" style={linkStyle} to="/software" >
                        Software
                        </NavLink>
                    </li>
                    <li>
                        <NavLink activeClassName="active" style={linkStyle} to="/hardware" >
                        Hadrware
                        </NavLink>
                    </li>
                    <li>
                        <NavLink activeClassName="active" style={linkStyle} to="/card" >
                        Cart
                        </NavLink>
                    </li>
                    <li>
                        <NavLink activeClassName="active" style={linkStyle} to="/contactus" >
                        Contact Us
                        </NavLink>
                    </li>
                    { !id && !user ?
                        (
                            <ul style={{
                                display: 'flex',
                                justifyContent: 'center',
                                listStyle: 'none'
                            }}>
                            <li>
                            <NavLink activeClassName="active" style={linkStyle} to="/signup" >
                                Register
                            </NavLink>
                            </li>
                            <li>
                            <NavLink activeClassName="active" style={linkStyle} to="/login" >
                                Login
                            </NavLink>
                            </li>
                            </ul>
                        )
                        : 
                            <ul style={{
                                display: 'flex',
                                justifyContent: 'center',
                                listStyle: 'none'
                            }}>
                            <li>
                            <NavLink activeClassName="active" style={linkStyle} to="/profile">
                                Profile
                            </NavLink>
                            </li>
                            <li>
                            <NavLink activeClassName="active" style={linkStyle} onClick={onLogout} to="/login">
                                Logout
                            </NavLink>
                            </li>
                            </ul>
                    }
                </ul>
            </div>
        );
}