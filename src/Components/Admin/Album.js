import React, { useState } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import AlertDialog from '../Alert';

const useStyles = makeStyles((theme) => ({
  cardGrid: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
    padding:0,
    width:'100%'
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    boxShadow:'0 3px 5px #fff',
    width:'100%',
  },
  cardMedia: {
    paddingTop: '100%'
  },
  cardContent: {
    flexGrow: 1,
  }
}));


export default function Album({rows,prorow,setProrow,nb,setNb}) {
  const classes = useStyles();
  const history = useHistory();

  const goto = (row) => {
    setProrow(row)
    history.push('/view')
  }


  return (
    <React.Fragment>
      <CssBaseline />
      <main>
        <Container className={classes.cardGrid} maxWidth="md">
          <Grid container spacing={4}>
            {rows.map((card) => (
              <Grid item key={card.name} md={3}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image ={`http://127.0.0.1:8000/storage/images/${card.image_url}`}
                    title={card.name}
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h7" component="h2" style={{height:50}}>
                      {card.name}
                    </Typography>
                    <Typography variant="body2" color="textPrimary" component="p">
                      Price : ${card.price}
                    </Typography>
                  </CardContent>
                  <div style={{display:'flex',flexDirection:'row'}}>
                  <Button style={{fontWeight:1000,color:"#000",textShadow:'0px 1px 3px #333'}} onClick={(e)=>goto(card)}>View</Button>
                  <AlertDialog nb={nb} setNb={setNb}/>
                  </div>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
    </React.Fragment>
  );
}