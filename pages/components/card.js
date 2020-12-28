import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Comment from './comment';
import CommentList from './commentList';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
    padding: 10
  },
  commentSection: {
    display: 'flex',
    flexDirection: 'column',
  }
}));

export default function SimpleAccordion() {
  const classes = useStyles();
 



  return (
    <div className={classes.root}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
           
            <Typography className={classes.heading}>Abhijit</Typography>
            <iframe width="100%" height="400" frameborder="0" src='https://docs.google.com/document/d/1-Ps5vCil8k7mI7vzs6QqXvkdfCXweZbi'></iframe>
        </AccordionSummary>
        <AccordionDetails className={classes.commentSection}>
          <CommentList name="abhijit"/>
          <Comment name="abhijit"/>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>Aiswarya</Typography>
          <iframe width="100%" height="400" frameborder="0" src='https://docs.google.com/document/d/1B02Du7fI8kyGWEC8ztNj-F3mvohP2e6R'></iframe>
          
        </AccordionSummary>
        <AccordionDetails className={classes.commentSection}>
          <CommentList name="aiswarya"/>
          <Comment name="aiswarya"/>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>Akash</Typography>
        </AccordionSummary>
        <AccordionDetails className={classes.commentSection}>
          <CommentList name="akash"/>
          <Comment name="akash"/>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>Aman</Typography>
        </AccordionSummary>
        <AccordionDetails className={classes.commentSection}>
        <CommentList name="aman"/>
          <Comment name="aman"/>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>Anjali</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <CommentList name="anjali"/>
          <Comment name="anjali"/>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>Anurag</Typography>
        </AccordionSummary>
        <AccordionDetails className={classes.commentSection}>
        <CommentList name="anurag"/>
          <Comment name="anurag"/>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>Arijit</Typography>
        </AccordionSummary>
        <AccordionDetails className={classes.commentSection}>
        <CommentList name="arijit"/>
          <Comment name="arijit"/>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>Akarshan</Typography>
        </AccordionSummary>
        <AccordionDetails className={classes.commentSection}>
        <CommentList name="akarshan"/>
          <Comment name="akarshan"/>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>Asmit</Typography>
        </AccordionSummary>
        <AccordionDetails className={classes.commentSection}>
        <CommentList name="asmit"/>
          <Comment name="asmit"/>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>Bibek</Typography>
        </AccordionSummary>
        <AccordionDetails className={classes.commentSection}>
        <CommentList name="bibek"/>
          <Comment name="bibek"/>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>Diksha</Typography>
        </AccordionSummary>
        <AccordionDetails className={classes.commentSection}>
        <CommentList name="diksha"/>
          <Comment name="diksha"/>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>Gurleen</Typography>
        </AccordionSummary>
        <AccordionDetails className={classes.commentSection}>
        <CommentList name="gurleen"/>
          <Comment name="gurleen"/>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>Guru</Typography>
        </AccordionSummary>
        <AccordionDetails className={classes.commentSection}>
        <CommentList name="guru"/>
          <Comment name="guru"/>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>Het</Typography>
        </AccordionSummary>
        <AccordionDetails className={classes.commentSection}>
        <CommentList name="het"/>
          <Comment name="het"/>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>Indrashis</Typography>
        </AccordionSummary>
        <AccordionDetails className={classes.commentSection}>
        <CommentList name="indrashis"/>
          <Comment name="indrashis"/>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>Jaswasi</Typography>
        </AccordionSummary>
        <AccordionDetails className={classes.commentSection}>
        <CommentList name="jaswasi"/>
          <Comment name=""jaswasi/>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>Kriti</Typography>
        </AccordionSummary>
        <AccordionDetails className={classes.commentSection}>
        <CommentList name="kirti"/>
          <Comment name="kriti"/>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>Manisha</Typography>
        </AccordionSummary>
        <AccordionDetails className={classes.commentSection}>
        <CommentList name="manisha"/>
          <Comment name="manisha"/>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>Mimul</Typography>
        </AccordionSummary>
        <AccordionDetails className={classes.commentSection}>
        <CommentList name="mimul"/>
          <Comment name="mimul"/>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>Nupur</Typography>
        </AccordionSummary>
        <AccordionDetails className={classes.commentSection}>
        <CommentList name="nupur"/>
          <Comment name="nupur"/>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>Rahul</Typography>
        </AccordionSummary>
        <AccordionDetails className={classes.commentSection}>
        <CommentList name="rahul"/>
          <Comment name="rahul"/>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>Sagar</Typography>
        </AccordionSummary>
        <AccordionDetails className={classes.commentSection}>
        <CommentList name="sagar"/>
          <Comment name="sagar"/>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>Sakshi</Typography>
        </AccordionSummary>
        <AccordionDetails className={classes.commentSection}>
        <CommentList name="sakshi"/>
          <Comment name="sakshi"/>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>Sanyukta</Typography>
        </AccordionSummary>
        <AccordionDetails className={classes.commentSection}>
        <CommentList name="sanyukta"/>
          <Comment name="sanyukta"/>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>Shivani</Typography>
        </AccordionSummary>
        <AccordionDetails className={classes.commentSection}>
        <CommentList name="shivani"/>
          <Comment name="shivani"/>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>Shubh</Typography>
        </AccordionSummary>
        <AccordionDetails className={classes.commentSection}>
        <CommentList name="shubh"/>
          <Comment name="shubh"/>
        </AccordionDetails>
      </Accordion><Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>Siddharth</Typography>
        </AccordionSummary>
        <AccordionDetails className={classes.commentSection}>
        <CommentList name="siddharth"/>
          <Comment name="siddharth"/>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>Smriti</Typography>
        </AccordionSummary>
        <AccordionDetails className={classes.commentSection}>
        <CommentList name="smriti"/>
          <Comment name="smriti"/>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>Sumeet</Typography>
        </AccordionSummary>
        <AccordionDetails className={classes.commentSection}>
        <CommentList name="sumeet"/>
          <Comment name="sumeet"/>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>Surbhi</Typography>
        </AccordionSummary>
        <AccordionDetails className={classes.commentSection}>
        <CommentList name="surbhi"/>
          <Comment name="surbhi"/>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>Susnata</Typography>
        </AccordionSummary>
        <AccordionDetails className={classes.commentSection}>
        <CommentList name="susnata"/>
          <Comment name="susnata"/>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>Swapneel</Typography>
        </AccordionSummary>
        <AccordionDetails className={classes.commentSection}>
        <CommentList name="swapneel"/>
          <Comment name="swapneel"/>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>Tapasya</Typography>
        </AccordionSummary>
        <AccordionDetails className={classes.commentSection}>
        <CommentList name="tapasya"/>
          <Comment name="tapasya"/>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>Vaibhav</Typography>
        </AccordionSummary>
        <AccordionDetails className={classes.commentSection}>
        <CommentList name="vaibhav"/>
          <Comment name="vaibhav"/>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
