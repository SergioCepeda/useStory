import { makeStyles } from '@material-ui/core';
import { CssBaseline } from '@material-ui/core';
import { Paper } from '@material-ui/core';
import React from 'react';
import AddCardorList from './AddCardorList';
import ListTitle from './ListTitle';
import TrelloCard from './TrelloCard';
import { Draggable, Droppable } from 'react-beautiful-dnd';




const TrelloList = ({list, index}) => {
   
    const classes = useStyle()
    
    return (

        <Draggable  draggableId={list.id} index={index}>
        {

          (provided)=>(
              <div  {...provided.draggableProps} ref={provided.innerRef}>
        <Paper className={classes.root} {...provided.dragHandleProps}>
  <CssBaseline/>
  <ListTitle  title={list.title} listId={list.id}/>
   <Droppable  droppableId={list.id} >
  
   {
      (provided)=>(
          <div ref={provided.innerRef} {...provided.droppableProps}>
  {
    
    list.cards.map((card, index )=> (

        <TrelloCard  cards={card} key={card.id} index={index}/>

    ))

  }
  {provided.placeholder}
  </div>



      )

   }

   </Droppable>


  
  <AddCardorList type="card"  listId={list.id}/>
  </Paper>
  </div>

    )
  }





         </Draggable>

              
          )



}

        
const useStyle = makeStyles(theme=>({
    root: {
        width:"300px",
        background:"#ebecf0",
        margin:theme.spacing(1)

    }
}))

export default TrelloList