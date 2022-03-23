import React from 'react'
import { makeStyles } from '@material-ui/core';
import { Paper } from '@material-ui/core';
import { Draggable } from 'react-beautiful-dnd';

const TrelloCard = ({cards, index}) => {
  
    const classes =  useStyle()

  return (
    <Draggable draggableId={cards.id} index={index}>
  {
     (provided)=>(
          <div  ref={provided.innerRef} {...provided.dragHandleProps}
           {...provided.draggableProps}>   
          <Paper className={classes.TrelloCard}>
             {cards.title}
            </Paper>
            </div>
      )
}


   </Draggable>
     )
  }

const useStyle = makeStyles(theme=>({
   TrelloCard:{
       padding:theme.spacing(1,1,1,2),
       margin: theme.spacing(1)

   }
}))

export default TrelloCard