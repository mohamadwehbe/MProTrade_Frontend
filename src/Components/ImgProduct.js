import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import AlertDialog from './Alert';



const useStyles = makeStyles({
  root: {
    backgroundColor:'white',
    boxShadow:'0 3px 5px #333',
    // display:'flex',flexDirection:'column',alignItems:'center',
  },
  media: {
    width : 450,
    height: 450,
    margin:20,
  },
});

export default function MediaCard({row,nb,setNb}) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
        <CardMedia
          className={classes.media}
          image ={`http://127.0.0.1:8000/storage/images/${row.image_url}`}
          title={row.name}
        />
        <CardContent>
          <Typography gutterBottom variant="h7" component="h2" style={{marginLeft:10}}>
            {row.name}
          </Typography>
          <Typography variant="body2" color="textPrimary" component="p"
          style={{display:'flex',flexDirection:'row',alignItems:'center',marginRight:10}}>
            <h3 style={{color:'black',marginRight:10,marginLeft:10}}>Description :</h3> {row.description}
          </Typography>
          <Typography variant="body2" color="textPrimary" component="p"
          style={{display:'flex',flexDirection:'row',alignItems:'center'}}>
            <h3 style={{color:'black',marginRight:10,marginLeft:10}}>Price :</h3> ${row.price}
          </Typography>
          <Typography variant="body2" color="textPrimary" component="p"
          style={{display:'flex',flexDirection:'row',alignItems:'center'}}>
          <h3 style={{color:'black',marginRight:10,marginLeft:10}}>
            Owner :</h3> {row.firstname} {row.lastname}
          </Typography>
          <Typography variant="body2" color="textPrimary" component="p"
          style={{display:'flex',flexDirection:'row',alignItems:'center'}}>
          <h3 style={{color:'black',marginRight:10,marginLeft:10}}>
            Contact :</h3> {row.email}
          </Typography>
          <AlertDialog nb={nb} setNb={setNb}/>
        </CardContent>
    </div>
  );
}