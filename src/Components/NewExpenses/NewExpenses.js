import "./NewExpenses.css";
import React from "react";
import Form from "./form";
const NewExpenses = (props) => {
    
    const newExpenseHandler=(enteredExpenseData)=>{
        const newExpense = {
            ...enteredExpenseData,
            id:Math.random().toString()
        }
        props.addExpense(newExpense);  

        console.log(newExpense)
    }
  return (
    <div className='newExpense'>
      <Form onSaveExpense = {newExpenseHandler}/>
    </div>
  );
};
export default NewExpenses;
