import React, {useEffect, useState} from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
    },
  },
}));

export default function SignUpForm({user,setUser}) {
  const classes = useStyles();
  const [firstname, setFirstname] = useState('')
  const [lastname, setLastname] = useState('')
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [pass, setPass] = useState('')
  const [cpass, setCpass] = useState('')
  const history = useHistory();

  // useEffect(()=>{
  //   console.log("user",user)
  //   if(user) {
  //     localStorage.setItem("id",user.id)
  //   }
  // },[user])

  const register = (e) => {
    e.preventDefault();
    if (!firstname || !lastname || !username || !email || !pass || !cpass) {
      alert('Please fill in all the fields');
      return;
    }
    else if (pass !== cpass) {
      alert('"Password" and "Confirm Password fields must be identical')
      return;
    }
    else if(pass.length < 8) {
      alert('Password must be at least 8 characters')
      return;
    } 
    else {
      const data = {
        name: username,
        email: email,
        password: pass,
        password_confirmation: cpass,
        firstname: firstname,
        lastname: lastname
      }
      axios.post(`http://127.0.0.1:8000/api/auth/signup`, data).then(res => {
      if(res.data.message === "Successfully created user!") {
        // setUser(
        //   {
        //     username:username,
        //     password:pass,
        //     id:res.data.customer.id
        //   }
        // )
        history.push('/login');
      }
      }).catch(err => {
        alert('Failed to Sign Up')
        console.log(err, 'Failed to send register request')
      })
    }
  }

  return (
            <form className={classes.root} noValidate autoComplete="off">
              <div className="loginform1" >
                  <p style={{color:'#000000',fontSize:30,fontWeight:600,fontFamily:'sans-serif'}} >Register</p>
                  <div className="signform">
                  <TextField
                  id="outlined-required"
                  label="First Name"
                  variant="outlined"
                  onChange={name=>setFirstname(name.target.value)}
                  style={{backgroundColor:'white',width:180 ,margin:10}}
                  />
                  <TextField
                  id="outlined-required"
                  label="Last Name"
                  variant="outlined"
                  onChange={name=>setLastname(name.target.value)}
                  style={{backgroundColor:'white',width:180 ,margin:10}}
                  />
                  </div>
                  
                  <div className="signform">
                  <TextField
                  id="outlined-required"
                  label="User Name"
                  variant="outlined"
                  onChange={name=>setUsername(name.target.value)}
                  style={{backgroundColor:'white',width:180 ,margin:10}}
                  />
                  <TextField
                  id="outlined-required"
                  label="Email"
                  variant="outlined"
                  onChange={name=>setEmail(name.target.value)}
                  style={{backgroundColor:'white',width:180 ,margin:10}}
                  />
                  </div>
                  
                  <div className="signform">
                  <TextField
                  id="outlined-password-input"
                  label="Password"
                  type="password"
                  autoComplete="current-password"
                  variant="outlined"
                  onChange={name=>setPass(name.target.value)}
                  style={{backgroundColor:'white',width:180 ,margin:10}}
                  />
                  <TextField
                  id="outlined-password-input"
                  label="Confirm Password"
                  type="password"
                  autoComplete="current-password"
                  variant="outlined"
                  onChange={name=>setCpass(name.target.value)}
                  style={{backgroundColor:'white',width:180 ,margin:10}}
                  />
                  </div>
                  
                  <Button
                  style={{
                      marginTop: 10,
                      backgroundColor :"#000000",
                      color:"#ffffff",
                      fontWeight:600,
                      height:50,
                      width:120,
                      borderRadius:50,
                      paddingTop:10
                      }}
                  onClick={register}
                  >Register</Button>
              </div>
            </form>
  );
}
