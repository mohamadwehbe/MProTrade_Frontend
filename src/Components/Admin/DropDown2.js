import React, {useState} from 'react';
import IconButton from '@material-ui/core/IconButton';
import MailIcon from '@material-ui/icons/Mail';
import Badge from '@material-ui/core/Badge';
import Dropdown from 'react-bootstrap/Dropdown';

function Dropdown2(props) {
  const [nb,setNb] = useState(1)
    return (
        <>
  <Dropdown>
    <Dropdown.Toggle id="dropdown-button-dark-example1" variant="secondary" style={{border:'none'}}>
    <IconButton aria-label="show new mails" color="inherit">
          <Badge badgeContent={nb} color="secondary">
             <MailIcon />
           </Badge>
        </IconButton>
    </Dropdown.Toggle>

    <Dropdown.Menu>
      <Dropdown.Item style={{textDecoration:'none'}} onClick={()=>{setNb(0)}}>
        <p style={{ color:'white',fontSize:18,fontWeight:500,
                    border:'1px solid white',borderRadius:50,
                    paddingTop:45,padding:20,backgroundColor:"black"}}>
            Mohamad Wehbe is asking you a question :
            <p style={{fontWeight:600}}>Do you gain something from this website ?</p>
        </p>
      </Dropdown.Item>
      </Dropdown.Menu>
  </Dropdown>
</>
    );
}

export default Dropdown2;