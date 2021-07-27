import React, {useState,useEffect} from 'react';
import IconButton from '@material-ui/core/IconButton';
import MailIcon from '@material-ui/icons/Mail';
import Badge from '@material-ui/core/Badge';
import Dropdown from 'react-bootstrap/Dropdown';
import axios from 'axios';

function Dropdown2(props) {
  const [nb,setNb] = useState(0)

  const nbmsg = ()=> {

    axios.get(`http://127.0.0.1:8000/api/nbmsg`).then(res => {
      setNb(res.data)
    })
    .catch(err => {
        console.log(err, 'Failed to add request')
    })
  }

  const [rows,setRows] = useState([])

  const msg = ()=> {

    axios.get(`http://127.0.0.1:8000/api/listmsg`).then(res => {
      setRows(res.data)
    })
    .catch(err => {
        console.log(err, 'Failed to add request')
    })
  }

  useEffect(()=>{
    msg()
    nbmsg()
  },[])
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
    {rows.map((row) => (
      <Dropdown.Item key={row.id} style={{textDecoration:'none'}} onClick={()=>{setNb(nb-1)}}>
        <p style={{ color:'white',fontSize:18,fontWeight:500,
                    border:'1px solid white',borderRadius:50,
                    paddingTop:45,padding:20,backgroundColor:"black"}}>
            {row.name} is asking you a question :
            <p style={{fontWeight:600}}>{row.question}</p>
            Email : {row.email}
        </p>
      </Dropdown.Item>
      ))}
      </Dropdown.Menu>
  </Dropdown>
</>
    );
}

export default Dropdown2;