import React from 'react';
import {Pie} from 'react-chartjs-2';

const state = {
  labels: ['eliek', 'mwehbe', 'lia','yvona'],
  datasets: [
    {
      label: 'Rainfall',
      backgroundColor: [
        '#00ff00',
        '#0080fe',
        '#ffff33',
        '#25383c',
      ],
      hoverBackgroundColor: [
        '#009900',
        '#0018f9',
        '#ffcc00',
        '#000000',
      ],
      data: [3, 3, 2, 2]
    }
  ]
}

const hstate = {
  labels: ['eliek','mwehbe','lia','yvona'],
  datasets: [
    {
      label: 'Rainfall',
      backgroundColor: [
        '#00ff00',
        '#0080fe',
        '#ffff33',
        '#25383c',
      ],
      hoverBackgroundColor: [
        '#009900',
        '#0018f9',
        '#ffcc00',
        '#000000',
      ],
      data: [3, 3, 2, 2]
    }
  ]
  }

export default class App extends React.Component {
  render() {
    return (
      <div style={{borderRadius:50,display:'flex',flexDirection:'row',alignItems:'center',padding:30,paddingLeft:60,paddingRight:60,backgroundColor:'black'}}>
            <div style={{boxShadow:'0 3px 5px #333',marginRight:30,backgroundColor:'#fff',borderRadius:50,display:'flex',flexDirection:'column',alignItems:'center',paddingTop:10,paddingBottom:20,paddingRight:40,paddingLeft:40}}>
            <p style={{color:'#000',fontWeight:600,fontSize:18}}>Software Product Purchase per User</p>
            <Pie
            data={state}
            options={{
                title:{
                display:true,
                text:'SoftPro per User',
                fontSize:20
                },
                legend:{
                display:true,
                position:'right'
                }
            }}
            />
            </div>
            <div style={{boxShadow:'0 3px 5px #333',marginLeft:30,backgroundColor:'#fff',borderRadius:50,display:'flex',flexDirection:'column',alignItems:'center',paddingTop:10,paddingBottom:20,paddingRight:40,paddingLeft:40}}>
            <p style={{color:'#000',fontWeight:600,fontSize:18}}>Hardware Product Purchase per User</p>
            <Pie
            data={hstate}
            options={{
                title:{
                display:true,
                text:'HardPro per User',
                fontSize:20
                },
                legend:{
                display:true,
                position:'right'
                }
            }}
            />
        </div>
      </div>
    );
  }
}