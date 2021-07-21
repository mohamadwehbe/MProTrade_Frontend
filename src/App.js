import './App.css';
import React, {useEffect, useState} from 'react';
import NavBar from './Components/NavBar';
import Admin from './Components/Admin';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import axios from 'axios';

  function App() {

  const [hardrows, setHardrows] = useState([])

  const [softrows, setSoftrows] = useState([])

  const [user,setUser] = useState(null);

  const allHardware = () => {

    axios.get(`http://127.0.0.1:8000/api/listhardware`).then(res => {
      setHardrows(res.data)
    })
    .catch(err => {
        console.log(err, 'Failed to add request')
    })
  }

  const allSoftware = () => {

    axios.get(`http://127.0.0.1:8000/api/listsoftware`).then(res => {
      setSoftrows(res.data)
    })
    .catch(err => {
        console.log(err, 'Failed to add request')
    })
  }

  useEffect(()=>{
    allHardware();
    allSoftware();
  },[])

  return (
    <div>
        <NavBar
          user={user} setUser={setUser}
          hardrows={hardrows} setHardrows={setHardrows}
          softrows={softrows} setSoftrows={setSoftrows}
        />
        {/* <Admin
          hardrows={hardrows} setHardrows={setHardrows}
          softrows={softrows} setSoftrows={setSoftrows}
        /> */}
    </div>
  );
}
export default App;
