import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import SendIcon from '@material-ui/icons/Send';
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    width: '100%',
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 28,
    margin: 4,
  },
}));

export default function Comment(props) {
  const classes = useStyles();

  const [newComment, setNewComment] = useState('');

  const handleComment = () => {
    axios.post(`https://ximb-b8b59-default-rtdb.firebaseio.com/${props.name}.json`, {comment: newComment})
  }

  return (
    <Paper component="form" className={classes.root}>
      
      <InputBase
        className={classes.input}
        value={newComment}
        placeholder="Type your comment here"
        // inputProps={{ 'aria-label': 'search google maps' }}
        onChange={(event) => setNewComment(event.target.value)}
      />
      
      <Divider className={classes.divider} orientation="vertical" />
      <IconButton color="primary" className={classes.iconButton} aria-label="send">
        <SendIcon onClick={handleComment}/>
      </IconButton>
    </Paper>
  );
}
