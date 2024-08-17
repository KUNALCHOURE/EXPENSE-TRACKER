import React, { useState } from 'react';
import './show.css';
import Forms from './form';
import { v4 as uuidv4 } from 'uuid';

export default function Tracker() {
    let [data, setdata] = useState({ description: "", amount:"",id:uuidv4(), category: "" });
    let [expense, setexpense] = useState([]);
    let [total,settotal]=useState(0);

    let handlechange = (event) => {
        let field = event.target.name;
        let val = event.target.value;
        console.log(val)
        setdata((currentval) => {
            currentval[field] = val;
            return { ...currentval };
        });
    }

    let handlesubmit = (event) => {
        event.preventDefault();
        const a=parseFloat(data.amount);
        setexpense([
            ...expense, {
                description: data.description,
                amount: data.amount,
                id:uuidv4(),
                category: data.category
            }
        ]);
      settotal(prevtotal=>prevtotal+a);
        console.log(total); 
      console.dir(expense);
        setdata({
            description: "",
            amount: 0,
            id:uuidv4(),
            category: ""
        });
    }

    let handledelete=(id,amt)=>{
        let aa=parseFloat(amt);
       setexpense((prevexpense)=>expense.filter((prevexpense)=>prevexpense.id!=id))
       settotal((prevtotal)=>{
      
        prevtotal=parseFloat(prevtotal);
        prevtotal=prevtotal-aa;
        return prevtotal;
       })
    
    }
    return (
        <>
      <div className="main">
           <div className="track">
                 <h1>HELLO</h1>
                <div className="amt">
                    <p>Total:</p>
                   <h2>&#8377;{total}</h2>
               </div>
     <ul>
      {expense.map((expense, index) => (
         <li key={expense.id}>
            <div>
               {expense.description} - {expense.amount}
               </div>
              
               <div>
               {expense.category}
               </div>
               <div>
               <button onClick={()=>handledelete(expense.id,expense.amount)}>DELETE</button>
               </div>
                 <br />
                        
                  </li>
          ))}
      </ul>
   </div>
  <Forms data={data} handlechange={handlechange} handlesubmit={handlesubmit} />
      </div>
        </>
    );
}
