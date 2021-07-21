import React from 'react';
import ContactMailIcon from '@material-ui/icons/ContactMail';
import logimg from '../images/code.svg';
import LoginForm from './LoginForm';
import {Link} from 'react-router-dom';

function Login({user,setUser}) {
  return (
      <div className="login">
        <div style={{marginTop:30,display:'flex',flexDirection:'column',alignItems:'center'}}>
        <img className="logimg" src={logimg} alt="logimage"/>
        <p className="signin">
            Sign in
            so you can see
            our clients' products
            and topics you want,
            and interact with others.
        </p>
        </div>
        <div style={{marginTop:40,marginBottom:50,marginRight:180}}>
          <LoginForm user={user} setUser={setUser}/>
        </div>
      </div>
  );
}

export default Login;