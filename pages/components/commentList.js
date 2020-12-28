import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import axios from 'axios';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    marginBottom: 10,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function CommentList(props) {

  const id = props.name;
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;
  let comments = []
  const [data, setData] = useState([]);
  const [keys, setKeys] = useState(null);
  const [values, setValues] = useState([]);

  useEffect(() => {
        axios.get('https://ximb-b8b59-default-rtdb.firebaseio.com/.json')
        .then(res => {
            console.log(res.data);
            console.log(Object.values(res.data));
            console.log(Object.keys(res.data));

            setData(res.data);
            setValues(Object.values(res.data))
            setKeys(Object.keys(res.data))
        })
        
       
  }, [])

  if(keys){
      for(let i = 0; i < keys.length; i++){
          if(keys[i] == id){
              comments = Object.values(values[i]);
          }
      }
  }
  

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          Comments
        </Typography>
        {comments.length > 0 ? comments.map(item => {
            return(
                <Typography>{item.comment}</Typography>
            )
        }) : null}
        
      </CardContent>
    </Card>
  );
}
