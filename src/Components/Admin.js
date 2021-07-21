import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Dashboard from './Admin/Dashboard';
import Customer from './Admin/Customer';
import Hardproduct from './Admin/Hardproduct';
import Softproduct from './Admin/Softproduct';
import Sidebar from './Admin/Sidebar';

function Admin({hardrows,softrows}) {
    return (
        <div style={{display:'flex',flexDirection:'row',width:"100%"}}>
            <Router>
                <Sidebar/>
                <Switch>
                    <Route exact path = '/admin' >
                        <Dashboard/>
                    </Route>
                    <Route exact path = '/customers' >
                        <Customer/>
                    </Route>
                    <Route exact path = '/hardproduct' >
                        <Hardproduct rows={hardrows}/>
                    </Route>
                    <Route exact path = '/softproduct' >
                        <Softproduct rows={softrows}/>
                    </Route>
                </Switch>
            </Router>
        </div>
    );
}

export default Admin;