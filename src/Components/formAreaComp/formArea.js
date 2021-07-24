import React,{Fragment, useState} from "react";
import "./formArea.css";

const FormArea = (props) => {
  // const [inputData,setInputData]=useState('');
  
  
  //handel the input data and 
  // passed it to the parent componant
  const onTrigger=(event)=>{
    var data = event.target.myInput.value;
    if(data){
      props.parentCallback(data);
    }
    // console.log(data);
    event.target.myInput.value="";
    event.preventDefault();
  }



  return (
    <Fragment>
    <form onSubmit={onTrigger} className="formArea">
      <input name="myInput" className="form__input" type="text" />
      <button className="addItem__button" 
      type="submit">
        Add Item
      </button>
    </form>
    </Fragment>
  );
};

export default FormArea;
