import React from 'react';
import logimg1 from '../images/secure.svg';
import SignUpForm from './SignUpForm';

function SignUp({user,setUser}) {
  return (
      <div className="login">
        <div style={{marginLeft:50}}>
          <SignUpForm user={user} setUser={setUser}/>
        </div>
        <div style={{display:'flex',flexDirection:'column',alignItems:'center'}}>
       <img style={{width:'65%'}} src={logimg1} alt="logimage1"/>
        </div>
      </div>
  );
}

export default SignUp;