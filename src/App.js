import React,{useState} from 'react';
import Expenses from './Components/Expenses/expenses';
import NewExpenses from './Components/NewExpenses/NewExpenses';
let Dummy = [

    {
        id : "e1",
        title : "School fees",
        amount : "$500",
        date : new Date(2022,2,12)
    },
    {
        id : "e2",
        title : "Tution Fees",
        amount : "$200",
        date : new Date(2022,2,22)
    },
    {
        id : "e3",
        title : "Car Insurence",
        amount : "$800",
        date : new Date(2022,2,14)
    },   
    {
        id : "e4",
        title : "Cloths",
        amount : "$100",
        date : new Date(2022,2,4)
    } ];   

const App=()=>{
   
    const[expenses,seExpenses]= useState(Dummy);

    const addExpenseHandler = (expense)=>{
        const updatedExpenses = [expense, ...expenses]
        seExpenses(updatedExpenses)
    }
    
    return(
        <div>
        <h2>Let's Get Started</h2>  
        <Expenses item={expenses}/>
        <NewExpenses addExpense = {addExpenseHandler}/>

        {/* {
        //     arr.map((e)=>(
        //         <Expenseitem
        //         date = {e.date}
        //         title = {e.title}
        //         amount = {e.amount}
        //         />
        //     ))
        // } */}

        </div>
    )
}
export default App;