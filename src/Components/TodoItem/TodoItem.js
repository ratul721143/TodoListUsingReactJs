import React, { Fragment } from 'react'
import './TodoItem.css'
import DeleteImg from '../../../src/Images/remove.png'

const TodoItem = ({id,item,deleteItem})=>{
 
  const HandeldeleteItem=(e)=>{
      var data=e.target;
      // console.log(item);
      if(data){
        deleteItem(id);
      }
  }


  return(
    <Fragment>
      <div className="itemDiv">
        <span>{item}</span>
        <div onClick={HandeldeleteItem} className="deleteButton">
          <img src={DeleteImg} alt="error" />
        </div>
      </div>
    </Fragment>
  );
}

export default TodoItem;