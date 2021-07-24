import React, { useState } from "react";
import FormArea from "./Components/formAreaComp/formArea";
import TodoItem from './Components/TodoItem/TodoItem'
import "./styles.css";

export default function App() {
  const [items, setItem] = useState([]);

  //item is inserting into the item array but we can't see
  //it for the first time because setState is an asyncronous function 
  //so the console.log() is called before completing the setState() func
  
  const handelformData = (data) => {
    setItem([...items,data]);
    // console.log(items);
  };




  const handelDelete=(deletedItemIndex)=>{
    var RemaintodoItems = items.filter((item,ind) => ind !== deletedItemIndex );
    setItem(RemaintodoItems);
  }



  return (
    <div className="App">
      <FormArea parentCallback={handelformData} />
      <div className="todoItemDiv">
      {
        items.map((item,ind) => (
          <TodoItem key={ind} id={ind} item={item} deleteItem={handelDelete}/>
        ))
      }
      </div>

    </div>
  );
}
