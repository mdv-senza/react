// -------------------IMPORT----------------
import React,{ useState } from 'react';
import './Expenseitem.css';
import ExpenseDate from './Expensedate';
import Card from '../UI/Card';
// --------------------Function--------------

const Expenseitem=(props)=>{    
    return(
        <Card className='expense-item'>
         <ExpenseDate date={props.date}/>
            <div className='expense-item_descryption'>
                <h2>{props.title}</h2>
                <div className='expense-item_price'>{props.amount}</div>
            </div>
        </Card>
    )
}
export default Expenseitem;