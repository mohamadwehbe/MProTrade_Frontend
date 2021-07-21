import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import axios from 'axios';

export default function Customer() {
  const useStyles = makeStyles({
    table: {
      minWidth: 650,
    },
  });
  
  const [rows,setRows] = useState([])

  const order = ()=> {

    axios.get(`http://127.0.0.1:8000/api/listorder`).then(res => {
      setRows(res.data)
    })
    .catch(err => {
        console.log(err, 'Failed to add request')
    })
  }

  useEffect(()=>{
    order()
  },[])

  const classes = useStyles();

  return (
      <div style={{margin:15}}>
      <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead style={{backgroundColor:'#000'}}>
          <TableRow>
            <TableCell 
            style={{
                color:'white',
                fontWeight:550
                }}>Name</TableCell>
            <TableCell 
            style={{
                color:'white',
                fontWeight:550
                }}>Email</TableCell>
            <TableCell
                style={{
                    color:'white',
                    fontWeight:550
                    }}
            >Address</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell component="th" scope="row"
              style={{color:'#000',fontWeight:550}}>
                {row.firstname} {row.lastname}
              </TableCell>
              <TableCell
                style={{
                    color:'#000',
                    fontWeight:550
                    }}
              >{row.email}</TableCell>
              <TableCell
                style={{
                    color:'#000',
                    fontWeight:550
                    }}
              >{row.city}, {row.area}, {row.street}, {row.building}, {row.floor}.</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
      </div>
  );
}