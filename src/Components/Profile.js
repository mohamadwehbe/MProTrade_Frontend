import React, {useEffect, useState} from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import profile from '../images/profile.svg';
import EditAlert from './EditAlert';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
    },
  },
}));

export default function Profile() {
  const classes = useStyles();
  const history = useHistory();
  const id = localStorage.getItem("id");

  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [updated,setUpdated] = useState(false)

  useEffect(()=>{
    if(!id) {
    history.push('/login')
    }
    getUser();
  },[id])

  useEffect(()=>{
    if(updated) {
      setFirstname('')
      setLastname('')
      setEmail('')
      setUsername('')
      setUpdated(false)
    }
  },[updated])

  const getUser = ()=> {

    const fd = new FormData();
    fd.append('customer_id',id);
    axios.post(`http://127.0.0.1:8000/api/auth/getuser`,fd).then(res => {
        console.log(res.data)
      })
      .catch(err => {
          console.log(err, 'Failed to add request')
      })
  }

  const update = (e) => {
    e.preventDefault();
        const data = {
        customer_id: id,
        name: username,
        email: email,
        firstname: firstname,
        lastname: lastname
      }
      axios.post(`http://127.0.0.1:8000/api/auth/updateuser`, data).then(res => {
      console.log(res.data.message)
      setUpdated(true)
      }).catch(err => {
        alert('Failed to Update')
        console.log(err, 'Failed to update')
      })
  }

  return (
        <div className="profile" >
            <img style={{width:'50%',marginTop:40}} src={profile} alt='profile'/>
            <form className={classes.root} noValidate autoComplete="off">
              <div className="loginform1" style={{padding:30}} >
                  <div className="signform">
                  <TextField
                  id="outlined-required"
                  label="First Name"
                  variant="outlined"
                  value={firstname}
                  onChange={name=>setFirstname(name.target.value)}
                  style={{backgroundColor:'white',width:220,margin:20}}
                  />
                  <TextField
                  id="outlined-required"
                  label="Last Name"
                  variant="outlined"
                  value={lastname}
                  onChange={name=>setLastname(name.target.value)}
                  style={{backgroundColor:'white',width:220,margin:20}}
                  />
                  </div>
                  
                  <div className="signform">
                  <TextField
                  id="outlined-required"
                  label="User Name"
                  variant="outlined"
                  value={username}
                  onChange={name=>setUsername(name.target.value)}
                  style={{backgroundColor:'white',width:220,margin:20}}
                  />
                  <TextField
                  id="outlined-required"
                  label="Email"
                  variant="outlined"
                  value={email}
                  onChange={name=>setEmail(name.target.value)}
                  style={{backgroundColor:'white',width:220,margin:20}}
                  />
                  </div>
                  <EditAlert update={update}/>
              </div>
            </form>
        </div>
  );
}
