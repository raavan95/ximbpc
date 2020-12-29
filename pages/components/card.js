import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import CommentList from './commentList';
import PdfComponent from './pdfComponent';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(20),
    fontWeight: 900,
    padding: 10
  },
  commentSection: {
    display: 'flex',
    flexDirection: 'column',
  }
}));

export default function SimpleCard() {
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
        </AccordionSummary>
        <PdfComponent name="Member_UH20003_Abhijit Mishra - Abhijit Mishra.doc - Google Docs.pdf"/>
        <AccordionDetails className={classes.commentSection}>
          <CommentList name="abhijit"/>
          {/* <Comment name="abhijit"/>  */}
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>Aiswarya</Typography>          
        </AccordionSummary>
        <PdfComponent name="Coordinator_UM20080_Aiswarya Mishra - Aiswarya Mishra.doc - Google Docs.pdf"/>
        <AccordionDetails className={classes.commentSection}>
          <CommentList name="aiswarya"/>
          {/* <Comment name="aiswarya"/> */}
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
        <PdfComponent name="Coordinator_UH20067_Akash Anand - Akash Anand.doc - Google Docs.pdf"/>
        <AccordionDetails className={classes.commentSection}>
          <CommentList name="akash"/>
          {/* <Comment name="akash"/>
   */}      </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>Aman</Typography>
        </AccordionSummary>
        <PdfComponent name="Member_UM20133_Aman Kumar Agarwala - Aman Kumar Agarwala.docx - Google Docs.pdf" />
        <AccordionDetails className={classes.commentSection}>
        <CommentList name="aman"/>
          {/* <Comment name="aman"/>
    */}     </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>Anjali</Typography>
        </AccordionSummary>
        <PdfComponent name="Coordinator_UH20009_Anjali Varindani - Anjali Anil Varindani.doc - Google Docs.pdf" />
        <AccordionDetails>
        <CommentList name="anjali"/>
          {/* <Comment name="anjali"/>
  */}       </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>Anurag</Typography>
        </AccordionSummary>
        <PdfComponent name="Member_UM20262_Anurag Devendrasingh Rana - Anurag Devendrasingh Rana.doc - Google Docs.pdf" />
        <AccordionDetails className={classes.commentSection}>
        <CommentList name="anurag"/>
          {/* <Comment name="anurag"/>
  */}       </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>Arijit</Typography>
        </AccordionSummary>
        <PdfComponent name="Member_UM20313_Arijit Bhattacharya - Arijit Bhattacharya.doc - Google Docs.pdf"/>
        <AccordionDetails className={classes.commentSection}>
        <CommentList name="arijit"/>
          {/* <Comment name="arijit"/>
  */}       </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>Akarshan</Typography>
        </AccordionSummary>
        <PdfComponent name="Member_UH20001_Aakarshan Raj - Aakarshan Raj.doc - Google Docs.pdf"/>
        <AccordionDetails className={classes.commentSection}>
        <CommentList name="akarshan"/>
          {/* <Comment name="akarshan"/> */}
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
        <PdfComponent name="Coordinator_UM20322_Asmit Gautam - Gautam Asmit Arvindkumar.doc - Google Docs.pdf" />
        <AccordionDetails className={classes.commentSection}>
        <CommentList name="asmit"/>
          {/* <Comment name="asmit"/>
   */}      </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>Bibek</Typography>
        </AccordionSummary>
        <PdfComponent name="Member_UM20200_Bibek Pradhan - Bibek Pradhan.doc - Google Docs.pdf"/>
        <AccordionDetails className={classes.commentSection}>
        <CommentList name="bibek"/>
          {/* <Comment name="bibek"/>
   */}      </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>Diksha</Typography>
        </AccordionSummary>
        <PdfComponent name="Member_UM20201_Diksha Adishree Nayak - Diksha Adishree Nayak.doc - Google Docs.pdf" />
        <AccordionDetails className={classes.commentSection}>
        <CommentList name="diksha"/>
          {/* <Comment name="diksha"/>
  */}       </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>Gurleen</Typography>
        </AccordionSummary>
        <PdfComponent name="Member_UH20085_Gurleen Kaur Gill - Gurleen Kaur Gill.doc - Google Docs.pdf" />
        <AccordionDetails className={classes.commentSection}>
        <CommentList name="gurleen"/>
          {/* <Comment name="gurleen"/>
 */}        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>Guru</Typography>
        </AccordionSummary>
        <PdfComponent name="Member_UM20331_Guru Prasad Biswal - Guru Prasad Biswal.doc - Google Docs.pdf" />
        <AccordionDetails className={classes.commentSection}>
        <CommentList name="guru"/>
          {/* <Comment name="guru"/>
    */}     </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>Het</Typography>
        </AccordionSummary>
        <PdfComponent name="Member_UM20203_Het Manish Gala - Het Manish Gala.doc - Google Docs.pdf" />
        <AccordionDetails className={classes.commentSection}>
        <CommentList name="het"/>
          {/* <Comment name="het"/>
     */}    </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>Indrashis</Typography>
        </AccordionSummary>
        <PdfComponent name="Member_UH20028_Indrashis Chowdhury - Indrashis Chowdhury.doc - Google Docs.pdf" />
        <AccordionDetails className={classes.commentSection}>
        <CommentList name="indrashis"/>
          {/* <Comment name="indrashis"/ */}
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
        <PdfComponent name="Member_UM20205_Jaswasi Jashowanta Sahoo - Jaswasi Jashowanta Sahoo.doc - Google Docs.pdf" />
        <AccordionDetails className={classes.commentSection}>
        <CommentList name="jaswasi"/>
          {/* <Comment name=""jaswasi/>
 */}        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>Kriti</Typography>
        </AccordionSummary>
        <PdfComponent name="Member_UM20208_Kriti Modi - Kriti Modi.doc - Google Docs.pdf" />
        <AccordionDetails className={classes.commentSection}>
        <CommentList name="kirti"/>
          {/* <Comment name="kriti"/>
   */}      </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>Manisha</Typography>
        </AccordionSummary>
        <PdfComponent name="Member_UM20093_Manisha Satpathy - Manisha Satpathy.doc - Google Docs.pdf" />
        <AccordionDetails className={classes.commentSection}>
        <CommentList name="manisha"/>
          {/* <Comment name="manisha"/>
 */}        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>Mimul</Typography>
        </AccordionSummary>
        <PdfComponent name="Member_UH20035_Mimul Nanda - Mimul Nanda.docx - Google Docs.pdf" />
        <AccordionDetails className={classes.commentSection}>
        <CommentList name="mimul"/>
          {/* <Comment name="mimul"/>
   */}      </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>Nupur</Typography>
        </AccordionSummary>
        <PdfComponent name="Coordinator_UH20036_Nupur Ratnani - Nupur Ratnani.doc - Google Docs.pdf" />
        <AccordionDetails className={classes.commentSection}>
        <CommentList name="nupur"/>
          {/* <Comment name="nupur"/>
   */}      </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>Rahul</Typography>
        </AccordionSummary>
        <PdfComponent name="Member_UH20039_Rahul Ranjan Sahoo - Rahul Ranjan Sahoo.doc - Google Docs.pdf" />
        <AccordionDetails className={classes.commentSection}>
        <CommentList name="rahul"/>
          {/* <Comment name="rahul"/>
   */}      </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>Sagar</Typography>
        </AccordionSummary>
        <PdfComponent name="Member_UX20048_Sagar D Mehta - Sagar D Mehta.docx - Google Docs.pdf" />
        <AccordionDetails className={classes.commentSection}>
        <CommentList name="sagar"/>
          {/* <Comment name="sagar"/>
   */}      </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>Sakshi</Typography>
        </AccordionSummary>
        <PdfComponent name="Member_UH20106_Sakshi Sharma - Sakshi Sharma.doc - Google Docs.pdf" />
        <AccordionDetails className={classes.commentSection}>
        <CommentList name="sakshi"/>
          {/* <Comment name="sakshi"/>
  */}       </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>Sanyukta</Typography>
        </AccordionSummary>
        <PdfComponent name="Member_UM20061_Sanyukta Phatke - Phatke Sanyukta Babasaheb.doc - Google Docs.pdf" />
        <AccordionDetails className={classes.commentSection}>
        <CommentList name="sanyukta"/>
          {/* <Comment name="sanyukta"/> */}
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
        <PdfComponent name="Member_UH20047_Shivani - Shivani.doc - Google Docs.pdf" />
        <AccordionDetails className={classes.commentSection}>
        <CommentList name="shivani"/>
          {/* <Comment name="shivani"/>
 */}        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>Shubh</Typography>
        </AccordionSummary>
        <PdfComponent name="Member_UM20222_Shubh Gulati - Shubh Gulati.doc - Google Docs.pdf" />
        <AccordionDetails className={classes.commentSection}>
        <CommentList name="shubh"/>
          {/* <Comment name="shubh"/>
   */}      </AccordionDetails>
      </Accordion><Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>Siddharth</Typography>
        </AccordionSummary>
        <PdfComponent name="Coordinator_UM20229_Siddharth Mishra - Siddharth Mishra.doc - Google Docs.pdf" />
        <AccordionDetails className={classes.commentSection}>
        <CommentList name="siddharth"/>
          {/* <Comment name="siddharth"/ */}
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
        <PdfComponent name="Member_UM20238_Smriti S - Smriti S.docx - Google Docs.pdf" />
        <AccordionDetails className={classes.commentSection}>
        <CommentList name="smriti"/>
          {/* <Comment name="smriti"/>
  */}       </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>Sumeet</Typography>
        </AccordionSummary>
        <PdfComponent name="Member_UM20365_Sumeet Kumar Agrawal - SUMEET KUMAR AGRAWAL.doc - Google Docs.pdf" />
        <AccordionDetails className={classes.commentSection}>
        <CommentList name="sumeet"/>
          {/* <Comment name="sumeet"/>
  */}       </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>Surbhi</Typography>
        </AccordionSummary>
        <PdfComponent name="Member_UM20367_Surbhi fandot - Surbhi Fandot.doc - Google Docs.pdf" />
        <AccordionDetails className={classes.commentSection}>
        <CommentList name="surbhi"/>
          {/* <Comment name="surbhi"/>
  */}       </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>Susnata</Typography>
        </AccordionSummary>
        <PdfComponent name="Member_UM20371_Susnata Panda - Susnata Panda.docx - Google Docs.pdf" />
        <AccordionDetails className={classes.commentSection}>
        <CommentList name="susnata"/>
          {/* <Comment name="susnata"/>
 */}        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>Swapneel</Typography>
        </AccordionSummary>
        <PdfComponent name="Member_UH20119_Swapneel das - Swapneel Das.doc - Google Docs.pdf" />
        <AccordionDetails className={classes.commentSection}>
        <CommentList name="swapneel"/>
          {/* <Comment name="swapneel"/> */}
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
        <PdfComponent name="Member_UM20240_Tapasya Pattnaik - Tapasya Pattnaik.doc - Google Docs.pdf" />
        <AccordionDetails className={classes.commentSection}>
        <CommentList name="tapasya"/>
          {/* <Comment name="tapasya"/>
 */}        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>Vaibhav</Typography>
        </AccordionSummary>
        <PdfComponent name="Member_UM20067_Vaibhav Nagpal - Vaibhav Nagpal.doc - Google Docs.pdf" />
        <AccordionDetails className={classes.commentSection}>
        <CommentList name="vaibhav"/>
          {/* <Comment name="vaibhav"/>
 */}        </AccordionDetails>
      </Accordion>
    </div>
  );
}
