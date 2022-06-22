import './expenses.css';

import Expenseitem from './Expenseitem';
import Card from '../UI/Card';

const Expenses=(props)=>{
  return(

    <Card className='expenses'> {
      
      props.item.map((expens)=>(
         <Expenseitem
         key = {expens.id}
          date = {expens.date}
          title = {expens.title}
          amount = {expens.amount}  
           />
       )
       )
   }
     </Card>
        
  )
}

export  default Expenses;