import React, { useState } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import axios from 'axios';
import HomePage from './HomePage';
import SignUp from './SignUp';
import Sell from './Sell';
import Login from './Login';
import Contact from './Contact';
import Card from './Card';
import View from './View';
import Profile from './Profile';
import AppBar from './AppBar';

export default function NavBar({
    user,setUser,
    hardrows,setHardrows,
    softrows,setSoftrows,
}){
    const [nb,setNb] = useState(0);
    const [product,setproduct] = useState("");
    const [prorow,setProrow] = useState({});

    // const addhardcart = (rowID)=> {
    //     const fd = new FormData();
    //     fd.append('customer_id',id);
    //     fd.append('hardware_id',rowID);

    //     axios.post(`http://127.0.0.1:8000/api/addhardcart`, fd).then(res => {
    //         console.log(res.data)
    //     }).catch(err => {
    //         console.log(err, 'Failed to add request')
    //     })
    // }

    // const addsoftcart = (rowID)=> {
    //     const fd = new FormData();
    //     fd.append('customer_id',id);
    //     fd.append('software_id',rowID);

    //     axios.post(`http://127.0.0.1:8000/api/addsoftcart`, fd).then(res => {
    //         console.log(res.data)
    //     }).catch(err => {
    //         console.log(err, 'Failed to add request')
    //     })
    // }

    return (
        <div style={{width:"100%"}}>
            <Router>
                <AppBar 
                user={user} setUser={setUser} 
                product={product} setproduct={setproduct}
                nb={nb} setNb={setNb}/>
                <Switch>
                    <Route exact path = '/home' >
                        <HomePage
                            user={user} setUser={setUser}
                            hardrows={hardrows} setHardrows={setHardrows}
                            softrows={softrows} setSoftrows={setSoftrows}
                            product={product} setproduct={setproduct}
                            prorow = {prorow} setProrow={setProrow}
                            nb={nb} setNb={setNb}
                        />
                    </Route>
                    <Route exact path = '/sell' >
                        <Sell
                            user={user} setUser={setUser}
                            softrows={softrows} setSoftrows={setSoftrows}
                        />
                    </Route>
                    <Route exact path = '/view' >
                        <View
                            user={user} setUser={setUser}
                            hardrows={hardrows} setHardrows={setHardrows}
                            prorow={prorow} setProrow={setProrow}
                            nb={nb} setNb={setNb}
                        />
                    </Route>
                    <Route exact path = '/card' >
                        <Card
                            user={user} setUser={setUser}
                            hardrows={hardrows} setHardrows={setHardrows}
                            softrows={softrows} setSoftrows={setSoftrows}
                        />
                    </Route>
                    <Route exact path = '/contactus' >
                        <Contact user={user} setUser={setUser}/>
                    </Route>
                    <Route exact path = '/profile' >
                        <Profile user={user} setUser={setUser}/>
                    </Route>
                    <Route exact path = '/signup' >
                        <SignUp user={user} setUser={setUser}/>
                    </Route>
                    <Route exact path = '/login' >
                        <Login user={user} setUser={setUser}/>
                    </Route>
                </Switch>
            </Router>
        </div>
    )
}