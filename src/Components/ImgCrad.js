import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
const useStyles = makeStyles({
  root: {
  },
  media: {
    width : 300,
    height: 200,
  },
});

export default function MediaCard({row}) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea style={{display:'flex',flexDirection:'column',alignItems:'center'}}>
        <CardMedia
          className={classes.media}
          image ={`http://127.0.0.1:8000/storage/images/${row.image_url}`}
          title={row.name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {row.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {row.firstname} {row.lastname}
          </Typography><br/>
          <Typography variant="body2" color="textSecondary" component="p">
            {row.description}     {row.price}$
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}