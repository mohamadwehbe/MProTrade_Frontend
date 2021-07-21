import React from 'react';
import Chart from './Chart';
import Order from './Order';
import Notify from './Notify';

function Dashboard(props) {
    return (
        <div style={{
            width:'100%',
            display:'flex',
            flexDirection:'column',
            alignItems:'center',
            padding:10}}
        >
        <Notify/>
        <p style={{color:'#000',fontSize:18,fontWeight:600,marginRight:750}}>Orders :</p>
        <Order/>
        <p style={{color:'#000',fontSize:18,fontWeight:600,marginRight:720}}>Analytics :</p>
        <Chart/>
        </div>
    );
}

export default Dashboard;