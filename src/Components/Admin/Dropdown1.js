import React, {useState} from 'react';
import IconButton from '@material-ui/core/IconButton';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Badge from '@material-ui/core/Badge';
import Dropdown from 'react-bootstrap/Dropdown';
import { Button } from '@material-ui/core';

function Dropdown1(props) {
  const [nb,setNb] = useState(1)
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
      <Dropdown.Item style={{textDecoration:'none'}} onClick={()=>{setNb(0)}}>
        <p style={{ color:'white',fontSize:18,fontWeight:500,
                    border:'1px solid white',borderRadius:50,
                    paddingTop:45,padding:20,backgroundColor:"black"}}>
            Mohamad Wehbe wants to sell an acroname network routing switch.
            <div style={{display:'flex',flexDirection:'row'}}>
            <p style={{fontWeight:600,borderRadius:50,backgroundColor:'white',color:'black',padding:10}}>Accept</p>
            <p style={{fontWeight:600,borderRadius:50,backgroundColor:'white',color:'black',padding:10,marginLeft:10}}>Reject</p>
            </div>
        </p>
      </Dropdown.Item>
      </Dropdown.Menu>
  </Dropdown>
</>
    );
}

export default Dropdown1;