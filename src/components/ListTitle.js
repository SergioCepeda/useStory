import React from 'react';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import { InputBase } from '@material-ui/core';
import { useState } from 'react';
import { useContext } from 'react';
import ContextAPI from '../ContextAPI';

const ListTitle = ({title, listId}) => {

  const classes =  useStyle()
  const [open, setOpen] = useState(false);
  const [newTitle, setNewtitle] = useState(title);
  const {updateListTitle} =useContext(ContextAPI)
  

 const handleBlur =()=>{
   updateListTitle(newTitle,listId)
   setOpen(false)
 }

 

  return (

    <>
      { open ? (
        <InputBase 
        value= {newTitle}
        onChange={e=> setNewtitle(e.target.value)}
        onBlur={handleBlur}
        autoFocus
        fullWidth
        inputProps={{className: classes.input}}
        
          />
      ) 
      :
       (
        <div className={classes.title}>
    <Typography className={classes.titleText} 
        onClick={()=>setOpen(true)}>
        {title}
        </Typography>
        <MoreHorizIcon/>
        </div>

       )}
    </>
   

  )
}

const useStyle = makeStyles(theme=>({
    title:{
      display:"flex",
      margin: theme.spacing(1),

    },
    titleText:{
     flexGrow:1,
     fontSize:"1.2rem",
     fontWeight:"bold" 
    },
    input:{
      fontSize: "1.2rem",
      fontWeight: "bold",
      margin: theme.spacing(1),
      "&:focus":{
        background:"#ddd"
      }
    }
}))

export default ListTitle
