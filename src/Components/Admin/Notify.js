import React from 'react';
import Dropdown1 from './Dropdown1';
import Dropdown2 from './DropDown2';

function Notify(props) {

  return (
    <div style={{padding:10,marginLeft:700,display:'flex',flexDirection:'row'}}>
        <Dropdown1/>
        <Dropdown2/>
    </div>
  );
}

export default Notify;