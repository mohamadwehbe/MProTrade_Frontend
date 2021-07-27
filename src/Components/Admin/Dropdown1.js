import React, {useState,useEffect} from 'react';
import IconButton from '@material-ui/core/IconButton';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Badge from '@material-ui/core/Badge';
import Dropdown from 'react-bootstrap/Dropdown';
import { Button } from '@material-ui/core';
import axios from 'axios';

function Dropdown1(props) {
  const [nb,setNb] = useState(0)

  const nbnot = ()=> {

    axios.get(`http://127.0.0.1:8000/api/nb`).then(res => {
      setNb(res.data)
    })
    .catch(err => {
        console.log(err, 'Failed to add request')
    })
  }

  const [rows,setRows] = useState([])

  const not = ()=> {

    axios.get(`http://127.0.0.1:8000/api/listnot`).then(res => {
      setRows(res.data)
    })
    .catch(err => {
        console.log(err, 'Failed to add request')
    })
  }

  useEffect(()=>{
    not()
    nbnot()
  },[])

    return (
        <>
  <Dropdown>
    <Dropdown.Toggle id="dropdown-button-dark-example1" variant="secondary" style={{border:'none'}}>
    <IconButton aria-label="show new notifications" color="inherit">
          <Badge badgeContent={nb} color="secondary">
             <NotificationsIcon />
           </Badge>
        </IconButton>
    </Dropdown.Toggle>

    <Dropdown.Menu>
    {rows.map((row) => (
      <Dropdown.Item key={row.id} style={{textDecoration:'none'}} onClick={()=>{setNb(nb-1)}}>
        <p style={{ color:'white',fontSize:18,fontWeight:500,
                    border:'1px solid white',borderRadius:50,
                    paddingTop:45,padding:20,backgroundColor:"black"}}>
            {row.firstname} {row.lastname} wants to sell a {row.notification}
            <div style={{display:'flex',flexDirection:'row'}}>
            <p style={{fontWeight:600,borderRadius:50,backgroundColor:'white',color:'black',padding:10}}>Accept</p>
            <p style={{fontWeight:600,borderRadius:50,backgroundColor:'white',color:'black',padding:10,marginLeft:10}}>Reject</p>
            </div>
        </p>
      </Dropdown.Item>
      ))}
      </Dropdown.Menu>
  </Dropdown>
</>
    );
}

export default Dropdown1;