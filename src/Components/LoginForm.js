import React,{useState,useEffect} from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import {Link, useHistory} from 'react-router-dom'
import { Button } from '@material-ui/core';
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

export default function FormPropsTextFields({user,setUser}) {
  const classes = useStyles();
  const [email, setEmail] = useState('')
  const [pass, setPass] = useState('')
  const history = useHistory();

  useEffect(()=>{
    console.log("user",user)
    if(user) {
      localStorage.setItem("id",user.id)
    }
  },[user])

  const login = (e) => {
    console.log('login')
    e.preventDefault();
    if (!email || !pass) {
      alert('Please fill in all fields');
      return;
    }
    else {
      const data = new FormData();
      data.append('email',email);
      data.append('password',pass);
      axios.post(`http://127.0.0.1:8000/api/auth/login`, data).then(res => {
      if(res.data.access_token) {
        setUser(
          {
            username:res.data.user.name,
            password:pass,
            id:res.data.customer.id
          }
        )
        history.push('/home');
      }
      }).catch(err => {
        alert('Failed to Login')
        console.log(err, 'Failed to send register request')
      })
      
    }
  }
  return (
        <form className={classes.root} noValidate autoComplete="off" onSubmit={e => e.preventDefault()}>
        <div className="loginform" >
           <p style={{color:'#000000',fontSize:25,fontWeight:600,fontFamily:'sans-serif'}} >Login</p>
            <TextField
            id="outlined-required"
            label="Email"
            variant="outlined"
            style={{backgroundColor:'white',width:250}}
            onChange={name=>setEmail(name.target.value)}
            />
            <TextField
            id="outlined-password-input"
            label="Password"
            type="password"
            autoComplete="current-password"
            variant="outlined"
            style={{backgroundColor:'white',width:250}}
            onChange={name=>setPass(name.target.value)}
            />
            <Button
            style={{
              backgroundColor :"#000000",
              color:"#ffffff",
              fontWeight:600,
              height:40,
              width:120,
              borderRadius:50,
              paddingTop:10,
              marginTop:10
                }}
            onClick={login}
            >Login</Button>
            <div style={{display:"flex",flexDirection:"row",alignItems:"center"}}>
            <p className="account" >New to MProTrade?</p>
            <Link className="gosign" to="/signup" style={{textDecoration: "none"}} >
                Register
            </Link>
            </div>
        </div>
        </form>
  );
}
