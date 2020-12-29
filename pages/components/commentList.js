import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import axios from 'axios';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import SendIcon from '@material-ui/icons/Send';

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
  rootNewComment: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    minWidth: 250
  },
  input: {
    marginLeft: 10,
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 28,
    margin: 4,
  },
});

export default function CommentList(props) {

  const id = props.name;
  const classes = useStyles();
  const [data, setData] = useState([]);
  const [values, setValues] = useState([]);
  const [newComment, setNewComment] = useState('');

  const handleComment = () => {
    axios.post(`https://ximb-b8b59-default-rtdb.firebaseio.com/${props.name}.json`, {comment: newComment}).then(fetchData());
    
    
  }

  const fetchData = () => {
    axios.get(`https://ximb-b8b59-default-rtdb.firebaseio.com/${props.name}.json`)
      .then(res => {
          console.log(res.data);
          console.log(Object.values(res.data));

          setData(res.data);
          setValues(Object.values(res.data))
      })
  }

  
    useEffect(() => {
      fetchData();
     
    }, [])

  

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          Comments
        </Typography>
        {values.length > 0 ? values.map(item => {
            return(
                <Typography>{item.comment}</Typography>
            )
        }) : null}
        
      </CardContent>
      <CardContent>
       <Paper component="form" className={classes.rootNewComment}>
        
        <InputBase
          className={classes.input}
          value={newComment}
          placeholder="Type your comment here"
          // inputProps={{ 'aria-label': 'search google maps' }}
          onChange={(event) => {
            event.preventDefault();
            setNewComment(event.target.value)
          }}
        />
        
        <Divider className={classes.divider} orientation="vertical" />
        <IconButton color="primary" className={classes.iconButton} aria-label="send">
          <SendIcon onClick={handleComment}/>
        </IconButton>
      </Paper>
      </CardContent>
    </Card>
  );
}
