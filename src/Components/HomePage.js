import React ,{useEffect,useState} from 'react';
import ContactMailIcon from '@material-ui/icons/ContactMail';
import logimg from '../images/signpic.svg';
import CardSwiper from './CardSwiper';
import {Link, useHistory} from 'react-router-dom';
import Album from './Admin/Album';
function HomePage({
    hardrows,
    softrows,
    product,setproduct,
    prorow,setProrow,
    nb,setNb
}) {

  const history = useHistory();
  const id = localStorage.getItem("id")

  const rows = hardrows.concat(softrows)

  useEffect(()=>{
    if(!id) {
      history.push('/login')
    }
    else {
      console.log('rows',rows)
      console.log('softrows',softrows)
      console.log('hardrows',hardrows)
    }
  },[id])

  return (
    <div>
      <div className="home">
        <div style={{marginLeft:20}}>
          <p className="hometext" >
          An online trading store<br/>
          for software and hardware products,<br/>
          a place where you can sell products<br/>
          or safely buy them<br/>
          for a reasonable price.
          </p>
        </div>
        <img className="homeimg" src={logimg} alt="logimage"/>
      </div>
      <div className="bottom">
        { product==="soft"?
              <Album rows={softrows} 
              prorow={prorow} setProrow={setProrow}
              nb={nb} setNb={setNb}/>
          :
          product==="hard"?
              <Album rows={hardrows} 
              prorow={prorow} setProrow={setProrow}
              nb={nb} setNb={setNb}/>
          : 
          <Album rows={rows} 
          prorow={prorow} setProrow={setProrow}
          nb={nb} setNb={setNb}/>
        }
      </div>
    </div>
  );
}

export default HomePage;