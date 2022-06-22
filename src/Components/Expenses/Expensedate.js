import React from 'react';
import './Expensedate.css';


const ExpenseDate=(props)=>{
    const month  = props.date.toLocaleString('en-US',{month:'long'});
    const year = props.date.getFullYear();
    const day = props.date.toLocaleString('en-US',{day:'2-digit'})   
    return(
        <div className='ExpenseDate'> 
        <div className='date_month'>{month}</div>
        <div className='date_year'>{year}</div>
        <div className='date_day'>{day}</div>
    </div>
    )
}
export default ExpenseDate;