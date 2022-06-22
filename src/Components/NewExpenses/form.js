import React, { useState } from "react";
import "./form.css";

const Form = (props) => {
  const [enterTitle, setEntertitle] = useState("");
  const [enterAmount, setAmount] = useState("");
  const [enterDate, setEnterdate] = useState("");

  const titleChangeHandler = (event) => {
    setEntertitle(event.target.value);
  };
  const amountChangeHandler = (event) => {
    setAmount(event.target.value);
  };
  const datechangeHandler = (event) => {
    setEnterdate(event.target.value);
  };
  const submitHandler = (event) => {
    event.preventDefault();

    const NewExpenses = {
      title: enterTitle,
      amount: enterAmount,
      date: new Date(enterDate),
    };

    props.onSaveExpense(NewExpenses);

    setAmount("");
    setEntertitle("");
    setEnterdate("");
    console.log(NewExpenses);
  };

  return (
    <form onSubmit={submitHandler}>
      <div className='formcontainer'>
        <div>
          <label>Title: </label>
          <input type='text'           className='formtitle'
          value={enterTitle}
          onChange={titleChangeHandler}/>
        </div>

        <div className='formamount'>
          <label>Amount: </label>
          <input
            type='number'
            value={enterAmount}
            onChange={amountChangeHandler}
          />
        </div>

        <div>
          <label>Date: </label>
          <input type='date'           className='formdate'
          value={enterDate}
          onChange={datechangeHandler}/>
        </div>

        <div className='formbutton'>
          <button type='submit'>Add New Expense </button>
        </div>
      </div>
    </form>
  );
};

export default Form;
