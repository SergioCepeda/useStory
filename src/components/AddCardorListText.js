import React, { useContext } from 'react';
import { Paper } from '@material-ui/core';
import InputBase from '@material-ui/core/InputBase';
import { useState } from 'react';
import { makeStyles } from '@material-ui/core';
import { Button } from '@material-ui/core';
import ClearIcon from "@material-ui/icons/Clear"
import { IconButton } from '@material-ui/core';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
// import { fade } from '@material-ui/core';
 import { alpha } from '@material-ui/core/styles';
import ContextAPI from '../ContextAPI';



const AddCardorListText = ({type, setOpen, listId}) => {

  const classes = useStyle()
  const [title, setTitle] = useState("");
 const {addCard, addList} = useContext(ContextAPI)

  const  handleAddCardorList =()=>{
    if(type === "card"){
      addCard(title, listId)
    }else {
      addList(title)
    }

    setTitle("")
    setOpen(false) 

  }
  
  return (
    <>
    <Paper className={classes.card}>
      <InputBase
      multiline
       value={title}
       onBlur={()=>setOpen(false) }
       onChange={e=>setTitle(e.target.value)}
       placeholder= {
         type === "card"? 
       "Enter a title for this card..." :
       "Enter list title..."
       }
       
       inputProps={{className: classes.input}}

       />
     </Paper>
     <div className={classes.confirm}>
       <div className={classes.options}>
        <Button className={classes.botonConfirm} 
        onClick={handleAddCardorList} >
        { type === "card" ? "Add card" : 
         "Add list"
       }
      
        </Button>
          <IconButton onClick={()=>setOpen(false)}>
                <ClearIcon/>
           </IconButton>
           </div>

        <IconButton>
        <MoreHorizIcon/>
        </IconButton>
     </div>
     </>
  )
}

const useStyle = makeStyles(theme=>({
  card:{
       width:"280px",
       margin: theme.spacing(0,1,1,1),
       paddingBottom: theme.spacing(4)

  },
  input:{
    margin: theme.spacing(1)
  },
  confirm:{
    display:"flex",
    margin: theme.spacing(0,1,1,1)
  }, 
  options:{
     flexGrow: 1
  },
  botonConfirm:{
    background: "#5aac44",
    color:"#fff",

    "&:hover":{
      background:  alpha("#5aac44", 0.75)
    }
  },
 

}))


export default AddCardorListText