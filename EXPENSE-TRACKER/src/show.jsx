import React, { useState } from 'react';
import './show.css';
import Forms from './form';


export default function Tracker() {
    let [data, setdata] = useState({ description: "", amount:0, category: "" });
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
                category: data.category
            }
        ]);
      settotal(prevtotal=>prevtotal+a);
        console.log(total); 
      console.dir(expense);
        setdata({
            description: "",
            amount: 0,
            category: ""
        });
    }

    let handledelete=()=>{
        
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
                    <li key={index}>
                      {expense.description} - {expense.amount}
                      <button onClick={handledelete}>DELETE</button>
                         <br />
                        {expense.category}
                       
                            </li>
                        ))}
            </ul>
                </div>
                <Forms data={data} handlechange={handlechange} handlesubmit={handlesubmit} />
            </div>
        </>
    );
}
