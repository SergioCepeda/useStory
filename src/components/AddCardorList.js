import React from 'react'
import { Paper } from '@material-ui/core';
import {Collapse} from '@material-ui/core';
import { useState } from 'react';
import AddCardorListText from './AddCardorListText';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
// import { fade } from '@material-ui/core';
import { alpha } from '@material-ui/core/styles';


const AddCardorList = ({type, listId}) => {

  const classes =  useStyle()
  const [open, setOpen] = useState(true)

  return (
    <div className={classes.root}>
      <Collapse in={open}>
       <AddCardorListText type={type} setOpen={setOpen} listId={listId}/>
      </Collapse>
      <Collapse in={!open}>
       <Paper className={classes.addCardorListText} onClick={()=>setOpen(true)}>
         <Typography>
      {
        type==="card"? 
         "+Add a card":
         "+Add another list"
        
      }
 
       </Typography>
       </Paper>
      </Collapse>
     </div>
  )
}

const useStyle = makeStyles(theme=>({
  root:{
   width:"300px",
   marginTop: theme.spacing(1,0,0,0),

  },
  addCardorListText:{
   padding:theme.spacing(1,1,1,2),
   margin: theme.spacing(0,1,1,1),
   background:"#ebecf0",
   "&:hover":{
     backgroundColor:alpha("#000", 0.25)
   },
  }
}))

export default AddCardorList